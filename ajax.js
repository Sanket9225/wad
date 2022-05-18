console.log("java script working");

let getbutton = document.getElementById('getbutton');
getbutton.addEventListener('click',getdata);

function getdata(){
    console.log("getdata");

    let xhr = new XMLHttpRequest();

    xhr.open("GET","ajax.txt",true);

    xhr.onload = function(){
        console.log(this.responseText);
        console.log("done")
    }
    xhr.send();

}