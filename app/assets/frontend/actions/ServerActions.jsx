import AppDispatcher from '../dispatcher'
import ActionType from '../constants'

export default {
    receivedTweets(rawTweets) {
        console.log(3, "ServerActions.receivedTweets");
        //AppDispatcher...
        AppDispatcher.dispatch({
            actionType: ActionType.RECEIVED_TWEETS,
            rawTweets
        })
    }
}