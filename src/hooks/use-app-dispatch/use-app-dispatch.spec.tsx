import { act, renderHook } from '@testing-library/react'
import * as React from 'react'

import useAppDispatch from './use-app-dispatch'

describe('useAppDispatch', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useAppDispatch())

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
