const subListNoAll = document.querySelector(".slider__token__conteiner");
const mainForm = document.forms.main.token_sort; //нашел блок с кнопками сортировки
const url = "https://api.expandingspace.io/beta/Tokens?username=";
let i = 0;
let quantity = 8;
//Настроить сортировку + изменить там названия

//получение массива из адреса
function loadData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);
            var tokenSort = tokenMass; //сортировка по порядку
            // searchUser(tokenSort);
            tokenKraft(tokenSort);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadData(url);

// содание карточек 
function tokenKraft(tokenSort) {

    for (; i < quantity; i++) { // tokenSort.length  вместо "8"

        let duble = tokenSort[i];

        const tokenText = JSON.stringify(`${duble['collection'].name} <br/> <i> Name :</i> ${duble['name']} <br/> <i>Create_date :</i> ${duble['image'].create_date} `);
        let tokenItem = delLetter(tokenText, '"')
        const picture = `${duble['image'].uri}`; //Адрес из URL http (не сертефицированый - не открывает гит)
        // Переделал адрес на локальную папку куда скачал-альтернативный адрес
        const pictureAlt = picture.replace('http://data1.expandingspace.io/files/', 'imj/cardFace/');

        const subListNoAll = document.querySelector(".slider__token__conteiner"); //Куда вставлю контейнер

        const newNodaConteiner = document.createElement('div');
        //добавил имя класса, name, id для сортировки
        newNodaConteiner.classList.add(`noda_conteiner`);
        // const nameAtribute = delLetter(duble['name'], '-')
        newNodaConteiner.setAttribute('title', `${duble['name']}`);
        newNodaConteiner.setAttribute('id', `${duble['image'].create_date}`);
        subListNoAll.append(newNodaConteiner);

        const subListNodaConteiner = document.querySelectorAll(".noda_conteiner")[i]; //Куда вставлю нода

        const newElement = document.createElement('div');
        newElement.insertAdjacentHTML('afterbegin', `<img src='${picture}' srcset='${pictureAlt}' alt="upss"> <p>${tokenItem}</p> `);
        newElement.classList.add(`noda`);
        subListNodaConteiner.append(newElement);

    }

};

// Удалил скобки
const delLetter = (str, leter) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        if (str[i] !== leter) {
            result = `${result}${str[i]}`;
        }
        i += 1;
    }
    return result;
};

// Создал карточки для запроса
function searchUser(token) {

    const picture = token.querySelector('img').outerHTML;
    let tokenItem = `${picture } <a target='blank' href='https://www.google.com'> ${token.title} </a>`;

    const newElement = document.createElement('div');
    newElement.insertAdjacentHTML('afterbegin', tokenItem);
    newElement.classList.add(`search_box_item`);
    const subListAll = document.querySelector(".search_box");
    subListAll.append(newElement);


}

//клик на поиске
let searchBox = document.getElementsByClassName("search_box")[0];

function ChangeColor() {
    if (searchBox.style.display == 'block') searchBox.style.display = 'none';
    else searchBox.style.display = 'block';
    return false;

}

//Рефакторинг ещё не знаю что это такое
// Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
function search() {
    let input = document.forms.main.usersearch;
    let filter = input.value.toUpperCase();
    let li = subListNoAll.children;
    let boxItem = document.getElementsByClassName("search_box_item");
    for (let i = 0; i < boxItem.length; i++) {
        boxItem[i].style.display = 'none'; //должен удалять, но ломает поэтому none 
    }

    for (let i = 0; i < li.length; i++) {
        let tagA = li[i].title;
        //Если убрать "="  будет поиск со второй буквы
        if (tagA.toUpperCase().indexOf(filter) >= 0) {
            searchUser(li[i]);
            searchBox.style.border = "1px solid rgb(255, 255, 255)";
            // console.log(tagA.toUpperCase().indexOf(filter));
            //  console.log(filter);
        }
    }
    searchBox.style.display = 'block';
}
document.addEventListener('keyup', search);

// что будет выполнятся при нажатии кнопки сортировки  ищет некоректно так как в имени есть числа
mainForm[0].addEventListener('change', function () {
    var e = subListNoAll.children;

    [].slice
        .call(e)
        .sort(function (a, b) {

            if (a.title.replace(/[0-9]/g, '') == b.title.replace(/[0-9]/g, '')) {

                return +a.title.replace(/[^0-9]/g, '').localeCompare(+b.title.replace(/[^0-9]/g, ''));

            } else {
                return a.title.localeCompare(b.title);
            }

        })
        .forEach(function (val) {
            subListNoAll.appendChild(val);
        });

});

mainForm[1].addEventListener('change', function (e) {

    var e = subListNoAll.children;
    [].slice
        .call(e)
        .reverse(function (a, b) {

            if (a.title.replace(/[0-9]/g, '') == b.title.replace(/[0-9]/g, '')) {

                return +a.title.replace(/[^0-9]/g, '').localeCompare(+b.title.replace(/[^0-9]/g, ''));

            } else {
                return a.title.localeCompare(b.title);
            }

        })
        .forEach(function (val) {
            subListNoAll.appendChild(val);
        });

});

mainForm[2].addEventListener('change', function (e) {
    var e = subListNoAll.children;
    [].slice
        .call(e)
        .sort(function (a, b) {
            return a.id.replace(/[^0-9]/g, '').localeCompare(b.id.replace(/[^0-9]/g, ''));

        })
        .forEach(function (val, index) {
            subListNoAll.appendChild(val);
        });
});

mainForm[3].addEventListener('change', function (e) {
    var e = subListNoAll.children;
    [].slice
        .call(e)
        .reverse(function (a, b) {
            return a.id.replace(/[^0-9]/g, '').localeCompare(b.id.replace(/[^0-9]/g, ''));

        })
        .forEach(function (val, index) {
            subListNoAll.appendChild(val);
        });

});

// Бескеонечный скролл
const skrollKonteiner = document.querySelector(".app__slider__content"); // найти эллемент относительно которого , а не коллекцию
let qualityScroll = 0; 
let dalaySkroll = true;

skrollKonteiner.addEventListener('scroll',
    function (e) { //Событие
        const itemParent = skrollKonteiner.getBoundingClientRect().bottom; //растояние от низа блока до верха страницы
        const itemChaild = subListNoAll.getBoundingClientRect().bottom; //растояние от низа до верха страницы внутриностей

        if (dalaySkroll && qualityScroll < 2) { // сколько раз
            trotle(itemParent, itemChaild);
        }
    }
);

function trotle(itemParent, itemChaild) {
    if (itemChaild <= itemParent + 100) { //на кaком расстоянии от низа сработает
        loadData(url); //цель для чего 
        quantity += 8;
        console.log("Загрузка");
        dalaySkroll = false;
        setTimeout(dalay, 1000); // эта фунция исправит равенство на true, но через 3 секунды
    }
}

function dalay() { 
    dalaySkroll = true;
    return qualityScroll++;
}
