import React from 'react'
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import UserProfile from './UserProfile';
import Header from './Header';
function UserProfileDetails({username}) {
    const [profile, setProfile] = useState({profiles : []})

    const fetchData = (username) =>{
        return fetch(`http://localhost:5000/userprofile?username=${username}`)
            .then((response) => response.json())
            .then((data)=> {
                setProfile({profiles : data
                })
                console.log(data)
            });
    }

    useEffect(()=>{
        fetchData(username)
    },[])


    const {profiles} = profile;

    
    
    return (
        <div>
            <Header style={{marginBottom: "1000px"}} username={username} />

            <br />
            <br />
            <br />

            {profiles.length === 0 && <UserProfile />} 

            {profiles.length !== 0 && <center>
    {profiles.map((profile) =>{
        return (
        <table>
        <h3>Firstname :<span>{profile.userfirstname}</span></h3>
        
        <h3>Lastname :<span>{profile.userlastname}</span></h3>
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
        username : state.userReducer.username
    }
}



export default connect(mapStateToProps)(UserProfileDetails);