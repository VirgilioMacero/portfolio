import NavBar from "../Components/NavBar";
import ContactForm from "../Sections/ContactForm";
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
        <ContactForm />
      </div>
    </>
  );
}
