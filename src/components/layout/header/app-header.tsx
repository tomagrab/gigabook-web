import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AppHeader() {
  return (
    <header className="flex items-center gap-4 border-b p-4">
      <SidebarTrigger />
      <h1>Application Header</h1>
    </header>
  );
}
