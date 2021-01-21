const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        username: String!
        password: String!
        id: String!
        emailAddress: String!
        emailPassword: String!
    }
    input UserInput {
        username: String!
        password: String!
        id: String!
        emailAddress: String!
        emailPassword: String!
    }

    type Template {
        id: String!
        name: String!
        timestamp: String!
        description: String
        userId: String!
        content: String!
    }
    input TemplateInput {
        id: String!
        name: String!
        timestamp: String!
        description: String
        userId: String!
        content: String!
    }
    type Draft {
        id: String!
        userId: String!
        templateId: String!
        timestamp: String!
        xlsxContent: String!
    }
    input DraftInput {
        id: String!
        name: String!
        sent: Boolean!
        userId: String!
        templateId: String!
        timestamp: String!
        xlsxContent: String!
    }
    type Sent {
        id: String!
        userId: String!
        timestamp: String!
        draftId: String
        subject: String!
    }
    input SentInput {
        id: String!
        userId: String!
        timestamp: String!
        draftId: String
        subject: String!
    }
    type Query {
        checkUsername(username: String): Boolean
        getUser(username: String!, password: String!): [User]
        getTemplate(userId: String!): [Template]
        getDraft(userId: String!): [Draft]
        getSent(userId: String!): [Sent]
    }
    type Mutation {
        lookupTemplate(userId: String!): [Template]
        deleteTemplate(id: String!): Template
        lookupDraft(userId: String!): [Draft]
        deleteDraft(id: String!): Draft
        lookupSent(userId: String!): [Sent]
        deleteSent(id: String!): Sent

        createUser(data: UserInput!): User
        createTemplate(data: TemplateInput!): Template!
        createDraft(data: DraftInput!): Draft!
        createSent(data: SentInput!): Sent!
        modifyUser(data: UserInput!): User
        deleteUser(id: String!): User
    }
`
module.exports = { typeDefs }
