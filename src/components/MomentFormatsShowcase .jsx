import React from 'react';
import moment from 'moment';

const MomentFormatsShowcase = () => {
  const now = moment();

  const formats = [
    { name: 'Default', format: 'YYYY-MM-DD HH:mm:ss' },
    { name: 'Short Date', format: 'MM/DD/YYYY' },
    { name: 'Long Date', format: 'MMMM Do YYYY' },
    { name: 'Full Date and Time', format: 'LLLL' },
    { name: 'Relative Time', format: 'fromNow' },
    { name: 'Calendar Time', format: 'calendar' },
    { name: 'Day of Week', format: 'dddd' },
    { name: 'Month Name', format: 'MMMM' },
    { name: 'Quarter', format: '[Q]Q' },
    { name: 'Week of Year', format: 'wo' },
    { name: 'Day of Year', format: 'DDD' },
    { name: 'ISO 8601', format: 'YYYY-MM-DDTHH:mm:ssZ' },
    { name: 'Unix Timestamp', format: 'X' },
    { name: 'Time', format: 'HH:mm:ss' },
    { name: '12-hour Time', format: 'hh:mm:ss A' },
    { name: 'Time with Timezone', format: 'HH:mm:ss Z' },
    { name: 'Day of Month with Ordinal', format: 'Do' },
    { name: 'Short Month/Year', format: 'MMM YYYY' },
    { name: 'Year and Week', format: 'gggg [W]ww' },
  ];

  return (
    <div>
      <h1>Moment.js Date Formats Showcase</h1>
      <p>Current Date: {now.toString()}</p>
      <table>
        <thead>
          <tr>
            <th>Format Name</th>
            <th>Format String</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {formats.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.format}</td>
              <td>
                {item.format === 'fromNow' 
                  ? now.fromNow() 
                  : item.format === 'calendar'
                    ? now.calendar()
                    : now.format(item.format)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MomentFormatsShowcase;