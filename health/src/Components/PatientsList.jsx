import React from 'react'

function PatientsList({patient , idx , setIdx , index}) {
  return (
    <>
  <button className="text-gray-400" onClick={()=> setIdx(index)} >
    <div className="flex items-center space-x-3">
          <img src={patient.profile_picture} alt={patient.name} className="w-10 h-10 rounded-full object-cover"/>
          <div>
            <p className="font-medium">{patient.name}</p>
            <p className="text-sm text-gray-500">{`${patient.gender}, ${patient.age}`}</p>
          </div>
        </div>
 </button>
    </>
  )
}

export default PatientsList