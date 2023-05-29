"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RequestBodyApplication from "@/utils/interfaces/application";
export const getDataJob = createAsyncThunk("/application", async () => {
  const result = await axios.get(`http://localhost:4000/application`);
  return result;
});

export const getDetailApplication = createAsyncThunk(
  "/application-detail",
  async (param: { id: string }) => {
    const result = await axios.get(
      `http://localhost:4000/application/${param.id}`
    );
    return result;
  }
);
export const createApplication = createAsyncThunk(
  "/application-create",
  async (param: RequestBodyApplication) => {
    const result = await axios.post(`http://localhost:4000/application`, param);
    return result;
  }
);

const initialState: { status: string; data: any; dataDetail: any } = {
  status: "loading",
  data: [],
  dataDetail: {},
};

const Application = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDetailApplication.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDetailApplication.fulfilled, (state, action) => {
      state.status = "succes";
      state.dataDetail = action.payload.data;
    });
    builder.addCase(getDetailApplication.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(createApplication.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createApplication.fulfilled, (state, action) => {
      state.status = "succes";
    });
    builder.addCase(createApplication.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default Application.reducer;
