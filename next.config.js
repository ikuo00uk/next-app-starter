module.exports = {
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': {
        page: '/'
      },
    }
  }
}