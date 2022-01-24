import { PinDropSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import ShelfItem from '../ShelfItem/ShelfItem'
import { useParams } from 'react-router-dom';
import './ShelfList.css'

function ShelfList() {

  const shelf = useSelector((store) => store.shelf);
  const user = useSelector(store => store.user);
  const id = useParams();
  console.log('id in ShelfList: ', id);

  return (
    <div className="listGrid">
      {id.id === 'all' ? (shelf?.map((item) => {
          return <ShelfItem key={item.id} item={item} />}
      )) : (
        // filter out any item that does not match the current users user_id
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
