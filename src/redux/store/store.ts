import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, Reducer } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { RESET_STATE_ACTION_TYPE } from '../actions/reset-state.action';
// import { USER_FEATURE_KEY, userReducer } from './app/redux/reducer/user.slice'
// import { UI_FEATURE_KEY, uiReducer } from './app/redux/reducer/ui.slice'

// import {
//   UI_FEATURE_KEY,
//   uiReducer
// } from './app/redux/reducer/ui-slice/ui.slice'

// import {
//   UI_FEATURE_KEY,
//   uiReducer
// } from './app/redux/reducer/ui-slice/ui.slice'

// import {
//   MESSAGE_FEATURE_KEY,
//   messageReducer
// } from './app/redux/reducer/ui-slice/message.slice'

// import {
//   AUTH_FEATURE_KEY,
//   authReducer
// } from './app/app/redux/reducer/ui-slice/auth.slice'

// import {
//   CHANNELS_FEATURE_KEY,
//   channelsReducer
// } from './redux/reducer/channels-slice/channels.slice'

const reducers = {
  // [USER_FEATURE_KEY]: userReducer,
  // [CHANNELS_FEATURE_KEY]: channelsReducer,
  // [AUTH_FEATURE_KEY]: authReducer,
  // [MESSAGE_FEATURE_KEY]: messageReducer,
  // [UI_FEATURE_KEY]: uiReducer,
  // [UI_FEATURE_KEY]: uiReducer,
  // [UI_FEATURE_KEY]: uiReducer
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  // Additional middleware can be passed to this array
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // unauthenticatedMiddleware
  ],
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof combinedReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
