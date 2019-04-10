import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { deleteData, predictData } from '../../actions/dataActions';
import { validateDate } from '../../utils/validateDate';

export class DataCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            predictedValue: null,
            predictArea: false,
            date: '',
            errors: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onDeleteClick(id) {
        this.props.deleteData(id);
    }

    onPredict() {
        const validate = validateDate(this.state.date);   

        if(validate) {
            this.props.predictData();
            this.setState({errors: ''});
        } else {
            this.setState({errors: 'Invalid date'});
        } 
    }

    showPredictArea() {
        this.setState({predictArea: !this.state.predictArea});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.datas) {
            this.setState({predictedValue: nextProps.datas.predictedData['Scored Labels']});
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { data } = this.props;
        const date = moment(data.createdAt).format('DD/MM/YYYY');
        const { predictedValue, predictArea, errors } = this.state;
        const txt = !predictArea ? 'Show predicted area' : 'Hide predicted area';

        return (
            <div className="col-md-4 mt-5 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center"><strong>{date}</strong></h3>
                        <hr></hr>
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col ml-auto text-center">
                                        <h6><strong>Humidity</strong></h6>
                                        <h5>{data.humidity} %</h5>
                                </div>
                                <div className="col ml-auto text-center">
                                        <h6><strong>Air Pressure</strong></h6>
                                        <h5>{data.pressure} mbar</h5>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col ml-auto text-center">
                                        <h6><strong>Dew Point Temp.</strong></h6>
                                        <h5>{data.dewPoint} °C</h5>
                                </div>
                                <div className="col ml-auto text-center">
                                        <h6><strong>Cloud Cover</strong></h6>
                                        <h5>{data.cloudCover} %</h5>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col ml-auto text-center">
                                        <h6><strong>Wind Direction</strong></h6>
                                        <h5>{data.windBearing} °</h5>
                                </div>
                                <div className="col ml-auto text-center">
                                        <h6><strong>Wind Speed</strong></h6>
                                        <h5>{data.windSpeed} m/s</h5>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col ml-auto text-center">
                                        <h6><strong>Visibility</strong></h6>
                                        <h5>{data.visibility} km</h5>
                                </div>
                                <div className="col ml-auto text-center">
                                        <h6><strong>UV Index</strong></h6>
                                        <h5>{data.uvIndex}</h5>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row mt-3 mb-3">
                                <div className="col ml-auto text-center">
                                    <button type="button" className="btn btn-danger" onClick={this.onDeleteClick.bind(this, data._id)}>DELETE</button>
                                </div>
                            </div>
                            <div className="col ml-auto text-center">
                                    <p onClick={this.showPredictArea.bind(this)}>
                                        {txt}
                                    </p>
                                    {/* <button className="btn btn-primary" onClick={this.showPredictArea.bind(this)}>PREDICT ON THIS DATA</button> */}
                            </div>
                            {predictArea &&
                                <div className="row mt-3">
                                    <hr></hr>
                                    <div className="col ml-auto text-center">
                                        <p className="text-muted">Date format: DD/MM/YYYY</p>
                                    </div>
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors
                                          })}
                                        placeholder="Date"
                                        name="date"
                                        value={this.state.date}
                                        onChange={this.onChange}
                                    />
                                     {errors && (
                                        <div className="invalid-feedback">{errors}</div>
                                    )}
                                    <div className="col ml-auto text-center mt-3">
                                        <button className="btn btn-primary" onClick={this.onPredict.bind(this)}>PREDICT</button>
                                    </div>
                                </div>                            
                            }
                            {predictedValue !== null &&
                                <div className="row mt-3">
                                    <hr></hr>
                                    <div className="col ml-auto text-center">
                                        <h6><strong>Predicted temperature</strong></h6>
                                        <h5>{predictedValue.slice(0, 5)} °C</h5>
                                    </div>
                                </div>                            
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    datas: state.data
})

export default connect(mapStateToProps, { deleteData, predictData })(DataCard);