import { useFetchData } from "../../hooks/useFetchData";
import {
    Header,
    HeaderIcon,
    HeaderTitle,
    HeaderDescription
} from "./styled";
import { githubAPIBaseURL, githubUsername } from "../../constants";

const Projects = () => {
    const dataURL = `${githubAPIBaseURL}/users/${githubUsername}/repos`;
    const projects = useFetchData(dataURL);

    return (
        <section>
            <Header>
                <HeaderIcon className="icon-github" aria-hidden="true" />
                <HeaderTitle>Portfolio</HeaderTitle>
                <HeaderDescription>My recent projects</HeaderDescription>
            </Header>
        </section>
    )
};

export default Projects;
