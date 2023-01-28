import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseAppDispatch {
}

export function useAppDispatch(): UseAppDispatch {
  return useDispatch<AppDispatch>()
}

export default useAppDispatch
