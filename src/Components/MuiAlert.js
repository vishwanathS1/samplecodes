import {Stack,Alert} from '@mui/material';

const MuiAlert = () => {
  return (
   <Stack spacing={2}>
    <Alert severity='error'>This is an error alert</Alert>
    <Alert severity='warning'>This is an warning alert</Alert>
    <Alert severity='info'>This is an info alert</Alert>
    <Alert severity='success'>This is an success alert</Alert>
   </Stack>
  )
}

export default MuiAlert
