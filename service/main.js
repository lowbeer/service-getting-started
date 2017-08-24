module.exports = {
  handler: async (req, res, ctx) => {
    res.status = 200
    res.body = JSON.stringify({
      mem: process.memoryUsage(),
      hello: 'Hi, there!'
    })
  }
}