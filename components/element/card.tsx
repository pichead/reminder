
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModalCard from './modalcard';
import ModalCardRemove from './modalcardremove';

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';

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

const Carditems = (props: any) => {
  const data = props.data
  console.log("data");
  return (
    <React.Fragment>

      <div className="d-flex align-items-start flex-column border rounded p-3 my-2 " style={{ maxHeight: 270,minHeight: 270  }}>
        <div className='w-100'>
          <div className=" text-truncate">
            {data.name}
          </div>
          <hr />
        </div>

        <Typography variant="body2" className='mb-auto' color="text.secondary " >
          {data.des.substring(0, 150)}{data.des.length > 150 ? "..." : ""}
        </Typography>
        <hr/>
        <div className="w-100 d-flex justify-content-between">
          <ModalCard data={data.des} />
          <ModalCardRemove data={data.id} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Carditems