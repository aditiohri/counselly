import React from 'react';
// import {Link} from 'react-router-dom';
import './ClientListItem.css';

function ClientListItem({client, handleDeleteClient}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{client.name}</h3>
        <p className='panel-title'>{client.email}</p>
        <p className='panel-title'>{client.phone}</p>
      </div>
      <div className='panel-footer ClientListItem-action-panel'>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteClient(client._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ClientListItem;