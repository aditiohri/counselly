import React from 'react';

const notesImg = ({notes, appt}) => {
    if (notes.img) return (
        <div className="panel-heading">
         <p className='panel-title'><img src={notes.img} alt={appt.clientName}/></p>
        </div>
    )
}

const notesSum = ({notes, appt}) => {
    if (notes.summary) return (
      <div className="panel-heading">
        <h3 className='panel-title'>Summary</h3>
        <p className='panel-title'>{notes.summary}</p>
      </div>
    )
}

function NoteItem({notes, key, appt, handleDeleteNote}) {
    return (
       <div className='panel panel-default'>
        {notesSum}
        {notesImg}
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