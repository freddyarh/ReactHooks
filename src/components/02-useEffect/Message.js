import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCords] = useState({
        x : 0,
        y : 0
    });

    const { x, y } = cords;

    const mouseMove = (e) => {
        const cords = { x: e.x, y: e.y };
        setCords( cords );
    }

    useEffect(() => {
        
        window.addEventListener('mousemove', mouseMove );

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            // console.log('Componenete desmontado');
        }
    }, []);

    return (
        <div>
            <h3>Eres genial</h3>      
            <p>
                x: { x } y: { y }
            </p>      
        </div>
    )
}
