import "./global.css";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Mentorship from "./pages/Mentorship";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function useResumeShortcut() {
  useEffect(() => {
    let buffer = "";

    const listener = (event) => {
      if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
      const key = event.key.toLowerCase();
      if (key.match(/[a-z]/)) {
        buffer += key;
        buffer = buffer.slice(-10);
        if (buffer.endsWith("resume")) {
          const link = document.createElement("a");
          link.href = "/SahilNaik_Resume.pdf";
          //link.download = "SahilNaik_Resume.pdf";
          link.click();
          buffer = "";
        }
      }
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);
}

const App = () => {
  useResumeShortcut(); // ✅ activates globally

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
createRoot(document.getElementById("root")!).render(<App />);
