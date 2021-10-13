import Hotjar from '@hotjar/browser'

export default (ctx, inject) => {
    const runtimeConfig = (ctx.$config && ctx.$config.hotjar) || {}
    const moduleOptions = <%= serialize(options) %>
    const options = {...moduleOptions, ...runtimeConfig}

    Hotjar.init(options.id, options.version ?? 6)

    if (ctx.app && ctx.app.router && options.trackChangesManually) {
        const { router } = ctx.app
        router.afterEach(({ fullPath, path }) => {
            Hotjar.stateChange(options.trackFullPath ? fullPath : path)
        })
    }

    ctx.$hotjar = Hotjar
    inject('hotjar', Hotjar)
}
