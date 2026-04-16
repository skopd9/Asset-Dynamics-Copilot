import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();
const PASSWORD = "Masoutis!";

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const locked = window.localStorage.getItem("asset-dynamics-unlocked") === "true";
    if (locked) {
      onUnlock();
    }
  }, [onUnlock]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value === PASSWORD) {
      window.localStorage.setItem("asset-dynamics-unlocked", "true");
      onUnlock();
      return;
    }
    setError(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <form onSubmit={submit} className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-xl">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Protected pitch</p>
          <h1 className="mt-3 text-3xl font-serif font-bold">Enter password to view Asset Dynamics</h1>
          <p className="mt-2 text-sm text-muted-foreground">Use the Masoutis password provided by Recognyte.</p>
        </div>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setError(false);
          }}
          type="password"
          autoFocus
          className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none ring-0 focus:border-primary"
          placeholder="Password"
        />
        {error ? <p className="mt-3 text-sm text-destructive">Incorrect password.</p> : null}
        <button
          type="submit"
          className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Unlock page
        </button>
      </form>
    </div>
  );
}

function Router() {
  const isDev = import.meta.env.DEV;
  const [unlocked, setUnlocked] = useState(isDev);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
