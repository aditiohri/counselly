import React from 'react';
import NoteSummary from '../NoteSummary/NoteSummary'

function NoteItem({notes, key, appt, handleDeleteNote}) {
       

    return (
       <div className='panel panel-default'>
              <NoteSummary 
              note={notes}
              id={notes._id}
              />
      <div className='panel-footer ApptListItem-action-panel'>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteNote(appt._id)}
        >
          DELETE
        </button>
      </div>
    </div>
    )
}

export default NoteItem