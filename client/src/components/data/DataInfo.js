import React, { Component } from 'react';
import DataCard from './DataCard';

class DataInfo extends Component {

    render() {
        const { allData } = this.props;
        const data = allData.map(data => <DataCard key={data._id} data={data} />)
        
        return (
            <div className="container">
                <div className="row mt-5">
                    {data}
                </div>
            </div>
        )
    }
}
  
export default DataInfo;
