import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          label="Username"
          name="username"
          placeholder="Username"
          initialValue={username}
        />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue={email}
          disabled
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          placeholder="Type your password"
        />

        <TextField
          label="New password"
          name="new_password"
          type="password"
          placeholder="New password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormProfile
