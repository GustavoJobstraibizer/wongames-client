import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const socialMedias = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/won-games'
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/won-games'
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/won-games'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/won-games'
  }
]

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />

      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>

          <a href="#">suporte@wongames.com</a>
        </S.Column>

        <S.Column aria-labelledby="social-media">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>

          <nav id="social-media">
            {socialMedias.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopenner, noreferrer"
              >
                {name}
              </a>
            ))}
          </nav>
        </S.Column>

        <S.Column aria-labelledby="resources">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>

          <nav id="resources">
            <Link href="#">
              <a>Home</a>
            </Link>
            <Link href="#">
              <a>Store</a>
            </Link>
            <Link href="#">
              <a>Buscar</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="contact">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>

          <span>Lorem ipsum dolor sit amet.</span>
          <span>Lorem, ipsum dolor.</span>
          <span>Lorem ipsum dolor sit amet.</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2021 All rights reserved.</S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
