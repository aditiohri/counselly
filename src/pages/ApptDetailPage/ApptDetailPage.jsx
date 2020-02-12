import React from 'react';
import { Link } from 'react-router-dom';
import ApptCard from '../../components/ApptCard/ApptCard';
import NoteItem from '../../components/NoteItem/NoteItem';
// import AddNote from '../../components/AddNote/AddNote';


function ApptDetailPage(props) {
  const appt = props.location.state.appt;
  console.log('from appt: ', appt.notes)

  return (
    <>
      <h1>Appointment Details</h1>
    <div className="flex-h">
      <ApptCard
        key={appt._id}
        appt={appt}
      />
    </div>
    <div className="flex-h">
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/add-note',
            state: {appt}
          }}
        > Add Note 
        </Link>
      
      <h3 className='panel-title'>Summary</h3>
        {appt && appt.notes && appt.notes.length > 0 && appt.notes.map(item => ( 
            <NoteItem 
            appt={appt}
            notes={item}
            key={item._id}
            handleDeleteNote={props.handleDeleteNote}
            />
        )
        )}
    </div>
    </>
  );
}
export default ApptDetailPage;