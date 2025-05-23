// import  { useState } from 'react';
// import {
//   Button, Container, TextField, Typography, Paper
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError('Both fields are required!');
//       return;
//     }

//     if (email === 'admin@example.com' && password === '123456') {
//       navigate('/home');
//     } else {
//       setError('Invalid credentials!');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Library App Login
//         </Typography>
//         <form onSubmit={handleLogin}>
//           <TextField
//             label="Email"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {error && (
//             <Typography color="error" variant="body2">
//               {error}
//             </Typography>
//           )}
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Login
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default LoginPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home'); // Simple redirect after mock login
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 10, p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField fullWidth label="Email" margin="normal" required type="email" />
          <TextField fullWidth label="Password" margin="normal" required type="password" />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Login</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;