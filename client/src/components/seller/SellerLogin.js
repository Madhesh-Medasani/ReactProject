import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom'
import sellerstore from './sellerstore';

const theme = createTheme();

export default function SellerLogin() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let sellername =""
    if( data.get('email').includes('@') && data.get('password').length>=8)
    {
      fetch("http://localhost:5000/sellers")
        .then((response) => response.json())
        .then((sellers) =>{ 

            let a= (sellers) => {
                for (let i=0;i<sellers.length;i++){
                    if(sellers[i].email===data.get('email') && sellers[i].password === data.get('password')){
                        sellername = sellers[i].name 
                        return true;
                    }
                    
                }
                return false;
            }
            
            let authenticate = a(sellers)
            if(authenticate)
            {
                //store.dispatch({type:"loginSuccess"});
                sellerstore.dispatch({type:"loginSeller",payload: { sellername: sellername }})
                
                //return <Navigate to='/home' />
               navigate('/seller/brands')
            }
            else
            {
                //store.dispatch({type:"loginFailure"});
                alert("Incorrect credentials");

            }
           
            
        })

    }
    else
    {
      alert("Invalid input");
      navigate("/seller/login");
    }
    
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/seller/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}