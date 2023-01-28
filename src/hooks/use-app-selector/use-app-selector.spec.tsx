import { act, renderHook } from '@testing-library/react'
import * as React from 'react'

import useAppSelector from './use-app-selector'

describe('useAppSelector', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useAppSelector())

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
