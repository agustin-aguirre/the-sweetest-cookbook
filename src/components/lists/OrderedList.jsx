import "./list-styles.css";


function OrderedList({children}) {
    return (
        <div className="content-box">
            <ol className="list ordered">
                {children && children.map((child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ol>
        </div>
    );
}


export default OrderedList;