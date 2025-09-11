import "./heading-styles.css";


function InputHeading({options}) {

    const gridConfig = !options 
            ? {
                gridTemplateColumns: "1fr",
                columnGap: "0"
            }
            : { }

    return (
        <div className="heading-layout" style={gridConfig}>
            <div className="content-box heading-container">
                <input type="text" value="buenas tardes" />
            </div>
            <div className="options-container">
                {options && options.map(({name, onClick}, index) => (
                    <button 
                        key={index}
                        className="option-button"
                        onClick={onClick}
                    >
                        {name}
                    </button>
                ))}
            </div>
        </div>
    );
}


export default InputHeading;