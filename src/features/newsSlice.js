import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	articles: [],
	status: "idle",
	error: null,
	searchTerm: "",
};

const apikey = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNews = createAsyncThunk("news/fetchNews", async ({ category = "general" } = {}) => {
	const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}`);
	return response.data.articles;
});

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.articles = action.payload;
			})
			.addCase(fetchNews.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default newsSlice.reducer;
export const { setSearchTerm } = newsSlice.actions;

export const { handleSearchNews } = newsSlice.actions;
export const selectNews = (state) => state.news.articles.filter((article) => article.title.toLowerCase().includes(state.news.searchTerm.toLowerCase()));
export const selectNewsStatus = (state) => state.news.status;
export const selectNewsError = (state) => state.news.error;
export const selectSearchTerm = (state) => state.news.searchTerm;
