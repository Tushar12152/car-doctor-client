import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Bookings = () => {

const {user}=useContext(AuthContext)
const [bookings,setBookings]=useState([])
const url=`http://localhost:5002/bookings?email=${user.email}`

useEffect(()=>{
    fetch(url)
    .then(res=>res.json)
    .then(data=>{
        console.log(data)
        setBookings(data)
    })
},[url])

    return (
        <div>
            
        </div>
    );
};

export default Bookings;