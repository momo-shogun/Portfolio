import Header from "@/components/shared/Header";
import { ProjectCarousel } from "./components/shared/ProjectCarousel";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="px-4 py-2 mt-20 space-y-1 leading-relaxed sm:px-8 md:px-16 lg:px-24 xl:px-36 md:mt-24 lg:mt-28">
        <p className="text-xl font-semibold sm:text-2xl">Hi, I'm Krishna👋</p>
        <div className="text-3xl  text-nowrap font-extrabold tracking-normal sm:text-4xl md:text-5xl lg:text-6xl md:leading-16">
          <div className=" flex gap-4">
            <div className="">I build </div>
            <div className="bg-[#EB5B00] p-3 text-white">
              Full Stack Web Applications
            </div>{" "}
            <br />
          </div>
          <div className="">and Mobile Apps</div>
        </div>
      </div>
      <ProjectCarousel></ProjectCarousel>
      <Footer></Footer>
    </>
  );
}

export default App;
