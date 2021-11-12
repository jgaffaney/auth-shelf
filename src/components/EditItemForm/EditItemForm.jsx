import {useDispatch,useSelector} from 'react-redux';
import {useState} from 'react';
import FormControl from '@mui/material/FormControl/FormControl';
import { TextField, Button } from '@mui/material';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';


function EditItemForm () {

    // declare hooks
    const dispatch = useDispatch();
    const history = useHistory();
    let itemId = useParams()
   

    // call the store for the item

    const item = useSelector(store => store.editItem)

  
    // declare a local state to hold edit Item inputs until dispatch
    const [editItem, setEditItem] = useState(item)
    
    const handleSubmit = () => {
        if(!editItem.description) {
            alert('A description must be provided')
        } else {
            dispatch({type: 'EDIT_ITEM', payload: {editItem, history}})
        }
    }


    return (
        <div>
             <h1>EDIT Item</h1>
             <img src={item.image_url} />
            <FormControl onSubmit={handleSubmit}>
                <TextField
                required = {true}
                label='Item' 
                id='editItem' 
                defaultValue={item.description} 
                onChange={(e)=>{setEditItem({...editItem, description: (e.target.value)})}}/>
                <br />
                <TextField 
                label='imageURL' 
                id='newURL' 
                defaultValue={item.image_url} 
                onChange={(e)=>{setEditItem({...editItem, image_url: (e.target.value)})}}/>
                <br /><br />
                <Button variant="outlined" onClick={handleSubmit}>Add to Shelf</Button>
            </FormControl>
        </div>
    );
};

export default EditItemForm;

