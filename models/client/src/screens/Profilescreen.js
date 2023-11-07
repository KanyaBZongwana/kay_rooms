import React, { useEffect, useState } from "react";
import { Tabs } from 'antd';
import axios, { Axios } from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';

const { TabPane } = Tabs;

function Profilescreen(){
    
const user = (localStorage.getItem('currentUser'))

useEffect(() => {
    if (!user){
    window.location.href='/login'
    }

}, [])

    return (
       
<Tabs defaultActiveKey="1">

<TabPane tab=" Profile" key="1">
<div className= 'row'>
<div className="col-md-6 bs">
<h1>My Profile</h1>

<br/>
   <h1>Name : {user.name} kanya</h1>
   <h1>Email : {user.email} cand25@gmail.com</h1>
   <h1>isAdmin : {useEffect.isAdmin ? 'YES' : 'NO'}</h1>
   </div>
        </div>
</TabPane>

<TabPane tab=" Bookings" key="2">
<MyBookings/>
</TabPane>

</Tabs>
        
    );
}


export default Profilescreen;


export function MyBookings () {
    const user = (localStorage.getItem("currentUser"));
    
    
    
    return (
        <div className="row">
        <div className="col-md-6 bs">
        
            <h1><b>M & K Lodge</b></h1>
            <p><b>BookingId:</b> 65327a4e0ea3c98828c69aca</p>
            <p><b>TransactionId:</b> 1234</p>
            <p><b>Check-in:</b> 03-11-2023</p>
            <p><b>Check Out:</b> 05-11-2023</p>
            <p><b>Amount:</b> 4500</p>
            <p><b>status:</b> CONFIRMED</p>
            
            
        </div>
        </div>
        
        
    )
}