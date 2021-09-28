import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Link from 'next/link'
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

        <S.ButtonContainer>
          <Link href={`/forgot-password?email=${email}`} passHref>
            <Button minimal size="medium" as="a">
              Reset password
            </Button>
          </Link>
          <Button size="medium">Save</Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormProfile
