import { useState } from "react";;
import {motion} from "motion/react";
import "./buttons-styles.css";


const draw = {
    visible: (i) => {
        const delay = i * 0.5
        return {
            scale: 1.4,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.5 },
            },
        }
    },
}


function CloseButton({onClick}) {

    const [hovered, setHovered] = useState(false);

    return (
        <button 
            className="button close-button" 
            type="button" 
            onClick={onClick} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            <motion.svg viewBox="0 0 100 100" animate="visible" >
                <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    
                />
                <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                />
                {
                    hovered &&
                        <motion.circle 
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            variants={draw}
                        />
                }
            </motion.svg>
        </button>
    );
}


export default CloseButton;