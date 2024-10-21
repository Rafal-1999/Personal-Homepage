import { useFetchData } from "../../hooks/useFetchData";
import { githubAPIBaseURL, githubUsername } from "../../constants";

const Projects = () => {
    const dataURL = `${githubAPIBaseURL}/users/${githubUsername}/repos`;
    const projects = useFetchData(dataURL);

    return (
        <section></section>
    )
};

export default Projects;
