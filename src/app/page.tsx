import Image from "next/image";
import Header from "./Components/Navbar/Header";
import Intro from "./Components/intro/Intro";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contribution from "./Components/Contribution/Contribution";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/Navbar/SideBar";

export default function Home() {
  return (
    <>
      <Header />
      <SideBar/>
      <div className="flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start mb-2 w-full">
        <div className="w-64 h-64 rounded-full bg-neon border fixed mx-auto my-auto blur-xl top-5 opacity-20"></div>
        <div className="w-64 h-64 rounded-full bg-neon border fixed mx-auto my-auto blur-xl bottom-0 right-0 opacity-20"></div>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contribution />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
