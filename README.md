## hackernews clone with React + Apolo (GraphQL)


### GraphQL queries, mutations and subscriptions


* Query the first 10 links

```graphql
query {
  feed (skip:0, first:10) {
  links {
    id
    url
    postedBy {
      name
      email
    }
  }
 }
}
```

* Create a new links

```graphql
mutation {
  post(
    description: "Prisma turns your database into a GraphQL API2 😎",
    url: "https://www.prismagraphql2.com"
  ) {
     	id
    	url
      description
      postedBy {
        name
        email
      }
    }
 }
```


* Query first 5 links

```graphql
query {
  feed (skip: 0, first: 5) {
    links {
      url
    }
  }
}
```
