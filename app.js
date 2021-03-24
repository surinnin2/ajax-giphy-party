//initialize HTML elements
const $searchBtn = $('#searchbtn')
const $clearBtn = $('#clearbtn')
const $gifBoard = $('#gif-board')

//api key
const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

//start message
console.log("Let's get this party started!");

//axios get GIF URL from api
async function getGIFURL(keyword) {
    
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { q: keyword, api_key: apiKey }})
    const randNum = Math.floor(Math.random()*response.data.data.length)
    console.log(response.data.data[randNum].images.original.url)
    return response.data.data[randNum].images.original.url
}

//append new img from url to div
function appendGIF (url) {
    const $newGIF = $("<img>", {src: url} )
    $gifBoard.append($newGIF)
}

async function doOnSubmit () {
    const $searchWord = $('#searchwrd')
    const apiURL = await getGIFURL($searchWord.val())
    appendGIF(apiURL)
}

//when form is submitted commence doOnSumbit function
$('form').on("submit", function(evt) {
    evt.preventDefault()
    doOnSubmit()
})

//give clear button functionality
$clearBtn.on("click", () => $('#gif-board').empty() )