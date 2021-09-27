import galleryMock from 'components/Gallery/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { GameDetailsProps } from 'components/GameDetails'
import gameDetailsMock from 'components/GameDetails/mock'
import gameInfoMock from 'components/GameInfo/mock'
import highlightMock from 'components/Highlight/mock'
import React from 'react'
import { render, screen } from 'utils/test-utils'
import Game, { GameTemplateProps } from '.'

const props: GameTemplateProps = {
  cover: 'cover-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: '<h1>description html</h1>',
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock,
  upcommingTitle: 'Upcomming Games'
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock base">{children}</div>
    }
  }
})

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock menu"></div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock gallery"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock gamedetails"></div>
    }
  }
})

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock gameinfo"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock showcase"></div>
    }
  }
})

describe('Game', () => {
  it('should render Game Template with components', () => {
    render(<Game {...props} />)

    expect(screen.getByTestId('mock gallery')).toBeInTheDocument()
    expect(screen.getByTestId('mock gamedetails')).toBeInTheDocument()
    expect(screen.getByTestId('mock gameinfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('mock showcase')).toHaveLength(2)
    expect(screen.getByText(/description html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    render(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('mock gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on Mobile', () => {
    render(<Game {...props} />)

    const gallery = screen.queryByTestId('mock gallery')

    expect(gallery?.parentElement).toHaveStyle({
      display: 'none'
    })

    expect(gallery?.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })

  it('should render cover image', () => {
    render(<Game {...props} />)

    const coverImage = screen.getByRole('image', { name: 'cover' })

    expect(coverImage).toHaveStyle({
      backgroundImage: 'url(cover-image.jpg)',
      height: '39.5rem'
    })

    expect(coverImage).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(coverImage).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
