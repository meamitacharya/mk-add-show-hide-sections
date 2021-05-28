import { appendNewSection } from './helpers'

export default (editor) => {
   //Adding button to sections
   editor.on('load', () => {
      document.querySelector('span[title="Settings"]').click()

      const components = editor.getComponents()

      const sections = components.filter((component) => {
         return component.get('tagName') === 'section'
      })
      sections.slice(1).forEach((component) => {
         // append `button` after section tag after loading page
         component.getEl().insertAdjacentHTML(
            'afterbegin',
            `<div class="text-center">
               <button class="btn btn-success addNewSection">Add section</button>
            </div>`
         )

         addDynamicEventListener(
            component.getEl(),
            'click',
            '.addNewSection',
            () => {
               appendNewSection(component)
            }
         )
      })
   })

   editor.on('component:selected', (component) => {
      // set trait after clicking on component in trait manager
      // component.set({
      //    traits: ['name', 'placeholder'],
      // })

      //Set Show Hide Traits for Sections
      const components = editor.getComponents()

      //Filtering Sections from the html template
      const sections = components.filter((component) => {
         return component.get('tagName') === 'section'
      })
      const sectionsAfter = sections.slice(1) // Taking sections leaving first section
      //defining trait properties
      const componentAttrs = {
         traits: sectionsAfter.map((section, index) => {
            return {
               type: 'checkbox',
               label: `Show/Hide Sec ${
                  section.attributes.attributes['data-app-name'] || ''
               }`,
               changeProp: 1,
               name: `showSection${
                  section.attributes.attributes['data-app-name'] || ''
               }`,
            }
         }),
      }
      // Checking section attributes for checked and unchecked
      sectionsAfter.forEach((section, index) => {
         if (section.attributes.attributes['data-show'] === 'true') {
            componentAttrs[
               `showSection${section.attributes.attributes['data-app-name']}`
            ] = 'checked'
         }
         if (section.attributes.attributes['data-show'] === 'false') {
            componentAttrs[
               `showSection${section.attributes.attributes['data-app-name']}`
            ] = ''
         }

         console.log(
            section.attributes.attributes['data-app-name'],
            componentAttrs[
               `showSection${section.attributes.attributes['data-app-name']}`
            ],
            section.attributes.attributes['data-show']
         )
      })

      component.set(componentAttrs) // Setting Traits into components

      //Listening event on checkBox trait
      sectionsAfter.forEach((section) => {
         // console.log(section.attributes.attributes["data-app-name"]);

         component.on(
            `change:showSection${section.attributes.attributes['data-app-name']}`,
            (component) => {
               const value = component
                  .getTrait(
                     `showSection${section.attributes.attributes['data-app-name']}`
                  )
                  .props().value
               // console.log(section.attributes.attributes['data-show'])

               if (!value) {
                  section.setStyle({ display: 'none' })
                  // console.log(
                  //    'Before Clicked',
                  //    section.attributes.attributes['data-show']
                  // )

                  section.attributes.attributes['data-show'] = 'false'
                  // console.log(
                  //    'After clicked',
                  //    section.attributes.attributes['data-show']
                  // )

                  // console.log('-----------------------------------')
               }
               if (value) {
                  section.setStyle({ display: 'initial' })
                  // console.log(
                  //    'Before clicked',
                  //    section.attributes.attributes['data-show']
                  // )

                  section.attributes.attributes['data-show'] = 'true'
                  // console.log(
                  //    'After clicked',
                  //    section.attributes.attributes['data-show']
                  // )
                  // console.log('----------------------------------')
               }
            }
         )
      })
   })
}
