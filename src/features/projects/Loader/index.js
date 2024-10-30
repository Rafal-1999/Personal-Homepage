import { LoaderBox, LoaderInfo, StyledLoader } from "./styled";

const Loader = () => (
    <LoaderBox>
        <LoaderInfo>Please wait, projects are being loaded...</LoaderInfo>
        <StyledLoader />
    </LoaderBox>
);

export default Loader;
