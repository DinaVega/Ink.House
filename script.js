
// получить данные из БД
import { data as art } from "./data.js";

// рендер карточки
renderCard(art)

// передать карточки из БД в карточки
function renderCard(data) {
    data.forEach(el => {
        createCard(el)
    });
}

// отобразить карточки на странице
function createCard(obj) {
    const container = document.querySelector('.catalogArt');
    // создаем карточку
    const card = document.createElement('article')
    card.className = 'card__picture'

    // создаем картинку
    const img = document.createElement('img')
    img.setAttribute("src", obj.image)
    img.className = 'picture'

    // создаем див подписи к картинке
    const card_text = document.createElement('div')
    card_text.className = 'picture__info'

    // добавляем информацию в текстовый блок
    card_text.innerHTML = `
    <p class="author"> ${obj.artist}</p>
    <p class="picture__name"> ${obj.title}</p>
    <p class="way">${obj.material}</p>
    <p class="price">${obj.price}</p>
    <button class="card__button">В корзину</button>`



    container.append(card)  //выводим карточку
    card.append(img, card_text) //выводим картинку, текстовый блок
}

