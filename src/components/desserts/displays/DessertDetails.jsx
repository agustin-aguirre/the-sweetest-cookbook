import { motion } from "motion/react";
import ListArticle from "../../articles/ListArticle";
import DisplayBase from "../../displays/DisplayBase";
import ReadOnlyHeading from "../../headings/ReadOnlyHeading";
import MiddleRow from "../MiddleRow";
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
                <ReadOnlyHeading 
                    title1={"🍽️ " + dessert.name}
                    options={[
                        { name: "Editar", onClick: () => onEdit(dessert) },
                        { name: "Cerrar", onClick: () => onClose(dessert) }
                    ]}
                />
                <MiddleRow dessert={dessert}/>
                <ListArticle title2="👨‍🍳 Preparación:" isOrdered={true} >
                    {steps}
                </ListArticle>
            </DisplayBase>
        </motion.div>
    );
}


export default DessertDetails;