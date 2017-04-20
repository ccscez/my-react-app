import React, { Component } from 'react'
import AltContainer from 'alt-container'
import DiscussionActions from '../actions/DiscussionActions'
import DiscussionStore from '../stores/DiscussionStore'
import DiscussionForm from './DiscussionForm'
import DiscussionList from './DiscussionList'

export default class DiscussionApp extends Component {
    constructor(props){
        super(props);

        // this.handleAddComment = this.handleAddComment.bind(this);

        // this.state = {
        //     allMessages: []
        // };
    }
    // handleAddComment(message) {

    //     var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

    //     var newMessage = {
    //         'ID': id,
    //         'title': message
    //     };

    //     var currentMessages = this.state.allMessages;
    //     currentMessages.push(newMessage);

    //     this.setState({
    //         allMessages: currentMessages
    //     });
    // }

    render() {
        return (
            <div>
                <h1>Test altjs using AltContainer</h1>
                <AltContainer store={DiscussionStore} actions={DiscussionActions}>
                        <DiscussionForm/>
                        <DiscussionList/>
                </AltContainer>
            </div>
        )
    }
}
