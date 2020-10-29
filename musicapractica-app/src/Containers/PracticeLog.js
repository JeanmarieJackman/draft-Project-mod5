import React from 'react';
import Calendar from '../Components/Calendar';
import CreatePractice from '../Components/CreatePractice';

class PracticeLog extends React.Component {

    // state = {
    //     recipes: []
    //     }
    
        componentDidMount() {
        fetch('http://localhost:3000/api/v1/recipes')
            .then(resp => resp.json())
            .then(recipes => this.setState({ recipes: recipes }))
            .catch(console.log)
        }
        render() {
        // console.log(this.state.recipes)
        return (
            <>
            {/* <div>
                <Search />
            </div> */}
            <div className='container'>
                <Calendar />
                <CreatePractice />
                {/* <Sidebar recipes={this.state.recipes} />
                <Content recipes={this.state.recipes} /> */}
    
            </div>
            </>
        )
    }
  }
  
  export default PracticeLog;