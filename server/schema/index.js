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
        userId: String!
        content: String!
    }
    input TemplateInput {
        id: String!
        userId: String!
        content: String!
    }
    type Draft {
        id: String!
        draftId: String!
        templateId: String!
        xlsxContent: String!
    }
    input DraftInput {
        id: String!
        draftId: String!
        templateId: String!
        xlsxContent: String!
    }
    type Sent {
        id: String!
        draftId: String!
    }
    input SentInput {
        id: String!
        draftId: String!
    }
    type Query {
        getUser(username: String!, password: String!): User
        getTemplate(userId: String!): [Template]
        getDraft(userId: String!): [Draft]
        getSent(userId: String!): [Sent]
    }
    type Mutation {
        createUser(data: UserInput!): User!
        createTemplate(data: TemplateInput!): Template!
        createDraft(data: DraftInput!): Draft!
        createSent(data: SentInput!): Sent!
    }
`
module.exports = { typeDefs }
