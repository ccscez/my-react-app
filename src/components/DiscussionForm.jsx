import React, { Component } from 'react';

export default class DiscussionForm  extends Component {

    constructor(props){
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            "message": ""
        };
    }
    onTextChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        // this.props.handleSubmit(this.state.message);
        this.props.addComment(this.state.message)

        this.setState({
            message: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.onTextChange}>
                <input type="text" placeholder="Enter message here..." value={this.state.message} />
                <button type="submit">Comment</button>
            </form>
        )
    }
}
