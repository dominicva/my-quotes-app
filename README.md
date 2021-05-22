# My Quotes App

- This repo started out as my React sandbox.

- It's now a simple app that allows the user to store, search and view a collection of their favourite quotes.

## App anatomy

### Front end

- React using
  - hooks and functional components
  - React's router dom for moving between views

### Backend

- NodeJS
  - No frameworks http server
  - Writing user input to src/server/quotes.json file using node's fs module (working with streams)
  - Reading from quotes.json and rendering all saved quotes at the '/quotes' route
  - Querying quotes.json for user search parameters and responding with matching quotes
