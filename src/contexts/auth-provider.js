import React, { useState, useEffect, useCallback } from "react";
import { createAuth0Client } from "@auth0/auth0-spa-js";
import AuthContext from "./auth-context";

export function AuthProvider({ children }) {
  const [auth0Client, setAuth0Client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: "dev-c7ll61hqy0c2tjbi.us.auth0.com",
        client_id: "Sh6z1x0sR5ZGZXRCVQ2osWuD2ejsViAs",
        redirect_uri: window.location.origin,
      });

      setAuth0Client(auth0);

      if (window.location.search.includes("code=")) {
        await auth0.handleRedirectCallback();
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }

      const isAuthenticated = await auth0.isAuthenticated();

      if (isAuthenticated) {
        const userProfile = await auth0.getUser();
        setUser(userProfile);
      }

      setIsLoading(false);
    }

    initAuth0();
  }, []);

  const login = useCallback(() => {
    auth0Client.loginWithRedirect({ redirect_uri: window.location.origin });
  }, [auth0Client]);

  const logout = useCallback(() => {
    auth0Client.logout({ returnTo: window.location.origin });
  }, [auth0Client]);

  return (
    <AuthContext.Provider value={{ isLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
