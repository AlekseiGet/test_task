

function loadData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let tokenMass = JSON.parse(xhttp.responseText);
           
            for (let i = 0; i < tokenMass.length; i++) {
                
               /* 
               const newElement = document.createElement('div');
                newElement.classList.add('noda');
                newElement.innerHTML = tokenMass;
                const subListNoAll = document.querySelector(".slider__token__conteiner");
                subListNoAll.append(newElement);
              */
    
                let db_id = tokenMass[i].db_id;
                let name_token = tokenMass[i].name;
                let description_token = tokenMass[i].description;
                const newElement = document.createElement('div');
                newElement.insertAdjacentHTML('afterbegin', ` db_id: ${db_id}, name: ${name_token}, description: ${description_token}`);
                 newElement.classList.add('noda');
                const subListNoAll = document.querySelector(".slider__token__conteiner");
                subListNoAll.append(newElement);
               
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadData("https://api.expandingspace.io/beta/Tokens?username=")


let noda = document.getElementsByClassName('noda');
const subListNoAll = document.querySelector(".slider__token__conteiner");
 
const mainForm = document.forms.main.token_sort;
mainForm[0].addEventListener('change', function (e) {
     subListNoAll.style.color = 'white';
     
     console.log( noda[0]);

})

mainForm[1].addEventListener('change', function (e) {
    subListNoAll.style.color = 'red';
    console.log(Object.entries(noda[1]));
})

mainForm[2].addEventListener('change', function (e) {
    subListNoAll.style.color = 'blue';
    console.log(noda[2]);
})

mainForm[3].addEventListener('change', function (e) {
    subListNoAll.style.color = 'green';
   console.log(noda[3]);
 
});
















