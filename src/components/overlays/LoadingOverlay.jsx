import OverlayBackground from "./OverlayBackground";


function LoadingOverlay() {
    return <OverlayBackground>
        <h1 style={{color: "white"}}>Cargando...</h1>
    </OverlayBackground>
}


export default LoadingOverlay;