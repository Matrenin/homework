import Button from '../../ui/Button'
import { useState } from 'react'
import { Author } from '../../../constants'

export default function FormFun({ addMessage }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addMessage({
      author: Author.user,
      text
    })
    setText('')
  }

  return (
    <>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button type="submit">Add message</Button>
      </form>
    </>
  )
}