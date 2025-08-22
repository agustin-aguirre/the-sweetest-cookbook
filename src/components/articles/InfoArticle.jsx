import React from "react";
import "./sections.css";


function InfoArticle(props) {
    const childrenArray = React.Children.toArray(props.children);
    
    const splitIndex = childrenArray.findIndex(
        child => React.isValidElement(child) && child.type === InfoArticle.Split
    );

    const [headingChilds, contentChilds] = 
        splitIndex === -1
            ? [childrenArray, []]
            : [childrenArray.slice(0, splitIndex), childrenArray.slice(splitIndex + 1)];

    const newProps = {...props};
    delete newProps.children;
    delete newProps.className;
            
    return (
        <div className={"info-section " + (props.className || "")} {...newProps}>
            <div className="heading">
                {headingChilds}
            </div>
            <div className="content">
                {contentChilds}
            </div>
        </div>
    )
}

InfoArticle.Split = () => null;


export default InfoArticle;