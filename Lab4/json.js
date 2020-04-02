var URLrequest = 'https://bhattaneri.github.io/comp1073-Lab_4/Lab4/main.json';
//var req = new XMLHttpRequest();
//req.open('GET', URLrequest);
//req.responseType = 'json';
//req.send();
//req.onload = function() {
//    var strangeproduct = req.response;
//    console.log(strangeproduct);
//    strangeProducts(strangeproduct);
//};

function strangeProducts(jsonObj) {

    let strangeproducts = jsonObj.StrangeProducts;

    for (let i = 0; i < strangeproducts.length; i++) {
        let content = document.createElement('article');
        let h3 = document.createElement('h2');
        let imgage = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let section = document.querySelector('section');
        imgage.setAttribute('src', 'https://bhattaneri.github.io/comp1073-Lab_4/Lab4/Images/' + strangeproducts[i].image);
        imgage.setAttribute('alt', strangeproducts[i].name);
        h3.textContent = strangeproducts[i].name;
        p1.textContent = 'Price: ' + strangeproducts[i].price;
        p2.textContent = 'Details: ' + strangeproducts[i].details;
        content.appendChild(imgage);
        content.appendChild(h3);
        content.appendChild(p1);
        content.appendChild(p2);
        section.appendChild(content);
    }
};

function information(URLrequest,callback){
    fetch(url).then(function(response){
        response.json().then(function(json){
        callback(request.response);
        });
    });
}


