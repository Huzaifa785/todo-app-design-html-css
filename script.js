let searchTxt = document.getElementById("search-txt")
let addBtn = document.getElementById("add-btn")
let tasks = document.querySelector(".tasks")
let errorMsg = document.getElementById("error-msg")

addBtn.addEventListener("click", () => {

    if (searchTxt.value !== "") {
        let taskRow = document.createElement("div")
        taskRow.className = "task-row"

        let taskName = document.createElement("h3")
        localStorage.setItem("task", searchTxt.value)
        taskName.innerHTML = searchTxt.value
        searchTxt.value = ""

        let iconsDiv = document.createElement("div")
        iconsDiv.className = "icons"        
        
        let deleteIcon = document.createElement("i")
        deleteIcon.className = "fas fa-trash"
        deleteIcon.addEventListener("click", () => {
            taskRow.remove()
        })
        iconsDiv.append(deleteIcon)
        taskRow.append(taskName, iconsDiv)
        tasks.append(taskRow)
    }
    else {
        errorMsg.innerHTML = "Please enter a valid task..."
        errorMsg.style.color = "red"
        setTimeout(() => {
            errorMsg.innerHTML = ""
        }, 3000);
    }

})