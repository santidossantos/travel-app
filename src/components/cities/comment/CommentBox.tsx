import { Divider, Avatar, Grid, Paper } from '@mui/material'
import { CommentBoxProps } from '../../../interfaces/comment-box-props'

export function CommentBox({ avatarUrl, name, comment }: CommentBoxProps) {
  return (
    <Paper
      style={{
        width: '100%',
        padding: '20px 10px',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.6)',
      }}
    >
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
      <Divider variant="fullWidth" style={{ margin: '10px 0' }} />
    </Paper>
  )
}
