import { TextField, Button, Box } from '@mui/material'
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
        gap: '2rem',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
          width: '100%',
          gap: '5%',
        }}
      >
        <TextField
          sx={{ width: '80%' }}
          id="standard-helperText"
          placeholder="Deja aquí tu comentario..."
          variant="standard"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button
          sx={{
            width: '15%',
            backgroundColor: 'rgb(137 89 86)',
            transition: 'background-color 0.5s ease',
            ':hover': { backgroundColor: 'rgb(187,149,147, 0.8)' },
          }}
          type="submit"
          variant="contained"
        >
          Enviar
        </Button>
      </Box>
    </form>
  )
}
