import Hero from "components/Hero";
import Feature from "components/Feature";
import Sample from "components/Sample";

export default function Home() {
  return (
    <main className="min-h-screen bg-background max-w-6xl mx-auto px-2 ">
      <Hero />
      <Sample />
      <Feature />
    </main>
  );
}
