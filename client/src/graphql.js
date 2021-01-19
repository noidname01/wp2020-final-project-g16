import { gql } from '@apollo/client'

const CHECK_USERNAME = gql`
    query checkUsername($username: String) {
        checkUsername(username: $username)
    }
`
const GET_USER = gql`
    query getUser($username: String!, $password: String!) {
        getUser(username: $username, password: $password) {
            username
            password
            id
            emailAddress
            emailPassword
        }
    }
`

const CREATE_USER = gql`
    mutation createUser(
        $username: String!
        $password: String!
        $id: String!
        $emailAddress: String!
        $emailPassword: String!
    ) {
        createUser(
            data: {
                username: $username
                password: $password
                id: $id
                emailAddress: $emailAddress
                emailPassword: $emailPassword
            }
        ) {
            username
            password
            id
            emailAddress
            emailPassword
        }
    }
`

export { CHECK_USERNAME, GET_USER, CREATE_USER }
/*
const GET_MESSAGES = gql`
    query messages($from: String!, $to: String!) {
        messages(from: $from, to: $to) {
            from
            to
            body
        }
    }
`

const GET_USERNAMES = gql`
    query users {
        users {
            name
        }
    }
`

const SEND_MESSAGE = gql`
    mutation sendMessage($from: String!, $to: String!, $body: String!) {
        sendMessage(data: { from: $from, to: $to, body: $body }) {
            from
            to
            body
        }
    }
`
*/
