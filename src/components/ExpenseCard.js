import React from 'react'
import { Box, Card, CardContent, Typography,styled } from '@mui/material'


const ExpenseCardText = styled(Typography)`
text-align:center;
`
const Container = styled(Box)`
display:flex;
& > div{
    flex:1;
    padding:10px;
}
`
const ExpenseCard = ({transactions}) => {
    const amount = transactions.map(transaction=>transaction.amount)
    const Income = amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2)
    const Expense = (amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)* -1).toFixed(2)
  return (
   <Container>
    <Card>
        <CardContent>
            <Typography>Income</Typography>
            <Typography style={{color:"green"}}>₹{Income}</Typography>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <Typography>Expense</Typography>
            <Typography style={{color:"red"}}>₹{Expense}</Typography>
        </CardContent>
    </Card>
   </Container>
  )
}

export default ExpenseCard