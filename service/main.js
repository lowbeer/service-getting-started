module.exports = {
  api: {
    '/hello': {
      get: (req, res, ctx) => {
        res.status = 200
        res.body = "Hello, World!"
        return Promise.resolve()
      },
    },
  },
}