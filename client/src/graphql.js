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
const CREATE_TEMPLATE = gql`
    mutation createTemplate(
        $id: String!
        $name: String!
        $description: String
        $timestamp: String!
        $userId: String!
        $content: String!
    ) {
        createTemplate(
            data: {
                id: $id
                name: $name
                description: $description
                timestamp: $timestamp
                userId: $userId
                content: $content
            }
        ) {
            id
            name
            description
            timestamp
            userId
            content
        }
    }
`
const GET_TEMPLATE = gql`
    query getTemplate($userId: String!) {
        getTemplate(userId: $userId) {
            id
            name
            description
            timestamp
            userId
            content
        }
    }
`
const DELETE_TEMPLATE = gql`
    mutation deleteTemplate($id: String!) {
        deleteTemplate(id: $id) {
            id
            name
            timestamp
            description
            content
        }
    }
`
const LOOKUP_TEMPLATE = gql`
    mutation lookupTemplate($userId: String!) {
        lookupTemplate(userId: $userId) {
            id
            name
            timestamp
            description
            content
        }
    }
`
const CREATE_DRAFT = gql`
    mutation createDraft(
        $id: String!
        $name: String!
        $sent: String!
        $userId: String!
        $templateId: String!
        $timestamp: String!
        $xlsxContent: String!
    ) {
        createDraft(
            data: {
                id: $id
                name: $name
                sent: $sent
                userId: $userId
                templateId: $templateId
                timestamp: $timestamp
                xlsxContent: $xlsxContent
            }
        ) {
            id
            name
            sent
            userId
            templateId
            timestamp
            xlsxContent
        }
    }
`
const GET_DRAFT = gql`
    query getDraft($userId: String!) {
        getDraft(userId: $userId) {
            id
            userId
            templateId
            timestamp
            xlsxContent
        }
    }
`
const DELETE_DRAFT = gql`
    mutation deleteDraft($id: String!) {
        deleteDraft(id: $id) {
            id
            userId
            templateId
            timestamp
            xlsxContent
        }
    }
`
const LOOKUP_DRAFT = gql`
    mutation lookupDraft($userId: String!) {
        lookupDraft(userId: $userId) {
            id
            userId
            templateId
            timestamp
            xlsxContent
        }
    }
`
const CREATE_SENT = gql`
    mutation createSent(
        $id: String!
        $userId: String!
        $timestamp: String!
        $draftId: String
        $subject: String!
    ) {
        createSent(
            data: {
                id: $id
                userId: $userId
                timestamp: $timestamp
                draftId: $draftId
                subject: $subject
            }
        ) {
            id
            userId
            timestamp
            draftId
            subject
        }
    }
`
const GET_SENT = gql`
    query getSent($userId: String!) {
        getSent(userId: $userId) {
            id
            userId
            timestamp
            draftId
            subject
        }
    }
`
const DELETE_SENT = gql`
    mutation deleteSent($id: String!) {
        deleteSent(id: $id) {
            id
            userId
            timestamp
            draftId
            subject
        }
    }
`
const LOOKUP_SENT = gql`
    mutation lookupSent($userId: String!) {
        lookupSent(userId: $userId) {
            id
            userId
            timestamp
            draftId
            subject
        }
    }
`
const MODIFY_USER = gql`
    mutation modifyUser(
        $username: String!
        $password: String!
        $id: String!
        $emailAddress: String!
        $emailPassword: String!
    ) {
        modifyUser(
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

const DELETE_USER = gql`
    mutation deleteUser($id: String!) {
        deleteUser(id: $id) {
            username
            password
            id
            emailAddress
            emailPassword
        }
    }
`

export {
    CHECK_USERNAME,
    GET_USER,
    CREATE_USER,
    CREATE_TEMPLATE,
    GET_TEMPLATE,
    LOOKUP_TEMPLATE,
    DELETE_TEMPLATE,
    CREATE_DRAFT,
    GET_DRAFT,
    LOOKUP_DRAFT,
    DELETE_DRAFT,
    CREATE_SENT,
    GET_SENT,
    LOOKUP_SENT,
    DELETE_SENT,
    MODIFY_USER,
    DELETE_USER,
}
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
