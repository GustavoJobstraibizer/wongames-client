import { screen } from '@testing-library/dom'
import { fireEvent } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/test-utils'
import Gallery from '.'
import galleryMock from './mock'

describe('Gallery', () => {
  it('should render thumbnails as button', () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', galleryMock[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', galleryMock[1].src)
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)
    // clicar na thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    // verificar se o container da imagem esta com a class active
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    // verificar se o menu está fechado
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // clicar no botão abrir o menu e verificar se o menu está aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    // clicar no botão abrir o menu e verificar se o menu está aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when esc key is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={galleryMock.slice(0, 2)} />
    )

    const modal = screen.getByLabelText('modal')

    // clicar no botão abrir o menu e verificar se o menu está aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
