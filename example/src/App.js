import React from 'react'
import { Button } from 'kaya-ui-design'

const App = () => {
  return (
    // primary , dashed , link , text
    <>
      <Button type='primary' text='Home' />
      <Button type='dashed' text='Home' />
      <Button type='link' text='Home' />
      <Button type='text' text='Home' />
    </>
  )
}

export default App
