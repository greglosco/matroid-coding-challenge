import React, { Component } from 'react';

class Event extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleOnClick = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        const { event } = this.props;

        return(
            <div>
                <div onClick={this.handleOnClick}>
                    <h3>{event.videoStream}</h3>
                </div>
                {this.state.open ? (
                    <div>
                        <img src={event.imageSource} /><br/>
                        {console.log(event.predictions)}
                        {event.predictions.map(prediction => (
                            <div>
                                <h5>Bounding Box:</h5>
                                <ul>
                                    <li>Top: {prediction.boundingBox.top}</li>
                                     <li>Left: {prediction.boundingBox.left}</li>
                                     <li>Height: {prediction.boundingBox.height}</li>
                                     <li>Width: {prediction.boundingBox.width}</li>
                                </ul>
                                {prediction.scores.map(score => (
                                    <div>
                                        <h5>Score:</h5>
                                        {score.label},
                                        {score.score}
                                    </div>
                                ))}
                            </div>
                        ))}
                        {/* {event.predictions.scores.map(score => score.label - score.score)} */}
                    </div>
                ) : null}
            </div>
        )
    }

}

export default Event;