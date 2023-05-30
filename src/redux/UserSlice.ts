"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Register, Login, EditProfile } from "@/utils/interfaces/user";
import { getToken } from "@/utils";

export const register = createAsyncThunk(
  "/register",
  async (param: Register, { rejectWithValue }) => {
    try {
      const result = await axios.post(`http://localhost:4000/register`, param);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const login = createAsyncThunk(
  "/login",
  async (param: Login, { rejectWithValue }) => {
    try {
      const result = await axios.post(`http://localhost:4000/login`, param);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getDataProfile = createAsyncThunk("/profile", async () => {
  const token = getToken();
  const result = await axios.get(`http://localhost:4000/profile`, {
    headers: { Authorization: token },
  });
  return result;
});

export const editDataProfile = createAsyncThunk(
  "/profile-edit",
  async (param: EditProfile) => {
    const token = getToken();
    const result = await axios.put(
      `http://localhost:4000/profile/${param.id}`,
      param,
      {
        headers: { Authorization: token },
      }
    );
    return result;
  }
);
export const createWork_experience = createAsyncThunk(
  "/profile-work",
  async (param: any) => {
    const token = getToken();
    const result = await axios.put(
      `http://localhost:4000/work/${param.id}`,
      param,
      {
        headers: { Authorization: token },
      }
    );
    return result;
  }
);
export const deleteWorkExperience = createAsyncThunk(
  "/profile-work-delete",
  async (param: any) => {
    const token = getToken();
    const result = await axios.put(
      `http://localhost:4000/work/delete/${param.id}`,
      param,
      {
        headers: { Authorization: token },
      }
    );
    return result;
  }
);
export const createEducation = createAsyncThunk(
  "/profile-education",
  async (param: any) => {
    const token = getToken();
    const result = await axios.put(
      `http://localhost:4000/education/${param.id}`,
      param,
      {
        headers: { Authorization: token },
      }
    );
    return result;
  }
);
export const deleteEducation = createAsyncThunk(
  "/profile-education-delete",
  async (param: any) => {
    const token = getToken();
    const result = await axios.put(
      `http://localhost:4000/education/delete/${param.id}`,
      param,
      {
        headers: { Authorization: token },
      }
    );
    return result;
  }
);
const initialState: {
  status: string;
  statusLogin: string;
  statusRegister: string;
  data: any;
  dataDetail: any;
  errMessage: any;
} = {
  status: "",
  statusLogin: "",
  statusRegister: "",
  data: [],
  dataDetail: {},
  errMessage: null,
};
const jobSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(register.pending, (state) => {
      state.statusRegister = "loading";
    });
    builder.addCase(register.fulfilled, (state) => {
      state.statusRegister = "success";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.statusRegister = "error";
      state.errMessage = action.payload;
    });
    builder.addCase(login.pending, (state) => {
      state.statusLogin = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.statusLogin = "success";
      state.data = action.payload.data;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.statusLogin = "error";
      state.errMessage = action.payload;
    });
    builder.addCase(getDataProfile.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDataProfile.fulfilled, (state, action) => {
      state.status = "success";
      state.dataDetail = action.payload.data.data;
    });
    builder.addCase(getDataProfile.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(editDataProfile.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(editDataProfile.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(editDataProfile.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(createWork_experience.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createWork_experience.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(createWork_experience.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(deleteWorkExperience.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteWorkExperience.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(deleteWorkExperience.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(createEducation.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createEducation.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(createEducation.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(deleteEducation.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteEducation.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(deleteEducation.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default jobSlice.reducer;
