const postsResolvers = require('./posts')
const usersResolver = require('./users')
const commentsResolver = require('./comments')
const likesResolver = require('./likes')

module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolver.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolver.Mutation,
        ...likesResolver.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}