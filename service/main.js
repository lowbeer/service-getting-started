// main.js:

module.exports = {
  routes: {
    async getBanana (ctx): Promise<void> {
      ctx.status = 200
      ctx.body = 'Toma uma banana aí!'
    },
    async createBanana (ctx): Promise<void> {
      const {name, type} = ctx.req.body
      ctx.status = 200
      ctx.body = `A Banana ${name} do tipo ${type} foi criada.`
    },
    apple (ctx): void {
      const {method} = ctx
      ctx.status = 200
      ctx.body = `Apple: Eu recebi o method ${method}.`
    },
  },
  events: {
    onAppsEvent (ev) {
      const {body} = ev
      console.log(`onAppsEvent body: ${body}`)
    },
    onBundleReady (ev) {
      const {body} = ev
      console.log(`onBundleReady body: ${body}`)
    },
  },
}