import { Button, Typography } from '@mineral/core';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
} from '@mui/material';
// import CancelIcon from '@mui/icons-material/Cancel';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
// import { useState } from 'react';
import '../../../../src/index.css';
import React from 'react';

export default function Popup(props: any) {
  //   console.log('POPUP PROPS', props);

  const [show, setShow] = React.useState(false);
  const [valueOption, setvalueOption] = React.useState<any>('');

  const showButton = (e: any) => {
    setvalueOption(e.target.value.replace(/[^A-Za-z\-\\]/gi, ''));

    const option = e.target.value;
    if (option == 'DELETE') {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const HideButton = () => {
    setvalueOption('');
    setShow(false);
    props.deleteValue(false);
  };

  const DeleteValue = () => {
    setvalueOption('');
    setShow(false);
    props.deleteValue(true, props.data);
  };

  return (
    <Dialog open={props.value}>
      <DialogTitle>
        <div>
          <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center' }}>
            <ContactSupportIcon
              style={{ color: '#cc0924' }}
              sx={{ width: '4em', height: '4em' }}
            />
          </Typography>
          {/* <Button
            sx={{
              color: '#cc0924',
              '&:hover': { backgroundColor: '#fff' },
              alignItems: 'start',
            }}
            name="closeIcon"
            className="closeBtn"
            // onClick={() => props.closePopup(false)}>
            onClick={(e) => HideButton()}>
            <CancelIcon onClick={() => props.closePopup(false)} />
          </Button> */}
        </div>
      </DialogTitle>
      <DialogContent>
        <div>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Are you Sure? Do you want to delete this item?
          </Typography>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            You can't restore it.
          </Typography>
        </div>
        <Grid sx={{ mt: '5px' }} className="confirmationField">
          <small style={{ display: 'block', marginTop: '20px' }}>
            <b>Note:</b> Enter <b>"DELETE"</b> to Confirm
          </small>
          <TextField
            name="deleteConfirmation"
            sx={{ width: '250px', marginTop: '10px' }}
            inputProps={{
              maxLength: 6,
            }}
            value={valueOption}
            onChange={(e) => showButton(e)}
          />
        </Grid>
      </DialogContent>
      {/* {show == true ? ( */}
      <DialogActions sx={{ justifyContent: 'center' }}>
        {show == true ? (
          <Button
            sx={{
              backgroundColor: '#cc0924',
              '&:hover': { backgroundColor: '#cc0924' },
              borderRadius: '10px',
              width: '6em',
              height: '3em',
            }}
            name="deleteValue"
            // onClick={() => props.deleteValue(true, props.data)}>
            onClick={DeleteValue}>
            Delete
          </Button>
        ) : (
          ''
        )}
        <Button
          sx={{
            backgroundColor: '#0bc461',
            '&:hover': { backgroundColor: '#0bc461' },
            borderRadius: '10px',
            width: '6em',
            height: '3em',
          }}
          name="cancel"
          // onClick={() => props.deleteValue(false)}>
          onClick={HideButton}>
          Cancel
        </Button>
      </DialogActions>
      {/* ) : (
        ''
      )} */}
    </Dialog>
  );
}
