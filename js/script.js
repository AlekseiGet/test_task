
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

                const newElement = document.createElement('div');
                newElement.insertAdjacentHTML('afterbegin', JSON.stringify(`db_id: ${duble['db_id']}<br />name: ${duble['name']}`));
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






function searchUser(url) {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4 && xhttp.status == 200) {
             let tokenMass = JSON.parse(xhttp.responseText);
             var tokenSort = tokenMass.sort((a, b) => a - b); //сортировка по порядку

             for (let i = 0; i < tokenSort.length; i++) {
                 let duble = tokenSort[i];

                 const newElement = document.createElement('div');
                 newElement.insertAdjacentHTML('afterbegin', JSON.stringify(`db_id: ${duble['db_id']}<br />name: ${duble['name']}`));
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

 

 //loadData("https://api.expandingspace.io/beta/Tokens?username=");












// что будет выполнятся при нажатии кнопки сортировки
mainForm[0].addEventListener('change', function (e) {

  let tokenBox = document.getElementsByClassName('noda');//нашел оставшиеся от прошлого вызова блки
    while (tokenBox.length) {
        tokenBox[0].parentNode.removeChild(tokenBox[0]);//цикл удаляющий их
    }
        
  function loadData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);
            let tokenSort = tokenMass.sort((a, b) => a - b);//сортировка по порядку

           console.log(tokenSort);
            for (let i = 0; i < tokenSort.length; i++) {
                let duble = tokenSort[i];

                const newElement = document.createElement('div');
                newElement.insertAdjacentHTML('afterbegin', JSON.stringify(`db_id: ${duble['db_id']}<br />name: ${duble['name']}`));
                newElement.classList.add(`noda`);
                const subListNoAll = document.querySelector(".slider__token__conteiner");
                subListNoAll.append(newElement);
 //console.log(duble.db_id);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
} 

loadData("https://api.expandingspace.io/beta/Tokens?username=");

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
            let tokenMass = JSON.parse(xhttp.responseText); //ответ на запрос обработаный "JSON.parse"
            let tokenSort = tokenMass.reverse((a, b) => a - b);//сортировка реверсом 
    
            for (let i = 0; i < tokenSort.length; i++) {//цикл перебирающий массив с объектами
                let duble = tokenSort[i];//объекты по порядку
                              
                const newElement = document.createElement('div');//создал див
                newElement.insertAdjacentHTML('afterbegin', JSON.stringify(`db_id: ${duble['db_id']}<br />name: ${duble['name']}`)); //наполнил его
                newElement.classList.add(`noda`);//добавил ему класс (незнаю нахрена)
                const subListNoAll = document.querySelector(".slider__token__conteiner");//указал куда вставлю
                console.log(subListNoAll);
                subListNoAll.append(newElement);//вставил
 //console.log(duble.db_id);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadData("https://api.expandingspace.io/beta/Tokens?username=");


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
                    let tokenSort = tokenMass.sort(function(a, b){
                         return a.name.localeCompare(b.name);
                         // ищет некоректно так как в имени есть числа
                    });

                    for (let i = 0; i < tokenSort.length; i++) {
                        let duble = tokenSort[i];
                     
                        const newElement = document.createElement('div');
                        newElement.insertAdjacentHTML('afterbegin', JSON.stringify(`db_id: ${duble['db_id']}<br />name: ${duble['name']}`));
                        newElement.classList.add(`noda`);
                        const subListNoAll = document.querySelector(".slider__token__conteiner");
                        subListNoAll.append(newElement);
// console.log(duble.name);
                    }
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        }
        loadData("https://api.expandingspace.io/beta/Tokens?username=");
   

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

                for (let i = 0; i < tokenMass.length; i++) {
                    let duble = tokenSort[i];
                  
                    const newElement = document.createElement('div');
                    newElement.insertAdjacentHTML('afterbegin', JSON.stringify(`db_id: ${duble['db_id']}<br />name: ${duble['name']}`));
                    newElement.classList.add(`noda`);
                    const subListNoAll = document.querySelector(".slider__token__conteiner");
                    subListNoAll.append(newElement);
 //console.log(duble.name);
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    loadData("https://api.expandingspace.io/beta/Tokens?username=");


});

/*
//что будет при использовании поиска
mainSearch.addEventListener("input", function (event) {
    console.log(`value: ${mainSearch.value}`);//вывожу каждый раз изменяющийся запрос
});
*/
/*  //скачал с сайта, поиск
    $("#searchtokens, #searchtokens-mobile").on("input", function () {
        if ($(this).val()) {
            $.ajax({
                method: 'post',
                url: '/inc/Api.php',
                data: {
                    method: 'findToken',
                    find_value: $(this).val(),
                },
                dataType: "json",
                success: function (data) {
                    if (data) {
                        $(".exchange_crypts_head_left_search").addClass('border-none');
                        $('.help-items').addClass('help-items-block');
                    }
                    $(".help-items").html(data);
                }
            });
        } else {
            $(".exchange_crypts_head_left_search").removeClass('border-none');
            $('.help-items').removeClass('help-items-block');
            $(".help-items").html("");
        }
    });
*/
