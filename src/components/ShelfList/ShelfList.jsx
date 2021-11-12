import { PinDropSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import ShelfItem from '../ShelfItem/ShelfItem'
import { useParams } from 'react-router-dom';

function ShelfList() {

  const shelf = useSelector((store) => store.shelf);
  const user = useSelector(store => store.user);
  const id = useParams();
  console.log('id in ShelfList: ', id);

  return (
    <div>
      {id.id === 'all' ? (shelf?.map((item) => {
          return <ShelfItem key={item.id} item={item} />}
      )) : (
          shelf.filter((myShelf) => myShelf.user_id == id.id)
                .map((item)=> (
                  <ShelfItem key={item.id} item={item} />
                ))
      )
      }
    </div>
  );
}

export default ShelfList;
