import "./heading-styles.css";


function ReadOnlyHeading({title1, title2, title3, title4, title5, options}) {

    const gridConfig = !options 
            ? {
                gridTemplateColumns: "1fr",
                columnGap: "0"
            }
            : { }
    
    return (
        <div className="heading-layout" style={gridConfig}>
            <div className="content-box heading-container">
                { title1 && <h1>{title1}</h1> }
                { title2 && <h2>{title2}</h2> }
                { title3 && <h3>{title3}</h3> }
                { title4 && <h4>{title4}</h4> }
                { title5 && <h5>{title5}</h5> }
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


export default ReadOnlyHeading;