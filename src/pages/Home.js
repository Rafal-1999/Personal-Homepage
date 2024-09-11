import Container from "../components/Container";
import BusinessCard from "../components/BusinessCard";
import Skills from "../components/Skills";
import { skills } from "../data/skills";
import toolsIcon from "../assets/icons/decorative/tools.png";

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
        </main>
    </Container>
);

export default Home;
