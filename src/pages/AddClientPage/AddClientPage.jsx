import React, {Component} from 'react';
import './AddClientPage.css'

class AddClientPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            email: '',
            phone: '',
            userID: this.props.user._id
        }
    };


 formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddClient(this.state.formData)
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
            <h1 className="flex-h">Add Client</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Client's Name</label>
                <input 
                    className="form-control"
                    name="name"
                    value={this.state.formData.name}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Client Email</label>
                <input 
                    className="form-control"
                    name="email"
                    value={this.state.formData.email}
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input 
                    className="form-control"
                    name="phone"
                    value={this.state.formData.phone}
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
            ADD CLIENT
            </button>
            </form>
            </div>
        )
    }

}

export default AddClientPage