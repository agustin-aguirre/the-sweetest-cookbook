import { useState } from "react";


function CopyToClipboardButton({content}) { 

    const [copiado, setCopiado] = useState(false);

    const copiarAlPortapapeles = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopiado(true);

            // Restablecer el mensaje después de 2 segundos
            setTimeout(() => setCopiado(false), 2000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    return (
        <div>
            <button onClick={copiarAlPortapapeles}>
                {copiado ? '📝' : '✅'}
            </button>
        </div>
  );
}


export default CopyToClipboardButton;