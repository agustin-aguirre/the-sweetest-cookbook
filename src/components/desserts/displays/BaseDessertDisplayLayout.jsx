import "./layout.css";


function BaseDessertDisplayLayout({titleElem, gridElem2, imgElem, gridElem4, onEdit, onClose}) {
    return (
        <div className="desserts-display">
            <div className="desserts-display-grid-item-1">
                <div className="header-container">
                    <div className="title-container">
                        { titleElem }
                    </div>
                    <div className="options-container">
                        <button onClick={() => onEdit()}>Editar</button>
                        <button onClick={() => onClose()}>Cerrar</button>
                    </div>
                </div>
            </div>
            <div className="desserts-display-grid-item-2">
                {gridElem2}
            </div>
            <div className="desserts-display-grid-item-3 image-container">
                { imgElem }
            </div>
            <div className="desserts-display-grid-item-4">
                { gridElem4 }
            </div>
        </div>
    );
}

export default BaseDessertDisplayLayout;