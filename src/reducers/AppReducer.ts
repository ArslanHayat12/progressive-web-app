import { SET_DATA, SET_IS_HOME_SCREEN } from '../constants'
import { Action, AppContextState } from '../types'

export const appReducer = (state: AppContextState, action: Action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, ...action.payload }

        case SET_IS_HOME_SCREEN:
            return { ...state, isHomeScreen: action.payload }

        default:
            return { ...state }
    }
}
