import React, {Component} from 'react';

class AddApptPage extends Component {

    state = {
        invalidForm: true,
        formData: {
            clientName: '',
            date: '',
            time: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddAppt(this.state.formData)
    }

    render () {
        return (
            <>
            Add Appointments
            </>
        )
    }

}

export default AddApptPage