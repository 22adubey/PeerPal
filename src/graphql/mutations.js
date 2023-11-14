/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPeer = /* GraphQL */ `
  mutation CreatePeer(
    $input: CreatePeerInput!
    $condition: ModelPeerConditionInput
  ) {
    createPeer(input: $input, condition: $condition) {
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
export const updatePeer = /* GraphQL */ `
  mutation UpdatePeer(
    $input: UpdatePeerInput!
    $condition: ModelPeerConditionInput
  ) {
    updatePeer(input: $input, condition: $condition) {
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
export const deletePeer = /* GraphQL */ `
  mutation DeletePeer(
    $input: DeletePeerInput!
    $condition: ModelPeerConditionInput
  ) {
    deletePeer(input: $input, condition: $condition) {
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
export const createCoach = /* GraphQL */ `
  mutation CreateCoach(
    $input: CreateCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    createCoach(input: $input, condition: $condition) {
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
export const updateCoach = /* GraphQL */ `
  mutation UpdateCoach(
    $input: UpdateCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    updateCoach(input: $input, condition: $condition) {
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
export const deleteCoach = /* GraphQL */ `
  mutation DeleteCoach(
    $input: DeleteCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    deleteCoach(input: $input, condition: $condition) {
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
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
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
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
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
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
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
export const createStudentCoaches = /* GraphQL */ `
  mutation CreateStudentCoaches(
    $input: CreateStudentCoachesInput!
    $condition: ModelStudentCoachesConditionInput
  ) {
    createStudentCoaches(input: $input, condition: $condition) {
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
export const updateStudentCoaches = /* GraphQL */ `
  mutation UpdateStudentCoaches(
    $input: UpdateStudentCoachesInput!
    $condition: ModelStudentCoachesConditionInput
  ) {
    updateStudentCoaches(input: $input, condition: $condition) {
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
export const deleteStudentCoaches = /* GraphQL */ `
  mutation DeleteStudentCoaches(
    $input: DeleteStudentCoachesInput!
    $condition: ModelStudentCoachesConditionInput
  ) {
    deleteStudentCoaches(input: $input, condition: $condition) {
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
