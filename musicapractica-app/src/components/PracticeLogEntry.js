import React from 'react';

class PracticeLog extends React.Component {

    render() {
        console.log(this.props.logs)
        return (
             <h3>Practice Log Entry</h3>
        );
    }

}

export default PracticeLog;