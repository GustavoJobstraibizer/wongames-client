import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField label="Name" name="name" placeholder="Name" />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          placeholder="E-mail"
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
