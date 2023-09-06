
import Balance from './components/Balance';
import './App.css';
import { Typography,styled,Box } from '@mui/material';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import { useState } from 'react';
const Header = styled(Typography)`
margin:10px 0;
font-size:36px;
text-align:center;
color:blue;
text-transform:uppercase;
`

function App() {
  const [transactions,setTransactions]=useState([
    {id : 1,text:"Momos",amount: -20},
    {id : 2,text:"salary",amount: +3000},
    {id : 3,text:"Books",amount: -100},
    {id : 4,text:"Bonus",amount: +1500},
  ])
  return (
    <Box className="App">
    <Header>Expense Tracker</Header>
     <Box>
      <Box>
        <Balance/>
        <ExpenseCard/>
        <NewTransactions/>
      </Box>
      <Box>
       <Transactions transactions={transactions}/>
      </Box>
     </Box>
    </Box>
  );
}

export default App;
