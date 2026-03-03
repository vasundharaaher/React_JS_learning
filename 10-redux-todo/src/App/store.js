import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../Features/Todo/toslise'

export const store = configureStore({
    reducer: todoReducer
})