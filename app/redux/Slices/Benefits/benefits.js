import { getBenefitsData } from '@/utils/apiHandlers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBenefitsData = createAsyncThunk(
  'heroBenefits/fetchBenefitsSections',
  async () => {
    const response = await getBenefitsData();
    if (!response.status) {
      console.log('here');
      throw new Error('Failed to fetch benefits sections');
    }
    return response?.data?.data[0];
  },
);

const initialState = {
  benefits: {},
  isLoading: true,
};

const benefitsSlice = createSlice({
  name: 'benefits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBenefitsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBenefitsData.fulfilled, (state, action) => {
        state.benefits = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBenefitsData.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default benefitsSlice.reducer;
