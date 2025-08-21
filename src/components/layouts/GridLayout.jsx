import "./layouts.css";


function GridLayout({children}) {
    return (
        <div className="grid-layout">
            {children}
        </div>
    )
}


export default GridLayout;