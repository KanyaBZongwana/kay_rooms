import React, { useEffect, useState } from "react";
import { Tabs } from 'antd';
import axios, { Axios } from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
import { max } from "moment";

const { TabPane } = Tabs;

function Adminscreen() {
    return (
        <div className="col-md-9 bs">
            <h1 style={{ textAlign: "center" }}><b>Admin Panel</b></h1>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Bookings" key="1">
                    <Bookings/>
                </TabPane>
                <TabPane tab="Rooms" key="2">
                    <Rooms/>
                </TabPane>
                <TabPane tab="Add Rooms" key="3">
                    <Addroom/>
                </TabPane>
                <TabPane tab="Users" key="4">
                    <Users/>
                </TabPane>
            </Tabs>

        </div>

    );
}


export default Adminscreen;


export function Bookings() {

    return (
        <div className="row">
            <div className="col-md-9">
       <h1>Bookings</h1>
       <table className="table table-bordered table-dark">
        <thead className="bs">
        <tr>
            <th>Booking Id</th>
            <th>User Id</th>
            <th>Room</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>6540ce6984f2b947273055b1</td>
                <td>6540ce6984f2b947273055b1</td>
                <td>M & K Lodge</td>
                <td>03-11-2023</td>
                <td>05-11-2023</td>
                <td>booked</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>65327a4e0ea3c98828c69acb</td>
                <td>65327a4e0ea3c98828c69acb</td>
                <td>Home Suite</td>
                <td>24-11-2023</td>
                <td>25-11-2023</td>
                <td>booked</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>6540ce6984f2b947273055b3</td>
                <td>65327a4e0ea3c98828c69acd</td>
                <td>Staycation</td>
                <td>03-11-2023</td>
                <td>05-11-2023</td>
                <td>booked</td>
            </tr>
        </tbody>
       </table>
        </div>
        </div>
    )
}

export function Rooms() {

    return (
        <div className="row">
            <div className="col-md-12">
       <h1>Rooms</h1>
       <table className="table table-bordered table-dark">
        <thead className="bs">
        <tr>
            <th>Room Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Rent Per Day</th>
            <th>Max Count</th>
            <th>Phone Number</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>6540ce6984f2b947273055b1</td>
                <td>M & K Lodge</td>
                <td>Delux</td>
                <td>1500</td>
                <td>3</td>
                <td>5119992511</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>65327a4e0ea3c98828c69acb</td>
                <td>Home Suite</td>
                <td>Delux</td>
                <td>1700</td>
                <td>3</td>
                <td>4119992709</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>6540ce6984f2b947273055b3</td>
                <td>Staycation</td>
                <td>Non-Delux</td>
                <td>600</td>
                <td>3</td>
                <td>2112123454</td>
            </tr>
        </tbody>
       </table>
        </div>
        </div>
    )

}

export function Users() {

    return (
        <div className="row">
            <div className="col-md-12">
       <h1>Users</h1>
       <table className="table table-bordered table-dark">
        <thead className="bs">
        <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>653e8a265661d37f7c318ffa</td>
                <td>kanya</td>
                <td>cand25@gmail.com</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>653e98ff5ebf88d24d4e729a</td>
                <td>bukho</td>
                <td>bzong@gmail.com</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>653e9a185ebf88d24d4e729c</td>
                <td>godwin</td>
                <td>god9@gmail.com</td>
            </tr>
        </tbody>
       </table>
        </div>
        </div>
    )


}

export function Addroom() {
    const [name, setname] = useState('')
    const [room, setroom] = useState('')
    const [rentperday, setrentperday] = useState()
    const [maxcount, setmaxcount] = useState()
    const [description, setdescription] = useState()
    const [phonenumber, setphonenumber] = useState()
    const [type, settype] = useState()
    const [imageurl1 , setimageurl1] = useState()
    const [imageurl2 , setimageurl2] = useState()
    const [imageurl3 , setimageurl3] = useState()

    async function addRoom(){
        const newroom ={
            name,
            rentperday,
            maxcount,
            description,
            phonenumber,
            type,
            imageurl:[imageurl1 , imageurl2 , imageurl3]
        }
        try {
            const result = await (await axios.post('/api/rooms/addroom' , newroom)).data
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="row">
            <div className="col-md-5">
       <input type="text" className="form-control" placeholder="room name" 
       value={room} onChange={(e)=>{setroom(e.target.value)}}/>
       <input type="text" className="form-control" placeholder="rent per day"
       value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}}/>
       <input type="text" className="form-control" placeholder="max count"
       value={maxcount} onChange={(e)=>{setmaxcount(e.target.value)}}/>
       <input type="text" className="form-control" placeholder="description"
       value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
       <input type="text" className="form-control" placeholder="phone number"
       value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}/>
        </div>
        <div className="col-md-5">
        <input type="text" className="form-control" placeholder="type"/>
        <input type="text" className="form-control" placeholder="Image URL 1"/>
        <input type="text" className="form-control" placeholder="Image URL 2"/>
        <input type="text" className="form-control" placeholder="Image URL 3"/>
           <div className="text-right">
           <button className="btn btn-primary mt-2" onClick={addRoom}>
                Add Room
            </button>
           </div>
        
        </div>
        </div>
    )


}