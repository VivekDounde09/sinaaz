import { getIntroductionData } from '@/utils/apiHandlers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIntroductionData = createAsyncThunk(
  'introductionSections/fetchIntroductionSections',
  async () => {
    const response = await getIntroductionData();
    if (!response.status) {
      console.log('here');
      throw new Error('Failed to fetch Introduction sections');
    }
    return response?.data?.data[0];
  },
);

const initialState = {
  introdcutions: {},
  isLoading: true,
};

const introdcutionSlice = createSlice({
  name: 'introdcution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIntroductionData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIntroductionData.fulfilled, (state, action) => {
        state.introdcutions = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchIntroductionData.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default introdcutionSlice.reducer;
