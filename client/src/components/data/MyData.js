import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataInfo from './DataInfo';
import Loading from '../Loading';
import { getAllData, predictData } from '../../actions/dataActions';

class MyData extends Component {

    componentDidMount() {
        this.props.getAllData();
    }

    render() {
        const { allData, loading } = this.props.data;
        let content;

        if(allData === null || loading ) {
            content = <Loading />
        } else {
            content =  <DataInfo allData={allData} />
        }

        return (
            <div className="container">
                <div className="row">
                    {content}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
  });
  
export default connect(mapStateToProps, { getAllData, predictData })(MyData);
