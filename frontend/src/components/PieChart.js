import React from 'react'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";
const PieCharts = () => {
    const data=[
        {
          city:'Mumbai',
          state:'Maharashtra',
          people:{
            male:2000,
            female:2200,
          }
        },
        {
          city:'Patna',
          state:'Bihar',
           people:{
            male:1800,
            female:1500,
          }
        },
        {
          city:'Kanpur',
          state:'Uttar Pradesh',
          people:{
            male:1850,
            female:1700,
          }
        }
     ]
  
    return (
        <div style={{ textAlign: "center" }}>
        <h1>Socail Media Users</h1>
        <div className="App">
            <h1>MALE</h1>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="people.male"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            
            
            <Tooltip />
          </PieChart>
          <h1>FEMALE</h1>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="people.female"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
          <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="city"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="people.male" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="city"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="people.female" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
        </div>
      </div>
    );
  }

export default PieCharts
