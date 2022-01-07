import { createContext } from "react"

export const DataContext = createContext({
  user: {
    username: '',
    gmail: ''
  },
  theme: ''
})
