import { useSelector } from "react-redux";

function ShelfList() {
  const shelf = useSelector((store) => store.shelf);

  return (
    <div>
      {shelf?.map((item) => {
        // return <ShelfItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ShelfList;