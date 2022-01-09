import React from 'react'
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import SellerNavbar from './SellerNavbar'
import SellerProfile from './SellerProfile';

function SellerProfileDetails({sellername}) {
    const [profile, setProfile] = useState({profiles : []})

    const fetchData = (sellername) =>{
        return fetch(`http://localhost:5000/sellerprofile?sellername=${sellername}`)
            .then((response) => response.json())
            .then((data)=> {
                setProfile({profiles : data
                })
                console.log(data)
            });
    }

    useEffect(()=>{
        fetchData(sellername)
    },[])


    const {profiles} = profile;

   
    
    return (
        <div>
            <SellerNavbar/>

            {profiles.length === 0 && <SellerProfile />} 

            {profiles.length !== 0 && <center>
    {profiles.map((profile) =>{
        return (
        <table>
        <h3>Firstname :<span>{profile.sellerfirstname}</span></h3>
        
        <h3>Lastname :<span>{profile.sellerlastname}</span></h3>
        <h3>Address :<span>{profile.address}</span></h3>
        <h3>City :<span>{profile.city}</span></h3>
    </table>
        )
    })}
</center>}
            
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return {
        sellername : state.sellerReducer.sellername
    }
}



export default connect(mapStateToProps)(SellerProfileDetails);