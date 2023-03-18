// let names=['ahmed','ali','gamal','mohamed'];
// let age=['18 years old','12 years old','19 years old','28 years old'];

// let container= document.createElement('div');
// document.body.appendChild(container);
// container.style.textAlign='center';

// function element(name, ages){
//     let card= document.createElement('div');
//     let title= document.createElement('h2');
//     let age= document.createElement('p');
//     let img= document.createElement('img');



//     let head=document.createTextNode(name);
//     let agecontent=document.createTextNode(ages);
// img.src='imges/services.jpg';
// title.appendChild(head);
// age.appendChild(agecontent);



// card.style.width='200px';
// card.style.background='#444';
// card.style.color='white';
// card.style.padding='10px';
// card.style.margin='3px'
// card.style.display='inline-block';
// img.style.width='100%';


// card.appendChild(title);
// card.appendChild(age);
// card.appendChild(img);
// container.appendChild(card);
// }


// for(let i = 0; i < 4; i++){
//     element(names[i], ages[i]);
// }



let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')



function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value
        total.innerHTML = result
        total.style.background = 'green'
    } else {
        total.innerHTML = ''
        total.style.background = 'red'
    }
}













let datapro
if (localStorage.product != null) {




    datapro = JSON.parse(localStorage.product)

} else {
    datapro = [

    ]
}
submit.onclick = function () {
    newpro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: title.innerHTML,
        count: count.value,
        category: category.value
    }
    datapro.push(newpro)
    localStorage.setItem('product', JSON.stringify(datapro))
    clearData()
    showData()
}











function clearData() {

    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    total.innerHTML = ''
    count.value = ''
    category.value = ''
}









function showData(){
     let table=''
for(let i=0; i<datapro.length; i++){
    table+=`
   <tr>
    <td>${i}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td><button>update</button> </td>
    <td><button onclick="deleteData(${i})" id="delete" >delete</button> </td>
</tr>
  `
}

     document.getElementById('tbody').innerHTML=table
     let btndelete= document.getElementById('deleteAll')
     if(datapro.length>0){
        btndelete.innerHTML=`
        <button onclick=deleteAll()>deletaAll</button>
        `
     }else{
        btndelete.innerHTML=""
     }
}  
showData()


function deleteData(i){
    datapro.splice(i,1)
    localStorage.product=JSON.stringify()
showData()
}





function deleteAll(){
    localStorage.clear()
    datapro.splice(0)
    showData()
}










