
import React, { Component } from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableRemove from "./TableRemove";
import Paper from '@material-ui/core/Paper';
import Add from "./Add";


class TableComponent extends Component {
  constructor(props){
    super(props);
    this.state= {reload:"no",
                toRemove:""};
  };

  handleToUpdate(someArg){
    
    this.setState({reload:someArg});
    this.setState({reload:"waiting"});
 
}





render(){
  var handleToUpdate  =   this.handleToUpdate;
  return(
    
    <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>StringStore</TableCell>
          <TableCell>Add/Remove</TableCell>
        </TableRow>
      </TableHead>
  <Query
    query={gql`
      {
        allStorage {
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
  
            
<TableBody>
      {data.allStorage.map(({ _id, name }) => {


        return(
            <TableRow key={_id}>
              <TableCell>{_id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell /*onClick={() => this.setState({toRemove:name})}*/>
                <TableRemove 
                toRemove={name} 
                reFetch={() => refetch()} handleToUpdate = {handleToUpdate.bind(this)}/>
              </TableCell>
            </TableRow>
        );
        })}
        <TableRow>
          <TableCell>
 </TableCell>
          <TableCell>
          
            </TableCell>
            <TableCell>
            <Add  reFetch={() => refetch()} handleToUpdate = {handleToUpdate.bind(this)}/>
            </TableCell>
        </TableRow>
        </TableBody>
       
          

        );
     
      }}

  </Query>
  </Table>
  </Paper>
);
    }
  }
    
export default TableComponent;
