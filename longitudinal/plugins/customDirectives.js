export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tab-switch', {
    mounted(el, binding) {
      // Handle tab switching when the element is clicked
      el.addEventListener('click', () => {
        // Find all tab content divs and hide them
        const tabContents = document.querySelectorAll('.tabcontent')
        tabContents.forEach((tab) => {
          tab.style.display = 'none'
        })

        // Remove active class from all tab buttons
        const tabLinks = document.querySelectorAll('.tablinks')
        tabLinks.forEach((link) => {
          link.classList.remove('active')
        })

        // Show the selected tab content and mark the button as active
        const targetTabContent = document.getElementById(binding.value)
        if (targetTabContent) {
          targetTabContent.style.display = 'block'
        }
        el.classList.add('active')
      })
    }
  })
})
