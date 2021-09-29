import { rest } from 'msw'

type LoginReqBody = {
  email: string
}

// intercept all requests to the mock server
export const handlers = [
  rest.post<LoginReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}auth/forgot-password`,
    (req, res, ctx) => {
      const { email } = req.body

      // fail
      if (email === 'false@email.com') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [
              {
                messages: [
                  {
                    message: 'This email does not exist'
                  }
                ]
              }
            ]
          })
        )
      }

      // success
      return res(
        ctx.status(200),
        ctx.json({
          ok: true
        })
      )
    }
  )
]
