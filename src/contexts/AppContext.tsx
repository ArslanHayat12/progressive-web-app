import { createContext, Dispatch, useContext, useReducer } from 'react'
import { appReducer } from '../reducers/AppReducer'
import { Action, AppContextState } from '../types'

interface AppContextType {
    state: AppContextState
    dispatch: Dispatch<Action>
}

const initialState = {
    state: {
        isHomeScreen: true
    },
    dispatch: () => undefined
}

const AppContext = createContext<AppContextType>(initialState)

interface AppContextProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const AppProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState.state)

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
