declare module "@repo/msal-config" {
  type Env = {
    VITE_PUBLIC_MSAL_CONFIG_CLIENT_ID: string;
    VITE_PUBLIC_MSAL_CONFIG_CLIENT_SECRET: string;
    VITE_PUBLIC_MSAL_CONFIG_AUTHORITY: string;
    VITE_PUBLIC_MSAL_REDIRECT_URI_DEV: string;
    VITE_PUBLIC_MSAL_REDIRECT_URI: string;
    VITE_PUBLIC_NODE_ENV: string;
  };

  const msalConfig: (env: Env) => {
    auth: {
      clientId: string;
      clientsecret: string;
      authority: string;
      redirectUri: string;
    };
    cache: {
      cacheLocation: string;
      storeAuthStateInCookie: boolean;
    };
    system: {
      pollIntervalMilliseconds: number;
    };
  };

  export default msalConfig;
}
