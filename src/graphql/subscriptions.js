/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreatePeer = /* GraphQL */ `
  subscription OnCreatePeer(
    $filter: ModelSubscriptionPeerFilterInput
    $owner: String
  ) {
    onCreatePeer(filter: $filter, owner: $owner) {
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
export const onUpdatePeer = /* GraphQL */ `
  subscription OnUpdatePeer(
    $filter: ModelSubscriptionPeerFilterInput
    $owner: String
  ) {
    onUpdatePeer(filter: $filter, owner: $owner) {
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
export const onDeletePeer = /* GraphQL */ `
  subscription OnDeletePeer(
    $filter: ModelSubscriptionPeerFilterInput
    $owner: String
  ) {
    onDeletePeer(filter: $filter, owner: $owner) {
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
export const onCreateCoach = /* GraphQL */ `
  subscription OnCreateCoach(
    $filter: ModelSubscriptionCoachFilterInput
    $owner: String
  ) {
    onCreateCoach(filter: $filter, owner: $owner) {
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
export const onUpdateCoach = /* GraphQL */ `
  subscription OnUpdateCoach(
    $filter: ModelSubscriptionCoachFilterInput
    $owner: String
  ) {
    onUpdateCoach(filter: $filter, owner: $owner) {
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
export const onDeleteCoach = /* GraphQL */ `
  subscription OnDeleteCoach(
    $filter: ModelSubscriptionCoachFilterInput
    $owner: String
  ) {
    onDeleteCoach(filter: $filter, owner: $owner) {
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
