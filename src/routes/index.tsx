import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vidyullatha | UI & Frontend Developer" },
      { name: "description", content: "Hyderabad React.js and UI developer creating responsive websites, frontend solutions, and digital designs for freelance clients." },
      { property: "og:title", content: "Vidyullatha | UI & Frontend Developer" },
      { property: "og:description", content: "Professional React.js development, responsive websites, UI implementation, and creative digital design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
