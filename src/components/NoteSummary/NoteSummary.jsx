import React, {Component} from 'react';

class NoteSummary extends Component {

render() {
    return (
        <div>
          <h3 className='panel-title'>Summary</h3>
        <div>
    {this.props.notes.map((note, idx) => (
          <p className='panel-title'>{note.summary}</p>
      ))}
        </div>
        </div>
    )
}
}

export default NoteSummary