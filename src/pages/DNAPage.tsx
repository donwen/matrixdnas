import { DNAGrid } from "../components/DNAGrid";
import { ThemeProvider } from "../components/ThemeProvider";

export default function DNAPage() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <DNAGrid initialWorld="physical" />
      </div>
    </ThemeProvider>
  );
} 