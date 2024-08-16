import { getHeroData } from '@/utils/apiHandlers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHeroSections = createAsyncThunk(
  'heroSections/fetchHeroSections',
  async () => {
    const response = await getHeroData();
    if (!response.status) {
      console.log('here');
      throw new Error('Failed to fetch hero sections');
    }
    return response?.data;
  },
);

const initialState = {
  heroSections: {},
  loading: true,
};

const heroSectionsSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroSections.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHeroSections.fulfilled, (state, action) => {
        state.heroSections = action.payload;
        state.loading = false;
      })
      .addCase(fetchHeroSections.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default heroSectionsSlice.reducer;
