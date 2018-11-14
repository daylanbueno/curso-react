import React from 'react';
import { connect } from 'react-redux'; //FAZER INTEGRAÇÃO

 class Field extends React.Component {

    render() {
        return (
            <div> 
                <label>{this.props.value}</label> <br/>
                <input onChange={this.alterar} value={this.props.value}/>
            </div>
        )
    }
}


function mapStateToPros(state) {
    return {
        value : state.field.value
    }
}

export default connect(mapStateToPros)(Field);