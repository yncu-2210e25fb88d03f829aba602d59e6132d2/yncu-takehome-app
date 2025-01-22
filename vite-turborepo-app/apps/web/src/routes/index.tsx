import { Layout } from "@/components/ui/Layout";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMsalAuth } from "@repo/react-hooks/useMsalAuth.ts";
import { useEffect } from "react";
import { Button } from "@repo/react-ui/components/Button.tsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { env } from "@/env";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  /**
   * Msal Auth
   */
  const { account, isLoading, isUnauthenticated, instance: msalInstance } = useMsalAuth();

  /**
   * Tanstack Router navigation
   */
  const navigate = useNavigate();

  /**
   * Tanstack Query Example.
   */
  const examplesQuery = useQuery({
    queryKey: ["examples"],
    queryFn: async () => {
      const response = await fetch(`${env.VITE_PUBLIC_EXPRESS_API_URL}/examples`);

      return response.json();
    },
  });

  /**
   * Tanstack Mutation Example.
   */
  const createExampleMutation = useMutation({
    mutationKey: ["examples"],
    mutationFn: async () => {
      const response = await fetch(`${env.VITE_PUBLIC_EXPRESS_API_URL}/examples`, {
        method: "POST",
      });

      return response.json();
    },
    onSuccess: () => {
      examplesQuery.refetch();
    },
  });

  /**
   * Standard Auth (autonavigate to login page) onMount.
   */
  useEffect(() => {
    if (isUnauthenticated) {
      navigate({ to: "/login", search: { redirect: "/" } });
    }
  }, [isUnauthenticated, navigate]);

  /**
   * If auth is loading, show a loading message.
   */
  if (isLoading) {
    return <Layout align="center">Loading...</Layout>;
  }

  /**
   * If the user is unauthenticated, notify them to sign in.
   */
  if (isUnauthenticated) {
    return (
      <Layout align="center">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <p>Please sign in to view this page.</p>

          <Button asChild>
            <Link to="/login" search={{ redirect: "/" }}>
              Sign in
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  /**
   * Main page content.
   */
  return (
    <Layout>
      <main className="flex h-full w-full flex-col items-center justify-center gap-6 p-20">
        <p>Welcome, {account.name}!</p>

        <div className="flex w-full flex-row items-center justify-center gap-2">
          <Button onClick={() => createExampleMutation.mutate()}>Create Example</Button>
          <Button onClick={() => examplesQuery.refetch()}>Refetch Examples</Button>
          <Button onClick={() => msalInstance.logout()}>Sign out</Button>
        </div>

        <pre>{JSON.stringify(examplesQuery.data, null, 4)}</pre>
      </main>
    </Layout>
  );
}
