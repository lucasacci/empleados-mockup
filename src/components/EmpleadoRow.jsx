import React from 'react'
import { EmpleadoAvatar } from './EmpleadoAvatar';

export const EmpleadoRow = ({empleados}) => {

  

  return (
    <>
    {
        empleados.map((x,i) => {
            return(
                <li key={i}>
                   <div className='d-flex my-3 border justify-content-between'>
                    <EmpleadoAvatar imagen={x.pic}/>
                    <h4 className='text-dark ms-3'>{x.fullName}</h4>
                    <p className='mx-4'>{x.title}</p>
                    <span className="badge text-bg-info me-3">{x.department}</span>
                    </div> 
                </li>
            );
        })
    }
    </>
  )
}
