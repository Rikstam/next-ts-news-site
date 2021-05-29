import { AnyAction } from "redux"
import { HYDRATE } from "next-redux-wrapper"

// hydrate action must be used in order to properly reconcile the hydrated state on top of the existing state.
export interface HydrateAction extends AnyAction {
    type: typeof HYDRATE
}