import { PaymentIntent } from '@stripe/stripe-js'
import { CartItem } from 'hooks/use-cart'

type FetcherParams = {
  url: string
  body: string
  token: string | unknown
}

const fetcher = async ({ url, body, token }: FetcherParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body
  })

  return await response.json()
}

type PaymentIntentParams = {
  token: string | unknown
  items: CartItem[]
}

export const createPaymentIntent = async ({
  token,
  items
}: PaymentIntentParams) => {
  const entry = {
    token,
    body: JSON.stringify({ cart: items }),
    url: 'orders/create-payment-intent'
  }

  return fetcher(entry)
}

type CreatePaymentParams = {
  items: CartItem[]
  paymentIntent?: PaymentIntent
  token: string | unknown
}

export const createPayment = async ({
  token,
  items,
  paymentIntent
}: CreatePaymentParams) => {
  const entry = {
    token,
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method
    }),
    url: 'orders'
  }

  return fetcher(entry)
}
