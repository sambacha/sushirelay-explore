import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../index';
import { clearBlock, setBlock } from './actions';

export function useOpenMevBlockState(): AppState['openmevBlocks'] {
  return useSelector<AppState, AppState['openmevBlocks']>(
    (state) => state.openmevBlocks,
  );
}

export function useOpenMevBlockActionHandlers(): {
  onClearBlock: () => void;
  onSetBlock: (block: any) => void;
} {
  const dispatch = useDispatch<AppDispatch>();

  const onClearBlock = useCallback(() => {
    dispatch(clearBlock());
  }, [dispatch]);

  const onSetBlock = useCallback(
    (block: any) => {
      dispatch(
        setBlock({
          block,
        }),
      );
    },
    [dispatch],
  );

  return {
    onClearBlock,
    onSetBlock,
  };
}
