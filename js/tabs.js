const personalLabel = accordionTrigger = document.querySelectorAll('.accordion-item__trigger')

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__button').forEach(function(tabsButton) {


        tabsButton.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.tabs-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')   
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})


accordionTrigger.forEach(function(item){
	item.addEventListener('click', function() {
			item.parentNode.classList.toggle('accordion-item--active');
	})
})

