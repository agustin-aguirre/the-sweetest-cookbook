import InfoArticle from "../../articles/InfoArticle";
import ListArticle from "../../articles/ListArticle";
import DisplayBase from "../../displays/DisplayBase";
import ReadOnlyHeading from "../../headings/ReadOnlyHeading";
import IngredientsList from "../IngredientsList";
import "./display-styles.css";


function DessertDetails({dessert, onClose, onEdit}) {

    const steps = dessert.steps.split(". ").map((sentence) => sentence + ".");

    return (
        <DisplayBase>
            <ReadOnlyHeading 
                title1={"🍽️ " + dessert.name}
                options={[
                    { name: "Editar", onClick: () => onEdit(dessert) },
                    { name: "Cerrar", onClick: () => onClose(dessert) }
                ]}
            />
            <div style={{display: "grid", gridTemplateColumns: "2", gridTemplateRows: "1fr", columnGap: "15px"}}>
                <InfoArticle title2="🛒 Ingredientes:" >
                    <IngredientsList ingredients={dessert.ingredients}/>
                </InfoArticle>
                <div 
                    style={{gridColumn: "2", maxWidth: "fit-content"}}
                    className="image-border"
                >
                    <img className="image" src={dessert.imgUrl} alt="" />
                </div>
            </div>
            <ListArticle title2="👨‍🍳 Preparación:" isOrdered={true} >
                {steps}
            </ListArticle>
        </DisplayBase>
    );
}


export default DessertDetails;