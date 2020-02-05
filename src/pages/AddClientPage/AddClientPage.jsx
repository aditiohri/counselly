import React, {Component} from 'react';
import './AddClientPage.css'
import { Box } from 'grommet';

class AddClientPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            email: '',
            phone: '',
        }
    };


 formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.formData)
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
            </div>
            <button
                type="submit"
                className="btn"
                disabled={this.state.invalidForm}
            >
            ADD CLIENT
            </button>
            </form>
        </Box>
        </Box>
        </>
        )
    }

}

export default AddClientPage