import CardBase from "./cards/CardBase";

function AddDessertCard({onClick}) {
    return (
        <CardBase>
            <div style={{height: "100%", width: "100%"}} onClick={e => onClick(e)}>
                <h2>+ Agregar postre</h2>
            </div>
        </CardBase>
    );
}


export default AddDessertCard;