import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // useEffect( () => {
    //     console.log('hey')
    // });

    useEffect( () => {
        // console.log('hey')
    }, []);

    useEffect( () => {
        // console.log('form data')
    }, [formState]);

    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [ target.name ] : target.value
        });
        // console.log([ target.name ]);
        // console.log([ target.value ]);
    }

    return (
        <>
            <h1>useEffrect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <br />
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="fredy@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message /> }
        </>
    )
}
