import React from 'react'
import {Box, makeStyles, Button, Typography, Badge} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import sellerstore from '../../seller/sellerstore';
import {useNavigate} from 'react-router-dom'



const useStyle = makeStyles({
    login : {
        background : '#FFFFFF',
        color : 'skyblue',
        textTransform : 'none',
        fontWeight : 600,
        borderRadius : 2,
        padding : '5px 40px',
        boxShadow : 'none',
        height : 30,
        marginLeft: 10,

    },

    wrapper :{
        margin : '0 0% 0 1px',
        display : 'flex',
        '& > *' : {
            marginRight : 40,
            alignItems : 'center'
        }
        
    },
    container : {
        display : 'flex',
    },
    logout :{
        background : '#FFFFFF',
        color : 'skyblue',
        textTransform : 'none',
        fontWeight : 600,
        borderRadius : 2,
        padding : '5px 40px',
        boxShadow : 'none',
    }
})

function HeaderButtons(props){

    const classes = useStyle()

    const navigate = useNavigate();

    const Logout = () => {
        sellerstore.dispatch({type:"logout"})
        navigate('/')
    }

    return (
        <Box className={classes.wrapper}>
            <Typography className = {classes.login}>Hi,{props.username}</Typography>
            <Typography style={{marginTop: '5px'}}>More</Typography>

            <Box className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon  />
                </Badge>
                <Typography style={{marginLeft : '10px'}}>Cart</Typography>
            </Box>

            <Button variant="contained" onClick={Logout} className = {classes.logout}>Logout</Button>

        </Box>
    );
}

export default HeaderButtons;
