import React from 'react'
import { render } from '@vtex/test-tools/react'
import HelloWorld from './index'

test('should render the Hello!', () => {
  const { getByText } = render(<HelloWorld />)

  const element = getByText(/Hello/)

  expect(element).toBeDefined()
})
