import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";

export default function MainLayout({ children }: NextLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-10 py-8">{children}</main>
      </div>
    </div>
  );
}
