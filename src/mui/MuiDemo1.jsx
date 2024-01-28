import { Button } from '@mui/material'
import React from 'react'
import { MyButton } from './MyButton'

export const MuiDemo1 = () => {
  return (
    <div>
        <Button variant='contained' color ="error" sx={{color:"pink" ,borderRadius:10}}>CLICK.</Button>
        <MyButton name="send" variant="contained" ></MyButton>
    </div>

  )
}
