import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function EditItemBttn({ item }) {
  const history = useHistory();
  // const dispatch = useDispatch();
  return (
    <IconButton
      color="primary"
      // onClick={() =>  (dispatch({ type: "EDIT_ITEM", payload: item }))}
      onClick={() =>  (history.push('/edit'))}
    >
      <CreateIcon />
    </IconButton>
  );
}

export default EditItemBttn;


// (e.preventDefault)