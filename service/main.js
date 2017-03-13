module.exports = {
  handler: async (req, res, ctx) => {
    res.status = 200
    const arr = new Array()
    for (let i = 0; i < 10000; i++) {
      arr.push(new Array(Math.ceil(Math.random() * 10)))
    }
    res.body = JSON.stringify({mem: process.memoryUsage(), arr: arr.slice(0, 3)})
  }
}