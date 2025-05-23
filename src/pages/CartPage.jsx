// import React from 'react';
import {
  Box, Typography, Grid, Button, Card, CardContent, CardMedia, CardActions
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, clearBooks } from '../redux/bookSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const selectedBooks = useSelector((state) => state.books.selectedBooks);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const handleClear = () => {
    dispatch(clearBooks());
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>My Cart</Typography>

      {selectedBooks.length === 0 ? (
        <Typography>No books in cart.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {selectedBooks.map((book) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="160"
                    image={book.formats["image/jpeg"] || "https://via.placeholder.com/150"}
                    alt={book.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="body2">
                      {book.authors.length ? book.authors[0].name : "Unknown Author"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="error" onClick={() => handleRemove(book.id)}>Remove</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 3 }}
            onClick={handleClear}
          >
            Clear All
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
