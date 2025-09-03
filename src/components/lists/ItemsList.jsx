import "./list-styles.css";


function ItemsList({bulletPoints, children}) {

    const listStyleClassname = bulletPoints ?? false ? "bullet-points" : ""

    return (
        <div className="content-box">
            <ul className={`list ${listStyleClassname}`}>
                {children && children.map((child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ul>
        </div>
    );
}


export default ItemsList;