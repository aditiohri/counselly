import React, {Component} from 'react';
import { Box } from 'grommet';

class AddApptPage extends Component {

    state = {
        invalidForm: true,
        formData: {
            clientName: '',
            date: '',
            time: '',
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddAppt(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    render () {
        return (
        <>
        <Box 
        direction='column' 
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
            <h1 className="flex-h">Add Appointments</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Client's Name</label>
                <select
                    type="dropdown"
                    name="clientName"
                    value={this.state.formData.clientName}
                    onChange={this.handleChange}
                >
                {this.props.clients.map( (client) => (
                    <option 
                    name="clientName"
                    key={client.email}
                    value={client.name}
                    onChange={this.handleChange}
                    >
                    {client.name}
                    </option>
                ))}
                </select>
            </div>
            <div className="form-group">
                <label>Appointment Date</label>
                <input 
                    className="form-control"
                    name="date"
                    value={this.state.formData.date}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Appointment time</label>
                <input 
                    className="form-control"
                    name="time"
                    value={this.state.formData.time}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="btn"
                disabled={this.state.invalidForm}
            >
            ADD APPOINTMENT
            </button>
            </form>
        </Box>
        </Box>
        </>
        )
    }

}

export default AddApptPage