import React, {useEffect, useState} from 'react'
import products from './Products';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import Header from '.././UserHomepage/Header'


// import Cartitems from './components/Cartcomp/Cartitems';

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

function Cart() {

    const classes = useStyles();

    const [productinfo, setProductinfo] = useState({ products: []})

    const fetchData = () =>{
        return fetch("http://localhost:5000/sellerproduct")
            .then((response) => response.json())
            .then((data)=> {
                setProductinfo({products : data
                })
            });
    }

    useEffect(()=>{
        fetchData()
    },[])

    const {products} = productinfo


    const [cartinfo, setCartinfo] = useState({ pack: []})
    

    const fetchData1 = () =>{
        return fetch("http://localhost:5000/cart")
            .then((response) => response.json())
            .then((data)=> {
                console.log(data)
                setCartinfo({pack : data
                })
            });
    }
    

    useEffect(()=>{
        fetchData1()
        getcart()
    },[])

    const {pack} = cartinfo

    let display = []

    // for (let i=0; i< products.length; i++){
    //     for (let j=0; j<pack.length; j++){
    //         if(products[i].id === pack[j].productId){
            
    //         display.push(products[i])
    //     }
    // }
    // }
    
    const url = "http://localhost:5000/cart";
    const [cartlist , updatecart] = useState([]);
    const getcart=()=>{
        fetch(url)
        .then(response=>response.json())
        .then(allCart => 
        {console.log(allCart)
        updatecart(allCart)}
        )
    }
    const increment = (sellername,productname,ram,storage,colour,productbrand,productprice,id) => {
        var items = {
            "sellername": sellername,
            "productname": productname,
            "ram": ram,
            "storage": storage,
            "colour": colour,
            "productbrand": productbrand,
            "productprice": productprice,
            "id": id
            
            
        };
        const url = "http://localhost:5000/cart/"+id;
        axios.put(url,items)
        .then(response =>{console.log("hi")
            getcart();

          });
        
    }





    const decrement = (id,sellername,productname,ram,storage,colour,productbrand,productprice,quantity) => {
        if (quantity==1) {
            quantity=2;
        }

        var items = {
            "sellername": sellername,
            "productname": productname,
            "ram": ram,
            "storage": storage,
            "colour": colour,
            "productbrand": productbrand,
            "productprice": productprice,
            "id": id,
            "quantity":quantity-1,
        
            
            
        };
        const url = "http://localhost:5000/cart/"+id;
        axios.put(url,items)
        .then(response =>{
            getcart();

          });
        
    }
    const[msg,updatemsg] = useState("");

    const removeItems = (Id) =>{
        var url = "http://localhost:5000/cart/"+Id
        axios.delete(url)
          .then(response =>{
            getcart();

          })
          .catch(error=>{
            updatemsg("Error! Try Agian !!!!");
          
          });
          
            
     }
    
    let totalPrice = 0;
    let totalQuantity = 0;

    for (let cart of cartlist){
        totalPrice += parseInt(cart.productprice);
        totalQuantity += parseInt(cart.quantity);
    }


    return (
    // <div>
    //     <h1>{msg}</h1>
        
    //     <div className="cart-icon">
    //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVBcdEwjcPkUTnpyfPpd3mDTcOf4V4qo0kg&usqp=CAU" alt="cart"/>
    //         <p>{totalQuantity}</p>

    //     </div>
    //     <div className="main-cart-section">
    //         <h1>Shopping cart</h1>
    //         <p className="total-items">You have <span className="total-items-count">{totalQuantity}</span> items in your cart</p>
    //         <div className="cart-items">
    //             <div className="cart-items-container">
                    
    //                     <div className="items-info">
    //                         <div className="title">
                                        
    //                             { cartlist.map((product, cart) =>
                                
                            
    //                                 {console.log(product)
    //                                     return (
    //                                     <div>
    //                                         <h1>{product.productbrand}</h1>
    //                                         <p>{product.productname}</p>
                                    
    //                                              <div className="add-minus-quantity">
                                                
    //                                              <i onClick={decrement.bind(this,product.id,product.sellername,product.productname,product.ram,product.storage,product.colour,product.productbrand,product.productprice,product.quantity)} class="fas fa-minus minus"></i>
    //                                              <input type="text" placeholder={product.quantity}/>
                                                
    //                                              <i onClick={increment.bind(this,product.id,product.productname,product.productbrand,product.productprice,product.quantity)} class="fas fa-plus add"></i>
    //                                      </div>
                                                
                                            
                                           
    //                                         <div className="price">
    //                                             <h1>{product.productprice}/-</h1>
    //                                         </div>
    //                                         <div  className="remove-item">
                                            
    //                                             <i onClick={removeItems.bind(this,product.id)}  class="fas fa-trash-alt remove"></i>
                                                
                                                
    //                                         </div>
    //                                     </div>
                                       
    //                                     )
    //                                 }) } 
                               
                            
    //                         </div>
                            
                        

    //                     </div>
    //             </div>

    //         </div>

    //     </div>
    //     <div className="card-total">
    //         <h3>card Total:<span>{totalPrice}</span>/-</h3>
    //         <button>Checkout</button>

    //     </div>
    // </div>

    // {/* importing header from user homepage */}
    <>
    <Header />
    <br />



    <div className="order-margin">
        <center>
            <div className="order-border">
                <div>
                    All Products
                </div>
                <div className="grid order-orders">
                { cartlist.map((product, cart) => {
                   return ( <div className="g-col-12 order-card">
                    <div className="">
                        <div className="order-shop">
                            <div className="order-status-display">
                                <img src="https://img.icons8.com/ios-filled/40/000000/checked-truck.png"/>
                                <p className="order-deliver">Avaliable products</p>
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
                                                {product.productbrand}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom align='left'>
                                                {product.brandname}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" align='left'>
                                                {product.productprice}
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
                                                Increase
                                            </Button>
                                            <Button 
                                                variant="contained" 
                                                color="primary" 
                                                style={{ height: 40 }}
                                                href="#contained-buttons"
                                            >
                                                Decrease
                                            </Button>
                                            </Box>
                                            </Grid>
                                            </Grid>
                                            <Grid item>
                                            <Typography variant="subtitle1">{cart.quantity}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </div>
                 ) })}
                    

                    
                </div>
            </div>
        </center>
    </div>
</>


    )
}

export default Cart;