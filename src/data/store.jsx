import { configureStore } from '@reduxjs/toolkit'
import notifySlice from '../data/notify'

export default configureStore({
  reducer: {
    notify: notifySlice
  }
})