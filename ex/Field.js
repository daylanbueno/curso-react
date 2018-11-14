import React from 'react';
import { connect } from 'react-redux'; //FAZER INTEGRAÇÃO
import { bindActionCreators } from 'redux'; // para ligar as ações com dispa...
import  { changeValue } from './fieldAction';

 class Field extends React.Component {

    render() {
        return (
            <div> 
                <label>{this.props.value}</label> <br/>
                <input onChange={this.props.changeValue} value={this.props.value}/>
            </div>
        )
    }
}

function mapStateToPros(state) { // Nome da função é sujestão
    return {
        value : state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch); //dispatch é o cara de dispara as ações.
}
export default connect(mapStateToPros,mapDispatchToProps)(Field);