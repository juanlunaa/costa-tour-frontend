import { Footer, NavBar } from "@/components";

export default function CostaTourLayout ({ children }) {
  return (
    <main className="min-h-screen relative">
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}