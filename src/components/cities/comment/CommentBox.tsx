import { Divider, Avatar, Grid, Paper } from '@mui/material'
import { CommentBoxProps } from '../../../interfaces/comment-box-props'

export function CommentBox({ avatarUrl, name, comment }: CommentBoxProps) {
  return (
    <Paper style={{ padding: '40px 20px' }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt={name} src={avatarUrl} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: 'left' }}>{name}</h4>
          <p style={{ textAlign: 'left' }}>{comment}</p>
          <p style={{ textAlign: 'left', color: 'gray' }}>
            posted 1 minute ago
          </p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
    </Paper>
  )
}
