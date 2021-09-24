import { render, screen } from 'utils/test-utils'
import Banner, { BannerProps } from '.'

const props: BannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x500.jpg',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>Crashlands</strong> season.</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
  ribbon: '20% off',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}

describe('Banner', () => {
  it('should render Banner component', () => {
    const { container } = render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/defy death/i)).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      props.buttonLink
    )

    expect(container).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    render(
      <Banner
        {...props}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
