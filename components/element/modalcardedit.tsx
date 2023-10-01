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
import { updateData } from "@/firebase/firestore"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '40vh', // Adjust the width as needed
  maxHeight: '90vh', // Adjust the maximum height as needed
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ModalCardEdit = (prop: any) => {
  const data = prop.data
  const [name, setName] = useState(data.name)
  const [des, setDes] = useState(data.des)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEdit = async () => {
    const edit: any = await updateData(data.id, { name: name, des: des })

    if (edit) {
      location.reload();
    }

  }

  return (
    <React.Fragment>
      <button className='btn-sm bg-blue-950 hover:bg-sky-900  text-cyan-50 rounded border-none' type='button' onClick={() => setOpen(true)}>
        edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-y-auto">
          <TextField
            label="Name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <Textarea size="md" name="Size" placeholder='Text here..' maxRows={5} minRows={5}
            value={des}
            onChange={(e) => setDes(e.target.value)} />
          <div className='d-flex justify-between mt-3'>
            <button className='btn btn-sm btn-danger mx-2' onClick={handleEdit} type='button'>Save</button>
            <button className='btn btn-sm btn-secondary  mx-2' onClick={handleClose} type='button'>Cancel</button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );

}

export default ModalCardEdit