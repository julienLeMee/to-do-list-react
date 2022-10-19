import {useState} from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';



export default function Item(props) {

  const [checked, setChecked] = useState();

  const handleChange = (e) => {
    e.target.checked ? setChecked(true) : setChecked(false);
  };

  return (
    <li className="d-flex border justify-content-between align-items-center p-2 m-2">
      <div className='d-flex'>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
        <div className="p-3">
          <span className={checked ? 'text-decoration-line-through' : ''}>{props.text}</span>
        </div>
      </div>
      {/* <button className="btn btn-danger p-2 h-50" onClick={() => props.delFunc(props.id)}>Supprimer</button> */}
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => props.delFunc(props.id)}>Delete</Button>
    </li>
  )
}
