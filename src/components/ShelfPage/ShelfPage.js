import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddItemForm from '../AddItemForm/AddItemForm';
import ShelfList from '../ShelfList/ShelfList';
import { Button } from '@mui/material';
import {useHistory} from 'react-router-dom';

function ShelfPage() {

  // declare hook functions
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' })
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfList />
      <Button onClick={() => history.push('/addItem')}>Add Item</Button>
    </div>
  );
}

export default ShelfPage;
