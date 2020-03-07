
const costs = [
  { morning: '1 300', unlim: '2 800', evening: '2 000' },
  { morning: '2 600', unlim: '5 600', evening: '4 000' },
  { morning: '3 900', unlim: '8 400', evening: '6 000' },
]


const subscribtionsOptions = document.querySelectorAll('.option');
subscribtionsOptions.forEach((item, index) => {
    item.setAttribute('data-id', index)
    item.addEventListener('click', (evt) => {
        evt.preventDefault();
        
        item.classList.add('option--active');
        const id = item.getAttribute('data-id')
        subscribtionsOptions.forEach(item2 => {
            if (item !== item2) {
                item2.classList.remove('option--active')
            }
          })
        render(id)
    })
})



function render(id = '0') {
  const html = `
    <li class="subscribtions__item " id="subscribtionsItem1">
        <h3 class="subscribtion__title">Утро</h3>
        <p class="subscribtion__description">Посещение<br> с 11:00 до 16:00</p>
        <p class="subscribtion__cost">${costs[id].morning} Р</p>
        <a class="subscribtion__link" href="#">Заказать абонемент</a>
    </li>
    <li class="subscribtions__item subscribtions__item--active" id="subscribtionsItem2">
        <h3 class="subscribtion__title">Безлимит</h3>
        <p class="subscribtion__description">Посещение не ограничено<br> по времени</p>
        <p class="subscribtion__cost">${costs[id].unlim} Р</p>
        <a class="subscribtion__link" href="#">Заказать абонемент</a>
    </li>
    <li class="subscribtions__item " id="subscribtionsItem3">
        <h3 class="subscribtion__title">Вечер</h3>
        <p class="subscribtion__description">Посещение<br> с 17:00 до 21:00</p>
        <p class="subscribtion__cost">${costs[id].evening} Р</p>
        <a class="subscribtion__link" href="#">Заказать абонемент</a>
    </li>
  `
  const subscribtionsList = document.getElementById('subscribtions-list')
  subscribtionsList.innerHTML = html

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
}

render()





