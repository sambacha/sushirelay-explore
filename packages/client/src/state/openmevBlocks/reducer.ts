import { createReducer } from '@reduxjs/toolkit';
import { clearBlock, setBlock } from './actions';

export interface OpenMevBlocksState {
  readonly block: any;
}

const initialState: OpenMevBlocksState = {
  block: null,
};

export default createReducer<OpenMevBlocksState>(initialState, (builder) =>
  builder
    .addCase(setBlock, (state, { payload: { block } }) => {
      // the case where we have to swap the order
      state.block = block;
    })

    .addCase(clearBlock, (state) => {
      state.block = null;
    }),
);
