import React from "react";
import "./layouts.css";


function TwoColumnLayout({children}) {

    const childrenArray = React.Children.toArray(children);

    const splitIndex = childrenArray.findIndex(
        child => React.isValidElement(child) && child.type === TwoColumnLayout.Split
    );

    const [column1, column2] = 
        splitIndex === -1
            ? [childrenArray, []]
            : [childrenArray.slice(0, splitIndex), childrenArray.slice(splitIndex + 1)];

    return (
        <div className="two-column-layout">
            <div className="col-l">
                {column1}
            </div>
            <div className="col-r">
                {column2}
            </div>
        </div>
    )
}

TwoColumnLayout.Split = () => null;


export default TwoColumnLayout;