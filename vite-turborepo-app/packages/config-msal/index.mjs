const msalConfig = (env) => ({
  auth: {
    clientId: env.VITE_PUBLIC_MSAL_CONFIG_CLIENT_ID,
    clientsecret: env.VITE_PUBLIC_MSAL_CONFIG_CLIENT_SECRET,
    authority: env.VITE_PUBLIC_MSAL_CONFIG_AUTHORITY,
    redirectUri:
      env.VITE_PUBLIC_NODE_ENV === "development"
        ? env.VITE_PUBLIC_MSAL_REDIRECT_URI_DEV
        : env.VITE_PUBLIC_MSAL_REDIRECT_URI,
    OIDCOptions: {
      //defaultScopes: ["User.Read.All"],
    },
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    pollIntervalMilliseconds: 0,
  },
});

export default msalConfig;
