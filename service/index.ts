// main.js:

export default {
  routes: {
    async getBanana (ctx): Promise<void> {
      const {method} = ctx
      if (method === "GET") {
        ctx.status = 200
        ctx.body = 'Toma uma banana aí!'
      } else {
        ctx.status = 201
        ctx.body = 'Foi criada uma banana!'
      }
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