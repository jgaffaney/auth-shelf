import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl/FormControl';
import { TextField, Button } from '@mui/material';
import { useHistory } from 'react-router';
import './AddItemForm.css'
//FILESTACK import
//may need to 'npm install filestack-react --force' and apiKey
// import { PickerInline } from 'filestack-react';

function AddItemForm() {
    const user = useSelector(store => store.user);
    // declare hooks
    const dispatch = useDispatch();
    const history = useHistory();

    // declare a default item to keep things clean
    const defaultNewItem = {
        description: '',
        image_url: '',
    }

    // declare a local state to hold new Item inputs until dispatch
    const [newItem, setNewItem] = useState(defaultNewItem);

//create local state to trigger conditional rendering on filestack uploader
    // const [needUpload, setNeedUpload] = useState(true);

    const handleSubmit = () => {
        if (!newItem.description) {
            alert('A description must be provided');
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { newItem } });
            history.push(`/shelf/${user.id}`);
        }
    }

//function to handle when image has finished uploading.
//set the url of newItem to the URL that was given by the upload
//trigger the conditional rendering to show img uploaded and remove filestack from dom
    // const handleUploadFinished = (res) => {
    //     setNewItem({ ...newItem, image_url: (res.filesUploaded[0].url) });
    //     setNeedUpload(false);
    // }


    return (
        <div className="container">
            <h1>Add Item</h1>
            <FormControl onSubmit={handleSubmit}>
                <TextField
                    required={true}
                    label='Item'
                    id='newItem'
                    value={newItem.description}
                    onChange={(e) => { setNewItem({ ...newItem, description: (e.target.value) }) }} />
                <br />
                {/* CONDITIONAL RENDERING:
                    If no image is uploaded, show filestack uploader otherwise, remove filestack uploader and show the uploaded image on the dom */}
                {/* {needUpload
                    ? <div>
                        <h3>Upload an Image</h3>
                        <PickerInline
                            apikey='YourOwnAPIKey'
                            onSuccess={(res) => console.log(res)}
                            onUploadDone={(res) => handleUploadFinished(res)}
                        />
                    </div>
                    : <>
                        <h3>Uploaded Image</h3>
                        <img src={newItem.image_url} /> <br />
                        <button onClick={() => setNeedUpload(true)}>Change Image</button>
                    </>} */}
                <TextField
                    label='imageURL'
                    id='newURL'
                    value={newItem.image_url}
                    onChange={(e) => { setNewItem({ ...newItem, image_url: (e.target.value) }) }} />
                <br /><br />
                <Button variant="outlined" onClick={handleSubmit}>Add to Shelf</Button>
            </FormControl>
        </div>
    )
}

export default AddItemForm;