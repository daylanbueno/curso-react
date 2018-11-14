import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'; 
import { Provider } from 'react-redux';
import fieldReducer  from './FieldReducer'

import Field   from './Field';

const reducers  = combineReducers({ // prepara dados para repositóry.
    field: fieldReducer// retonanod uma função.
})

ReactDOM.render(
    <Provider store={createStore(reducers) }>
        <Field initialValue='Teste'/>
    </Provider>    
,document.getElementById('app'))        