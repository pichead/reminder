
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
import { Diversity1 } from '@mui/icons-material';
import ModalCardEdit from './modalcardedit';

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

      <div className="d-flex align-items-start flex-column border rounded p-3 my-2 bg-indigo-900 text-white" style={{ maxHeight: 270, minHeight: 270 }}>
        <div className='w-100'>
          <div className=" text-truncate">
            {data.name}
          </div>
          <hr />
        </div>

        <div
          className='mb-auto'
          style={{
            fontSize: '12px',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word',
            wordBreak: 'break-all',
          }}
        >
          {data.des.substring(0, 100)}{data.des.length > 100 ? '...' : ''}
        </div>

        <hr />
        <div className="w-100 d-flex justify-content-between">
          <ModalCard data={data.des} />
          <ModalCardEdit data={data}/>
          <ModalCardRemove data={data.id} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Carditems