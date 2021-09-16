import { renderWithTheme } from 'utils/test-utils'
import SkeletonLoader from '.'

describe('SkeletonLoader', () => {
  it('should render four skeletons when quantity is passed', () => {
    const { container } = renderWithTheme(<SkeletonLoader quantity={4} />)

    expect(container?.firstChild?.childNodes).toHaveLength(4)
  })
})
