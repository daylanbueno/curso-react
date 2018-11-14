import React from 'react';
import { connect } from 'react-redux'; //FAZER INTEGRAÇÃO

export default class Field extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { value:'' };
    }

    alterar(e) {
        console.log(e.target.value);
       this.setState({ value: e.target.value })
       
    }
    render() {
        return (
            <div> 
                <label>{this.state.value}</label> <br/>
                <input onChange={this.alterar.bind(this)} value={this.state.value}/>
            </div>
        )
    }
}
