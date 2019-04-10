import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { addData } from '../../actions/dataActions';
import ValidInputData from '../../utils/validInputData';

class PostData extends Component {
    constructor() {
        super();
        this.state = {
          humidity: '',
          pressure: '',
          dewPoint: '',
          cloudCover: '',
          windBearing: '',
          windSpeed: '',
          visibility: '',
          uvIndex: '',
          errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    
        const data = {
            windBearing: this.state.windBearing,
            windSpeed: this.state.windSpeed,
            dewPoint: this.state.dewPoint,
            cloudCover: this.state.cloudCover,
            pressure: this.state.pressure,
            visibility: this.state.visibility,
            humidity: this.state.humidity,
            uvIndex: this.state.uvIndex,
        };

        const { errors } =  ValidInputData(data);

        if ( Object.keys(errors).length > 0 ) return this.setState({errors});
        
        this.props.addData(data, this.props.history);


      }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 m-auto">
                    <h3 className="text-center mb-5">Insert Data</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col ml-auto text-center">
                                    <h6><strong>Humidity [%]</strong></h6>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.humidity
                                            })}
                                            name="humidity"
                                            value={this.state.humidity}
                                            onChange={this.onChange}
                                        />
                                        {errors.humidity && (
                                            <div className="invalid-feedback">{errors.humidity}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="col ml-auto text-center">
                                    <h6><strong>Pressure [mbar]</strong></h6>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.pressure
                                            })}
                                            name="pressure"
                                            value={this.state.pressure}
                                            onChange={this.onChange}
                                        />
                                        {errors.pressure && (
                                            <div className="invalid-feedback">{errors.pressure}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col ml-auto text-center">
                                    <h6><strong>Dew Point Temp. [°C]</strong></h6>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.dewPoint
                                            })}
                                            name="dewPoint"
                                            value={this.state.dewPoint}
                                            onChange={this.onChange}
                                        />
                                        {errors.dewPoint && (
                                            <div className="invalid-feedback">{errors.dewPoint}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="col ml-auto text-center">
                                    <h6><strong>Cloud Cover [%]</strong></h6>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.cloudCover
                                            })}
                                            name="cloudCover"
                                            value={this.state.cloudCover}
                                            onChange={this.onChange}
                                        />
                                        {errors.cloudCover && (
                                            <div className="invalid-feedback">{errors.cloudCover}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col ml-auto text-center">
                                    <h6><strong>Wind Direction [°]</strong></h6>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.windBearing
                                            })}
                                            name="windBearing"
                                            value={this.state.windBearing}
                                            onChange={this.onChange}
                                        />
                                        {errors.windBearing && (
                                            <div className="invalid-feedback">{errors.windBearing}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="col ml-auto text-center">
                                    <h6><strong>Wind Speed [m/s]</strong></h6>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.windSpeed
                                            })}
                                            name="windSpeed"
                                            value={this.state.windSpeed}
                                            onChange={this.onChange}
                                        />
                                        {errors.windSpeed && (
                                            <div className="invalid-feedback">{errors.windSpeed}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col ml-auto text-center">
                                    <h6><strong>Visibility [km]</strong></h6>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.visibility
                                            })}
                                            name="visibility"
                                            value={this.state.visibility}
                                            onChange={this.onChange}
                                        />
                                        {errors.visibility && (
                                            <div className="invalid-feedback">{errors.visibility}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="col ml-auto text-center">
                                    <h6><strong>UV Index</strong></h6>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.uvIndex
                                            })}
                                            name="uvIndex"
                                            value={this.state.uvIndex}
                                            onChange={this.onChange}
                                        />
                                        {errors.uvIndex && (
                                            <div className="invalid-feedback">{errors.uvIndex}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { addData })(PostData);