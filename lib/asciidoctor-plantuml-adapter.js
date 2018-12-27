const plantuml = require('asciidoctor-plantuml')

module.exports.register = (registry, context) => {
  const vfs = (file, contentCatalog) => ({
    add: (image) => {
      const { component, version, module } = file.src
      contentCatalog.addFile({
        contents: image.contents,
        src: {
          component,
          version,
          module,
          family: 'image',
          mediaType: image.mediaType,
          basename: image.basename,
          relative: image.basename
        }
      })
    }
  })
  plantuml.register(registry, {vfs: vfs(context.file, context.contentCatalog)})
}
