import { Footer, NavBar } from "@/components";

export default function CostaTourLayout ({ children }) {
  return (
    <main className="min-h-scree">
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}