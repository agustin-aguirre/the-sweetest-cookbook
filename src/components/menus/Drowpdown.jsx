import { useRef, useState } from "react";
import { useOutsideClick } from "../../effects/effects";
import "./dropdown.css";


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useOutsideClick(menuRef, () => setIsOpen(false));

    return (
        <div ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
            {isOpen && <div className="menu">Opciones</div>}
        </div>
    );
}


export default Dropdown;