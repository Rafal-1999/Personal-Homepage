import Container from "../components/Container";
import BusinessCard from "../components/BusinessCard";
import Skills from "../components/Skills";
import Projects from "../features/projects/Projects";
import Footer from "../components/Footer";
import { skills } from "../data/skills";
import { education } from "../data/education";
import toolsIcon from "../assets/icons/decorative/tools.png";
import rocketIcon from "../assets/icons/decorative/rocket.png";

const Home = () => (
    <Container>
        <header>
            <BusinessCard />
        </header>
        <main>
            <Skills
                title="My skillset includes"
                decorativeIcon={toolsIcon}
                arrayItems={skills}
            />
            <Skills
                title="What I want to learn next"
                decorativeIcon={rocketIcon}
                arrayItems={education}
            />
            <Projects />
        </main>
        <footer>
            <Footer />
        </footer>
    </Container>
);

export default Home;
