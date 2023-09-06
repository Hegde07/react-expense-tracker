import { Box, Button, TextField, Typography,styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
display:flex;
flex-direction:column;
& > h5, & > div, & > button {
    margin-top:30px;
}
`

const NewTransactions = () => {
  return (
   <Container>
    <Typography variant='h5'>New Transaction</Typography>
    <TextField label="Enter Expense"/>
    <TextField label="Enter Amount" />
    <Button variant='contained'>Add Transaction</Button>
   </Container>
  )
}

export default NewTransactions