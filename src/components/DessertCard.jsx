import CardBase from "./cards/CardBase";


function DessertCard({id, name, imgUrl, onClick}) {
    return (
        <CardBase>
            <div style={{height: "100%", width: "100%"}} onClick={e => onClick(e, id)}>
                <img src={imgUrl} alt=""/>
                <h2>{name}</h2>
            </div>
        </CardBase>
    );
}


export default DessertCard;