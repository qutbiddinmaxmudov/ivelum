const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const app = express()
app.use(cors())

const root = {}

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
)

app.listen(5000, () => console.log('server started on port 5000'))
