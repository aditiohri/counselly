import React, { Component } from 'react';
import {FormField, Select, Form, Button, Box } from 'grommet';
// import {UserAdd} from 'grommet-icons';

class AddApptPage extends Component {

    state = {
        // invalidForm: true,
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
        console.log('handleChange: ', this.state.formData.name)
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            // invalidForm: !this.formRef.current.checkValidity()
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
            <Form 
            ref={this.formRef} 
            autoComplete="off" 
            onSubmit={this.handleSubmit}
            >
                <FormField
                    label="Client"
                    component={Select}
                    name="clientName"
                    options={this.props.clients.map(client => client.name)}
                    value={this.state.formData.clientName}
                    // valueKey={this.setState({ clientName: this.value })}
                    onChange={this.handleChange}
                />
                <FormField 
                    label="Appointment Date"
                    name="date"
                    value={this.state.formData.date}
                    onChange={this.handleChange}
                    required
                />
                <FormField
                    label="Appointment time"
                    name="time"
                    value={this.state.formData.time}
                    onChange={this.handleChange}
                    required
                />
            <Button
                primary
                type="submit"
                className="btn"
                // disabled={this.state.invalidForm}
                label="Add appointment"
            />
            </Form>
        </Box>
        </Box>
        </>
        )
    }

}

export default AddApptPage