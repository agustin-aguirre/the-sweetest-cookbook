import { useEffect, useState } from "react";
import { Dessert } from "../../../models/dessert";
import { getById } from "../../../services/api";
import SquaredButton from "../../buttons/SquaredButton";
import OverlayBackground from "../../overlays/OverlayBackground";
import DessertDisplay from "../displays/DessertDisplay";
import EditDessertForm from "../../EditDessertForm";
import "./overlay.css";

function ShowDessertOverlay({id, onEdit, onClose}) {
    const [isLoading, setIsLoading] = useState(true);
    const [dessert, setDessert] = useState(new Dessert());
    const [isInEditMode, setIsInEditMode] = useState(false);

    useEffect(() => {
        const fetchDessert = async (id) => {
            setDessert(await getById(id));
            setIsLoading(false);
        }
        fetchDessert(id);
    }, []);


    function renderDisplay() {
        if (isLoading) return <h2 style={{color: "white", fontSize: "xx-large"}}>Cargando...</h2>;
        if (isInEditMode) return <EditDessertForm dessert={dessert} onSubmit={(e) => {}}/>
        return <DessertDisplay dessert={dessert} onEdit={onEdit} onClose={onClose}/>;
    }


    return (
        <OverlayBackground className="dessert-overlay">
            <div className="display-container">
                { renderDisplay() }
            </div>
        </OverlayBackground>
    )
}


export default ShowDessertOverlay;