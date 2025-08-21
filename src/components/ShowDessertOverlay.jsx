import { useEffect, useState } from "react";
import { Dessert } from "../models/dessert";
import { getById } from "../services/api";
import SquaredButton from "./buttons/SquaredButton";
import OverlayBackground from "./overlays/OverlayBackground";
import DessertDisplay from "./DessertDisplay";
import EditDessertForm from "./EditDessertForm";


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
        return <DessertDisplay dessert={dessert} />;
    }


    return (
        <OverlayBackground>
            <div style={{display: "grid", gridTemplateColumns: "1fr 4fr 1fr"}}>
                <div style={{gridColumn: 2}}>
                    {renderDisplay()}
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "80px"}}>
                    <SquaredButton title="Cerrar" onClick={onClose} />
                    {!isLoading && !isInEditMode && <SquaredButton title="Editar" onClick={() => setIsInEditMode(true)} />}
                </div>
            </div>
        </OverlayBackground>
    );
}


export default ShowDessertOverlay;