import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import { CommentBoxProps } from '../../../interfaces/comment-box-props'

export function CommentForm({
  addComment,
}: {
  addComment: (newComment: CommentBoxProps) => void
}) {
  const [commentText, setCommentText] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (commentText.trim() !== '') {
      const newComment: CommentBoxProps = {
        comment: commentText,
        name: 'Usuario',
        avatarUrl: 'https://i.pravatar.cc/150?img=68',
      }
      addComment(newComment)
      setCommentText('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '80%',
        maxWidth: '780px',
      }}
    >
      <TextField
        id="standard-helperText"
        placeholder="Deja aquí tu comentario..."
        variant="standard"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  )
}
