import React, { Component } from 'react';
import Events from '../components/Events';
import { fetchEvents } from '../actions/events';
import { connect } from 'react-redux';

class EventsContainer extends Component {

    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        const { events } = this.props;
        
        return (
            <div>
                <Events events={events} />
            </div>
        )
    }

}

const mapStateToProps = ({events}) => ({events});

const mapDispatchToProps = ({fetchEvents});

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);