import React, {Component} from 'react';

class AddNote extends Component {

    state= {
        invalidForm: true,
        formData: this.props.location.state.appt.notes
}

    formRef = React.createRef();


handleSubmit = e => {
    e.preventDefault();
    console.log('hello from handleSubmit: ', this.state.formData)
    this.props.handleAddNote(this.state.formData, this.props.location.state.appt._id)
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
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Appointment Notes</label>
                    <input 
                        type="textarea"
                        className="form-control"
                        name="summary"
                        value={this.state.formData.summary}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Images</label>
                    <input 
                        className="form-control"
                        name="img"
                        value={this.state.formData.img}
                        onChange={this.handleChange}
                    />
                </div>
            <button
                type="submit"
                className="btn"
                disabled={this.state.invalidForm}
                >
                ADD NOTES
            </button>
            </form>
        </div>
    )
    }
    }

export default AddNote

//   const returnData = () => {
//     return appt
//   }