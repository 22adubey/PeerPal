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
      coaches {
        nextToken
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
        nextToken
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
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      fromId
      toId
      status
      otherMatchID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fromId
        toId
        status
        otherMatchID
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
export const matchesByFromPeer = /* GraphQL */ `
  query MatchesByFromPeer(
    $fromId: ID!
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    matchesByFromPeer(
      fromId: $fromId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fromId
        toId
        status
        otherMatchID
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
export const matchesByToPeer = /* GraphQL */ `
  query MatchesByToPeer(
    $toId: ID!
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    matchesByToPeer(
      toId: $toId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fromId
        toId
        status
        otherMatchID
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
export const getStudentCoaches = /* GraphQL */ `
  query GetStudentCoaches($id: ID!) {
    getStudentCoaches(id: $id) {
      id
      peerId
      coachId
      peer {
        id
        interests
        createdAt
        updatedAt
        owner
        __typename
      }
      coach {
        id
        subjects
        rating
        reviews
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
export const listStudentCoaches = /* GraphQL */ `
  query ListStudentCoaches(
    $filter: ModelStudentCoachesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        peerId
        coachId
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
export const studentCoachesByPeerId = /* GraphQL */ `
  query StudentCoachesByPeerId(
    $peerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentCoachesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentCoachesByPeerId(
      peerId: $peerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        peerId
        coachId
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
export const studentCoachesByCoachId = /* GraphQL */ `
  query StudentCoachesByCoachId(
    $coachId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentCoachesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentCoachesByCoachId(
      coachId: $coachId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        peerId
        coachId
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
