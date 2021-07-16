import React from 'react'
import { useFetch } from '../02-useEffect/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Quotes</h1>
            <hr />

            {
                loading ?
                (
                    <div className="alert alert-info  text-center">
                        loading 
                    </div>                    

                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <br />
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>

                )
            }

            <button className="btn btn-primary mb-3" onClick = { increment }>Siguiente quote</button>

        </div>
    )
}
