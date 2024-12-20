import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/ui/Hero";
import { FaHome } from "react-icons/fa";



export default function Home() {
  return (
   <main className="relative h-full bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className="max-w-7xl w-full ">
      <h1 className="text-white-200">Hello, Portfolio</h1>
      <FloatingNav navItems={[{name:"Home",link:'/',icon:<FaHome />}]}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
    </div>
   </main>
  );
}