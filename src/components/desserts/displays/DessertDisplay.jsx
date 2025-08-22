import InfoArticle from "../../articles/InfoArticle";
import ListArticle from "../../articles/ListArticle";
import "./display.css";
import "./layout.css";


function DessertDisplay({dessert}) {

    const ingredients = dessert.ingredients.map((tuple) => 
        `${tuple.ingredient}${tuple.measure && `: ${tuple.measure}`}`
    );

    const steps = dessert.steps.split(". ").map((sentence) => sentence + ".");

    return (
        <div className="grid-layout">
            <div className="grid-item-1 image-container">
                <img className="image" src={dessert.imgUrl} alt="" />
            </div>
            <InfoArticle className="grid-item-2">
                <h1>{dessert.name}</h1>
                <InfoArticle.Split />
                <ListArticle
                    heading="Ingredientes:" 
                    items={ingredients}
                    isOrdered={false}
                />
            </InfoArticle>
            <ListArticle 
                className="grid-item-3"
                heading="Preparación:"
                items={steps}
                isOrdered={true}
            />
        </div>
    );
}


export default DessertDisplay;