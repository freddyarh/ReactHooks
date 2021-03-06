import React, { useReducer, useEffect } from 'react'

import { TodoList } from './TodoList';

import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    const [ { descripcion }, handleInputChange, reset ] = useForm({ 
        descripcion: ''
    });
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    // console.log(descripcion);
    const handleDelete = (todoId) => {
        // console.log(todoId);

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch( action );
        // console.log(dispatch);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Nueva tarea'); 
        if( descripcion.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />
            <div className="row">

                <div className="col-7">
                    
                    <TodoList todos={ todos } handleDelete={ handleDelete } handleToggle={ handleToggle } />

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"    
                            value={ descripcion }
                            onChange={ handleInputChange }
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block">
                            Agregar
                        </button>
                    </form>
                </div>

            </div>

        </div>
    )
}
