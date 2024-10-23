import {
    Projects,
    ProjectsItem,
    ProjectTitle,
    ProjectDescription,
    Links,
    LinkTitle,
    LinksItem,
    Link
} from "./styled";

const ProjectList = ({ projectsData }) => (
    <Projects>
        {projectsData.map(project => (
            <ProjectsItem key={project.id}>
                {project.name && <ProjectTitle>{project.name}</ProjectTitle>}
                {project.description && <ProjectDescription>{project.description}</ProjectDescription>}
                {(project.homepage || project.html_url) && (
                    <Links>
                        {project.homepage && (
                            <>
                                <dt>
                                    <LinkTitle>Demo:</LinkTitle>
                                </dt>
                                <LinksItem>
                                    <Link
                                        href={project.homepage}
                                        target="_blank"
                                        title="Otwórz stronę demo w nowym oknie"
                                        rel="noopener noreferrer"
                                    >
                                        {project.homepage}
                                    </Link>
                                </LinksItem>
                            </>
                        )}
                        {project.html_url && (
                            <>
                                <dt>
                                    <LinkTitle>Code:</LinkTitle>
                                </dt>
                                <LinksItem>
                                    <Link
                                        href={project.html_url}
                                        target="_blank"
                                        title="Otwórz stronę GitHub w nowym oknie"
                                        rel="noopener noreferrer"
                                    >
                                        {project.html_url}
                                    </Link>
                                </LinksItem>
                            </>
                        )}
                    </Links>
                )}
            </ProjectsItem>
        ))}
    </Projects>
);

export default ProjectList;
