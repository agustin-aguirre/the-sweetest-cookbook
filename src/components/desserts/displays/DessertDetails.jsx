import { motion } from "motion/react";
import ListArticle from "../../articles/ListArticle";
import DisplayBase from "../../displays/DisplayBase";
import ReadOnlyHeading from "../../headings/ReadOnlyHeading";
import InfoArticle from "../../articles/InfoArticle";
import IngredientsList from "../IngredientsList";
import CloseButton from "../../buttons/CloseButton";
import "./display-styles.css";


function DessertDetails({dessert, onClose, onEdit}) {

    const steps = dessert.steps.split(". ").map((sentence) => sentence + ".");

    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: 200 }}
            transition={{ duration: 0.19, ease: "easeOut" }}
        >
            <DisplayBase>
                <div style={{display: "grid", gridTemplateColumns: "1fr auto", gridAutoFlow: "column"}}>
                    <ReadOnlyHeading 
                        title1={"🍽️ " + dessert.name}
                        options={[
                            { name: "Cerrar", onClick: () => onClose(dessert) }
                        ]}
                    />
                    <div style={{width: "45px", height: "45px"}}>
                        <CloseButton onClick={onClose}/>
                    </div>
                </div>
                <div className="middle-row-container">
                    <InfoArticle title2="🛒 Ingredientes:" >
                        <IngredientsList ingredients={dessert.ingredients}/>
                    </InfoArticle>
                    <div className="image-container">
                        <div className="image-border">
                            <img className="image" src={dessert.imgUrl} alt="" />
                        </div>
                    </div>
                </div>
                <ListArticle title2="👨‍🍳 Preparación:" isOrdered={true} >
                    {steps}
                </ListArticle>
            </DisplayBase>
        </motion.div>
    );
}


export default DessertDetails;