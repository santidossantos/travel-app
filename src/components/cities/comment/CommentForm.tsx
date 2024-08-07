import { TextField } from "@mui/material";

export function CommentForm() {
  return (
    <form
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
        label="Email"
        defaultValue="Enter your email"
        variant="standard"
      />
    </form>
  )
}
