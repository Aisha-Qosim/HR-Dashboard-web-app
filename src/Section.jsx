import React from 'react'
import Home from './Home'
import myimg from '../public/myimg.png'
import './Section.css'
import { MdCalendarMonth } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoBulbSharp } from "react-icons/io5";
import ReactApexChart from 'react-apexcharts';

const barOptions = {
  chart: {
    type: 'bar',
    stacked: true,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  series: [
    {
      name: 'Actual Hours',
      data: [1, 4, 6, 8, 5, 7, 3], // Deep blue section
    },
    {
      name: 'Remaining Hours',
      data: [7, 4, 2, 0, 3, 1, 5], // Light blue section (remaining to reach 8h)
    },
  ],
  colors: ['#3B82F6', '#DBEAFE'], // Deep blue and light blue
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '25%',
      borderRadius: 5,
    },
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    labels: {
      style: { colors: '#6B7280', fontSize: '12px' },
    },
  },
  yaxis: {
    labels: {
      style: { colors: '#6B7280', fontSize: '12px' },
      formatter: (value) => `${value}h`, // Display hours
    },
  },
  grid: {
    strokeDashArray: 5,
    borderColor: '#E5E7EB',
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: (value) => `${value} hours`, // Tooltip display
    },
  },
};

const Section = () => { 
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentYear = today.getFullYear();
  
    // Generate the days of the week (e.g., Sun, Mon, etc.)
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    // Generate the dates for the current week
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const weekDates = Array.from({ length: 7 }).map((_, index) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + index);
      return day;
    });
  
  return (
    <div>
    <Home/>
     <section className='section'> 
       <div className='sec-1'>
       <h1>Good morning, Admira</h1>
        <p>Open the panel and watch your progress and your growth in knowledge.</p>
        <button>Account settings</button>
    </div>

    <div className='sec-2'>
       <h1>My tasks</h1>
      <p className='sec-2p'>2 active tasks</p>

    <div className='sec-12'>
        <div className='parent'>
        <div className='col-11'>
        <img src={myimg} alt="" srcset="" />
         <p className='col'>Admira</p>
    <div className='dot'>.</div>
       <h4 className='col'>Interview with developer</h4>
      </div>
     <div className='col-12'> 
        <span className='col-span'>Due today</span>
    </div>
    </div>
    <div className='parent'>
       <div className='col-11'>
        <img src={myimg} alt="" srcset="" />
         <p className='col'>Admira</p>
    <div className='dot'>.</div>
          <h4 className='col'>Reflection time</h4>
    </div>
    <div className='col-12'> 
         <span className='col-spans'>Tomorrow</span>
    </div>
    </div>

    <div className='parent'>
       <div className='col-11'>
        <img src={myimg} alt="" srcset="" />
        <p className='col'>Admira</p>
    <div className='dot'>.</div>
       <h4 className='col'> Sprint questions preparation</h4>
    </div>
        <div className='col-12'> 
        <span className='col-span'>Due today</span>
       </div>
        </div>
        </div>
         <p className='sec-p'>See all tasks</p>
    </div>
    <div className='sec-row'>
      <div className='sec-21'>
       <h3>Next retrospective</h3>
       <p>week 12</p>
    <div className='design-img'> 
        <img src={myimg} alt="" srcset="" />
        <img src={myimg} alt="" srcset="" />
        <img src={myimg} alt="" srcset="" />
       <h4>Design team</h4>
    </div>
    </div>
    <div  className='sec-21'>
    <h3>Next sprint</h3>
    <p>week 12</p>
    <div className='design-img'> 
    <img src={myimg} alt="" srcset="" />
    <img src={myimg} alt="" srcset="" />
    <img src={myimg} alt="" srcset="" />
    <h4>Design team</h4>
    </div>
    </div>
      
    <div  className='sec-22'>
    <h3>Calendar</h3>
    <div className='sec22-circle' ><MdCalendarMonth style={{fontSize:"23px", marginTop:"8px"}} /></div>
    </div>
    </div>
    <div>
    <h3 className="barcharts-h3">Total working hours</h3>
    <ReactApexChart options={barOptions} series={barOptions.series} type="bar" height={300} />
  </div>
    </section>

    <div className="column2">
    <div className="col2-title">
    <h2>Quick action</h2>
    </div>
    <div className='col2-box'>
    <div className='col2-box1'>
    <h3>Reflection time</h3>
    <p>10 questions</p>
    <div className='col2-circle'><IoBulbSharp style={{fontSize:"45px", marginTop:"10px", color: "blue"}} /></div>
    
    </div>
    <div className='col2-box2'>
    <h3>Daily Progress</h3>
    <p>1 task to go!</p>
    <div className='col2-circle' >
    <h2>82%</h2>
    </div>
    </div>
    <div className='col2-box3'>
    <h2>FAQ</h2>
    <p>Find all the answers</p>
    <div className='col2-circle' ><BsFillQuestionCircleFill style={{fontSize:"40px",marginTop:"12px", color:"rgb(184, 141, 224)"}} /></div>
    </div>
    </div>

    <div className="date-display">
    <div className="month-year">
      <h2>{`${currentMonth} ${currentYear}`}</h2>
    </div>
    <div className="week-calendar">
      {weekDates.map((date, index) => (
        <div
          key={index}
          className={`day ${
            date.getDate() === currentDay ? 'active-day' : ''
          }`}
        >
          <span className="day-name">{daysOfWeek[date.getDay()]}</span>
          <span className="day-number">{date.getDate()}</span>
        </div>
      ))}
    </div>
  </div>
       <div className='row-3'>
    <div className=''>
       <h2>Upcoming calendar tasks</h2>
       </div>
    <div className='parent1'> 
         <div className='parent-row'> 
        <div className='row3-circle'>
        <p>05</p>
    </div>
    <div className='row3-'> 
      <div className='row3' > 
        <h3>UX/UI workshop</h3>
         <p  className='row3'>8 of 12 sessions, Mrs Wilson </p>
    </div>
       </div>
      </div>
      <div>
       <p>14:00-14:45</p></div>
    </div>

    <div className='parent1'> 
       <div className='parent-row'> 
         <div className='row3-circle'>
         <p>06</p>
    </div>
    <div className='row3-1'> 
       <div  className='row3'> 
        <h3>Interaction design</h3>
        <p className='row3-p'>8 of 12 sessions, Mrs Wilson </p>
    </div>
      </div>
    </div>
    <div>
    <p>11:00-14:45</p>
    </div>
    </div>
    <div className='parent1'> 
         <div className='parent-row'> 
        <div className='row3-circle'>
       <p>07</p>
    </div>
    <div className='row3-1'> 
        <div className='row3'> 
       <h3>Team Meeting</h3>
       <p>8 of 12 sessions, Mrs Wilson </p>
    </div>
       </div>
      </div>
         <div>
      <p>12:00-12:35</p>
      </div>
    </div>

    <div className='parent1'> 
       <div className='parent-row'> 
    <div className='row3-circle'>
       <p>08</p>
    </div>
    <div className='row3-1'> 
        <div className='row3'> 
        <h3>User interview</h3>
       <p>1 of 2, Zoom Meeting </p>
    </div>
       </div>
        </div>
    <div>
        <p>16:00-17:00</p>
       </div>
    </div>
     
    <div className='parent1'> 
       <div className='parent-row'> 
       <div className='row3-circle'>
         <p>09</p>
       </div>
    <div className='row3-1'> 
         <div className='row3'> 
       <h3>UX/UI workshop</h3>
        <p>8 of 12 sessions, Mrs Wilson </p>
    </div>
       </div>
      </div>
      <div>
        <p>14:00-14:45</p>
      </div>
    </div>
    <div className=''>
        <p className='sec-p'>See the entire schedule</p>
       </div>
        </div>
       </div>
      </div>
  )
}


export default Section