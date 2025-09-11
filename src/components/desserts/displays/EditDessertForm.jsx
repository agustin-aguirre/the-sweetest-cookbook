import { useState } from "react";
import DisplayBase from "../../displays/DisplayBase";
import ListArticle from "../../articles/ListArticle";
import InputHeading from "../../headings/InputHeading";
import "../displays/display-styles.css";


function EditDessertForm({dessert, onEdit, onClose, onSubmit}) {

    const [image, setImage] = useState(dessert.imgUrl);
    const [preview, setPreview] = useState(dessert.imgUrl);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <form>
            <DisplayBase>
                <InputHeading />
                {/* <MiddleRow dessert={dessert}/> */}
                <ListArticle title2="👨‍🍳 Preparación:" isOrdered={true} >
                    {}
                </ListArticle>
            </DisplayBase>
        </form>
    );
}


export default EditDessertForm;