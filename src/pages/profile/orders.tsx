import OrdersList, { OrdersListProps } from 'components/OrdersList'
import ordersListMock from 'components/OrdersList/mock'
import Profile from 'templates/Profile'

export default function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      items: ordersListMock
    }
  }
}
