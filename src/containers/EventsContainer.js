import React, { Component } from 'react';
import Events from '../components/Events';
import EventsFilter from '../components/EventsFilter';
import { fetchEvents } from '../actions/events';
import { connect } from 'react-redux';

class EventsContainer extends Component {

    render() {
        const { events, fetchEvents } = this.props;
        return (
            <div>
                <EventsFilter />
                <Events events={events} fetchEvents={fetchEvents} />
            </div>
        )
    }

}

const mapStateToProps = ({events}) => ({events});

const mapDispatchToProps = ({fetchEvents});

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);