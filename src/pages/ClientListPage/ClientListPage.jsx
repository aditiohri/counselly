import React from 'react';
import './ClientListPage.css'
import ClientListItem from '../../components/ClientListItem/ClientListItem'

function ClientListPage(props) {
    return(
        <div className="flex-h">
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
        </div>
    )
}

export default ClientListPage