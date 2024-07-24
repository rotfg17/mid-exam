import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timesheet = () => {
  const [departments, setDepartments] = useState([]);
  const [timesheet, setTimesheet] = useState([]);

    const Deps = async () => {
      try {
        const response = await axios.post('http://192.168.0.10/js2/index.php/load', {
           filename: 'dep_data' 
          });
      } catch (error) {
        console.error('Error departments:', error);
      }
    };


  const handleSave = () => {
    // Save functionality (could be localStorage or state management)
    console.log('Timesheet saved:', timesheet);
  };

  const handleTransfer = async () => {
    try {
      await axios.post('http://192.168.0.10/js2/index.php/record', {
       
        data: timesheet,
      });
      alert('Timesheet transferred successfully');
    } catch (error) {
      console.error('Error transferring timesheet:', error);
    }
  };

  return (
    <div>
      <h2>Timesheet</h2>
      <table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default Timesheet;
