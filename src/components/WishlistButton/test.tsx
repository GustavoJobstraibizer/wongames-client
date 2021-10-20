import { act } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import { WishListContextDefaultValues } from 'hooks/use-wishlist'
import { render, screen } from 'utils/test-utils'
import WishlistButton from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'teste@teste.com' } }
useSession.mockImplementation(() => [session])

describe('WishlistButton', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" />, { wishlistProviderProps })

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button to remove to wishlist', () => {
    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" />, { wishlistProviderProps })

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with text add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with text remove from wishlist', () => {
    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should not render if not logged', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
    useSession.mockImplementationOnce(() => [null])

    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument()
  })

  it('should add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    act(() => {
      userEvent.click(screen.getByText(/add to wishlist/i))
    })

    expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1')
  })

  it('should remove to wishlist', () => {
    const wishlistProviderProps = {
      ...WishListContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    act(() => {
      userEvent.click(screen.getByText(/remove from wishlist/i))
    })

    expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith('1')
  })
})
