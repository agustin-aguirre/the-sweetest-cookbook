function SquaredButton({title, onClick}) {
    const style = {
        aspectRatio: "1 / 1", 
        height: "80px", 
        fontSize: "large",
        cursor: "pointer",
    };

    return (
        <button style={style} onClick={(e) => onClick()}>
            {title}
        </button>
    );
}


export default SquaredButton;