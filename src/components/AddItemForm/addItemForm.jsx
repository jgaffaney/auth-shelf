import {useDispatch} from 'react-redux';
import {useState} from 'react';
import FormControl from '@mui/material/FormControl/FormControl';
import { TextField, Button } from '@mui/material';

function AddItemForm() {

    // declare hooks
    const dispatch = useDispatch();

    // declare a default item to keep things clean
    const defaultNewItem = {
        description: '',
        image_url: '',
    }

    // declare a local state to hold new Item inputs until dispatch
    const [newItem, setNewItem] = useState(defaultNewItem)

    const handleSubmit = () => {
        dispatch({type: 'ADD_ITEM', payload: newItem})
    }

    return(
        <div>
            <h1>Add Item</h1>
            <FormControl onSubmit={handleSubmit}>
                <TextField
                required
                label='Item' 
                id='newItem' 
                value={newItem.description} 
                onChange={(e)=>{setNewItem({...newItem, description: (e.target.value)})}}/>
                <br />
                <TextField 
                label='imageURL' 
                id='newURL' 
                value={newItem.image_url} 
                onChange={(e)=>{setNewItem({...newItem, image_url: (e.target.value)})}}/>
                <br /><br />
                <Button variant="outlined" onClick={handleSubmit}>Add to Shelf</Button>
            </FormControl>
        </div>
    )
}

export default AddItemForm;