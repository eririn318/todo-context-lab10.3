
import TodoList from './component/TodoList'
import TodoInput from './component/TodoInput'
import FilterButton from './component/FilterButtons'
import ThemeToggleButton from './component/ThemeToggleButton'
import {ThemeContext} from './context/ThemeContext'
import { useContext } from 'react'

import './App.css'

function App() {

  const context =useContext(ThemeContext)

  if (!context) return null

  // Get only theme('light' | 'dark') from ThemeContext
  const {theme} =  context

  return (
    <div 
      style={{
        height: "1000px",
        paddingTop: "100px",
        backgroundColor: theme === 'light' ? '#819A91' : '#2D4F2B',     
        color: theme === 'light' ? 'black' :  'white' }}
    >
    <h1>Todos Context</h1>
     <ThemeToggleButton />
      <TodoInput />
      <FilterButton />
      <TodoList />
    </div>
  )
}

export default App
