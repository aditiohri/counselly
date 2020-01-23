import React, {Component} from 'react';

class AddNote extends Component {

    state= {
        invalidForm: true,
        formData: {
            summary: '',
            img: ''
        }
}

    formRef = React.createRef();


handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddNote(this.state.formData)
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
        <div classname="flex-h">
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
