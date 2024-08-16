import { combineReducers } from '@reduxjs/toolkit';
import ui from './modules/ui';
import hero from './Slices/Hero/hero';
import benefits from './Slices/Benefits/benefits';
import introduction from './Slices/Introduction/introduction';

export default function createReducer() {
  const rootReducer = combineReducers({
    ui,
    hero,
    benefits,
    introduction,
  });

  return rootReducer;
}
