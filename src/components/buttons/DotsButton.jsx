import { motion, scale } from "motion/react";
import "./buttons-styles.css"

const draw = {
    visible: (i) => {
        const delay = i * 0.5
        return {
            scale: 1.5,
            transition: {
                pathLength: { delay, type: "spring", duration: .3, bounce: 0 },
                scale: { delay, duration: 0.5 },
            },
        }
    },
}



function DotsButton({onClick}) {
    return (
        <button className="button dots-button" onClick={onClick}>
            <motion.svg 
                height={20}
                width={10}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 40"
            >
                <motion.circle cx="5" cy="5" r="5" fill="white" variants={draw}/>
                <motion.circle cx="5" cy="20" r="5" fill="white" variants={draw}/>
                <motion.circle cx="5" cy="35" r="5" fill="white" variants={draw}/>
            </motion.svg>
        </button>
    );
}


export default DotsButton;