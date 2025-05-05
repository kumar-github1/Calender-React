import React, { useState } from 'react'

function Calender() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [selectedDate, setSelectedDate] = useState(new Date())
    function changeMonth(e) {
        setSelectedDate(new Date(selectedDate.getFullYear(), parseInt(e.target.value), 1));

    }
    function changeYear(e) {
        setSelectedDate(new Date(parseInt(e.target.value), selectedDate.getMonth(), 1));
    }
    function daysInMonth() {
        const daysIM = [];
        const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
        for (let i = 0; i < firstDay.getDay(); i++) {
            daysIM.push(null);
        }
        for (let i = 1; i <= lastDay.getDate(); i++) {
            daysIM.push(i);
        }
        // console.log(daysIM);
        return daysIM;
    }

    function prevMonth() {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
    }
    function nextMonth() {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
    }

    return (
        <>
            <div className="h-screen bg-gray-700 flex justify-center items-center">
                <div className='bg-white rounded p-2'>
                    <div className='bg-blue-500 flex justify-between w-88 p-2 rounded-t'>
                        <img src="/left.png" className='hover:cursor-pointer' onClick={prevMonth} />
                        <select name="" id="" className='bg-white rounded-sm w-25 pb-0.5 ' value={selectedDate.getMonth()} onChange={e => changeMonth(e)}>
                            {months.map((value, index) => (
                                <option value={index} key={index}>{value}</option>
                            ))}
                        </select>
                        <select name="" id="" className='bg-white rounded-sm w-25 pb-0.5' value={selectedDate.getFullYear()} onChange={e => changeYear(e)}>
                            {Array.from({ length: 10 }, (_, i) => (parseInt(selectedDate.getFullYear()) - 5 + i)).map((value, index) => (
                                <option key={index} value={value} >{value}</option>
                            ))}
                        </select>
                        <img src="/right.png" className='hover:cursor-pointer' onClick={nextMonth} />

                    </div>
                    <div className='bg-blue-500 flex justify-between p-2 px-4 rounded-b'>
                        {days.map((day, index) => (
                            <span key={index} className='text-white font-semibold text-md'>{day.slice(0, 3)}</span>
                        ))}
                    </div>
                    <div className='grid grid-cols-7 gap-[10px] gap-y-2 p-2 px-0 ml-1'>
                        {daysInMonth().map((value, index) => (
                            <div key={index} className={` rounded-md text-center border border-gray-200 text-gray-700 ${parseInt(value) === new Date().getDate() && selectedDate.getMonth() === new Date().getMonth() && selectedDate.getFullYear() === new Date().getFullYear() ? "bg-orange-500 text-white" : ""} hover:bg-blue-500 hover:text-white hover:cursor-pointer transition-colors duration-200 ease-in-out `}>{value}</div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Calender