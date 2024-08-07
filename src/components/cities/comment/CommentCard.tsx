import { Card, CardContent, Typography } from '@mui/material'

export function CommentCard() {
  return (
    <Card sx={{ minWidth: 275, width: '80%', margin: 15 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  )
}
