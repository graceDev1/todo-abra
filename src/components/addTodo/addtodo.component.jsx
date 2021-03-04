import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);

    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        console.log(this.state.title);
        return (
            <form 
            onSubmit={this.onSubmit}
            style={{
                alignItems:'center',
                marginLeft: '30%',
                marginRight:'30%'

            }}>
                <div style={{
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <input 
                    style={textStyle} placeholder='add todo ...' 
                    type="text" 
                    name="title"
                    value={this.state.value}
                    onChange = {this.onChange}
                    />
                    <input style={btnSubmit} type="submit" value="Add"/>
                </div>
                
            </form>
        )
    }
}

let textStyle = {
    padding: '10px',
    outLine: 'none',
    borderRaduis: '10%',

}


let btnSubmit = {
    padding: '10px',
    background: '#333',
    color: '#fff',
    border: 'none',
    margin: '5px'
}

export default AddTodo
