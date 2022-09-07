import React, { useState } from 'react'
import './App.css'
import EmployeeList from './components/EmployeeList'
import Form from './components/Form'
import Header from './components/header'

function App() {

  const [para, setPara] = useState('not updated para')

  return (
    <div className="App">
      <Header title={'React App'} description={'My description'} onClick={setPara}/>
      <p>{para}</p>
      <EmployeeList />
      <Form />
    </div>
  )
}

export default App
