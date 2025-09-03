import ReadOnlyHeading from "../headings/ReadOnlyHeading";
import "./articles.css";


function InfoArticle({title1, title2, title3, title4, title5, children}) {
    return (
        <div className="article">
            <ReadOnlyHeading
                title1={title1}
                title2={title2}
                title3={title3}
                title4={title4}
                title5={title5}
            />
            { children }
        </div>
    )
}

export default InfoArticle;