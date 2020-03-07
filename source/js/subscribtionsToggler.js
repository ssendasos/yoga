
const subscribtionsItems = document.querySelectorAll('.subscribtions__item')
subscribtionsItems.forEach((item) => {
    item.addEventListener('click', (evt) => {
        evt.preventDefault();
        item.classList.add('subscribtions__item--active');
        subscribtionsItems.forEach((item2) => {
            if (item !== item2) {
                item2.classList.remove('subscribtions__item--active')
            }
        })
    })
})
const $ = {}


