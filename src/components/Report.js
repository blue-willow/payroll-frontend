import React, { Component, Fragment } from 'react';
// MUI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//redux
import { connect } from 'react-redux';
import { getReport } from '../redux/actions';
import PropTypes from 'prop-types';

var report_ids = [1, 2, 3, 4, 5, 6, 7];
class report extends Component {
    componentDidMount() {
        this.props.getReport();
    }
    render() {
        console.log('----report:::render:::', 'this.props: ', this.props);
        const {
            data: {
                report,
                loading
            }
        } = this.props;
        let reportMarkup = !loading ? (
            report_ids.map(
                (id) => (
                    <Fragment>
                        <TableRow>
                            <TableCell component="th" scope="row">{id}</TableCell>
                            <TableCell align="right">1/11/2016 - 15/11/2016</TableCell>
                            <TableCell align="right">$300.00</TableCell>
                        </TableRow>
                    </Fragment>
                )
            )
        ) : (
                <Fragment>
                    <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </Fragment>
            )

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee ID</TableCell>
                            <TableCell align="right">Pay Period</TableCell>
                            <TableCell align="right">Amount Paid</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reportMarkup}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

report.propTypes = {
    getReport: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data,
});

export default connect(mapStateToProps, { getReport })(report);