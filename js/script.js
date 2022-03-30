const APIKEY = "uTg7snCtTJM0agqCf1DRy5oCO0toHRv7HOBwNPsEbkg";
const imageButton = document.querySelector('.imgbutton')
const imageDisplay1 = document.querySelector("#displayimage1")
const imageDisplay2 = document.querySelector("#displayimage2")
const imageDisplay3 = document.querySelector("#displayimage3")
const authorInfo1 = document.querySelector(".author1")
const authorInfo2 = document.querySelector(".author2")
const authorInfo3 = document.querySelector(".author3")
function displayImage() {
$.ajax({
url:`https://api.unsplash.com/photos/random/?count=3&client_id=${APIKEY}`
}).then((data) => {
        imageDisplay1.src = data[0].urls.regular
        imageDisplay2.src = data[1].urls.regular
        imageDisplay3.src = data[2].urls.regular
        $('#authorname1').text(data[0].user.name)
        $('#authorurl1').text(data[0].links.html)
        $('#authorname2').text(data[1].user.name)
        $('#authorurl2').text(data[1].links.html)
        $('#authorname3').text(data[2].user.name)
        $('#authorurl3').text(data[2].links.html)
    imageDisplay1.appendTo("#displayimage")
    imageDisplay2.appendTo("#displayimage")
    imageDisplay3.appendTo("#displayimage")
console.log(data)  
})
.catch((error) => {
    console.log(error)
})}

imageButton.addEventListener('click', displayImage) 
