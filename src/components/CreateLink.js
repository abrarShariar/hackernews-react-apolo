import React from 'react'
import PropTypes from 'prop-types'

// GraphQL shit
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const POST_MUTATION = gql`
    mutation PostMutation ($description: String!, $url: String!) {
      post (description: $description, url: $url) {
        id
        createdAt
        url
        description
      }
    }
`;

class CreateLink extends React.Component {

  state = {
    description: '',
    url: ''
  }

  render () {
    const { description, url } = this.state;
    return (
        <div>
          <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="A url for link"
          />
          </div>
          <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
           {postMutation => <button onClick={postMutation}>Submit</button>}
          </Mutation>
        </div>
    )
  }
}

export default CreateLink;