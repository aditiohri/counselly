import React from 'react';
import ApptCard from '../../components/ApptCard/ApptCard';
import NoteItem from '../../components/NoteItem/NoteItem';
import AddNote from '../../components/AddNote/AddNote';

function ApptDetailPage(props) {
  const appt = props.location.state.appt;
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
        <AddNote 
            handleAddNote={props.handleAddNote}
            appt={appt}
            notes={appt.notes}
            key={appt.notes._id}
        />
        <NoteItem 
            appt={appt}
            notes={appt.notes}
            key={appt.notes._id}
            handleDeleteNote={props.handleDeleteNote}
        />
    </div>
    </>
  );
}
export default ApptDetailPage;