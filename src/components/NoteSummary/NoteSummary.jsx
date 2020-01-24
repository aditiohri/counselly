import React, {Component} from 'react';

class NoteSummary extends Component {

render() {
    return (
        <div>
    {this.props.notes.map((note, idx) => (
        <>
          <h3 className='panel-title'>Summary</h3>
          <p className='panel-title'>{note.summary}</p>
        </>
      ))}
        </div>
    )
}
}

export default NoteSummary