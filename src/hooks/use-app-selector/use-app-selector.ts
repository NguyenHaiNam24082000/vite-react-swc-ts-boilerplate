import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseAppSelector {
}

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
