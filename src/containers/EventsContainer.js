import React, { Component } from 'react';
import Events from '../components/Events';
import { fetchEvents } from '../actions/events';

class EventsContainer extends Component {

    render() {
        const { events, fetchEvents } = this.props;
        return (
            <div>
                <Events events={events} fetchEvents={fetchEvents} />
            </div>
        )
    }

}

const mapStateToProps = ({events}) => ({events});

const mapDispatchToProps = ({fetchEvents});

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);