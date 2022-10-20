import { useState } from 'react'
import { EmpleadoList } from './components/EmpleadoList.jsx'
import { EmpleadoRow } from './components/EmpleadoRow.jsx'
import { empleados } from './empleados.js'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <section className='container my-5'>
        <h1 className='text-center my-5'>Lista de empleados</h1>
        <EmpleadoList empleados={empleados}></EmpleadoList>
      </section>
    </>
  )
}

export default App
