import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddItemForm from '../AddItemForm/addItemForm';
import ShelfList from '../ShelfList/ShelfList';

function ShelfPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' })
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfList />
      <AddItemForm />
    </div>
  );
}

export default ShelfPage;
