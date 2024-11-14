import React from 'react'

function Profile({CurrData}) {
  return (
    <>
    <div className="bg-white shadow-md p-4">
  <h2 className="text-xl font-semibold mb-4">Patient Profile</h2>
  <div className="flex flex-col items-center mb-4">
    <img src={CurrData.profile_picture} alt="Patient" className="w-24 h-24 rounded-full mb-2"/>
    <p className="text-2xl font-semibold">{CurrData.name}</p>
  </div>
  <div className="space-y-3">
    <div className="flex items-center">
      <img src="BirthIcon.png" alt="DOB" className="w-6 h-6 mr-2"/> {/* Date of Birth Icon */}
      <div>
        <p className="text-sm text-gray-500">Date Of Birth</p>
        <p className="font-medium">{CurrData.date_of_birth}</p>
      </div>
    </div>
    <div className="flex items-center">
      <img src="FemaleIcon.png" alt="Gender" className="w-6 h-6 mr-2"/> {/* Gender Icon */}
      <div>
        <p className="text-sm text-gray-500">Gender</p>
        <p className="font-medium">{CurrData.gender}</p>
      </div>
    </div>
    <div className="flex items-center">
      <img src="PhoneIcon.png" alt="Contact" className="w-6 h-6 mr-2"/> {/* Contact Info Icon */}
      <div>
        <p className="text-sm text-gray-500">Contact Info.</p>
        <p className="font-medium">{CurrData.phone_number}</p>
      </div>
    </div>
    <div className="flex items-center">
      <img src="PhoneIcon.png" alt="Emergency Contact" className="w-6 h-6 mr-2"/> {/* Emergency Contact Icon */}
      <div>
        <p className="text-sm text-gray-500">Emergency Contacts</p>
        <p className="font-medium">{CurrData.emergency_contact}</p>
      </div>
    </div>
    <div className="flex items-center">
      <img src="InsuranceIcon.png" alt="Insurance Provider" className="w-6 h-6 mr-2"/> {/* Insurance Provider Icon */}
      <div>
        <p className="text-sm text-gray-500">Insurance Provider</p>
        <p className="font-medium">{CurrData.insurance_type}</p>
      </div>
    </div>
  </div>
  <button className="mt-4 w-full bg-teal-400 text-white py-2 rounded-full hover:bg-teal-500 transition duration-300">
    Show All Information
  </button>
</div>
 </>
  )
}

export default Profile