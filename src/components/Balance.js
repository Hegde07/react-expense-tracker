
import React from 'react'
import { Box,Typography,styled } from '@mui/material'
const BalanceText = styled(Typography)`
text-align:center;
`

const Balance = () => {
  return (
    <Box>
    <BalanceText>Balance:100</BalanceText>
    </Box>
  )
}

export default Balance