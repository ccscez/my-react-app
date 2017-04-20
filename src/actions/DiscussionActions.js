import alt from '../alt'

class DiscussionActions {
    constructor() {
        this.generateActions('addComment')
    }
}

export default alt.createActions(DiscussionActions)
