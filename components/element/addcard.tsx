"use client"
import React, { EventHandler, ReactEventHandler, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import {addDocument} from "@/firebase/firestore"
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Addcard() {
    const [Name, setName] = useState<string>("")
    const [Des, setDes] = useState<string>("")
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const addData = await addDocument({name:Name,des:Des,createDate: Math.floor( Date.now() / 1000)})
        console.log(addData)
    }

    return (
        <React.Fragment>
            <button onClick={handleOpen} className='btn btn-sm btn-success'>Create</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Create New!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField
                                label="Name"
                                size="small"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <br />
                            <br />
                            <Textarea size="md" name="Size" placeholder='Text here..' maxRows={5} minRows={5}
                                value={Des}
                                onChange={(e) => setDes(e.target.value)} />
                        </Typography>
                        <br />
                        <div className='d-flex justify-end'>
                            <button className='btn bg-green-700 hover:bg-teal-400 text-white btn-sm' type='submit'>Add</button>
                        </div>
                    </form>

                </Box>
            </Modal>
        </React.Fragment>
    )
}

export default Addcard