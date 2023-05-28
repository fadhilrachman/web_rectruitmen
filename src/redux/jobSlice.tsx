"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { QueryParam } from "@/utils/interfaces/job";

export const getDataJob = createAsyncThunk(
  "/job",
  async (param: QueryParam) => {
    const result = await axios.get(
      `http://localhost:4000/job?search=${param?.search}`
    );
    return result;
  }
);

const initialState: { status: string; data: any } = {
  status: "loading",
  data: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDataJob.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDataJob.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload.data.data;
    });
    builder.addCase(getDataJob.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default jobSlice.reducer;
