import React from 'react'
import { EmpleadoRow } from './EmpleadoRow'

export const EmpleadoList = ({empleados}) => {
  return (
    <>
        <article className='d-flex justify-content-center'>
            <ul>
                <EmpleadoRow empleados={empleados}></EmpleadoRow>
            </ul>
        </article>
    </>
    
  )
}
