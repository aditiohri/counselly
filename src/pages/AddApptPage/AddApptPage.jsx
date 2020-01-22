import React, {Component} from 'react';
import './AddApptPage.css'

class AddApptPage extends Component {

    state = {
        invalidForm: true,
        formData: {
            clientName: '',
            date: '',
            time: '',
            userID: this.props.user._id
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
        <div className="flex-h">
            <h1 className="flex-h">Add Appointments</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Client's Name</label>
                <input 
                    className="form-control"
                    name="clientName"
                    value={this.state.formData.clientName}
                    onChange={this.handleChange}
                    required
                />
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
                <input 
                type="hidden" 
                name="userID"
                value={this.props.user._id}
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
        </div>
        )
    }

}

export default AddApptPage