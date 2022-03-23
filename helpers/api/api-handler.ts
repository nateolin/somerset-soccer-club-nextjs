import { errorHandler, jwtMiddleware } from 'helpers/api'
import { NextApiRequest, NextApiResponse } from 'next'

export { apiHandler }

function apiHandler(handler: { [x: string]: (arg0: any, arg1: any) => any }) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method?.toLowerCase()

    // check handler supports HTTP method
    if (!handler[method!])
      return res.status(405).end(`Method ${req.method} Not Allowed`)

    try {
      // global middleware
      await jwtMiddleware(req, res)

      // route handler
      await handler[method!](req, res)
    } catch (err) {
      // global error handler
      errorHandler(err, res)
    }
  }
}
