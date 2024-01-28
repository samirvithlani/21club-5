
import { Button } from '@mui/material'
import React from 'react'

export const MyButton = (props) => {
  return (
    <Button color='error' variant={props.variant} sx ={props.sx}>{props.name}</Button>
  )
}
