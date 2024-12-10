import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleSchedule from './SingleSchedule';
// import SingleSchedule from './SingleSchedule';

const AllSchedule = () => {
    const AllScheduleLoader = useLoaderData()
    const [clearData,setClearData] = useState(AllScheduleLoader)
    return (
        <div className='mx-28 my-10'>

            <h1>AllSchedule {clearData.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Action</th>
               
                        </tr>
                    </thead>
                    {
                        clearData.map((schedule,index) => 
                           <SingleSchedule  schedule ={schedule} index={index} clearData={clearData} setClearData={setClearData} ></SingleSchedule>
                        )
                    }
                </table>
            </div>

           
        </div>
    );
};

export default AllSchedule;