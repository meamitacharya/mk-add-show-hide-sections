import loadComponents from './components'
import loadEditorEvents from './editorEvents'
import loadBlocks from './blocks'
import en from './locale/en'
import '../assets/js/dynamic_listener'

export default (editor, opts = {}) => {
   const options = {
      ...{
         i18n: {},
         // default options
      },
      ...opts,
   }
   // Load editor related events
   loadEditorEvents(editor)
   // Add components
   loadComponents(editor, options)
   // Add blocks
   loadBlocks(editor, options)
   // Load i18n files
   editor.I18n &&
      editor.I18n.addMessages({
         en,
         ...options.i18n,
      })
}
