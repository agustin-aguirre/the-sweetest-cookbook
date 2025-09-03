import { useState } from "react";
import DisplayBase from "../../displays/DisplayBase";
import InfoArticle from "../../articles/InfoArticle";
import "../displays/display.css";


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
        <form action="" style={{width: "100%"}}>

        </form>
        )
}


export default EditDessertForm;


/*
            <BaseDessertDisplayLayout 
                titleElem={
                    <div className="heading" style={{margin: 0, padding: "20px 25px"}}>
                        <input type="text" name="" id="" value={dessert.name}/>
                    </div>
                }
                gridElem2={
                    <InfoArticle>
                        <h2>Ingredientes:</h2>
                        <InfoArticle.Split />
                        <textarea value={JSON.stringify(dessert.ingredients)}/>
                    </InfoArticle>
                }
                imgElem={
                    <div>
                        {preview && (
                            <>
                                <div>
                                    <p>Vista previa:</p>
                                    <img src={preview} alt="Vista previa" style={{ maxWidth: '300px', marginTop: '10px' }} />
                                </div>
                            </>
                        )}
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </div>
                }
                gridElem4={
                    <InfoArticle>
                        <h2>Preparación:</h2>
                        <InfoArticle.Split />
                        <textarea value={dessert.steps}/>
                    </InfoArticle>
                }
            />
*/
