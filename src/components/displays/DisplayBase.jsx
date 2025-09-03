import "./base-display-styles.css";


function DisplayBase({children}) {
    return (
        <div className="display-layout">
            { children && children.map((child, index) => (
                <div key={index}>{child}</div>
            ))}
        </div>
    )
}


export default DisplayBase;