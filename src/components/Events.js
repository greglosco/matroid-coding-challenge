import React, { Component } from 'react';
import Event from './Event'

class Events extends Component {
    
    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {

        const { events } = this.props

        const renderedEvents = events.map(event => <Event key={event.id} event={event} />)

        return (
            <div>
                {renderedEvents}
            </div>
        )
    }

}

export default Events;