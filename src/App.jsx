import { useState, useEffect } from "react";
import { getAll } from "./services/api";
import LoadingOverlay from "./components/overlays/LoadingOverlay";
import DessertsShowcase from "./components/DessertsShowcase";
import ShowDessertOverlay from "./components/ShowDessertOverlay";
import './App.css';
import "./font-styles.css";


function App() {

	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [displayedDessert, setDisplayedDessert] = useState(-1);

	useEffect(() => {
        const getItems = async () => {
			setIsLoading(true);
            setItems(await getAll());
			setIsLoading(false);
        }
        getItems();
    }, []);

	const dessertDisplayHooks = {
		addRecipe: () => {alert("Adding recice")},
		removeRecipe: (id) => {alert("Removing " + id)}
	}

	return (
		<>
			<div className="desserts-display-container">
				<DessertsShowcase 
				desserts={items} 
				onAddDessert={dessertDisplayHooks.addRecipe}
				onShowDessert={(id) => { setDisplayedDessert(id); }}
				/>
			</div>
			{ isLoading && <LoadingOverlay /> }
			{ displayedDessert > 0 && <ShowDessertOverlay id={displayedDessert} onClose={() => setDisplayedDessert(-1)}/> }
		</>
	);
}


export default App;