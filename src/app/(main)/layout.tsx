import Header from "@/components/organisms/Header";

export default function MainLayout({ children }: NextLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
