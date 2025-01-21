import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@repo/react-ui/components/Button.tsx";
import { useMsalAuth } from "@repo/react-hooks/useMsalAuth.ts";
import { z } from "zod";

const searchSchema = z.object({
  redirect: z.string().optional().catch("/"),
});

export const Route = createFileRoute("/login/")({
  validateSearch: (search) => searchSchema.parse(search),
  component: Index,
});

function Index() {
  const { isLoading, isAuthenticated, instance: msalInstance } = useMsalAuth();

  const navigate = useNavigate();

  const { redirect = "/" } = Route.useSearch();

  const [error, setError] = useState<string | null>(null);

  /**
   * Handle the sign in button click event.
   */
  const handleSignIn = async () => {
    await msalInstance.loginPopup().catch((e) => {
      setError(e.message);
    });
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    // If user is already authenticated, navigate to redirect
    if (isAuthenticated) {
      navigate({ to: redirect });
    }
  }, [isAuthenticated, isLoading, navigate, redirect]);

  if (isLoading) {
    return (
      <div className="flex h-full min-h-screen w-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="font-montserrat flex h-full min-h-screen w-screen flex-col items-center justify-center gap-6 p-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
          Welcome to YNCU
        </h2>
        <p className="text-muted-foreground text-center text-sm">
          Please sign in to continue
        </p>
      </div>

      <Button
        onClick={handleSignIn}
        className="bg-secondary-blue hover:bg-secondary-blue w-full max-w-60 hover:brightness-105 sm:max-w-80"
      >
        Sign in with Azure
      </Button>

      {error && (
        <p className="text-destructive text-sm" data-testid="error-message">
          {error}
        </p>
      )}
    </div>
  );
}
