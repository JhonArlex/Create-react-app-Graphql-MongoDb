
import React, { Component } from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Add from "./Add";


class TableComponent extends Component {
  constructor(props){
    super(props);
    var handleToUpdate  = this.handleToUpdate.bind(this);
    this.state= {reload:"no"};
  };

  handleToUpdate(someArg){
    
    this.setState({reload:someArg});
    this.setState({reload:"waiting"});
 
}





render(){
  var handleToUpdate  =   this.handleToUpdate;
  return(
  <Query
    query={gql`
      {
        allCats {
          _id
          name
        }
      }
    `}
  >


    {({ loading, error, data, refetch }) => {
     
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
  
        return(
          <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>SimCString</TableCell>
              </TableRow>
            </TableHead>
            
<TableBody>
      {data.allCats.map(({ _id, name }) => {


        return(
            <TableRow key={_id}>
              <TableCell>{_id}</TableCell>
              <TableCell>{name}</TableCell>
            </TableRow>
        );
        })}
        <TableRow>
          <TableCell>
 </TableCell>
          <TableCell>
          
            <Add  reFetch={() => refetch()} handleToUpdate = {handleToUpdate.bind(this)}/>
            </TableCell>
            <TableCell>
              
            </TableCell>
        </TableRow>
        </TableBody>
        </Table>
      </Paper>
          

        );
      }}

  </Query>
);
    }
  }
    
export default TableComponent;