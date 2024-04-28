import { configureStore } from '@reduxjs/toolkit'
import counter from './counter/counterSlice';
import pokemons from './pokemons/pokemonsSlice';
import { localStorageMiddleware } from './middlewares/localstorage-middleware';

export const store = configureStore({
  reducer: {
    counter,
    pokemons
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export * from './Providers';