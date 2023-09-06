import Balance from "./components/Balance";
import "./App.css";
import { Typography, styled, Box } from "@mui/material";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransactions";
import Transactions from "./components/Transactions";
import { useState } from "react";
const Header = styled(Typography)`

  font-size: 36px;
  text-align: center;
  color: blue;
  text-transform: uppercase;
`;

const Component = styled(Box)`
display:flex;
background:#fff;
padding:20px;
border-radius:20px;
width:800px;
margin:auto;
& > div{
  height:70vh;
  width:50%;
  padding:10px;
}
`

function App() {
  const [transactions, setTransactions] = useState([]);
  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransactions setTransactions={setTransactions}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;
