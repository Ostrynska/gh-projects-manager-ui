import { useEffect, useState } from 'react';
import { useAuth } from "react-oidc-context";
import { ToastContainer, Bounce, toast } from 'react-toastify';

import WelcomePage from './pages/Welcome/Welcome';
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";

import './App.css'

type RepoData = {
  owner: string;
  name: string;
  url: string;
  stars: number;
  forks: number;
  issues: number;
  createdAt: string;
};

const App: React.FC = () => {
  const auth = useAuth();
  const ID_EMAIL = auth.user?.profile.email;

  const [projectsData, setProjectsData] = useState<{ [key: string]: RepoData }>({});

  const signOutRedirect = () => {
    auth.removeUser();
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
    const logoutUri = import.meta.env.VITE_LOGOUT_URI;
    const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  useEffect(() => {
    if (auth.isAuthenticated && ID_EMAIL) {
      fetchUserProjects(ID_EMAIL);
    }
  }, [auth.isAuthenticated, ID_EMAIL]);

  const fetchUserProjects = async (email: string) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/user-projects?email=${email}`);
      const data = await res.json();
      const formatted = data.reduce((acc: any, repo: RepoData) => {
        acc[`${repo.owner}/${repo.name}`] = repo;
        return acc;
      }, {});
      setProjectsData(formatted);
  } catch (err) {
      toast.error(`Failed to load projects: ${err instanceof Error ? err.message : String(err)}`);
  }
};

  if (auth.isLoading) return <Loader />;

  if (auth.error) {
    toast.error(`Error: ${auth.error.message}`);
    return null;
  }

  if (!auth.isAuthenticated) {
    return (
      <WelcomePage onSignIn={() => auth.signinRedirect()} />
    );
  }

  return (
    <>
      <Header user={auth.user?.profile.email || ""} onClick={async () => signOutRedirect()} />
      <main className="flexbox-col main">

      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} />
    </>
  )
}

export default App;
