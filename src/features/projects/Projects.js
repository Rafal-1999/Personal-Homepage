import { useFetchData } from "../../hooks/useFetchData";
import Loader from "./Loader";
import ProjectList from "./ProjectList";
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

    const showContentAfterFetch = () => {
        switch (projects.status) {
            case "loading":
                return <Loader />;
            case "data":
                return <ProjectList projectsData={projects.data} />;
        }
    };

    return (
        <section>
            <Header>
                <HeaderIcon className="icon-github" aria-hidden="true" />
                <HeaderTitle>Portfolio</HeaderTitle>
                <HeaderDescription>My recent projects</HeaderDescription>
            </Header>
            {showContentAfterFetch()}
        </section>
    )
};

export default Projects;
