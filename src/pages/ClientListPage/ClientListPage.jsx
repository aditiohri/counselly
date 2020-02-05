import React from 'react';
import './ClientListPage.css'
import ClientListItem from '../../components/ClientListItem/ClientListItem';
import {Box} from 'grommet';

function ClientListPage(props) {
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
        align="center"
        basis="medium"
        justify="center"
        >
        <div className="ApptListPage-grid">
        <h1>All Clients</h1>
        {props.clients.map(client =>
        <ClientListItem
            client={client}
            key={client._id}
            handleDeleteClient={props.handleDeleteClient}
        />
        )}
        </div>
        </Box>
        </Box>
        </>
    )
}

export default ClientListPage