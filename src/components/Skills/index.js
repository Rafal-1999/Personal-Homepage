import {
    ListBlock,
    ListTitle,
    Icon,
    List,
    ListItem
} from "./styled";

const Skills = ({
    title,
    decorativeIcon,
    arrayItems
}) => (
    <ListBlock>
        <ListTitle>
            {title}
            <Icon
                src={decorativeIcon}
                alt=""
                aria-hidden="true"
            />
        </ListTitle>
        <List>
            {arrayItems.map(item =>
                <ListItem key={item}>{item}</ListItem>
            )}
        </List>
    </ListBlock>
);

export default Skills;
