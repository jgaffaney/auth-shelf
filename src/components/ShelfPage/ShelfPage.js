import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddItemForm from '../AddItemForm/AddItemForm';
import ShelfList from '../ShelfList/ShelfList';
import { Button } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';

function ShelfPage() {

  // declare hook functions
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const id = useParams();
  console.log('id in ShelfPage: ', id);



  const handleClick = () => {
    dispatch({type: 'FETCH_USER_SHELF', payload: user.id})
    history.push(`/shelf/${user.id}`)
  }


  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' })
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfList />
      <Button
        onClick={() => history.push('/addItem')}
        variant='outlined' >
        Add Item
      </Button>
      {(id.id === 'all') &&
        <Button
          onClick={handleClick}>
          Go to My Shelf
        </Button>
      }
    </div>
  );
}

export default ShelfPage;
