import {
    ErrorInfoBox,
    ErrorIcon,
    ErrorTitle,
    ErrorText
} from "./styled";
import { FilledLink } from "../../../styles/links";
import { githubUsername } from "../../../constants";

const ErrorInfo = () => (
    <ErrorInfoBox >
        <ErrorIcon className="icon-danger" aria-hidden="true" />
        <ErrorTitle>Ooops! Something went wrong</ErrorTitle>
        <ErrorText>
            Sorry, failed to load GitHub projects. You can check them directly on GitHub.
        </ErrorText>
        <FilledLink
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            title="Otwórz stronę GitHub w nowym oknie"
            rel="noopener noreferrer"
        >
            Go to GitHub
        </FilledLink>
    </ErrorInfoBox>
);

export default ErrorInfo;
