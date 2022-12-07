// import React from 'react';
import { Alert, Snackbar } from '@mui/material';

export default function Notification(props: any) {
  // console.log('NOTIFICATION', props);
  return (
    <Snackbar
      open={props.value}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={props.handleNotify}>
      <Alert severity="success">{props.message}</Alert>
    </Snackbar>
  );
}
