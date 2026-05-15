// ─────────────────────────────────────────────────────────────
//  Typed Redux hooks
//  Always import these instead of plain useDispatch/useSelector
//  so TypeScript knows your full state shape.
// ─────────────────────────────────────────────────────────────
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector