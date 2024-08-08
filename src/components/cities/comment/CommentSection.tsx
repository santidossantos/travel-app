import { useEffect, useState } from 'react'
import { CommentBoxProps } from '../../../interfaces/comment-box-props'
import { CommentBox } from './CommentBox'
import { CommentForm } from './CommentForm'

export function CommentSection({
  initialComments,
}: {
  initialComments: CommentBoxProps[]
}) {
  const [comments, setComments] = useState<CommentBoxProps[]>(initialComments)

  useEffect(() => {
    setComments(initialComments)
  }, [initialComments])

  const addComment = (newComment: CommentBoxProps) => {
    setComments([...comments, newComment])
  }

  return (
    <section
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <CommentForm addComment={addComment} />

      {comments.map((comment, index) => (
        <CommentBox key={index} {...comment} />
      ))}
    </section>
  )
}
