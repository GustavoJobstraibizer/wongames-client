import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import GameDetails, { GameDetailsProps, Platform } from '.'
import gameDetailsMock from './mock'

const props: GameDetailsProps = {
  developer: gameDetailsMock.developer,
  platforms: gameDetailsMock.platforms as Platform[],
  releaseDate: gameDetailsMock.releaseDate,
  rating: 'BR0',
  genres: ['Role-playing', 'Action'],
  publisher: 'CD PROJECT RED'
}

describe('GameDetails', () => {
  it('should render the Blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /ratings/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform Icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
  })

  it('should render formated date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Aug 28, 2021')).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/cd project red/i)).toBeInTheDocument()
  })

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/different tales/i)).toBeInTheDocument()
  })

  it('should render FREE rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} rating="BR0" />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/)).toBeInTheDocument()
  })

  it('should render 16+ rating when BR16', () => {
    renderWithTheme(<GameDetails {...props} rating="BR16" />)

    expect(screen.getByText(/16\+/)).toBeInTheDocument()
  })

  it('should render the genres separate with comma', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/role-playing \/ action/i)).toBeInTheDocument()
  })
})
