import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux'

function UserProfile({username}) {
    const [firstName, processFirstName] = useState("");
    const [lastName, processLastName] = useState("");

    const [city, processCity] = useState("");
    const [address , processAddress] = useState("");
    

    const navigate = useNavigate()
    // taking the details from user for profile and saving 
    const save = () => {
        var addressInfo = {
            "username" : username,
            "userfirstname" : firstName,
            "userlastname" : lastName,
            "city" : city,
            "address" : address
        }

        axios.post("http://localhost:5000/userprofile", addressInfo)

        navigate('/user/home')

    }
    return (
        <div>
            <center><h1>Please enter your personal details and address</h1></center>
            <center>
            <form className="ui form">
                <div  className="field">
                    <label>First name</label>
                    <input type="text" name="firstname" placeholder="Firstname" onChange= {(obj) => processFirstName(obj.target.value)} />
                </div>

                <div  className="field">
                    <label>Last name</label>
                    <input type="text" name="lastname" placeholder="Lastname" onChange= {(obj) => processLastName(obj.target.value)} />
                </div>


                <div  className="field">
                    <label>Location</label>
                    <input type="text" name="city" placeholder="Location" onChange= {(obj) => processCity(obj.target.value)} />
                </div>


                <div  className="field">
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Address" onChange= {(obj) => processAddress(obj.target.value)} />
                </div>

            
                <input onClick={save} className="ui button" type="button" value="Submit" />
            </form> 
            </center>

            
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return {
        username : state.userReducer.username
    }
}



export default connect(mapStateToProps)(UserProfile);