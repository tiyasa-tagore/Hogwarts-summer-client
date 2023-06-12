import { useState } from 'react';
import { motion } from 'framer-motion';

// Example data
const users = [
  { id: 1, name: 'User 1', addedClass: 'Class A', paymentOption: 'Option A' },
  { id: 2, name: 'User 2', addedClass: 'Class B', paymentOption: 'Option B' },
  // Add more user data as needed
];

const instructors = [
  { id: 1, name: 'Instructor 1', addedClass: 'Class A', price: 100 },
  { id: 2, name: 'Instructor 2', addedClass: 'Class B', price: 150 },
  // Add more instructor data as needed
];

const adminClasses = [
  { id: 1, name: 'Class A', price: 100 },
  { id: 2, name: 'Class B', price: 150 },
  // Add more admin class data as needed
];

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('users');

  const renderTable = () => {
    switch (selectedTab) {
      case 'users':
        return (
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Added Class</th>
                <th>Payment Option</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.addedClass}</td>
                  <td>{user.paymentOption}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        );
      case 'instructors':
        return (
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Added Class</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor) => (
                <tr key={instructor.id}>
                  <td>{instructor.name}</td>
                  <td>{instructor.addedClass}</td>
                  <td>${instructor.price}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        );
      case 'admin':
        return (
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <thead>
              <tr>
                <th>Name</th>
                
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminClasses.map((adminClass) => (
                <tr key={adminClass.id}>
                  <td>{adminClass.name}</td>
                  <td>${adminClass.price}</td>
                  <td>
                    <button onClick={() => handleRemoveClass(adminClass.id)}>Remove</button>
                    <button onClick={() => handleIncreasePrice(adminClass.id)}>Increase Price</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        );
      default:
        return null;
    }
  };

  const handleRemoveClass = (classId) => {
    // Handle removing the class from the adminClasses data
    // ...
  };

  const handleIncreasePrice = (classId) => {
    // Handle increasing the price of the class in the adminClasses data
    // ...
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <div>
        <button onClick={() => setSelectedTab('users')}>Users</button>
        <button onClick={() => setSelectedTab('instructors')}>Instructors</button>
        <button onClick={() => setSelectedTab('admin')}>Admin</button>
      </div>

      <div>{renderTable()}</div>
    </div>
  );
};

export default Dashboard;
