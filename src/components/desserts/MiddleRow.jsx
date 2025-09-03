import InfoArticle from "../articles/InfoArticle";
import IngredientsList from "./IngredientsList";
import "./middle-row-styles.css";


function MiddleRow({dessert}) {

    return (
        <div className="row-2-container">
            <InfoArticle title2="🛒 Ingredientes:" >
                <IngredientsList ingredients={dessert.ingredients}/>
            </InfoArticle>
            <div className="image-container">
                <div className="image-border">
                    <img className="image" src={dessert.imgUrl} alt="" />
                </div>
            </div>
        </div>
    );
}



export default MiddleRow;