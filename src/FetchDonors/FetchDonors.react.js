import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react'


class FetchDonors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {donorList:[]}
    }

    componentDidMount(){
        let url = "http://localhost:3000/bloodDonors";
        fetch (url)
        .then(result => result.json())
        .then(donorList => this.setState({donorList}));
    }

    render() {
        return (
            <div >
                <DataGrid donorList={this.state.donorList}></DataGrid>
            </div>
        );
    }
}

export default FetchDonors;