import { CommentBoxProps } from '../../../interfaces/comment-box-props'
import { CommentBox } from './CommentBox'

export function CommentSecction({ comments }: { comments: CommentBoxProps[] }) {
  return (
    <section>
      {comments.map((comment, index) => (
        <CommentBox key={index} {...comment} />
      ))}
    </section>
  )
}
