import React, { Component } from 'react';
import Event from './Event'

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labelSearch: "",
            scoreSearch: "",
            videoStreamSearch: "",
            timestampSearch: ""
        }
    }

    handleOnChange = (event) => {
        const { name, value} = event.target;
        this.setState({
               [name]: value
        })
    }
    
    render() {

        let filteredEvents = this.props.events.filter(
            (event) => {
                if (event.videoStream.indexOf(this.state.videoStreamSearch) !== -1) {
                    return event.videoStream
                } else {
                const predictions = event.predictions;
                for (const obj of predictions) {
                    const scores = obj.scores;
                for (const score of scores) {
                    if ((score.label.indexOf(this.state.labelSearch) !== -1) && (score.score >= this.state.scoreSearch)) {
                        return score.label
                    } 
                }
                }
            }
            }
        )
      
        const renderedEvents = filteredEvents.map((event, index) => <Event key={index} event={event} />)

        return (
            <div>
                <div>
                    <label>Filter By: </label>
                    <input type="text" name="labelSearch" placeholder="prediction label" value={this.state.labelSearch} onChange={this.handleOnChange} />
                    <input type="text" name="scoreSearch" placeholder="prediction score" value={this.state.scoreSearch} onChange={this.handleOnChange} />
                    <input type="text" name="videoStreamSearch" placeholder="videoStream" value={this.state.videoStreamSearch} onChange={this.handleOnChange} />
                    <input type="text" name="timestampSearch" placeholder="timestamp" value={this.state.timestampSearch} onChange={this.handleOnChange} />
                </div>
                <div>
                    {renderedEvents}
                </div>
            </div>
        )
    }
}

export default Events;