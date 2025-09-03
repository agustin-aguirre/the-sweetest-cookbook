import InfoArticle from "../../articles/InfoArticle";
import ListArticle from "../../articles/ListArticle";
import DisplayBase from "../../displays/DisplayBase";
import ReadOnlyHeading from "../../headings/ReadOnlyHeading";
import IngredientsList from "../IngredientsList";
import "./display-styles.css";


function DessertDetails({dessert, onClose, onEdit}) {

    const steps = dessert.steps.split(". ").map((sentence) => sentence + ".");

    const row2Layout = {
        display: "grid", 
        gridTemplateColumns: "2fr",
        gridAutoFlow: "column",
        columnGap: "15px"
    }

    const imgContainerStyle = {
        maxWidth: "100%"
    }

    return (
        <DisplayBase>
            <ReadOnlyHeading 
                title1={"🍽️ " + dessert.name}
                options={[
                    { name: "Editar", onClick: () => onEdit(dessert) },
                    { name: "Cerrar", onClick: () => onClose(dessert) }
                ]}
            />
            <div style={row2Layout}>
                <InfoArticle title2="🛒 Ingredientes:" >
                    <IngredientsList ingredients={dessert.ingredients}/>
                </InfoArticle>
                <div className="image-border" style={imgContainerStyle}>
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