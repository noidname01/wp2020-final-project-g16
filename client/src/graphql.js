import { gql } from '@apollo/client'

const CHECK_USERNAME = gql`
    query checkUsername($username: String) {
        checkUsername(username: $username)
    }
`

export default { CHECK_USERNAME }
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
