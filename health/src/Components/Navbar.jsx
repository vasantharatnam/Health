import React from 'react'

function Navbar() {
 
 

  return (
    <div className="bg-white shadow-md p-4">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-4">
        <img src="TestLogo.png" alt="Logo" className="h-10 w-auto" />
      </div>
  
      {/* Navigation Links */}
      <div className="flex space-x-8">
  <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
    <img src="home.png" alt="Overview Icon" className="w-5 h-5 mr-2" />
    Overview
  </a>
  <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
    <img src="group.png" alt="Patients Icon" className="w-5 h-5 mr-2" />
    Patients list
  </a>
  <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
    <img src="calendar_today.png" alt="Schedule Icon" className="w-5 h-5 mr-2" />
    Schedule
  </a>
  <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
    <img src="chat_bubble.png" alt="Message Icon" className="w-5 h-5 mr-2" />
    Message
  </a>
  <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
    <img src="credit_card.png" alt="Transactions Icon" className="w-5 h-5 mr-2" />
    Transactions
  </a>
</div>

      {/* User Profile */}
      <div className="flex items-center space-x-4">
        <img src="doctor.png" className="w-10 h-10 rounded-full border border-gray-300" alt="Doctor" />
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Dr. Jose Simmons</h3>
          <p className="text-xs text-gray-500">General Practitioner</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar
