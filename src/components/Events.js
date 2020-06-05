import React, { Component } from 'react';
import Event from './Event'

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({
               search: event.target.value
        })
    }
    
    // return event.videoStream.indexOf(this.state.search) !== -1;

    render() {

        let filteredEvents = this.props.events.filter(
            (event) => {
                const predictions = event.predictions;
                for (const obj of predictions) {
                    const scores = obj.scores;
                for (const score of scores) {
                    if (score.label.indexOf(this.state.search) !== -1) {
                        return score.label
                    }
                }
                }
            }
        )
      
        const renderedEvents = filteredEvents.map((event, index) => <Event key={index} event={event} />)

        return (
            <div>
                <div>
                    <label>Filter By:</label>
                    <input type="text" placeholder="prediction label" value={this.state.search} onChange={this.handleOnChange} />
                    <input type="text" placeholder="prediction score" />
                    <input type="text" placeholder="videostream" />
                    <input type="text" placeholder="timestamp" />
                </div>
                <div>
                    {renderedEvents}
                </div>
            </div>
        )
    }
}

export default Events;