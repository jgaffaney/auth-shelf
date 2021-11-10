import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

function DeleteItemBttn({ item_id }) {
  const dispatch = useDispatch();
  return (
    <IconButton
      color="primary"
      onClick={() =>  (dispatch({ type: "DELETE_ITEM", payload: item_id }))}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteItemBttn;


// (e.preventDefault)