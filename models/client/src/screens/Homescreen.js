import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import "antd/dist/reset.css";
import Error from '../components/Error';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const Homescreen = () => {

    const [rooms, setrooms] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
    
    const [searchkey , setsearchkey] = useState();
    const [type, settype] = useState('all')

    useEffect(() => {
        const fetchData = async () => {

            try {
                setloading(true)
                const data = (await axios.get("/api/rooms/getallrooms")).data;
                setrooms(data);
                setloading(false);

            } catch (error) {
                seterror(true);
                console.log(error);
                setloading(false);
            }

        };

        fetchData();
    },
        []);

      function filterByDate(dates)
      {
        console.log((dates[0]).format('DD-MM-YYYY'))
        console.log((dates[1]).format('DD-MM-YYYY'))
      }

 function filterBySearch(){
    const temprooms = rooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase()))

    setrooms(temprooms)
 }

 function filtetByType(e) {
    const temprooms = rooms.filter(room=>room.type.toLowerCase()==e.toLowerCase())

    setrooms(temprooms)
 }

    return (
        <div className='container'>

            <div className='row mt-5 bs'>
                <div className='col-md-3'>

                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate}/>

                </div>
                <div className='col-md-5'>
            <input type='text' className='form-control' placeholder='search rooms' value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterBySearch}/>
            </div>
            <div className='col-md-3'>
            <select className='form-control' value={type} onChange={(e)=>{filtetByType(e.target.value)}}>
                <option value="all">All</option>
                <option value="delux">Delux</option>
                <option value="non-delux">Non-Delux</option>

            </select>
            </div>
            </div>

            


            <div className="row justify-content-center mt-5">

                {loading ? (
                    <Loader />) : error ? (<Error />) : (rooms.map((room) => {
                        return <div className="col-md-9 mt-2">
                            <Room room={room} />
                        </div>;
                    })
                    )}

            </div>

        </div>

    );
};

export default Homescreen;