import alt from '../alt'
import DiscussionActions from '../actions/DiscussionActions'

class DiscussionStore {
    constructor() {
        this.nextCommentId = 0
        this.comments = []

        // this.bindListeners({
        //     addComment: DiscussionActions.ADD_COMMENT
        // });
        this.bindActions(DiscussionActions) // This is a magic method which takes in an object of action symbols and binds them to their specially named handlers which are defined in the StoreModel
    }

    addComment(comment){
        this.comments.push({ id: this.nextCommentId++, comment: comment });
    }
}

export default alt.createStore(DiscussionStore, 'DiscussionStore');
