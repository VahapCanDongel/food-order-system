import Navigation from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-full max-h-screen font-lexend flex flex-col">
      <Navigation />

      <main className="bg-slate-50">{children}</main>
    </div>
  );
}
