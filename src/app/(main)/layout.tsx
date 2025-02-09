import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";

export default function MainLayout({ children }: NextLayoutProps) {
  return (
    <div className="flex h-full max-h-dvh flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto px-10 py-8">{children}</main>
      </div>
    </div>
  );
}
