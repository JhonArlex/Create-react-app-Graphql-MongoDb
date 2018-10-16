import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";


const REMOVE = gql`
mutation removeCat($name: String!) {
  removeCat(name: $name) {
    _id
    name
  }
}
`;

const Remove = () => {
  
  let input;

  return (
    <Mutation mutation={REMOVE}>
      {(removeDBString, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              removeDBString({ variables: { name: input.value } });
              input.value = "";             
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Remove</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
export default Remove;
