import { useAuth } from "react-oidc-context";

import WelcomePage from './pages/Welcome/Welcome';

import './App.css'

const App: React.FC = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return (
      <WelcomePage onSignIn={() => auth.signinRedirect()} />
    );
  }

  return (
    <>
    </>
  )
}

export default App;
