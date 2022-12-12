import React, { useReducer } from "react";

export const Context = React.createContext()

const initialState = {
    list: [],
    hour: '',
    minute: '',
    total: '00:00'
}

const reduceFun = (state, action) => {
    if(action.type === 'UPDATE-INPUT-MINUTE'){
        return {...state, minute: +action.payload}
    }
    if(action.type === 'UPDATE-INPUT-HOUR'){
        return {...state, hour: +action.payload}
    }
    if(action.type === 'CLEAR-INPUTS'){
        return {...state, hour: '', minute: ''}
    }
    if(action.type === 'ADD-TO-LIST'){
        return {...state, list:[...state.list, `${state.hour}:${state.minute}`]}
    }
    if(action.type === 'CALCULATE-TOTAL-TIME'){
        const preparedList = state.list.map(item => {
            const splitItem = item.split(':')
            const hour = +splitItem[0]
            const minute = +splitItem[1]
            return {hour, minute}
        })

        const hourSum = preparedList.reduce((a, b) => a + b.hour, 0)
        const minuteSum = preparedList.reduce((a, b) => a + b.minute, 0)

        const realHour = hourSum + (Math.floor(minuteSum / 60))
        const realMinute = minuteSum % 60

        const preparedTotal = `${realHour}:${realMinute}`;
        return {...state, total: preparedTotal}
    }
    if(action.type === 'CLEAR-LIST'){
        return {...state, list: []}
    }

    return initialState
}

const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(reduceFun, initialState)

    const updateFormStates = (data) => {
        if(data.type === 'Minute'){
            dispatch({type: 'UPDATE-INPUT-MINUTE',payload: data.value})
        } else if(data.type === 'Hour'){
            dispatch({type: 'UPDATE-INPUT-HOUR',payload: data.value})
        }
    }

    const addItemToList = () => {
        if(state.minute.toString().trim() !== '' && state.hour.toString().trim() !== '' ){
           dispatch({type: 'ADD-TO-LIST'})
           dispatch({type: 'CLEAR-INPUTS'})
           dispatch({type: 'CALCULATE-TOTAL-TIME'})
        }else{
            alert('You have to add valid time!')
        }   
    }

    const clearList = () => {
        if(window.confirm('All data will be removed, Are you sure to continue?')){
           dispatch({type: 'CLEAR-LIST'})
           dispatch({type: 'CLEAR-INPUTS'})
           dispatch({type: 'CALCULATE-TOTAL-TIME'})
           alert('Reset Done!') 
        }
    }

    const store = {
        state,
        updateFormStates,
        addItemToList,
        clearList
    }

    return(<Context.Provider value={store}>{props.children}</Context.Provider>)
}

export default ContextProvider

