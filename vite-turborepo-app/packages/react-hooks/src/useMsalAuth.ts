import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

const useMsalAuth = () => {
  const msal = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const isLoading = msal.inProgress !== InteractionStatus.None;
  const isUnauthenticated = !isAuthenticated && !isLoading;

  const account = msal.accounts[0];

  return { ...msal, isAuthenticated, isLoading, isUnauthenticated, account };
};

export { useMsalAuth };
