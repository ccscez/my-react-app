import React, { Component } from 'react';

class DiscussionComment extends Component {
    render() {
        var data = this.props.data;
        return (
            <li>{data.comment}</li>
        )
    }
}

export default class DiscussionList  extends Component {

    render() {
        var discussionComments = this.props.comments.map((data, index) => {
            return (
                <DiscussionComment key={data.id} data={data} />
            );
        });
        return (
            <ul>
                {discussionComments}
            </ul>
        )
    }
}
