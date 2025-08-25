import "./overlay-base.css";


function OverlayBase(props) {
    const newProps = {...props};
    delete newProps.children;
    delete newProps.className;
    
    return (
        <div className={`overlay-base ${props.className}`} {...newProps}>
            {props.children}
        </div>
    )
}


export default OverlayBase;