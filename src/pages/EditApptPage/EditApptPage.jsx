import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditApptPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.appt
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateAppt(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Appointment</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Client Name</label>
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
            <label>Date</label>
            <input
              className="form-control"
              name="date"
              value={this.state.formData.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input
              className="form-control"
              name="time"
              value={this.state.formData.time}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE APPOINTMENT
          </button>&nbsp;&nbsp;
          <Link to='/all-appointments'>CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditApptPage;