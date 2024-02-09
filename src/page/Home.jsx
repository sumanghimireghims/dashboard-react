import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Home() {
  const [date, setDate] = useState(new Date());
  const data = [
    { name: 'Male', value: 45 },
    { name: 'Female', value: 55 }
  ];

  const COLORS = ['#d50000', '#FFA500'];

  const examData = [
    { date: '2022-01-01', exams: 2, avgScore: 80, passingRate: 75 }
  ];

  const exam = [
    { name: 'Date 1', value: 400 },
    { name: 'Date 2', value: 300 },
    { name: 'Date 3', value: 200 }
    // Add more data as needed
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>250</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>15</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>40</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>50</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className='calendar-container'>
          <h3>CALENDAR</h3>
          <Calendar onChange={setDate} value={date} />
        </div>
        
      </div>
      <ResponsiveContainer>
          <LineChart data={exam} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontalClosed="#ccc" verticalClosed="#ccc" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Exams', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
    </main>
  );
}

export default Home;