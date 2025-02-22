import React from 'react'
import Search from './Search'
import Fetch from './Fetch'
import { Appointment } from './Appointment'

const App = () => {
  return (
    <div>
      <Search />
      <Fetch />
      <Appointment />
    </div>
  )
}

export default App