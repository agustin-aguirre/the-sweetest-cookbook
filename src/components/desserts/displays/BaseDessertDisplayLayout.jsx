import "./base-display-styles.css";


function BaseDessertDisplayLayout({titleElem, gridElem2, imgElem, gridElem4, onEdit, onClose}) {
    return (
        <div className="base-display-layout">
            <div className="row-1">
                <div className="header">
                    <div className="title title-big">
                        <h1>buenas tardes</h1>
                    </div>
                    <div className="options">
                        <button>hola</button>
                        <button>chau</button>
                    </div>
                </div>
            </div>
            <div className="row-2">
                <div className="info-section">
                    <div className="header">
                        <div className="title title-med">
                            <h2>buenas tardes</h2>
                        </div>
                    </div>
                    <div className="content">
                        <ul>
                            <li>elemento 1</li>
                            <li>elemento 2</li>
                            <li>elemento 3</li>
                            <li>elemento 4</li>
                            <li>elemento 5</li>
                        </ul>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image-border">
                        <img src="https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="row-3">
                <div className="info-section">
                    <div className="header">
                        <div className="title-md">
                            <h2>buenas tardes</h2>
                        </div>
                    </div>
                    <div className="content">
                        <ol>
                            <li>elemento 1</li>
                            <li>elemento 2</li>
                            <li>elemento 3</li>
                            <li>elemento 4</li>
                            <li>elemento 5</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    ); 
}


export default BaseDessertDisplayLayout;
//     return (
//         <div className="desserts-display">
//             <div className="desserts-display-grid-item-1">
//                 <div className="header-container">
//                     <div className="title-container">
//                         { titleElem }
//                     </div>
//                     <div className="options-container">
//                         <button onClick={() => onEdit()}>Editar</button>
//                         <button onClick={() => onClose()}>Cerrar</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="desserts-display-grid-item-2">
//                 {gridElem2}
//             </div>
//             <div className="desserts-display-grid-item-3 image-container">
//                 { imgElem }
//             </div>
//             <div className="desserts-display-grid-item-4">
//                 { gridElem4 }
//             </div>
//         </div>
//     );
// }

// export default BaseDessertDisplayLayout;