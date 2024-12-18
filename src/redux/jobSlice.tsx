"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { QueryParam } from "@/utils/interfaces/job";

export const getDataJob = createAsyncThunk(
  "/job",
  async (param: QueryParam) => {
    const result = await axios.get(
      `${process.env.NEXT_API_URL}/job?search=${param?.search}&page=${param.page}`
    );
    return result;
  }
);

export const getDetailJob = createAsyncThunk(
  "/job-detail",
  async (param: { id: string }) => {
    const result = await axios.get(
      `${process.env.NEXT_API_URL}/job/${param.id}`
    );
    return result;
  }
);

const initialState: { status: string; data: any; dataDetail: any } = {
  status: "loading",
  data: [],
  dataDetail: {},
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
      state.data = action.payload.data;
    });
    builder.addCase(getDataJob.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(getDetailJob.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDetailJob.fulfilled, (state, action) => {
      state.status = "succes";
      state.dataDetail = action.payload.data;
    });
    builder.addCase(getDetailJob.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default jobSlice.reducer;
