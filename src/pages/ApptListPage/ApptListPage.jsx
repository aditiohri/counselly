import React from 'react';
import './ApptListPage.css'
import ApptListItem from '../../components/ApptListItem/ApptListItem';
import {Box} from 'grommet';

function ApptListPage(props) {
    return(
        <>
        <Box 
        direction='row' 
        flex 
        align="center"
        basis="medium"
        >
        <Box 
        flex 
        overflow={{ horizontal:'hidden' }}
        align="center"
        basis="medium"
        justify="center"
        >
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
        </Box>
        </Box>
        </>
    )
}

export default ApptListPage