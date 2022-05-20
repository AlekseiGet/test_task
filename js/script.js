const subListNoAll = document.querySelector(".slider__token__conteiner");
const mainForm = document.forms.main.token_sort; //нашел блок с кнопками сортировки
const url = "https://api.expandingspace.io/beta/Tokens?username=";

function loadData(url) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {

            let tokenMass = JSON.parse(xhttp.responseText);
            var tokenSort = tokenMass.sort((a, b) => a - b); //сортировка по порядку
            searchUser(url);

            for (let i = 0; i < tokenSort.length; i++) {

                let duble = tokenSort[i];
                let description = duble['description'].slice(0, 27);
                let owner = duble['owner'].slice(0, 13);
                let tokenItem = JSON.stringify(`Name: ${duble['name']}`);
                 const pictureAdress = `${duble['image'].uri}`;
//console.log(pictureAdress);

const normalizeUrl = (checkAdress) => {
            if (checkAdress.startsWith('https://')) {
                return checkAdress;
            } else if (checkAdress.startsWith('http://')) {
           checkAdress = checkAdress.replace('http://', 'https://')
                return  checkAdress;
            }
        };

        const picture = normalizeUrl(pictureAdress);
        console.log(picture);
                
                
                
              //  const picture = `${duble['image'].uri}`;

                const subListNoAll = document.querySelector(".slider__token__conteiner");
                const newNodaConteiner = document.createElement('div');
                newNodaConteiner.classList.add(`noda_conteiner`);
                subListNoAll.append(newNodaConteiner);
               
                const subListNodaConteiner = document.querySelectorAll(".noda_conteiner")[i];
                const newElement = document.createElement('div');
                newElement.insertAdjacentHTML('afterbegin', `<img src='${picture}' alt="upss"> <p>${tokenItem}</p> `);
                newElement.classList.add(`noda`);
                subListNodaConteiner.append(newElement);
               
                const noda_big = document.getElementsByClassName('noda_big');

                const newElementBack = document.createElement('div');
                newElementBack.insertAdjacentHTML('afterbegin', JSON.stringify(duble));
                newElementBack.classList.add(`noda_big_back`);
                newElement.append(newElementBack);



                newElement.onclick = function click() {

                    for (let i = 0; i < noda_big.length; i++) {
                        if (noda_big[i].matches(`[class$='noda_big']`)) {
                            noda_big[i].className = 'noda';
                            break;
                        }
                    }
                    newElement.className = 'noda_big';
                };

                newElementBack.onclick = function clickBack() {
                    console.log('klick');
                };


            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadData(url);
// Сортировка по запросу
function searchUser(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);
            var tokenSort = tokenMass.sort((a, b) => a - b); //сортировка по порядку

            for (let i = 0; i < tokenSort.length; i++) {
                let duble = tokenSort[i];

                const newElement = document.createElement('div');
                newElement.insertAdjacentHTML('afterbegin', JSON.stringify(` <a target="blank" href="https://www.google.com"> db_id: ${duble['db_id']}<br />name: ${duble['name']} </a>`));
                newElement.classList.add(`search_box_item`);
                const subListNoAll = document.querySelector(".search_box");
                subListNoAll.append(newElement);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();



    function search() {
        let input = document.forms.main.usersearch;
        let filter = input.value.toUpperCase();
        let li = document.getElementsByClassName("search_box_item");
        let searchBox = document.getElementsByClassName("search_box")[0];


        // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
        for (let i = 0; i < li.length; i++) {
            let a = li[i];
            if (a.innerHTML.toUpperCase().indexOf(filter) > 0) {
                li[i].style.display = "block";
                searchBox.style.border = "1px solid rgb(255, 255, 255)";
            } else {
                li[i].style.display = "";
            }
        }
    }

    document.addEventListener('keyup', search);
}

// что будет выполнятся при нажатии кнопки сортировки
mainForm[0].addEventListener('change', function (e) {

    let tokenBox = document.getElementsByClassName('noda'); //нашел оставшиеся от прошлого вызова блки
    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]); //цикл удаляющий их
    }

    function loadData(url) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (xhttp.readyState == 4 && xhttp.status == 200) {

                let tokenMass = JSON.parse(xhttp.responseText);
                var tokenSort = tokenMass.sort((a, b) => a - b); //сортировка по порядку

                for (let i = 0; i < tokenSort.length; i++) {

                    let duble = tokenSort[i];
                    let description = duble['description'].slice(0, 27);
                    let owner = duble['owner'].slice(0, 13);
                    let tokenItem = JSON.stringify(`Db_id: ${duble['db_id']}  <p>Name: ${duble['name']}</p>  <p>Description: ${description}...</p> <p>Owner: ${owner}...</p> `);

                    const newElement = document.createElement('div');
                    newElement.insertAdjacentHTML('afterbegin', ` <a target="blank" href="https://www.google.com"> ${tokenItem} </a>`);
                    newElement.classList.add(`noda`);
                    const subListNoAll = document.querySelector(".slider__token__conteiner");
                    subListNoAll.append(newElement);

                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    loadData(url);

});

mainForm[1].addEventListener('change', function (e) {

    let tokenBox = document.getElementsByClassName('noda');

    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]);
    }

    function loadData(url) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (xhttp.readyState == 4 && xhttp.status == 200) {

                let tokenMass = JSON.parse(xhttp.responseText);
                let tokenSort = tokenMass.reverse((a, b) => a - b); //сортировка реверсом 

                for (let i = 0; i < tokenSort.length; i++) {

                    let duble = tokenSort[i];
                    let description = duble['description'].slice(0, 27);
                    let owner = duble['owner'].slice(0, 13);
                    let tokenItem = JSON.stringify(`Db_id: ${duble['db_id']}  <p>Name: ${duble['name']}</p>  <p>Description: ${description}...</p> <p>Owner: ${owner}...</p> `);

                    const newElement = document.createElement('div');
                    newElement.insertAdjacentHTML('afterbegin', ` <a target="blank" href="https://www.google.com"> ${tokenItem} </a>`);
                    newElement.classList.add(`noda`);
                    const subListNoAll = document.querySelector(".slider__token__conteiner");
                    subListNoAll.append(newElement);

                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    loadData(url);


});

mainForm[2].addEventListener('change', function (e) {

    let tokenBox = document.getElementsByClassName('noda');

    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]);
    }

    function loadData(url) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (xhttp.readyState == 4 && xhttp.status == 200) {

                let tokenMass = JSON.parse(xhttp.responseText);
                let tokenSort = tokenMass.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                    // ищет некоректно так как в имени есть числа
                });

                for (let i = 0; i < tokenSort.length; i++) {

                    let duble = tokenSort[i];
                    let description = duble['description'].slice(0, 27);
                    let owner = duble['owner'].slice(0, 13);
                    let tokenItem = JSON.stringify(`Db_id: ${duble['db_id']}  <p>Name: ${duble['name']}</p>  <p>Description: ${description}...</p> <p>Owner: ${owner}...</p> `);

                    const newElement = document.createElement('div');
                    newElement.insertAdjacentHTML('afterbegin', ` <a target="blank" href="https://www.google.com"> ${tokenItem} </a>`);
                    newElement.classList.add(`noda`);
                    const subListNoAll = document.querySelector(".slider__token__conteiner");
                    subListNoAll.append(newElement);

                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    loadData(url);


});

mainForm[3].addEventListener('change', function (e) {
    let tokenBox = document.getElementsByClassName('noda');

    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]);
    }

    function loadData(url) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (xhttp.readyState == 4 && xhttp.status == 200) {

                let tokenMass = JSON.parse(xhttp.responseText);
                let tokenSort = tokenMass.sort(function (a, b) {
                    return b.name.localeCompare(a.name);
                    // ищет некоректно так как в имени есть числа
                });

                for (let i = 0; i < tokenSort.length; i++) {

                    let duble = tokenSort[i];
                    let description = duble['description'].slice(0, 27);
                    let owner = duble['owner'].slice(0, 13);
                    let tokenItem = JSON.stringify(`Db_id: ${duble['db_id']}  <p>Name: ${duble['name']}</p>  <p>Description: ${description}...</p> <p>Owner: ${owner}...</p> `);

                    const newElement = document.createElement('div');
                    newElement.insertAdjacentHTML('afterbegin', ` <a target="blank" href="https://www.google.com"> ${tokenItem} </a>`);
                    newElement.classList.add(`noda`);
                    const subListNoAll = document.querySelector(".slider__token__conteiner");
                    subListNoAll.append(newElement);

                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    loadData(url);


});
