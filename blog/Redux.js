/*
We can use redux with any framework or library like Angular or Veu but mainly used with React(independent of each other)

What ???
Call it a state management tool
React is a container where you can store data(state) of your whole application(Kind of an array not a database) in layman terms like a store-room
But data get lost after page refresh, so to sustain data like auth tokens, even after refresh use browser storage 

Component state is different application state

Why ???
Components are the basic building blocks of react, so for communication b/w components redux is used, there are other things also to use like context API but they are complex and not efficient

Alternative ???
MobX, GraphQL

The Redux Store#

The center of every Redux application is the store. A "store" is a container that holds your application's global state.

                                Redux Architecture
Data flow unidirectionally

**View
React components

**Action
Collect data from component and API

**Reducer
Get data from action and send it to store

**Store
state of complete application

*/