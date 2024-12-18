"use client";
import { getToken } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = getToken();
export const getDataJob = createAsyncThunk("/application", async () => {
  const result = await axios.get(`${process.env.NEXT_API_URL}/application`);
  return result;
});

export const updateDataApplication = createAsyncThunk(
  "/application-update",
  async (param: { status: string; notes: string; id: string }) => {
    const result = await axios.put(
      `${process.env.NEXT_API_URL}/application/${param.id}`,
      { notes: param.notes, status: param.status },
      { headers: { Authorization: token } }
    );
    return result;
  }
);
export const getDataApplication = createAsyncThunk(
  "/application",
  async (param: { user?: string }) => {
    const result = await axios.get(
      `${process.env.NEXT_API_URL}/application?user=${param.user}`,
      { headers: { Authorization: token } }
    );
    return result;
  }
);
export const createApplication = createAsyncThunk(
  "/application-create",
  async (param: any) => {
    const result = await axios.post(
      `${process.env.NEXT_API_URL}/application`,
      param,
      { headers: { Authorization: token } }
    );
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
    builder.addCase(getDataApplication.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDataApplication.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload.data;
    });
    builder.addCase(getDataApplication.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(updateDataApplication.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateDataApplication.fulfilled, (state) => {
      state.status = "succes";
    });
    builder.addCase(updateDataApplication.rejected, (state) => {
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
