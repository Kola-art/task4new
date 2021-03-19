import React from 'react';
import { connect } from 'react-redux';
import { TextNew } from './actions';

class TextInput extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            localTitle: ''
        };
    }

    changeLocalText = (e) => {
        this.setState({ localTitle: e.target.value });
    }

    onClickChangeText = (e) =>  {
        this.props.onChangeText(this.state.localTitle);
    }

    render(){
        return(
            <div>
                <p>Privet From Redux,{this.props.title}!</p>
                <div>
                    <input type="text" placeholder="enter text" onChange={this.changeLocalText}></input>
                </div>
                    <button onClick={this.onClickChangeText}>Change text</button>
            </div>
        )
    }
};

const mapStateToProps = state =>{
    return {
        title: state.title
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onChangeText: title=>{
            dispatch(TextNew(title))
        }
    }
}

export const Enteredtext = connect(mapStateToProps, mapDispatchToProps)(TextInput); 