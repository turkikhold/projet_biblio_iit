import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./store/store/Store.ts";
import { Provider } from "react-redux";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_JSoFyWFzJ",
  client_id: "781lu196rt87ahkdb83enc3217",
  redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "phone openid email",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider {...cognitoAuthConfig}>
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
