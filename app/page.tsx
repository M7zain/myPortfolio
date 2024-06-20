import About from "@/components/Sections/About";
import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";




export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "#about",
   
    },
    {
      name: "Projects",
      link: "#projects",
    
    },
    {
      name: "Contact",
      link: "#contact",

    },
  ];

  return (

  
    <main className="relative bg-black-100 flex justify-center items-center flex-col
    overflow-hidden mx-auto  sm:px-10 px-5">
   
      <div className="max-w-7xl w-full  ">
          <FloatingNav navItems={navItems} />
          <Hero/> 
          <About/>
          <Projects/>
          <Footer/>
      </div>
    
   </main>



  );
}
