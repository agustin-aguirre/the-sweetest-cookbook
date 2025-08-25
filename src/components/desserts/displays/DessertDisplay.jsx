import ListArticle from "../../articles/ListArticle";
import "./display.css";
import "./layout.css";


function DessertDisplay({dessert, onClose, onEdit}) {

    const ingredients = dessert.ingredients.map((tuple) => 
        `${tuple.ingredient}${tuple.measure && `: ${tuple.measure}`}`
    );

    const steps = dessert.steps.split(". ").map((sentence) => sentence + ".");

    return (
        <div className="desserts-display">
            <div className="desserts-display-grid-item-1">
                <div className="header-container">
                    <div className="heading header">
                        <h1>{dessert.name}</h1>
                    </div>
                    <div className="options-container">
                        <button onClick={() => onEdit()}>Editar</button>
                        <button onClick={() => onClose()}>Cerrar</button>
                    </div>
                </div>
            </div>
            <ListArticle
                className="desserts-display-grid-item-2"
                heading="Ingredientes:" 
                items={ingredients}
                isOrdered={false}
            />
            <div className="desserts-display-grid-item-3 image-container">
                <div className="image-border">
                    <img className="image" src={dessert.imgUrl} alt="" />
                </div>
            </div>
            <ListArticle 
                className="desserts-display-grid-item-4"
                heading="Preparación:"
                items={steps}
                isOrdered={true}
            />
        </div>
    );
}


export default DessertDisplay;