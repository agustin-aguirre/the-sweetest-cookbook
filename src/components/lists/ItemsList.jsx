import "./list-styles.css";


function ItemsList({prefix, children}) {

    if (!prefix || prefix == "") {
        prefix = "";
    }

    const ulStyle = prefix == "" ? "unstyled" : "unordered";
    
    return (
        <div className="content-box">
            <ul className={"list " + ulStyle}>
                {children && children.map((child, index) => (
                    <li list-prefix={prefix} key={index}>{child}</li>
                ))}
            </ul>
        </div>
    );
}


export default ItemsList;