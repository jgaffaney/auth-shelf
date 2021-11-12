import Card from "@mui/material/Card";
import { useSelector } from "react-redux";
import { CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import DeleteItemBttn from "../DeleteItemBttn/DeleteItemBttn";
import EditItemBttn from "../EditItemBttn/EditItemBttn";

function ShelfItem({ item }) {
  const activeUser = useSelector((store) => store.user.id);

  return (
    <Card sx={{ maxWidth: 345, m: 1, p: 2 }}>
      <CardContent>
        <img src={item.image_url} alt={item.description} />
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {activeUser === item.user_id && <EditItemBttn item={item} />}
        {activeUser === item.user_id && <DeleteItemBttn item_id={item.id} />}
      </CardActions>
    </Card>
  );
}
export default ShelfItem;
