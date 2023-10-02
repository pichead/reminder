"use client"
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '90vh', // Adjust the maximum height as needed
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const ModalCard = (prop:any) => {
    const data = prop.data
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <React.Fragment>
          <button className='btn btn-sm bg-teal-900 hover:bg-emerald-600 text-white ' onClick={() => setOpen(true)}>
            View
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}  className="overflow-y-auto  bg-indigo-900 text-white col-10 col-md-6"           style={{
            fontSize: '18px',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word',
            wordBreak: 'break-all',
            // maxWidth: '200px',
          }}>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{data}</pre>
            </Box>
          </Modal>
        </React.Fragment>
      );
    
}

export default ModalCard