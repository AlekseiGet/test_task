const subListNoAll = document.querySelector(".slider__token__conteiner");
const mainForm = document.forms.main.token_sort; //нашел блок с кнопками сортировки
const url = "https://api.expandingspace.io/beta/Tokens?username=";

//Настроить сортировку + изменить там названия

//получение массива из адреса
function loadData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);
            var tokenSort = tokenMass.sort((a, b) => a - b); //сортировка по порядку
            searchUser(tokenSort);
            tokenKraft(tokenSort);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadData(url);

// содание карточек 
function tokenKraft(tokenSort) { 
    for (let i = 0; i < tokenSort.length; i++) {
        
        let duble = tokenSort[i];
        const tokenText = JSON.stringify(`${duble['collection'].name} <br/> <i> Name :</i> ${duble['name']} <br/> <i>Create_date :</i> ${duble['image'].create_date} `);
        let tokenItem = delLetter(tokenText, '"')
        const picture = `${duble['image'].uri}`;
        
        
        const subListNoAll = document.querySelector(".slider__token__conteiner");
        const newNodaConteiner = document.createElement('div');

        newNodaConteiner.classList.add(`noda_conteiner`);
        subListNoAll.append(newNodaConteiner);
        const subListNodaConteiner = document.querySelectorAll(".noda_conteiner")[i];

        const newElement = document.createElement('div');
        newElement.insertAdjacentHTML('afterbegin', `<img src='${picture}' alt="upss"> <p>${tokenItem}</p> `);
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
function searchUser(tokenSort) {
    for (let i = 0; i < tokenSort.length; i++) {
        let duble = tokenSort[i];
        const picture = `${duble['image'].uri}`;
        const tokenText = JSON.stringify(`<img src='${picture}' alt="upss"> <a target="blank" href="https://www.google.com"> ${duble['name']} </a>`);
        let tokenItem = delLetter(tokenText, '"');

        const newElement = document.createElement('div');
        newElement.insertAdjacentHTML('afterbegin', tokenItem);
        newElement.classList.add(`search_box_item`);
        const subListNoAll = document.querySelector(".search_box");
        subListNoAll.append(newElement);


    }
    search();

}
//Рефакторинг ещё не умею
// Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
function search() {
    let input = document.forms.main.usersearch;
    let filter = input.value.toUpperCase();
    let li = document.getElementsByClassName("search_box_item");
    let searchBox = document.getElementsByClassName("search_box")[0];


    for (let i = 0; i < li.length; i++) {
        let a = li[i];
        let tagA = li[i].querySelector('a');

        if (tagA.innerHTML.toUpperCase().indexOf(filter) > 0) {
            li[i].style.display = "flex";

            searchBox.style.border = "1px solid rgb(255, 255, 255)";
        } else {
            li[i].style.display = "";
        }
    }
}
document.addEventListener('keyup', search);

    let tokenBox = document.getElementsByClassName('noda'); //нашел оставшиеся от прошлого вызова блоки
    let tokenConteiner = document.getElementsByClassName('noda_conteiner ');

// что будет выполнятся при нажатии кнопки сортировки  ищет некоректно так как в имени есть числа
mainForm[0].addEventListener('change', function () {
   
   while (tokenConteiner.length) {
       tokenConteiner[0].parentNode.removeChild(tokenConteiner[0]);
   }
    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]);
    }

function loadSortOne(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);
            let tokenSort = tokenMass.sort(function (a, b) {
                      return a.name.localeCompare(b.name);
                  });
            tokenKraft(tokenSort);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadSortOne(url);

});

mainForm[1].addEventListener('change', function (e) {

  
 while (tokenConteiner.length) {
     tokenConteiner[0].parentNode.removeChild(tokenConteiner[0]);
 }
    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]);
    }

 
function loadSortTwo(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);

            let tokenSort = tokenMass.reverse((a, b) => a - b); //сортировка реверсом
            tokenKraft(tokenSort);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadSortTwo(url);
});

mainForm[2].addEventListener('change', function (e) {
 while (tokenConteiner.length) {
     tokenConteiner[0].parentNode.removeChild(tokenConteiner[0]);
 }
  

    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]);
    }

  
function loadSortThree(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);
            let tokenSort = tokenMass.sort(function (a, b) {
                      return a.name.localeCompare(b.name);
                  });
            tokenKraft(tokenSort);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadSortThree(url);





});

mainForm[3].addEventListener('change', function (e) {
 while (tokenConteiner.length) {
     tokenConteiner[0].parentNode.removeChild(tokenConteiner[0]);
 }

    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]);
    }

  
  
function loadSortFour(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);
            let tokenSort = tokenMass.sort(function (a, b) {
                           return b.name.localeCompare(a.name);
                       });
            tokenKraft(tokenSort);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadSortFour(url);





});