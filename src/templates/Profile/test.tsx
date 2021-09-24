import { render, screen } from 'utils/test-utils'
import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock base">{children}</div>
    }
  }
})

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock Heading">{children}</div>
    }
  }
})

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock ProfileMenu" />
    }
  }
})

describe('Profile', () => {
  it('should render Profile sections', () => {
    render(<Profile>Me</Profile>)

    expect(screen.getByText('Me')).toBeInTheDocument()
    expect(screen.getByText(/my profile/i)).toBeInTheDocument()
    expect(screen.getByTestId('mock ProfileMenu')).toBeInTheDocument()
  })
})
