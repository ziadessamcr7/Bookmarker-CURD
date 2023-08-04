
var siteNameInput = document.getElementById('sn');
var siteUrlInput = document.getElementById('su')
var submitBtn = document.getElementById('btn')

var allSitesArray = []


var urlRegex = /^(https:\/\/)?(www\.)?[A-za-z0-9_\.]{1,}\.[a-z]{3}$/  //validation

function isUrlValid(){
    if (urlRegex.test(siteUrlInput.value)) {
        return true
    }
    else{
        return false
    }
}

siteUrlInput.onkeyup = function(){
    if(isUrlValid()){
        submitBtn.removeAttribute('disabled')
    }else{
        submitBtn.disabled = "true"
    }
}




function createSite(){

    siteObj = {
        name: siteNameInput.value,
        url: siteUrlInput.value
    }

 
 


    allSitesArray.push(siteObj)

    console.log(allSitesArray)

    

    clearForm()
    displaySites()
    
}


function clearForm (){

    siteNameInput.value=""
    siteUrlInput.value=""

}


function displaySites(){
    
    var cartona = ``

    for ( var i = 0; i < allSitesArray.length; i++ ) {

        cartona = cartona + ` 
        <tr>
        <td> ${i} </td>
        <td> ${allSitesArray[i].name} </td>
        <td> <a href= ${allSitesArray[i].url} target=_blank>   <button class="btn btn-outline-danger"> Visit </button> </a></td>
        <td><button onclick="deletedEelemnt(${i})" class="btn btn-outline-info">Delete</button></td>
        </tr>        
        `

    }

    document.getElementById('tbody').innerHTML = cartona;

}

function deletedEelemnt(  index ) {

    allSitesArray.splice( index , 1);

    displaySites()
}


