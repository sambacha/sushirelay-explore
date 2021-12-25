import { createAction } from '@reduxjs/toolkit';

export const setBlock = createAction<{ block: any }>('openmevBlocks/setBlock');
export const clearBlock = createAction<void>('openmevBlocks/clearBlock');
