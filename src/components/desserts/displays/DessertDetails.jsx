import ListArticle from "../../articles/ListArticle";
import BaseDessertDisplayLayout from "./BaseDessertDisplayLayout";
import "./display.css";


function DessertDetails({dessert, onClose, onEdit}) {

    const ingredients = dessert.ingredients.map((tuple) => 
        `${tuple.ingredient}${tuple.measure && `: ${tuple.measure}`}`
    );

    const steps = dessert.steps.split(". ").map((sentence) => sentence + ".");

    return (
        <BaseDessertDisplayLayout 
            titleElem={
                <div className="heading">
                    <h1 style={{margin: 0, padding: "20px 25px"}}>{dessert.name}</h1> 
                </div>
            }
            gridElem2={
                <ListArticle
                    heading="Ingredientes:" 
                    items={ingredients}
                    isOrdered={false}
                />
            }
            imgElem={
                <div className="image-border">
                    <img className="image" src={dessert.imgUrl} alt="" />
                </div>
            }
            gridElem4={
                <ListArticle 
                    heading="Preparación:"
                    items={steps}
                    isOrdered={true}
                />
            }
            onEdit={onEdit}
            onClose={onClose}
        />
    );
}


export default DessertDetails;