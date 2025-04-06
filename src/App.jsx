import Header from "@/components/shared/Header";
import { ProjectCarousel } from "./components/shared/ProjectCarousel";
import Footer from "./components/shared/Footer";
import { SkillSet } from "./components/shared/SkillSet";

function App() {
  return (
    <>
      <Header></Header>
      <div className="px-4 py-2 mt-20 space-y-1 leading-relaxed sm:px-8 md:px-16 lg:px-24 xl:px-36 md:mt-24 lg:mt-28">
        <p className="text-xl font-semibold sm:text-2xl">Hi, I'm Krishna👋</p>
        <div className="text-3xl font-extrabold tracking-normal sm:text-4xl md:text-5xl lg:text-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 space-y-1 md:space-y-0">
            <div className="whitespace-nowrap">I build</div>
            <div className="bg-[#EB5B00] p-1 md:p-3 text-2xl md:text-5xl w-fit font-bold  transition-all duration-300 fade-in-5 rounded-md">
              Full Stack Web Applications
            </div>
          </div>
          <div className="mt-1 md:mt-4">and Mobile Apps</div>          
        </div>
      </div>
      <ProjectCarousel></ProjectCarousel>
      <SkillSet></SkillSet>
      <Footer></Footer>
    </>
  );
}

export default App;
