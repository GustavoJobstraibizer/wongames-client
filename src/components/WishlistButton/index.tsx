import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import { useWishlist } from 'hooks/use-wishlist'
import { useSession } from 'next-auth/client'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText = false,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  if (!session) return null

  const handleRemoveOrAddToWishlist = () => {
    isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
      onClick={handleRemoveOrAddToWishlist}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
