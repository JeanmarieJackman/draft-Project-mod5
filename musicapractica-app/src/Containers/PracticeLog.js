import React from 'react';
import Calendar from '../Components/Calendar';
import CreatePractice from '../Components/CreatePractice';
import PracticeLogEntry from '../Components/PracticeLogEntry';

class PracticeLog extends React.Component {

    state = {
        logs: []
        }
    
        componentDidMount() {
        fetch('http://localhost:3001/logs')
            .then(resp => resp.json())
            .then(logs => this.setState({ logs: logs }))
            .catch(console.log)
        }
        render() {
        console.log(this.state.logs)
        return (
            <>
            {/* <div>
                <Search />
            </div> */}
            <div className='container'>
                <Calendar logs={this.state.logs} />
                <CreatePractice logs={this.state.logs} />
                <PracticeLogEntry logs={this.state.logs} />  
            </div>
            </>
        )
    }
  }
  
  export default PracticeLog;