import "./list-styles.css";


function ItemsList({itemSymbol, children}) {
    return (
        <div className="content-box">
            <ul className="list">
                {children && children.map((child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ul>
        </div>
    );
}


export default ItemsList;