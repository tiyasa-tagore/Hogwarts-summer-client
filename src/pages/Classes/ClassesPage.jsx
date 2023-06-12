import  { useState } from 'react';
import classesData from '../../../public/classes.json';
import SectionTitle from '../../components/SecTitle';

const ClassesPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to true if the user is logged in as admin/instructor

  const handleSelectClass = (classId) => {
    if (!isLoggedIn) {
      // Prompt the user to log in
      alert('Please log in before selecting the course.');
      return;
    }

    // Handle the logic for selecting the class
    // ...
  };

  return (
    <div className="container bg bg-slate-800 pt-10">
    <div className='bg-slate-400'>
    <SectionTitle  heading="Professors of Hogwarts" />
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pb-9">
        {classesData.map((cls) => (
          <div key={cls._id} className={`bg-gray-700 rounded-xl shadow-lg p-6 ${cls.availableSeats === 0 ? 'bg-red-200' : ''}`}>
            <img src={cls.image} alt={cls.name} className="w-full mb-4 rounded-md h-50" />
            <h2 className="text-2xl text-white font-bold mb-2">Class: {cls.name}</h2>
            <p className="text-white items-start mb-4">Professor: {cls.instructor}</p>
            <p className="text-white  mb-2">Available Seats: {cls.availableSeats}</p>
            <p className="text-white mb-4">Price: $ {cls.price}</p>
            <button
              className={`px-4 py-2 rounded-md bg-red-500 text-white font-semibold ${
                cls.availableSeats === 0 || isLoggedIn ? 'bg-opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => handleSelectClass(cls._id)}
              disabled={cls.availableSeats === 0 || isLoggedIn}
            >
              {isLoggedIn ? 'Select' : ' Select'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
