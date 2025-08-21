import "./overlay-background.css";


function OverlayBackground({colorStyles, children}) {
    return (
        <div className="overlay" style={colorStyles ?? {}}>
            {children}
        </div>
    )
}


export default OverlayBackground;