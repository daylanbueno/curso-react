import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Field   from './Field';

const reducers  = combineReducers({ // prepara dados para repositóry.
    field: () => ({value: 'Opa3'})
})

ReactDOM.render(
    <Provider store={createStore(reducers) }>
        <Field initialValue='Teste'/>
    </Provider>    
,document.getElementById('app'))        