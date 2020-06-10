//JAVA SCRIPT
//1. Select items=======================================================
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const containerCh = document.querySelector(".container1");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
//console.log(form,alert,grocery,submitBtn,container,list,clearBtn,containerCh);

//2. init awal==========================================================
let editElement;
let editFlag = false;
let editID = "";
let id = "";
let value = "";

//3. event listener=====================================================
// submit form-
form.addEventListener("submit", addItem);
// clear list-
clearBtn.addEventListener("click", clearItems);
// display items onload-
//window.addEventListener("DOMContentLoaded", setupItems);

//4. function addItem =>prevent default =>callback======================
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  console.log(value);

  //4a. if save =>create element => save local---------------------------
  if (value !== "" && !editFlag) {
    //add element
    id = addElement(value);
    // show container
    container.classList.add("show-container");
    console.log('id saat simpan',id);
    
        // set local storage
        addToLocalStorage(id, value);
    // display alert
    displayAlert("item added to the list", "success");
    setBackToDefault();

    //4b. else if edit => edit local-------------------------------------
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    console.log(editID,value);
    
    // display alert
    displayAlert("value changed", "success");
    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();

    //4c. else if empty -------------------------------------------------
  } else {
    // display alert
    displayAlert("please enter value", "danger");
  }
}

//4d. function addElement------------------------------------------------
function addElement(value) {
  console.log("add element");
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  //create id
  id = new Date().getTime().toString();
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-list");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn" value="e">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn" value="d">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  // append child
  //container.appendChild(element);
  container.insertBefore(element, container.childNodes[0]);  
  return (id)
}

//5. function display alert add alert => timer => remove alert============
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

//6. function clear item==================================================
function clearItems() {
  const items = document.querySelectorAll(".grocery-list");
  if (items.length > 0) {
    items.forEach(function (item) {
      container.removeChild(item);
    });
  }
  //alert
  displayAlert("item removed", "danger");
  //remove container
  container.classList.remove("show-container");
  setBackToDefault();
  localStorage.removeItem("list");
}

//7. function delete item=================================================
function deleteItem(e) {
  //cari id
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  console.log(id);
  container.removeChild(element);

  displayAlert("item removed", "danger");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}

//8. function edit item===================================================
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  console.log(editID);
  
//tombol submit ganti edit
submitBtn.textContent = "edit";
}

//9. function set back to default=========================================
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
//10. function add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

//11. function get local storage
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

//12. function remove from local storage removeFromLocalStorage(id)
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  console.log('item sebelum filter',items);
  
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  console.log('item setelah filter',items);
  localStorage.setItem("list", JSON.stringify(items));
  console.log(container.children.length);
  
  if (container.children.length === 1) {
    container.classList.remove("show-container");
  }

}

//13. function edit local storage editLocalStorage(id, value)
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
