 
  import { InputBase } from '@mui/material';
import { styled } from '@mui/system';
 

 export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: '10px 12px',
  border: '1px solid #ccc',
  margin:5,
  borderRadius: 30,
  fontSize: '20px',
  width: '60%',
  backgroundColor:theme.palette.background.paper,
  '&:focus': {
    borderColor: '#1976d2',
    boxShadow: '0 0 5px rgba(25, 118, 210, 0.5)',
  },
}));

 
 