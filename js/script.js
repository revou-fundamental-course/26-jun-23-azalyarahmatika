const inputName = document.getElementById("name");
const inputAddress = document.getElementById("address");
const inputSelection = document.getElementById("selection");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const name = inputName.value;
    const address = inputAddress.value;
    const selection = inputSelection.value;
    
    formValidation(name, address, selection);
})

function formValidation(name, address, selection) {
    if( name=="" || address=="" || selection=="" ) {
        alert("Silahkan lengkapi data Anda sebelum Submit");
    }
    else {
        alert("Berhasil! Pesanan Anda segera kami proses maksimal 1 x 24 jam");
    }
}

var slideIndex = 1;
setInterval(function(){
    plusDiv(1);
}, 1500);

function plusDiv(index) {
    showImage(slideIndex += index);
}

function showImage(index) {
    const imgList = document.getElementsByClassName("info__description-image");
    if( index > imgList.length ) { slideIndex = 1 };
    if( index < 1 ) { slideIndex = imgList.length };
    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}