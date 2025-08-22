import InfoArticle from "./InfoArticle";


function ListArticle(props) {

    const {heading, items, isOrdered} = props;

    const ListTag = isOrdered ? "ol" : "ul";

    const newProps = {...props};
    delete newProps.heading;
    delete newProps.items;
    delete newProps.isOrdered;

    return (
        <InfoArticle {...newProps}>
            <h2>{heading}</h2>
            <InfoArticle.Split />
            <ListTag>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ListTag>
        </InfoArticle>
    )
}


export default ListArticle;