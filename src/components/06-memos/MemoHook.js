import React, { useState, useMemo } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter';

// import { Small } from './Small';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    
    const { counter, increment } = useCounter( 1000 );
    const [ show, setShow ] = useState( true );

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            {/* <p> { procesoPesado( counter ) } </p> */}
            <p> { memoProcesoPesado } </p>

            <button 
                className="btn btn-primary mr-3"
                onClick={ increment }>
                +1
            </button>
            
            <button 
                className="btn btn-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
                >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
