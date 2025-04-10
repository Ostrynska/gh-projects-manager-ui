import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import './index.css'
import App from './App.tsx'

const AUTH_DOMAIN = import.meta.env.VITE_COGNITO_DOMAIN;
console.log(`AUTH_DOMAIN: ${AUTH_DOMAIN}`);

const CLIENT_ID = import.meta.env.VITE_COGNITO_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_LOGOUT_URI;

const cognitoAuthConfig = {
  authority: `${AUTH_DOMAIN}`,
  client_id: `${CLIENT_ID}`,
  redirect_uri: `${REDIRECT_URI}`,
  response_type: "code",
  scope: "aws.cognito.signin.user.admin email openid phone profile",
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
