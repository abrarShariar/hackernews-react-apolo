import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

// GraphQL shit
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
    {
      feed {
        links {
          id
          createdAt
          url
          description
        }
      }
    }
`;

class LinkList extends Component {
  render () {
    return (
      <div>
        <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) { return <div> Fetching... </div> }
            if (error) { return <div>Error</div> }

              const linksToRender = data.feed.links;
              return (
                <div>
                  {linksToRender.map((link) => {
                    return (
                      <div>
                        <Link key={link.id} link={link}></Link>
                      </div>
                    )
                  })}
                </div>
              )
          }}
        </Query>
      </div>
    )
  }
}

export default LinkList;
