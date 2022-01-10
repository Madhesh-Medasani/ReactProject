import React from 'react'
import {AppBar, Toolbar, makeStyles, Typography, Box, withStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import {connect} from "react-redux"


                        // header for user homepage
const useStyle = makeStyles({
    header: {
        background: "skyblue",
        height: "60px",

    },
    container : {
        display: 'flex',
        marginLeft: '2%'
    },
    heading: {
        fontSize: 30,
        fontStyle: 'oblique',
        
    },
    logo : {
        fontSize: 30,
        marginTop : 6,
        color: "#0b53d6",
    },
    
})

const ToolBar = withStyles({
    root : {
        minHeight : 55
    }
})(Toolbar)

function Header({username, quantity}){
    const classes = useStyle();
    return (
        <div>
            <AppBar className= {classes.header} >
                <ToolBar>
                    <Box className={classes.container}>
                        <Typography className= {classes.heading}>Dream Basket</Typography>
                        <ShoppingCartIcon className={classes.logo} />
                    </Box>

                    <SearchBar />
                    <HeaderButtons username={username}/>
                </ToolBar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      quantity : state.cartReducer.quantity,
      username: state.userReducer.username,
    };
  };
  
  export default connect(mapStateToProps)(Header);