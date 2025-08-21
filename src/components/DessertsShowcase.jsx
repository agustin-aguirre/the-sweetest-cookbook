import GridLayout from "./layouts/GridLayout";
import AddDessertCard from "./AddDessertCard";
import DessertCard from "./DessertCard";

function DessertsShowcase({desserts, onAddDessert, onShowDessert}) {
    
    function handleAddDessert(e) {
		onAddDessert();
	}

	function handleShowDessert(e, id) {
		onShowDessert(id);
	}

    return (
        <GridLayout>
            <AddDessertCard onClick={handleAddDessert}/>
            {desserts.map(dessert => (
                <DessertCard key={dessert.id} {...dessert} onClick={handleShowDessert}/>
            ))}
        </GridLayout>
    );
}


export default DessertsShowcase;