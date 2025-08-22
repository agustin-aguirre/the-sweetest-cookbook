import "./overlay-background.css";


function OverlayBackground(props) {
    const newProps = {...props};
    delete newProps.children;
    delete newProps.className;
    
    return (
        <div className={`overlay ${props.className}`} {...newProps}>
            {props.children}
        </div>
    )
}


export default OverlayBackground;