import ItemsList from "../lists/ItemsList";


function IngredientsList({ingredients}) {

    const layout = {
        width: "100%",
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: "2fr",
        gap: "10px",
        borderBottom: "1px dotted white",
        paddingBottom: "3px",
    };

    return (
        <ItemsList>
            {
                ingredients.map(({ingredient, measurement}, index) => {
                    return (
                        <div key={index} style={layout}>
                            <span>{ingredient}</span>
                            <span>{measurement}</span>
                        </div>
                    );
                })
            }
        </ItemsList>
    );
}


export default IngredientsList;