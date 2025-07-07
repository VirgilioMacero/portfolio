import NavBar from "../Components/NavBar";
import Presentation from "../Sections/Presentation";
import Projects from "../Sections/Projects";
import Services from "../Sections/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <Presentation />
        <Services />
        <Projects />
      </div>
    </>
  );
}
