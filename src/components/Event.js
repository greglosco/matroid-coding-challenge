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

    handleCorrectClick = (e) => {
        console.log(e.target.parentElement.parentElement.style.border = "2px solid green")
    }

    render() {

        const { event } = this.props;

        return(
            <div className="ui fluid card">
                <div onClick={this.handleOnClick}>
                    <h3>{(new Date(event.timestamp * 1000).toLocaleTimeString('it-IT'))} -- {event.videoStream}</h3>
                </div>
                {this.state.open ? (
                    <div className="ui divided middle aligned list">
                        <img src={event.imageSource} alt="failed to upload -- please refresh"/><br/>
                        <div className="item">
                            <li>
                                <h5 className="ui horizontal blue label">Timestamp: </h5>
                                {new Date(event.timestamp * 1000).toLocaleTimeString('it-IT')}
                            </li>
                        </div>
                        {event.predictions.map(prediction => (
                            <div className="item">
                                <h3>Prediction: <div className="ui mini positive button" onClick={this.handleCorrectClick}>Correct?</div></h3>
                                <div className="item">
                                    <h5 className="ui horizontal blue label">Bounding Box:</h5><br/>
                                    <div className="ui horizontal list">
                                            <li className="item">Top: {prediction.boundingBox.top}</li>
                                            <li className="item">Left: {prediction.boundingBox.left}</li>
                                            <li className="item">Height: {prediction.boundingBox.height}</li>
                                            <li className="item">Width: {prediction.boundingBox.width}</li>
                                    </div>
                                </div>
                                <h3 className="ui horizontal blue label">Score:</h3><br/>
                                {prediction.scores.map(score => (
                                    <div className="item"> 
                                        <div className="ui horizontal list">
                                            <li className="item"><h5 className="ui horizontal label">Label:</h5>{score.label}</li>
                                            <li className="item"><h5 className="ui horizontal label">Score:</h5>{score.score}</li>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        )
    }

}

export default Event;