import { motion } from "motion/react";
import "./overlay-base.css";


function OverlayBase(props) {
    const newProps = {...props};
    delete newProps.children;
    delete newProps.className;
    
    return (
        <motion.div 
            className={`overlay-base ${props.className}`} 
            {...newProps}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            {props.children}
        </motion.div>
    )
}


export default OverlayBase;