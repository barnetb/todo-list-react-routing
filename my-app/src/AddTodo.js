import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
                      content: '',
                      completed: false,
                  }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleChange(event){
        this.setState({content: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: '',
        })
    }

    render() {
        return (
            <div className="input_form">
                <div className="input-group mb-3 w-25 mx-auto">
                {/* <div className="input-group mb-3 center-block"> */}
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            {/* <label>Add new item:  </label> */}
                            <input type="text" onChange={this.handleChange} value={this.state.content} 
                                className="form-control" placeholder="Enter new todo..." 
                                aria-label="Recipient's username" aria-describedby="button-addon2"
                            />
                            <div className="input-group-append">
                                {/* <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button> */}
                                <input className="btn btn-outline-secondary" type="submit" id="button-addon2" value="Add"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

// export default AddTodo

