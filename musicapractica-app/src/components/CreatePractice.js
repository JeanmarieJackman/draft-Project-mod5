import React from 'react';

class CreatePractice extends React.Component {

    state={
        logs: [],
        date: "",
        duration: "",
        instrument: "",
        subject: "",
        goal: "",
        reflection: ""
    }


        submitHandler = (e) => {
        e.preventDefault()
        // this.props.submitHandler(this.state)
        fetch('http://localhost:3000/api/v1/logs', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
            title: this.state.date,
            image: this.state.duration,
            summary: this.state.instrument,
            readyInMinutes: this.state.subject,
            servings: this.state.goal,
            ingredients: this.state.reflection
            })
        })
        .then(resp => resp.json())
        .then(newLog => {
            let newArray = [...this.state.logs, newLog]
            this.setState({ 
            logs: newArray,
            date: "",
            duration: "",
            instrument: "",
            subject: "",
            goal: "",
            reflection: []
            })
        })
        .catch(console.log)
    }

        changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
    console.log(this.state.ingredients)
    return (
        <>
        <h3>Create a Recipe</h3>
        <form className="new-practice-log-form" onSubmit={this.submitHandler}>
        <input placeholder="Date" type="text" name="date" value={this.state.date} onChange={this.changeHandler} />
        <input placeholder="Duration" type="integer" name="duration" value={this.state.duration} onChange={this.changeHandler} />
        <input placeholder="Instrument" type="text" name="instrument" value={this.state.instrument} onChange={this.changeHandler} />
        <input placeholder="Piece, Etude, or Scales practiced" type="text" name="subject" value={this.state.subject} onChange={this.changeHandler} />
        <input placeholder="Goals" type="text" name="goal" value={this.state.goal} onChange={this.changeHandler} />
        <textarea placeholder="Reflection" rows={10} type="text" name="reflection" value={this.state.reflection} onChange={this.changeHandler} />
        <input type="submit" value="Submit" />
        </form>
        </>
    );
    }

}

export default CreatePractice;