import { Layout } from "@/components/ui/Layout";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMsalAuth } from "@repo/react-hooks/useMsalAuth.ts";
import { useEffect } from "react";
import { Button } from "@repo/react-ui/components/Button.tsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { account, isLoading, isUnauthenticated } = useMsalAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isUnauthenticated) {
      navigate({ to: "/login", search: { redirect: "/" } });
    }
  }, [isUnauthenticated, navigate]);

  if (isLoading) {
    return <Layout align="center">Loading...</Layout>;
  }

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

  return (
    <Layout>
      <p>Welcome, {account.name}!</p>
    </Layout>
  );
}
