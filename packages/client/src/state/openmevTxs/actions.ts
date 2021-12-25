import { createAction } from '@reduxjs/toolkit';
import { ITransaction } from 'types/trojan/tx-model';

export const addPending = createAction<ITransaction>('openmevTxs/addPending');
export const removePending = createAction<ITransaction>(
  'openmevTxs/removePending',
);

export const addConfirmed = createAction<ITransaction>(
  'openmevTxs/addConfirmed',
);
export const removeConfirmed = createAction<ITransaction>(
  'openmevTxs/removeConfirmed',
);

export const loadPendings = createAction<Array<ITransaction>>(
  'openmevTxs/loadPendings',
);
export const loadConfirmed = createAction<Array<ITransaction>>(
  'openmevTxs/loadConfirmed',
);

export const selectCurrency = createAction<string>('openmevTxs/selectCurrency');

export const resetStateTx = createAction<void>('openmevTxs/resetStateTx');
