import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


const styles = theme => ({
    root: {
        width: '70%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        justifyContent: 'center',
        marginLeft: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3
    },
    table: {
        minWidth: 700,
    },
});


function SimpleTable(props) {
    const {classes} = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Name</CustomTableCell>
                        <CustomTableCell>Position</CustomTableCell>
                        <CustomTableCell>Age</CustomTableCell>
                        <CustomTableCell>Telephonenumber</CustomTableCell>
                        <CustomTableCell>Email</CustomTableCell>
                        <CustomTableCell>City</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell >Ake</TableCell>
                        <TableCell >Tester</TableCell>
                        <TableCell >23</TableCell>
                        <TableCell >089-8557409</TableCell>
                        <TableCell >sniperaek@gmail.com</TableCell>
                        <TableCell >ChiangMai</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Ake2</TableCell>
                        <TableCell >Tester</TableCell>
                        <TableCell >23</TableCell>
                        <TableCell >089-8557409</TableCell>
                        <TableCell >sniperaek@gmail.com</TableCell>
                        <TableCell >ChiangMai</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
