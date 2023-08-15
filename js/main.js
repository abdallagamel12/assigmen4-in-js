var websiteName = document.getElementById("name")
var link = document.getElementById("link")
var submit = document.getElementById("submit")

// add product 

var siteList = []
if (localStorage.getItem("sites") != null) {
    siteList = JSON.parse(localStorage.getItem("sites"))
    showData()
}


function addSite() {
    var siteInfo = {
        name: websiteName.value,
        link: link.value,
    }
    if (websiteName.value != "" && link.value != ""  ){
        siteList.push(siteInfo)
    }

    else{
       swal("Not Valid Data", "Site Name or Url is not valid", "error");


    }
    


    localStorage.setItem("sites" , JSON.stringify(siteList))
    showData()
}


// show data 
function showData() {
var temp = ""
for(i = 0 ; i < siteList.length ; i++) {
temp += `

<tr>
<td>${i}</td>
<td>${siteList[i].name}</td>
<td>
    <a target="_blank" href="${siteList[i].link}">
        <div class="button" data-tooltip="Size: 20Mb">
            <div class="button-wrapper">
              <div class="text">Visit</div>
                <span class="icon">
                    <i class="fa-solid fa-eye"></i>
                </span>
              </div>
            </div>
    </a>
</td>
<td>
        <div class="button delete" data-tooltip="Size: 20Mb" onclick="deleteItem(${i})">
            <div class="button-wrapper">
              <div class="text">Delete</div>
                <span class="icon">
                    <i class="fa-solid fa-trash"></i>
                </span>
              </div>
            </div>
</td>
</tr>
`
clearForm ()
document.getElementById("tableContent").innerHTML = temp

}
}





// delete 
function deleteItem(x) {
    siteList.splice(x, 1)
    
    showData()
    localStorage.setItem("sites", JSON.stringify(siteList))
}

function clearForm () {
    websiteName.value = ""
    link.value = ""
}







 