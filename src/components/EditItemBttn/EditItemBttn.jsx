import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function EditItemBttn({item}) {
  const user = useSelector(store => store.user)
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({type: 'SET_EDIT_ITEM', payload: item})
    history.push(`/editItem/${item.id}`)
  }
  

  return (
    <IconButton
      color="primary"
       
      onClick={() =>  handleClick()}
    >
      <CreateIcon />
    </IconButton>
  );
}

export default EditItemBttn;

