import Hero from "./assets/Components/Hero";
import Contact from "./assets/Components/Contact";
import Skills from "./assets/Components/Skills";
import Project from "./assets/Components/Project";
import Navbar from "./assets/Components/Navbar";
function App() {
  return (
    <>
    

      <main className="flex flex-col items-center px-4 md:px-8 sm:px-16">
        <Navbar />
        <Hero/>
        <Skills />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
