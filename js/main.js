
var siteNameInput = document.getElementById('sn');
var siteUrlInput = document.getElementById('su')
var submitBtn = document.getElementById('btnSubmit')
var updateBtn = document.getElementById('btnUpdate')

var indexUpdate = 0;
var allSitesArray = [];

if (localStorage.getItem('site') != null) {
    allSitesArray = JSON.parse(localStorage.getItem('site'));
    displaySites()
}


var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{3,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{3,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{3,}|www\.[a-zA-Z0-9]+\.[^\s]{3,})/  //validation
// var urlRegex = / ^[a-z]{3,}$ /


function isUrlValid() {
    if (urlRegex.test(siteUrlInput.value)) {
        return true
    }
    else {
        return false
    }
}


siteUrlInput.onkeyup = function () {
    if (isUrlValid()) {
        submitBtn.removeAttribute('disabled')
    }
    else {
        // submitBtn.setAttribute('disabled','disabled')    // this
        submitBtn.disabled = "true"                         //  or this
    }
}


function createSite() {
    console.log('a7moooooooooos')

    let siteObj = {
        name: siteNameInput.value,
        url: siteUrlInput.value
    }
    console.log(siteObj);

    allSitesArray.push(siteObj)


    displaySites()
    clearForm()

    localStorage.setItem('site', JSON.stringify(allSitesArray))

    // updateElement()
    // allSitesArray = localStorage.getItem( JSON.parse('site') )

}


function clearForm() {

    siteNameInput.value = ""
    siteUrlInput.value = ""

}

function displaySites() {

    var cartona = ``    // ba3ml el cartona gwa el func leh msh bara?

    for (var i = 0; i < allSitesArray.length; i++) {
        console.log(allSitesArray[i].name);
        console.log(allSitesArray[i].url);
        cartona = cartona + `
        <tr>
        <td> ${i} </td>
        <td> ${allSitesArray[i].name} </td>
        <td> <a href='https://${allSitesArray[i].url}' target= "_blank" class="btn btn-outline-danger">   Visit </a></td>
        <td><button onclick="deletedEelemnt(${i})" class="btn btn-outline-info">Delete</button></td>
        <td><button onclick="takeUpdateElement(${i})" class="btn btn-warning"> update </button>
        </tr>        
        `
    }

    document.getElementById('tbody').innerHTML = cartona;
}

function deletedEelemnt(index) {

    allSitesArray.splice(index, 1);

    localStorage.setItem('site', JSON.stringify(allSitesArray))

    displaySites()
}

function takeUpdateElement(index) {
    // console.log('update made')

    indexUpdate = index;

    siteNameInput.value = allSitesArray[index].name
    siteUrlInput.value = allSitesArray[index].url

    updateBtn.classList.remove('d-none')
    submitBtn.classList.add('d-none')

}

function updateElement() {

    siteObj = {
        name: siteNameInput.value,
        url: siteUrlInput.value
    }

    allSitesArray.splice(indexUpdate, 1, siteObj)

    localStorage.setItem('site', JSON.stringify(allSitesArray))
    displaySites()

    updateBtn.classList.add('d-none')
    submitBtn.classList.remove('d-none')
    clearForm()


}

