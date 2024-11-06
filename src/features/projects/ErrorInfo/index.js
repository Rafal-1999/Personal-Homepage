import {
    ErrorInfoBox,
    ErrorIcon,
    ErrorTitle,
    ErrorText
} from "./styled";

const ErrorInfo = () => (
    <ErrorInfoBox >
        <ErrorIcon className="icon-danger" aria-hidden="true" />
        <ErrorTitle>Ooops! Something went wrong</ErrorTitle>
        <ErrorText>
            Sorry, failed to load GitHub projects. You can check them directly on GitHub.
        </ErrorText>
    </ErrorInfoBox>
);

export default ErrorInfo;
