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
            <h1>Add Appointments</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Client's Name (required)</label>
                <input 
                    className="form-control"
                    name="clientName"
                    value={this.state.formData.clientName}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Appointment Date (required)</label>
                <input 
                    className="form-control"
                    name="date"
                    value={this.state.formData.date}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Appointment time (required)</label>
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
            </>
        )
    }

}

export default AddApptPage