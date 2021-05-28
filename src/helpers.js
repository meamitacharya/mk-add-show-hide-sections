export async function appendNewSection(component) {
   const res = await fetch('src/manifest.json')
   const data = await res.json()
   // component.getEl().insertAdjacentHTML('afterend', data.gjsHtml)
   // console.log('Inside new Component')
   // console.log(component)
   // console.log(editor.getSelected.index())
   // console.log(component.parent().components.length)
   console.log(data.gjsHtml)

   // console.log(data.gjsHtml.setAttributes('name', 'unique'))
   // console.log(data.gjsHtml)
   component.parent().append(data.gjsHtml, { at: component.index() + 1 })
}
