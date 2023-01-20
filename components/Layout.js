import Navigation from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen font-lexend">
      <Navigation />

      <main>{children}</main>
    </div>
  );
}
