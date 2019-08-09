import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react'
import PropTypes from 'prop-types'

let donorList = [
    {
        donorName: "Janani",
        phoneNumber: 43434343,
        bloodGroup: "O+ve",
        donationCount: 32
    },
    {
        donorName: "Dimple",
        phoneNumber: 76767676,
        bloodGroup: "A+ve",
        donationCount: 52
    },
    {
        donorName: "Rajini",
        phoneNumber: 989898,
        bloodGroup: "B+ve",
        donationCount: 92
    }
]
const ShowDonor = (props) => {

    return (
        <div >
            <h1 className="text-center">{props.title}</h1>
            <DataGrid  donorList={donorList}>
                <thead>
                    <tr>
                        <th>Donor Name</th>
                        <th>Phone Number</th>
                        <th>Blood Group</th>
                        <th>Donation Count</th>
                    </tr>
                </thead>
            </DataGrid>
        </div>
    );

}

ShowDonor.propTypes = {
    title: PropTypes.string.isRequired
}
export default ShowDonor;