import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import "./styles.css";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedServices } from "@/components/FeaturedServices";
import { Reviews } from "@/components/Reviews";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CentrePage, ContactPage, RecommendationsPage } from "@/components/ContentPage";
import { AudiencePage } from "@/components/AudiencePage";
import { CategoryPage } from "@/components/CategoryPage";
import { audienceLabels, categories, type Audience } from "@/data/services";
import { useReveal } from "@/hooks/use-reveal";

const queryClient = new QueryClient();

function App() {
  useReveal();
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const parts = path.split("/");
  const audience = parts[2] === "femme" || parts[2] === "homme" ? parts[2] as Audience : null;
  const category = parts.length === 4 && parts[1] === "prestations" && audience
    ? categories.find((item) => item.id === parts[3] && item.audiences.includes(audience))
    : null;

  useEffect(() => {
    if (category && audience) {
      document.title = `${category.label} | Studio Zahaa à Asnières-sur-Seine`;
    } else if (audience) {
      document.title = `${audienceLabels[audience]} | Studio Zahaa à Asnières-sur-Seine`;
    }
    return () => { document.title = "Studio Zahaa | Institut de Beauté à Asnières-sur-Seine"; };
  }, [category, audience]);

  const page =
    path === "/le-centre" ? (
      <CentrePage />
    ) : path === "/nos-recommandations" ? (
      <RecommendationsPage />
    ) : path === "/nous-contacter" ? (
      <ContactPage />
    ) : audience && !category ? (
      <AudiencePage audience={audience} />
    ) : category && audience ? (
      <CategoryPage audience={audience} categoryId={category.id} />
    ) : (
      <>
        <Hero />
        <About />
        <FeaturedServices />
        <Reviews />
        <Booking />
      </>
    );

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main>{page}</main>
      <Footer />
      <FloatingCTA />
      <Toaster position="top-center" richColors />
      <div className="h-20 md:hidden" />
    </QueryClientProvider>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Élément racine introuvable");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
