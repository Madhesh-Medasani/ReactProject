import React from 'react'
import Header from '.././UserHomepage/Header'
import "./CSS/Orders.css"
import {NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '9px 9px 7px 9px',
    },
    paper: {
      borderRadius : '0px',
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1500,
      backgroundColor: '#ece9e9',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    bold :{
      fontWeight : '700',
    },
    box: {
        height: 50,
        display: "flex",
      },
    spreadBox: {
        justifyContent: "space-around",
        alignItems: "left"
      },
    
    
  }));


function Orders(){

    const classes = useStyles();

    return (
        <>
            <Header />
            <br />
            <div className="order-margin">
                <center>
                    <div className="order-border">
                        <div>
                            <p className="order-heading1">Showing <strong>All orders</strong></p>
                        </div>
                        <div className="grid order-orders">
                            <div className="g-col-12 order-card">
                                <div className="">
                                    <div className="order-shop">
                                        <div className="order-status-display">
                                            <img src="https://img.icons8.com/ios-filled/40/000000/checked-truck.png"/>
                                            <p className="order-deliver">Delivered</p>
                                        </div>
                                        <div className={classes.root}>
                                            <Paper className={classes.paper}>
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image}>
                                                        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                                                        </ButtonBase>
                                                    </Grid>
                                                    <Grid item xs={12} sm container>
                                                        <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs>
                                                            <Typography gutterBottom variant="subtitle1" align='left' className={classes.bold}>
                                                            Apple iphone 11 MAX Pro
                                                            </Typography>
                                                            <Typography variant="body2" gutterBottom align='left'>
                                                            Apple
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" align='left'>
                                                            RAM : 512Gb
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item className={classes.button_order}>
                                                        <Box
                                                        component="span"
                                                        m={1}
                                                        className={`${classes.spreadBox} ${classes.box}`}
                                                        >
                                                        <Button 
                                                            variant="contained" 
                                                            color="primary" 
                                                            style={{ height: 40,  }}
                                                            href="#contained-buttons"
                                                        >
                                                            EXCHANGE
                                                        </Button>
                                                        <Button 
                                                            variant="contained" 
                                                            color="primary" 
                                                            style={{ height: 40 }}
                                                            href="#contained-buttons"
                                                        >
                                                            RETURN
                                                        </Button>
                                                        </Box>
                                                        </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                        <Typography variant="subtitle1">$19.00</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="g-col-12 order-card">
                                <div className="">
                                    <div className="order-shop">
                                        <div className="order-status-display">
                                            <img src="https://img.icons8.com/ios-filled/40/000000/checked-truck.png"/>
                                            <p className="order-deliver">Delivered</p>
                                        </div>
                                        <div className={classes.root}>
                                            <Paper className={classes.paper}>
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image}>
                                                        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                                                        </ButtonBase>
                                                    </Grid>
                                                    <Grid item xs={12} sm container>
                                                        <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs >
                                                            <Typography gutterBottom variant="subtitle1" align='left' className={classes.bold}>
                                                            Standard license
                                                            </Typography>
                                                            <Typography variant="body2" gutterBottom align='left'>
                                                            Full resolution 1920x1080 • JPEG
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" align='left'>
                                                            ID: 1030114
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item className={classes.button_order}>
                                                        <Box
                                                        component="span"
                                                        m={1}
                                                        className={`${classes.spreadBox} ${classes.box}`}
                                                        >
                                                        <Button 
                                                            variant="contained" 
                                                            color="primary" 
                                                            style={{ height: 40, }}
                                                            href="#contained-buttons"
                                                        >
                                                            EXCHANGE
                                                        </Button>
                                                        <Button 
                                                            variant="contained" 
                                                            color="primary" 
                                                            style={{ height: 40 }}
                                                            href="#contained-buttons"
                                                        >
                                                            RETURN
                                                        </Button>
                                                        </Box>
                                                        </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                        <Typography variant="subtitle1">$19.00</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </>
    );
}

export default Orders;