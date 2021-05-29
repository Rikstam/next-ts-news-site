import { AnyAction } from "redux"
import { HYDRATE } from "next-redux-wrapper"
import { Comment } from "../shared/types"
import { HydrateAction } from "./hydrate"

export const UPDATE_COMMENTS_ACTION = "UPDATE_COMMENTS"

// interface because we need to extend the AnyAction and interfaces are better at extension than types.
// They are also better at merging fields than types and extending an interface is faster than using a union. 
export interface UpdateCommentsAction extends AnyAction {
    type: typeof UPDATE_COMMENTS_ACTION
    comments: Comment[]
}

export type CommentsState = Comment[]

type CommentsAction = HydrateAction | UpdateCommentsAction

export const comments = (state: CommentsState = [], action: CommentsAction
) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload?.comments ?? []
        case UPDATE_COMMENTS_ACTION: return action.comments
        default: return state
    }
}