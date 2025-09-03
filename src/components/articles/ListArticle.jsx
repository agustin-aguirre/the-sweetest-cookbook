import ReadOnlyHeading from "../headings/ReadOnlyHeading";
import ItemsList from "../lists/ItemsList";
import OrderedList from "../lists/OrderedList";


function ListArticle({title1, title2, title3, title4, title5, isOrdered, children}) {

    return (
        <div className="article">
            <ReadOnlyHeading
                title1={title1}
                title2={title2}
                title3={title3}
                title4={title4}
                title5={title5}
            />
            {
                isOrdered
                    ? <OrderedList>{children}</OrderedList>
                    : <ItemsList>{children}</ItemsList>
            }
        </div>
    )
}


export default ListArticle;