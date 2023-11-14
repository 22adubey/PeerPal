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
export const onUpdatePeer = /* GraphQL */ `
  subscription OnUpdatePeer(
    $filter: ModelSubscriptionPeerFilterInput
    $owner: String
  ) {
    onUpdatePeer(filter: $filter, owner: $owner) {
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
export const onDeletePeer = /* GraphQL */ `
  subscription OnDeletePeer(
    $filter: ModelSubscriptionPeerFilterInput
    $owner: String
  ) {
    onDeletePeer(filter: $filter, owner: $owner) {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onCreateMatch(filter: $filter, owner: $owner) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onUpdateMatch(filter: $filter, owner: $owner) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onDeleteMatch(filter: $filter, owner: $owner) {
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
export const onCreateStudentCoaches = /* GraphQL */ `
  subscription OnCreateStudentCoaches(
    $filter: ModelSubscriptionStudentCoachesFilterInput
    $owner: String
  ) {
    onCreateStudentCoaches(filter: $filter, owner: $owner) {
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
export const onUpdateStudentCoaches = /* GraphQL */ `
  subscription OnUpdateStudentCoaches(
    $filter: ModelSubscriptionStudentCoachesFilterInput
    $owner: String
  ) {
    onUpdateStudentCoaches(filter: $filter, owner: $owner) {
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
export const onDeleteStudentCoaches = /* GraphQL */ `
  subscription OnDeleteStudentCoaches(
    $filter: ModelSubscriptionStudentCoachesFilterInput
    $owner: String
  ) {
    onDeleteStudentCoaches(filter: $filter, owner: $owner) {
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
