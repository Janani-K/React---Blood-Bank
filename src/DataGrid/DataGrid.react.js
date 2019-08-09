import React from 'react';
import PropTypes from 'prop-types'


const DataGrid = (props) => {   

    return (
        <div >
            <table className="table table-striped">
                {props.children}
                <tbody>
                    {
                        props.donorList.map((eachDonor, index) => {
                            return<tr key={index}>
                                <td>{eachDonor.id}</td>
                                <td>{eachDonor.donorName}</td>
                                <td>{eachDonor.bloodGroup}</td>
                                <td>{eachDonor.phoneNumber}</td>
                                <td>{eachDonor.lastDonated}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

DataGrid.propTypes = {
    donorList: PropTypes.arrayOf(
        PropTypes.shape({
        donorName: PropTypes.string.isRequired,
        bloodGroup: PropTypes.oneOf(['apos','bpos','opos']),
        phoneNumber: PropTypes.number,
        donationCount: PropTypes.number
    }))
}

export default DataGrid;