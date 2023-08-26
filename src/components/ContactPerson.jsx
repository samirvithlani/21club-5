import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/context';

export const ContactPerson = () => {
    var id = useParams().id
    const {amount} = useContext(AppContext);
  return (
    <div>
        person   
        {amount}
    </div>
  )
}
