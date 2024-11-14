import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState , useEffect } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import PatientsList from './Components/PatientsList';
import Profile from './Components/Profile';
import DiagonsticList from './Components/DiagonsticList';
import LabResult from './Components/LabResult';

function App() {

  const [Data , setData ] = useState([]);
  const [CurrData , setcurrData ] = useState([]);
  const [idx , setIdx] = useState(3);

  

  useEffect(() => {

    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0");
        
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev',requestOptions);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Update the state with the fetched data
        // setcurrData(Data[idx]);
        // console.log(CurrData,"kokoko");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []); 
  
  useEffect(() => {
    if (Data.length > 0) {
      setcurrData(Data[idx]);
    }
  }, [Data, idx]);
  
  // console.log(Data);
  console.log(CurrData,"= okok");
  
  
  function getChartData(patientData) {
    // Extract the last 6 months of diagnosis history
    const diagnosisHistory = patientData?.diagnosis_history?.slice(0, 6).reverse();
  
    // Create labels from the extracted data
    const labels = diagnosisHistory?.map(entry => `${entry.month}, ${entry.year}`);
  
    // Create the systolic and diastolic data arrays
    const systolicData = diagnosisHistory?.map(entry => entry.blood_pressure.systolic.value);
    const diastolicData = diagnosisHistory?.map(entry => entry.blood_pressure.diastolic.value);
  
    // Create the chart data object
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Systolic',
          data: systolicData,
          borderColor: '#d946ef',
          backgroundColor: '#f0abfc',
          fill: false,
        },
        {
          label: 'Diastolic',
          data: diastolicData,
          borderColor: '#8b5cf6',
          backgroundColor: '#c4b5fd',
          fill: false,
        },
      ],
    };
  
    return data;
  }
  

  
  
  // Example usage
  

  
  
  
  const data = {
    labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 140, 130, 150, 160, 160],
        borderColor: '#d946ef',
        backgroundColor: '#f0abfc',
        fill: false,
      },
      {
        label: 'Diastolic',
        data: [100, 80, 90, 70, 75, 78],
        borderColor: '#8b5cf6',
        backgroundColor: '#c4b5fd',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };


  return (
 <div >
  <Navbar/>
 <div className="grid grid-cols-12 gap-4 p-4">
  {/* Left Sidebar (Patients List) */}
  <div className="col-span-3 bg-white shadow-md p-4">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">Patients</h2>
    <button className="text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
  {/* index === 1 ? 'bg-blue-100' :  */}
  <ul className="space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
    { Data.map((patient, index) => (
      <li key={index} className={`flex items-center justify-between p-2 rounded-lg ${index === idx ? 'bg-teal-100' : 'hover:bg-gray-100'}`}>
         <PatientsList patient={patient} idx = {idx}  setIdx = {setIdx} index = {index} />
      </li>
    ))}
  </ul>
</div>
  {/* Middle Content */}
  <div className="col-span-6 space-y-4">
    {/* Diagnosis History */}
    <div className="bg-white shadow-md p-4">
  <h2 className="text-xl font-semibold mb-4">Diagnosis History</h2>
  <div className="bg-gray-100 p-4 rounded-lg">
    <h3 className="text-lg font-medium mb-4">Blood Pressure</h3>
    <div className="bg-[#f3f4f6] shadow p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 text-sm">Last 6 months</p>
        <p className="text-gray-600 text-sm">Systolic / Diastolic</p>
      </div>
      <div className="h-40 bg-[#f4f0fe]">
        {/* Insert your chart component here */}
        <Line data={getChartData(CurrData)} options={options}/>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-pink-600 font-semibold text-2xl">Systolic</p>
          <p className="text-gray-900 font-bold text-2xl">160</p>
          <p className="text-gray-500">Higher than Average</p>
        </div>
        <div>
          <p className="text-purple-600 font-semibold text-2xl">Diastolic</p>
          <p className="text-gray-900 font-bold text-2xl">78</p>
          <p className="text-gray-500">Lower than Average</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center border-2 border-blue-500">
        <img src="respiratory.png" alt="Respiratory Rate" className="w-12 h-12 mb-2" />
        <p className="text-xl font-bold">Respiratory Rate</p>
        <p className="text-2xl font-semibold">20bpm</p>
        <p className="text-green-500">Normal</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg flex flex-col items-center border-2 border-red-500">
        <img src="temperature.png" alt="Temperature" className="w-12 h-12 mb-2"/>
        <p className="text-xl font-bold">Temperature</p>
        <p className="text-2xl font-semibold">98.6</p>
        <p className="text-green-500">Normal</p>
      </div>
      <div className="bg-pink-50 p-4 rounded-lg flex flex-col items-center border-2 border-pink-500">
        <img src="Heart.png" alt="Heart Rate" className="w-12 h-12 mb-2" />
        <p className="text-xl font-bold">Heart Rate</p>
        <p className="text-2xl font-semibold">78bpm</p>
        <p className="text-yellow-500">Lower than Average</p>
      </div>
    </div>
  </div>
</div>

    {/* Diagnostic List */}
    <div className="bg-white shadow-md p-4">
  <h2 className="text-xl font-semibold mb-4">Diagnostic List</h2>
  <div className="overflow-y-auto max-h-64 pr-4"> {/* Added for scrollbar */}
    <table className="w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left py-3 px-4 font-semibold text-gray-600">Problem/Diagnosis</th>
          <th className="text-left py-3 px-4 font-semibold text-gray-600">Description</th>
          <th className="text-left py-3 px-4 font-semibold text-gray-600">Status</th>
        </tr>
      </thead>
      <tbody>
     {CurrData?.diagnostic_list?.map((list) => (
       <DiagonsticList key={list.id} list={list} />
     ))}

        {/* You can add more rows here */}
      </tbody>
    </table>
  </div>
 </div>
  </div>

  {/* Right Sidebar */}
  <div className="col-span-3 space-y-4">
    {/* Patient Profile */}
    <Profile  CurrData = {CurrData}  />
    {/* Lab Results */}
    <div className="bg-white shadow-md p-4">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">Lab Results</h2>
  <ul className="space-y-2 overflow-y-auto max-h-100">
    {CurrData?.lab_results?.map((test, index) => (
      <li 
        key={index} 
        className={`flex justify-between items-center p-3 rounded-lg ${
          index === 0 ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
        }`}
      >
      <LabResult test  ={test}/>
      </li>
    ))}
  </ul>
</div>
   </div>
 </div>
</div>
  )
}

export default App
