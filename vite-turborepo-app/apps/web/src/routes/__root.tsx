import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import msalConfig from "@repo/msal-config";

export const Route = createRootRoute({
  component: () => {
    const msalInstance = new PublicClientApplication(msalConfig(import.meta.env as any));

    return (
      <>
        <MsalProvider instance={msalInstance}>
          <Outlet />
        </MsalProvider>
      </>
    );
  },
});
