
import Balance from './components/Balance';
import './App.css';
import { Typography,styled,Box } from '@mui/material';
import ExpenseCard from './components/ExpenseCard';
const Header = styled(Typography)`
margin:10px 0;
font-size:36px;
text-align:center;
color:blue;
text-transform:uppercase;
`

function App() {
  return (
    <Box className="App">
    <Header>Expense Tracker</Header>
     <Box>
      <Box>
        <Balance/>
        <ExpenseCard/>
      </Box>
      <Box>
      
      </Box>
     </Box>
    </Box>
  );
}

export default App;
