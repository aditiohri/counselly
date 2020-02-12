import React, {Component} from 'react';

class NoteSummary extends Component {

render() {
    return (
        <div>
        <div>

          <p key={this.props.id} className='panel-title'>{this.props.note.summary}</p>

        </div>
        </div>
    )
}
}

export default NoteSummary