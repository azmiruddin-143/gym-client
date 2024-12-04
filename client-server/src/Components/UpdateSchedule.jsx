import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css'; // Import Flatpickr's CSS
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
const UpdateSchedule = () => {

    const updateLoader = useLoaderData()
    const  {title,selecteddate,selectedday,selectedtime,_id} = updateLoader

    const navigate = useNavigate()

   // State to hold the selected date (MM/DD/YYYY format)
   const [selectedDate, setSelectedDate] = useState('');

   // Set the default value to the current date (12/02/2024)
   useEffect(() => {
       const defaultDate = new Date('2024-12-02'); 
       const formattedDate = defaultDate.toLocaleDateString('en-US'); // Format it as MM/DD/YYYY
       setSelectedDate(formattedDate); 
   }, []);

   // Custom handler to format the date correctly (MM/DD/YYYY)
   const handleDateChange = (date) => {
       const formattedDate = date[0].toLocaleDateString('en-US'); 
       setSelectedDate(formattedDate); 
   };


   // State to hold the selected day
   const [selectedDay, setSelectedDay] = useState('');

   useEffect(() => {
       const daysOfWeek = [
           'Sunday',
           'Monday',
           'Tuesday',
           'Wednesday',
           'Thursday',
           'Friday',
           'Saturday',
       ];

       const today = new Date();
       const currentDay = today.getDay();
       const tomorrowDay = (currentDay + 1) % 7; 


       setSelectedDay(daysOfWeek[currentDay]); 


   }, []);

   // Handle the day change
   const handleDayChange = (e) => {
       setSelectedDay(e.target.value);
   };

   // time//


   const [selectedTime, setSelectedTime] = useState('');

   useEffect(() => {
       const currentTime = new Date();
       const formattedTime = currentTime.toLocaleTimeString([], {
           hour: '2-digit',
           minute: '2-digit',
           hour12: true,
       });
       setSelectedTime(formattedTime);
   }, []);

   const handleTimeChange = (date) => {
       const formattedTime = new Intl.DateTimeFormat('en-US', {
           hour: '2-digit',
           minute: '2-digit',
           hour12: true,
       }).format(date[0]);
       setSelectedTime(formattedTime);
   };




    const updateSchedule = (e) => {
        e.preventDefault()
        const from = e.target
        const title = from.title.value
        const selecteddate  = selectedDate
        const selectedday  = selectedDay 
        const selectedtime = selectedTime
        const updateObj = {title,selecteddate,  selectedday, selectedtime}
        console.log(updateObj);
        
        fetch(`http://localhost:5000/schedule/${_id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateObj),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                navigate("/allschedule")
            }
        })
        
    }


    return (
        <div>
            <form onSubmit={updateSchedule} action="">
                <div className='flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name='title' defaultValue={title} placeholder="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>

                        {/* Flatpickr with date picker */}
                        <ReactDatePicker
                            value={selectedDate} // Set the default value to the current date
                            onChange={handleDateChange} 
                            options={{
                                dateFormat: 'm/d/Y', 
                                allowInput: true, 
                                disableMobile: true, 
                            }}
                            className="input input-bordered w-full"
                            placeholder="Select a date"
                        />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Day</span>
                        </label>
                        <select
                            name="day"
                            value={selectedDay} // Set the selected day
                            onChange={handleDayChange} // Handle change
                            className="input input-bordered w-full"
                            required
                        >
                            {/* Day options */}
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <ReactDatePicker
                            value={selectedTime} // Set the default value to the current time
                            onChange={handleTimeChange} // Handle time change
                            options={{
                                enableTime: true, // Enable time picker
                                noCalendar: true, // Disable calendar, only show time picker
                                dateFormat: 'h:i K', // Set the format to hh:mm AM/PM
                                defaultHour: new Date().getHours(),
                                defaultMinute: new Date().getMinutes(),
                                minuteIncrement: 15, // Set the interval to 15 minutes
                            }}
                            className="input input-bordered w-full"
                            placeholder="Select a time"
                        />
                    </div>
                </div>

                <div className='w-full'>
                    <button className='bg-[#1d7fb4] text-white font-bold w-full py-2 px-3 my-5 rounded-lg'>Update Schedule</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateSchedule;