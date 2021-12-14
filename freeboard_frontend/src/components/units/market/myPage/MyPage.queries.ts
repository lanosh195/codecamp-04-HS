import { gql } from "@apollo/client";

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const CEATE_POINT_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
    }
  }
`;

export const FETCH_POINT = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;
