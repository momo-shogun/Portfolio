import Header from "@/components/shared/Header";
import { ProjectCarousel } from "./components/shared/ProjectCarousel";

function App() {
  return (
    <>
      <Header></Header>
      <div className="py-2 px-36 leading-relaxed space-y-1 mt-28">
        <p className="text-2xl font-semibold">Hi,I'm Krishna👋</p>
        <p className="text-5xl font-extrabold tracking-normal">
          I Build Full Stack Web Applications.
        </p>
      </div>
      <ProjectCarousel></ProjectCarousel>
    </>
  );
}

export default App;
