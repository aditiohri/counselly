import React from 'react';
import {Link} from 'react-router-dom';
import './ApptListItem.css';

function ApptListItem({appt, handleDeleteAppt}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{appt.clientName}</h3>
        <p className='panel-title'>{appt.date}</p>
        <p className='panel-title'>{appt.time}</p>
      </div>
      <div className='panel-footer ApptListItem-action-panel'>
          <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {appt}
          }}
        >
          DETAILS
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteAppt(appt._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ApptListItem;