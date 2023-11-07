import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';

import "antd/dist/reset.css";



const Bookingscreen = () => {

    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [room, setroom] = useState();

    const { roomid } = useParams();
    const fromdate = moment(useParams.fromdate )
    const todate = moment(useParams.todate )

    const totaldays = moment.duration(todate.diff(fromdate)).asDays()+1
    const totalamount = room ? totaldays * room.rentperday:0;

    useEffect(() => {
        const fetchData = async () => {

            try {
                setloading(true);
                const data = (await axios.post("/api/rooms/getroombyid")).data;
                setroom(data);
                setloading(false);

            } catch (error) {
                seterror(true);

                setloading(false);
            }

        };

        fetchData();
    },
        []);

        async function bookRoom(){
            const bookingDetails = {
            room,
            userid:JSON.parse(localStorage.getItem('currentUser')),
            fromdate,
            todate,
            totalamount, 
            totaldays
            }
    
        try {
            const result = await axios.post('api/bookings/bookroom' , bookingDetails)
        } catch (error){

        }
    }


    
    return (
        <div> 
            {loading ? (<Loader/>) : error ? (<Error/>) : (<div>
                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-5'>
                        <h1>Booking Screen</h1>
                        <h1>Room id = {roomid}</h1>
                        <h1>Room name = M & K Lodge</h1>


                    </div>
                    <div className='col-md-5'>
                        <h1 style={{textAlign: 'right'}}>Booking details</h1>
                        <hr />

                        <div style={{textAlign: 'right'}} >
                            <b>
                                <p>Name : kanya</p>
                                <p>From Date : 03-11-2023</p>
                                <p>To Date : 05-11-2023</p>
                                <p>Max Count : 3</p>
                            </b>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                <p>Total Days : 3</p>
                                <p>Rent Per Day : 1500</p>
                                <p>Total Amount : 4500</p>
                            </b>

                        </div>
                          
                         <div style={{float: 'right'}}>
                        <button className='btn btn-primary' onClick={bookRoom}>Pay Now</button>
                        </div>

                    </div>
                </div>


            </div>)

            }
        </div>
    );
}

export default Bookingscreen;