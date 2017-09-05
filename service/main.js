module.exports = {
  handler: async (req, res, ctx) => {
    res.status = 200
    res.body = "Hello, IO!"
  },
  routes: {
    "/api/vtex/hello": {}
  }
}