import TwoColumnLayout from "./layouts/TwoColumnLayout";
import "./displays.css";


function DessertDisplay({dessert}) {
    return (
        <div className="dessert-display">
            <TwoColumnLayout>
                    <div className="dessert-img">
                        <img src={dessert.imgUrl} alt="" />
                    </div>
                <TwoColumnLayout.Split />
                    <div className="dessert-info">
                        <div className="dessert-info-section">
                            <h1>{dessert.name}</h1>
                        </div>
                        <div className="dessert-info-section">
                            <h2>Ingredientes:</h2>
                            <ul>
                                {dessert.ingredients.map((tuple, index) => 
                                    <li key={index.toString()}>
                                        {tuple.ingredient}{tuple.measure && `: ${tuple.measure}`}
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="dessert-info-section">
                            <h2>Preparaci&oacute;n</h2>
                            <ol>
                                {dessert.steps.split(". ").map((sentence, index) => <li key={index}>{sentence + "."}</li>)}
                            </ol>
                        </div>
                    </div>
            </TwoColumnLayout>
        </div>
    );
}
    /*return (
        <div className="dessert-display">
            
            <div className="img-col">
                <img src={dessert.imgUrl} alt="" />
            </div>

            <div className="content-col">
                <button class="close-btn" onClick={(e) => onCloseClicked()}>✖</button>
                <button class="edit-btn" onClick={(e) => onEditClicked()}>Edit</button>
                <h1>{dessert.name}</h1>
                <div>
                    <h2>Ingredientes:</h2>
                    <ul>
                        {dessert.ingredients.map((tuple, index) => 
                            <li key={index.toString()}>
                                {tuple.ingredient}{tuple.measure && `: ${tuple.measure}`}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h2>Preparaci&oacute;n</h2>
                    <p>{dessert.steps}</p>
                </div>
            </div>
        </div>
    );
}*/


export default DessertDisplay;