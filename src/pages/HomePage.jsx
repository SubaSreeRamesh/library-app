// // import React from 'react';
// // import { useEffect, useState } from 'react';
// // import {
// //   Box, Grid, Typography, CircularProgress, Select, MenuItem, InputLabel, FormControl
// // } from '@mui/material';
// // import { fetchBooks } from '../services/bookService';
// // import BookCard from '../components/BookCard';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { addBook } from '../redux/bookSlice';
// // import { Link } from 'react-router-dom';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // const HomePage = () => {
// //   const [books, setBooks] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [subject, setSubject] = useState('fiction');

// //   const dispatch = useDispatch();
// //   const selectedBooks = useSelector((state) => state.books.selectedBooks);

// //   const loadBooks = async (topic = 'fiction') => {
// //     setLoading(true);
// //     const data = await fetchBooks(1, topic);
// //     setBooks(data);
// //     setLoading(false);
// //   };

// //   useEffect(() => {
// //     loadBooks(subject);
// //   }, [subject]);

// //   const handleSelectBook = (book) => {
// //     if (selectedBooks.find((b) => b.id === book.id)) return;
// //     dispatch(addBook(book));
// //   };

// //   return (
// //     <Box sx={{ p: 4 }}>
// //       <Typography variant="h4" gutterBottom>
// //         Book Listings
// //       </Typography>

// //       <FormControl fullWidth sx={{ mb: 3, maxWidth: 300 }}>
// //         <InputLabel id="subject-label">Select Subject</InputLabel>
// //         <Select
// //           labelId="subject-label"
// //           value={subject}
// //           label="Select Subject"
// //           onChange={(e) => setSubject(e.target.value)}
// //         >
// //           <Button
// //   component={Link}
// //   to="/cart"
// //   variant="contained"
// //   startIcon={<ShoppingCartIcon />}
// //   sx={{ mb: 2 }}
// // >
// //   View Cart ({selectedBooks.length})
// // </Button>
// //           <MenuItem value="fiction">Fiction</MenuItem>
// //           <MenuItem value="science">Science</MenuItem>
// //           <MenuItem value="romance">Romance</MenuItem>
// //           <MenuItem value="fantasy">Fantasy</MenuItem>
// //           <MenuItem value="history">History</MenuItem>
// //         </Select>
// //       </FormControl>

// //       {loading ? (
// //         <CircularProgress />
// //       ) : (
// //         <Grid container spacing={3}>
// //           {books.map((book) => (
// //             <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
// //               <BookCard book={book} onSelect={handleSelectBook} />
// //             </Grid>
// //           ))}
// //         </Grid>
// //       )}
// //     </Box>
    
// //   );
// // };

// // export default HomePage;
// import { useEffect, useState } from 'react';
// import {
//   Box, Grid, Typography, CircularProgress, Select, MenuItem, InputLabel, FormControl, Button
// } from '@mui/material';
// import { fetchBooks } from '../services/bookService';
// import BookCard from '../components/BookCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBook } from '../redux/bookSlice';
// import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [subject, setSubject] = useState('fiction');

//   const dispatch = useDispatch();
//   const selectedBooks = useSelector((state) => state.books.selectedBooks);

//   const loadBooks = async (topic = 'fiction') => {
//     setLoading(true);
//     const data = await fetchBooks(1, topic);
//     setBooks(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadBooks(subject);
//   }, [subject]);

//   const handleSelectBook = (book) => {
//     if (selectedBooks.find((b) => b.id === book.id)) return;
//     dispatch(addBook(book));
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Book Listings
//       </Typography>

//       {/* ✅ Correct position for cart button */}
//       <Button
//         component={Link}
//         to="/cart"
//         variant="contained"
//         startIcon={<ShoppingCartIcon />}
//         sx={{ mb: 2 }}
//       >
//         View Cart ({selectedBooks.length})
//       </Button>

//       <FormControl fullWidth sx={{ mb: 3, maxWidth: 300 }}>
//         <InputLabel id="subject-label">Select Subject</InputLabel>
//         <Select
//           labelId="subject-label"
//           value={subject}
//           label="Select Subject"
//           onChange={(e) => setSubject(e.target.value)}
//         >
//           <MenuItem value="fiction">Fiction</MenuItem>
//           <MenuItem value="science">Science</MenuItem>
//           <MenuItem value="romance">Romance</MenuItem>
//           <MenuItem value="fantasy">Fantasy</MenuItem>
//           <MenuItem value="history">History</MenuItem>
//         </Select>
//       </FormControl>

//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <Grid container spacing={3}>
//           {books.map((book) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
//               <BookCard book={book} onSelect={handleSelectBook} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default HomePage;
// import { useEffect, useState } from 'react';
// import {
//   Box, Grid, Typography, CircularProgress, Select,
//   MenuItem, InputLabel, FormControl, Button, Stack
// } from '@mui/material';
// import { fetchBooks } from '../services/bookService';
// import BookCard from '../components/BookCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBook } from '../redux/bookSlice';
// import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [subject, setSubject] = useState('fiction');

//   const dispatch = useDispatch();
//   const selectedBooks = useSelector((state) => state.books.selectedBooks);

//   const loadBooks = async (topic = 'fiction') => {
//     setLoading(true);
//     const data = await fetchBooks(1, topic);
//     setBooks(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadBooks(subject);
//   }, [subject]);

//   const handleSelectBook = (book) => {
//     if (selectedBooks.find((b) => b.id === book.id)) return;
//     dispatch(addBook(book));
//   };

//   return (
//     <Box sx={{ px: 4, py: 5 }}>
//       {/* Title */}
//       <Typography variant="h4" gutterBottom align="center">
//         📚 Explore Books
//       </Typography>

//       {/* Header row: subject dropdown + view cart */}
//       <Stack
//         direction={{ xs: 'column', sm: 'row' }}
//         justifyContent="space-between"
//         alignItems={{ xs: 'flex-start', sm: 'center' }}
//         spacing={2}
//         sx={{ mb: 4 }}
//       >
//         <FormControl sx={{ minWidth: 200 }}>
//           <InputLabel id="subject-label">Select Subject</InputLabel>
//           <Select
//             labelId="subject-label"
//             value={subject}
//             label="Select Subject"
//             onChange={(e) => setSubject(e.target.value)}
//           >
//             <MenuItem value="fiction">Fiction</MenuItem>
//             <MenuItem value="science">Science</MenuItem>
//             <MenuItem value="romance">Romance</MenuItem>
//             <MenuItem value="fantasy">Fantasy</MenuItem>
//             <MenuItem value="history">History</MenuItem>
//           </Select>
//         </FormControl>

//         <Button
//           component={Link}
//           to="/cart"
//           variant="contained"
//           startIcon={<ShoppingCartIcon />}
//           sx={{ height: 56 }}
//         >
//           View Cart ({selectedBooks.length})
//         </Button>
//       </Stack>

//       {/* Book Listings */}
//       {loading ? (
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <Grid container spacing={4}>
//           {books.map((book) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
//               <BookCard book={book} onSelect={handleSelectBook} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default HomePage;
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   Box,
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
//         borderRadius: 3,
//         backgroundColor: '#fdfdfd',
//         boxShadow: 4,
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         '&:hover': {
//           transform: 'translateY(-6px)',
//           boxShadow: 10,
//         },
//       }}
//     >
//       {/* Book Cover */}
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           p: 2,
//           pb: 0,
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="220"
//           image={cover || 'https://via.placeholder.com/150x200?text=No+Image'}
//           alt={title}
//           sx={{
//             objectFit: 'contain',
//             borderRadius: 2,
//             maxHeight: 220,
//             maxWidth: '100%',
//             backgroundColor: '#fafafa',
//           }}
//         />
//       </Box>

//       {/* Title and Author */}
//       <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//         <Typography
//           variant="subtitle1"
//           sx={{ fontWeight: 'bold', mb: 0.5 }}
//           noWrap
//         >
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" noWrap>
//           {author}
//         </Typography>
//       </CardContent>

//       {/* Button */}
//       <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
//         <Button
//           size="small"
//           variant="contained"
//           onClick={() => onSelect(book)}
//           startIcon={<ShoppingCartIcon />}
//           sx={{
//             borderRadius: 20,
//             textTransform: 'none',
//             px: 3,
//             backgroundColor: '#1976d2',
//             '&:hover': {
//               backgroundColor: '#115293',
//             },
//           }}
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
// import { useEffect, useState } from 'react';
// import {
//   Box, Grid, Typography, CircularProgress, Select, MenuItem, InputLabel, FormControl, Button
// } from '@mui/material';
// import { fetchBooks } from '../services/bookService';
// import BookCard from '../components/BookCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBook } from '../redux/bookSlice';
// import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [subject, setSubject] = useState('fiction');
//   const dispatch = useDispatch();
//   const selectedBooks = useSelector((state) => state.books.selectedBooks);

//   const loadBooks = async (topic = 'fiction') => {
//     setLoading(true);
//     const data = await fetchBooks(1, topic);
//     setBooks(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadBooks(subject);
//   }, [subject]);

//   const handleSelectBook = (book) => {
//     if (selectedBooks.find((b) => b.id === book.id)) return;
//     dispatch(addBook(book));
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//         <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
//           Explore Books
//         </Typography>

//         <Button
//           component={Link}
//           to="/cart"
//           variant="contained"
//           startIcon={<ShoppingCartIcon />}
//           sx={{ borderRadius: 20, textTransform: 'none' }}
//         >
//           View Cart ({selectedBooks.length})
//         </Button>
//       </Box>

//       <FormControl fullWidth sx={{ mb: 4, maxWidth: 300 }}>
//         <InputLabel id="subject-label">Select Subject</InputLabel>
//         <Select
//           labelId="subject-label"
//           value={subject}
//           label="Select Subject"
//           onChange={(e) => setSubject(e.target.value)}
//         >
//           <MenuItem value="fiction">Fiction</MenuItem>
//           <MenuItem value="science">Science</MenuItem>
//           <MenuItem value="romance">Romance</MenuItem>
//           <MenuItem value="fantasy">Fantasy</MenuItem>
//           <MenuItem value="history">History</MenuItem>
//         </Select>
//       </FormControl>

//       {loading ? (
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <Grid container spacing={4}>
//           {books.map((book) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
//               <BookCard book={book} onSelect={handleSelectBook} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default HomePage;
// import React, { useEffect, useState } from 'react';
// import {
//   Box, Grid, Typography, CircularProgress, Select, MenuItem,
//   InputLabel, FormControl, Button, Stack
// } from '@mui/material';
// import { fetchBooks } from '../services/bookService';
// import BookCard from '../components/BookCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBook } from '../redux/bookSlice';
// import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [subject, setSubject] = useState('fiction');

//   const dispatch = useDispatch();
//   const selectedBooks = useSelector((state) => state.books.selectedBooks);

//   const loadBooks = async (topic = 'fiction') => {
//     setLoading(true);
//     const data = await fetchBooks(1, topic);
//     setBooks(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadBooks(subject);
//   }, [subject]);

//   const handleSelectBook = (book) => {
//     if (selectedBooks.find((b) => b.id === book.id)) return;
//     dispatch(addBook(book));
//   };

//   return (
//     <Box sx={{ px: 5, py: 4 }}>
//       <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
//         <Typography variant="h4">Explore Books</Typography>
//         <Button
//           component={Link}
//           to="/cart"
//           variant="contained"
//           startIcon={<ShoppingCartIcon />}
//         >
//           View Cart ({selectedBooks.length})
//         </Button>
//       </Stack>

//       <FormControl fullWidth sx={{ maxWidth: 300, mb: 4 }}>
//         <InputLabel id="subject-label">Subject</InputLabel>
//         <Select
//           labelId="subject-label"
//           value={subject}
//           label="Subject"
//           onChange={(e) => setSubject(e.target.value)}
//         >
//           <MenuItem value="fiction">Fiction</MenuItem>
//           <MenuItem value="science">Science</MenuItem>
//           <MenuItem value="romance">Romance</MenuItem>
//           <MenuItem value="fantasy">Fantasy</MenuItem>
//           <MenuItem value="history">History</MenuItem>
//         </Select>
//       </FormControl>

//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <Grid container spacing={3}>
//           {books.map((book) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
//               <BookCard book={book} onSelect={handleSelectBook} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default HomePage;
import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';
import { fetchBooks } from '../services/bookService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState('fiction');

  const dispatch = useDispatch();
  const selectedBooks = useSelector((state) => state.books.selectedBooks);

  const loadBooks = async (topic = 'fiction') => {
    setLoading(true);
    const data = await fetchBooks(1, topic);
    setBooks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadBooks(subject);
  }, [subject]);

  const handleSelectBook = (book) => {
    if (!selectedBooks.find((b) => b.id === book.id)) {
      dispatch(addBook(book));
    }
  };

  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight={600}>
          📚 Discover Books
        </Typography>

        <Button
          component={Link}
          to="/cart"
          variant="contained"
          size="medium"
          startIcon={<ShoppingCartIcon />}
          sx={{ borderRadius: 3 }}
        >
          Cart ({selectedBooks.length})
        </Button>
      </Box>

      <FormControl sx={{ mb: 4, minWidth: 250 }}>
        <InputLabel id="subject-label">Select Category</InputLabel>
        <Select
          labelId="subject-label"
          value={subject}
          label="Select Category"
          onChange={(e) => setSubject(e.target.value)}
        >
          <MenuItem value="fiction">Fiction</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="romance">Romance</MenuItem>
          <MenuItem value="fantasy">Fantasy</MenuItem>
          <MenuItem value="history">History</MenuItem>
        </Select>
      </FormControl>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <BookCard book={book} onSelect={handleSelectBook} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomePage;
