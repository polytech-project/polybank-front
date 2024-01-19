import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {NewsEntity, NewsState} from "@polybank/interfaces";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {RootState} from "@polybank/state/store";

export const NEWS_KEY = 'news'

export const newsAdapter = createEntityAdapter<NewsEntity>()


export const initialNewsState: NewsState = newsAdapter.getInitialState({
  fetch: false,
  meta: null,
  error: null,
  loadingStatus: 'not loaded'
})

export const newsSlice = createSlice({
  name: NEWS_KEY,
  initialState: initialNewsState,
  reducers: {},
  extraReducers: (builder) => {

  }
})

export const news = newsSlice.reducer
export const newsActions = newsSlice.actions
//const { selectAll } = newsAdapter.getSelectors()

export const getNewsState = (rootState: RootState): NewsState => rootState[NEWS_KEY].news

//export const isFetch = createSelector(getNewsState, )
