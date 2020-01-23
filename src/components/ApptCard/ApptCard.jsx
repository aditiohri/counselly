import React from 'react';
import {Link} from 'react-router-dom';

function ApptCard({appt}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{appt.clientName}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Date</dt>
          <dd>{appt.date}</dd>
          <dt>Time</dt>
          <dd>{appt.time}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/all-appointments'>RETURN TO INDEX</Link>
      </div>
    </div>
  );
}

export default ApptCard;