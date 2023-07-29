import Image from "next/image";
import Header from "./Components/Navbar/Header";
import Intro from "./Components/intro/Intro";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contribution from "./Components/Contribution/Contribution";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start mb-10 w-full">
        <div className="w-64 h-64 rounded-full bg-neon fixed mx-auto my-auto blur-xl inset-0 opacity-20"></div>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contribution/>
      </div>
    </>
  );
}
