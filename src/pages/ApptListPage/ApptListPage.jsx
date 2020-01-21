import React from 'react';
import './ApptListPage.css'
import ApptListItem from '../../components/ApptListItem/ApptListItem'

function ApptListPage(props) {
    return(
        <div className="flex-h">
        <div className="ApptListPage-grid">
        <h1>All Appointments</h1>
        {props.appts.map(appt =>
        <ApptListItem
            appt={appt}
            key={appt._id}
            handleDeleteAppt={props.handleDeleteAppt}
        />
        )}
        </div>
        </div>
    )
}

export default ApptListPage