// import React from 'react';
// import {
//   Card, CardContent, CardMedia, Typography, CardActions, Button
// } from '@mui/material';

// const BookCard = ({ book, onSelect }) => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={
//           book.formats["image/jpeg"] ||
//           "https://via.placeholder.com/150x200.png?text=No+Image"
//         }
//         alt={book.title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {book.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {book.authors.length ? book.authors[0].name : "Unknown Author"}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" onClick={() => onSelect(book)}>Add to Cart</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default BookCard;
// import PropTypes from 'prop-types';
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const BookCard = ({ book, onSelect }) => {
//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: 2,
//         boxShadow: 3,
//         transition: '0.3s',
//         '&:hover': { boxShadow: 6 },
//       }}
//     >
//       {/* Book Cover */}
//       <CardMedia
//         component="img"
//         height="200"
//         image={book.cover || 'https://via.placeholder.com/150x200?text=No+Image'}
//         alt={book.title}
//       />

//       {/* Book Title and Author */}
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" component="div" gutterBottom noWrap>
//           {book.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" noWrap>
//           {book.author || 'Unknown Author'}
//         </Typography>
//       </CardContent>

//       {/* Add to Cart Button */}
//       <CardActions>
//         <Button
//           fullWidth
//           size="small"
//           variant="contained"
//           onClick={() => onSelect(book)}
//           startIcon={<ShoppingCartIcon />}
//         >
//           Add to Cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default BookCard;
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PropTypes from 'prop-types';

// const BookCard = ({ book = {}, onSelect = () => {} }) => {
//   const { title = 'Untitled', author = 'Unknown Author', cover } = book;

//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: 2,
//         boxShadow: 3,
//         transition: '0.3s',
//         '&:hover': { boxShadow: 6 },
//       }}
//     >
//       {/* Book Cover */}
//       <CardMedia
//         component="img"
//         height="200"
//         image={cover || 'https://via.placeholder.com/150x200?text=No+Image'}
//         alt={title}
//       />

//       {/* Book Title and Author */}
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" gutterBottom noWrap>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" noWrap>
//           {author}
//         </Typography>
//       </CardContent>

//       {/* Add to Cart Button */}
//       <CardActions>
//         <Button
//           fullWidth
//           size="small"
//           variant="contained"
//           onClick={() => onSelect(book)}
//           startIcon={<ShoppingCartIcon />}
//         >
//           Add to Cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// // Prop validation
// BookCard.propTypes = {
//   book: PropTypes.shape({
//     title: PropTypes.string,
//     author: PropTypes.string,
//     cover: PropTypes.string,
//   }),
//   onSelect: PropTypes.func,
// };

// export default BookCard;
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const BookCard = ({ book, onSelect }) => {
//   const { title = 'No Title', author = 'Unknown Author', cover } = book;

//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: 2,
//         boxShadow: 3,
//         transition: '0.3s',
//         '&:hover': { boxShadow: 6 },
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="200"
//         image={cover || 'https://via.placeholder.com/150x200?text=No+Image'}
//         alt={title}
//       />
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" gutterBottom noWrap>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" noWrap>
//           {author}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           fullWidth
//           size="small"
//           variant="contained"
//           onClick={() => onSelect(book)}
//           startIcon={<ShoppingCartIcon />}
//         >
//           Add to Cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default BookCard;
// import {
//   Card, CardMedia, CardContent, Typography, CardActions, Button
// } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const BookCard = ({ book, onSelect }) => {
//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: 3,
//         boxShadow: 5,
//         transition: '0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.02)',
//           boxShadow: 8,
//         },
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="220"
//         image={book.cover || 'https://via.placeholder.com/150x200?text=No+Image'}
//         alt={book.title}
//       />
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" gutterBottom noWrap>{book.title}</Typography>
//         <Typography variant="body2" color="text.secondary" noWrap>
//           {book.author || 'Unknown Author'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           fullWidth
//           variant="contained"
//           startIcon={<ShoppingCartIcon />}
//           onClick={() => onSelect(book)}
//         >
//           Add to Cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default BookCard;
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const BookCard = ({ book, onSelect }) => {
//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: 3,
//         boxShadow: 4,
//         transition: 'all 0.3s ease',
//         '&:hover': {
//           boxShadow: 8,
//           transform: 'translateY(-5px)',
//         },
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="220"
//         image={book.cover || 'https://via.placeholder.com/150x220?text=No+Image'}
//         alt={book.title}
//       />

//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" gutterBottom>
//           {book.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {book.author || 'Unknown Author'}
//         </Typography>
//       </CardContent>

//       <CardActions>
//         <Button
//           variant="contained"
//           fullWidth
//           onClick={() => onSelect(book)}
//           startIcon={<ShoppingCartIcon />}
//           sx={{ borderRadius: 2 }}
//         >
//           Add to Cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default BookCard;
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BookCard = ({ book, onSelect }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: 4,
        transition: '0.3s',
        '&:hover': { boxShadow: 8, transform: 'scale(1.02)' },
      }}
    >
      {/* Book Cover */}
      <CardMedia
        component="img"
        height="220"
        image={book.cover || 'https://via.placeholder.com/150x200?text=No+Image'}
        alt={book.title}
      />

      {/* Book Title and Author */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author || 'Unknown Author'}
        </Typography>
      </CardContent>

      {/* Add to Cart Button */}
      <CardActions>
        <Button
          fullWidth
          size="small"
          variant="contained"
          onClick={() => onSelect(book)}
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;