/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      birthday
      gender
      location {
        lat
        lng
        __typename
      }
      perferredDistance
      profilePicturePath
      firstName
      lastName
      biography
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        birthday
        gender
        perferredDistance
        profilePicturePath
        firstName
        lastName
        biography
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeer = /* GraphQL */ `
  query GetPeer($id: ID!) {
    getPeer(id: $id) {
      id
      interests
      matches {
        id
        interests
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listPeers = /* GraphQL */ `
  query ListPeers(
    $filter: ModelPeerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        interests
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoach = /* GraphQL */ `
  query GetCoach($id: ID!) {
    getCoach(id: $id) {
      id
      subjects
      rating
      students {
        id
        interests
        createdAt
        updatedAt
        owner
        __typename
      }
      reviews
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCoaches = /* GraphQL */ `
  query ListCoaches(
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subjects
        rating
        reviews
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
