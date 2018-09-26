import React, { Component } from 'react';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {refetch } from "react-apollo";

const ADD = gql`
mutation createCat($name: String!) {
  createCat(name: $name) {
    _id
    name
  }
}
`;
class Add extends Component {
  constructor(props){
    super(props);

  }



render(){
  var handleToUpdate  =   this.props.handleToUpdate;
  let input;
  var reFetch= this.props.reFetch;
  return (
    
    <Mutation mutation={ADD}>
      {(createCat, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createCat({ variables: { name: input.value } });
              input.value = "";
              handleToUpdate("yes");
              reFetch();
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
          <button type="submit">Add</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
}
export default Add;