import { AppState } from '../index'
import { setDarkMode } from './actions'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function useDarkMode(): boolean {
  return useSelector((state: AppState) => state.settings.darkMode)
}

export function useSetDarkMode(): (darkMode: boolean) => void {
  const dispatch = useDispatch()
  return useCallback((darkMode: boolean) => dispatch(setDarkMode(darkMode)), [dispatch]);
}
