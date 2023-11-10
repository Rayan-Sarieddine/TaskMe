"use strict";
//header functionality to display the cards droppng down
const card1 = document.querySelector(".header-card1");
const card2 = document.querySelector(".header-card2");
const card3 = document.querySelector(".header-card3");
const card4 = document.querySelector(".header-card4");

const btn1 = document.querySelectorAll(".btn")[0];
const btn2 = document.querySelectorAll(".btn")[1];
const btn3 = document.querySelectorAll(".btn")[2];
const btn4 = document.querySelectorAll(".btn")[3];

btn1.addEventListener("click", function () {
  if (card2.classList.contains("no-display")) {
    card2.classList.remove("no-display");
  } else if (card3.classList.contains("no-display")) {
    btn2.classList.add("header-warning");
    setTimeout(function () {
      btn2.classList.remove("header-warning");
    }, 200);
  } else if (card4.classList.contains("no-display")) {
    btn3.classList.add("header-warning");
    setTimeout(function () {
      btn3.classList.remove("header-warning");
    }, 200);
  } else {
    btn4.classList.add("header-warning");
    setTimeout(function () {
      btn4.classList.remove("header-warning");
    }, 200);
  }
});
btn2.addEventListener("click", function () {
  if (card3.classList.contains("no-display")) {
    card3.classList.remove("no-display");
  } else if (card4.classList.contains("no-display")) {
    btn3.classList.add("header-warning");
    setTimeout(function () {
      btn3.classList.remove("header-warning");
    }, 200);
  } else {
    btn4.classList.add("header-warning");
    setTimeout(function () {
      btn4.classList.remove("header-warning");
    }, 200);
  }
});
btn3.addEventListener("click", function () {
  if (card4.classList.contains("no-display")) {
    card4.classList.remove("no-display");
  } else {
    btn4.classList.add("header-warning");
    setTimeout(function () {
      btn4.classList.remove("header-warning");
    }, 200);
  }
});

//adding a new task function
function add() {
  if (input.value.trim() === "") {
    input.placeholder = "Please Enter Task:";
    input.classList.add("t-input-red");
  } else {
    //reset placeholder
    if (input.classList.contains("t-input-red")) {
      input.classList.remove("t-input-red");
    }

    const stamp = new Date();
    const date = stamp.toDateString();
    const time = stamp.toLocaleTimeString();
    let datetemp;
    let timetemp;
    if (dueDate.value == "") {
      datetemp = "OPEN DATE";
      timetemp = "OPEN TIME";
    } else {
      datetemp = new Date(dueDate.value).toDateString();
      timetemp = new Date(dueDate.value).toLocaleTimeString();
    }
    table.innerHTML += `<tr class="data-row ${id}" draggable='true' ondragstart='start()' ondragover='dragover()'>
    <td class="display-hidden">

      <button class="display-btn_edit"><ion-icon class="display-icon" name="pencil-outline"></ion-icon></button>
      <button class="display-btn_delete"><ion-icon class="display-icon" name="trash-outline"></ion-icon></button>
    </td>
    <td class="display-task_priority ${id}priority"></td>
<td class="display-task_name ${id}name">${input.value}</td>
<td class="display-task_date ${id}date">Added on: ${date} at ${time}</td>
<td class="display-task_due ${id}due">Due on: ${datetemp} at ${timetemp}</td>
  </tr>`;
  }
}

//add functionality
let id = 0;
const submitBtn = document.querySelector(".button-add");
let editbtns = 0;
let deleteBtns = 0;
const input = document.querySelector(".t-input");
const table = document.querySelector(".display-table");
const dueDate = document.querySelector(".due");
submitBtn.addEventListener("click", function () {
  add();
  input.value = "";
  id++;
  deleteBtns = document.querySelectorAll(".display-btn_delete");
  editbtns = document.querySelectorAll(".display-btn_edit");

  //delete functionality
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
      deleteBtns[i].parentElement.parentElement.remove();
    });
  }

  //finished functionality
  let rowsclclick = document.querySelectorAll(".data-row");
  for (let i = 0; i < rowsclclick.length; i++) {
    rowsclclick[i].addEventListener("click", function () {
      rowsclclick[i].classList.toggle("line-through");
      rowsclclick[i].classList.toggle("green");
      rowsclclick[i].classList.add("finished");
      rowsclclick = document.querySelectorAll(".data-row");
    });
  }

  //filter functionality
  const dropdown = document.querySelector(".dropdown");
  dropdown.addEventListener("change", function () {
    //filter all
    if (dropdown.value == "option1") {
      table.innerHTML = `<tr>
         <th></th>
         <th>Priority</th>
         <th>Task Name</th>
         <th>Date added</th>
         <th>Due date</th>
       </tr>`;
      for (let i = 0; i < rowsclclick.length; i++) {
        table.innerHTML += rowsclclick[i].innerHTML;
      }
    }

    //filter for finished tasks
    if (dropdown.value == "option2") {
      table.innerHTML = `<tr>
      <th></th>
      <th>Priority</th>
      <th>Task Name</th>
      <th>Date added</th>
      <th>Due date</th>
    </tr>`;
      for (let i = 0; i < rowsclclick.length; i++) {
        if (rowsclclick[i].classList.contains("finished")) {
          table.innerHTML += rowsclclick[i].innerHTML;
        }
      }
    }

    //filter for not finished tasks
    if (dropdown.value == "option3") {
      table.innerHTML = `<tr>
      <th></th>
      <th>Priority</th>
      <th>Task Name</th>
      <th>Date added</th>
      <th>Due date</th>
    </tr>`;
      for (let i = 0; i < rowsclclick.length; i++) {
        if (rowsclclick[i].classList.contains("finished")) {
          continue;
        } else {
          table.innerHTML += rowsclclick[i].innerHTML;
        }
      }
    }
  });

  //edit functionality
  for (let i = 0; i < editbtns.length; i++) {
    editbtns[i].addEventListener("click", function () {
      document.querySelector(".popup").classList.remove("no-display");
      document
        .querySelector(".button-update")
        .addEventListener("click", function () {
          const input2 = document.querySelector(".t-input2");

          if (input2.value.trim() === "") {
            input2.placeholder = "Please Enter Edited Task:";
            input2.classList.add("t-input-red");
          } else {
            //reset placeholder
            if (input2.classList.contains("t-input-red")) {
              input2.classList.remove("t-input-red");
            }
            const stamp = new Date();
            const date = stamp.toDateString();
            const time = stamp.toLocaleTimeString();
            const duedate2 = document.querySelector(".due2");
            let datetemp2;
            let timetemp2;
            if (duedate2.value == "") {
              datetemp2 = "OPEN DATE";
              timetemp2 = "OPEN TIME";
            } else {
              datetemp2 = new Date(dueDate.value).toDateString();
              timetemp2 = new Date(dueDate.value).toLocaleTimeString();
            }
            const tr = editbtns[i].parentElement.parentElement.classList[0];
            const row = document.querySelector(`.${tr}`);
            row.innerHTML = `<tr class="data-row ${tr}" draggable='true' ondragstart='start()' ondragover='dragover()'>
      <td class="display-hidden">
  
        <button class="display-btn_edit"><ion-icon class="display-icon" name="pencil-outline"></ion-icon></button>
        <button class="display-btn_delete"><ion-icon class="display-icon" name="trash-outline"></ion-icon></button>
      </td>
      <td class="display-task_priority ${tr}priority"></td>
  <td class="display-task_name ${tr}name">${input2.value}</td>
  <td class="display-task_date ${tr}date">Updated on: ${date} at ${time}</td>
  <td class="display-task_due ${tr}due">Due on: ${datetemp2} at ${timetemp2}</td>
    </tr>`;
            document.querySelector(".popup").classList.add("no-display");
            input2.value = "";
          }
        });
    });
  }
});
//close button for popup functionality
const closebtn = document.querySelector(".button-close");
closebtn.addEventListener("click", function () {
  document.querySelector(".popup").classList.add("no-display");
});

//clear functionality
const clearAll = document.querySelector(".button-clear");
clearAll.addEventListener("click", function () {
  table.innerHTML = `<tr>
  <th></th>
  <th>Priority</th>
  <th>Task Name</th>
  <th>Date added</th>
  <th>Due date</th>
</tr>`;
});

var row;
function start() {
  row = event.target;
}

//drag functionality
//source:https://www.therogerlab.com/sandbox/pages/how-to-reorder-table-rows-in-javascript?s=0ea4985d74a189e8b7b547976e7192ae.4122809346f6a15e41c9a43f6fcb5fd5
function dragover() {
  event.preventDefault();

  let children = Array.from(event.target.parentNode.parentNode.children);
  if (children.indexOf(event.target.parentNode) > children.indexOf(row))
    event.target.parentNode.after(row);
  else event.target.parentNode.before(row);
  //end source:https://www.therogerlab.com/sandbox/pages/how-to-reorder-table-rows-in-javascript?s=0ea4985d74a189e8b7b547976e7192ae.4122809346f6a15e41c9a43f6fcb5fd5
  priority();
}

//priority functionality
function priority() {
  let rows = document.querySelectorAll(".display-task_priority");
  for (let i = 0; i < rows.length; i++) {
    rows[i].innerHTML = `${i + 1}`;
  }
}

//search functionality
let rowsave;
const search = document.querySelector(".search");
const message = document.querySelector(".message");
const searchbtn = document.querySelector(".button-search");
const resethbtn = document.querySelector(".button-reset");
searchbtn.addEventListener("click", function () {
  if (search.value.trim() === "") {
    search.placeholder = "Please Enter search";
    search.classList.add("t-input-red");
  } else {
    //reset placeholder
    if (search.classList.contains("t-input-red")) {
      search.classList.remove("t-input-red");
    }
    if (message.innerHTML != "") {
      message.innerHTML = "";
    }
    const tasks = document.querySelectorAll(".display-task_name");
    console.log(search.value);
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].innerHTML == search.value) {
        rowsave = document.querySelectorAll(".data-row");
        table.innerHTML = `<tr>
         <th></th>
         <th>Priority</th>
         <th>Task Name</th>
         <th>Date added</th>
         <th>Due date</th>
       </tr>`;
        table.innerHTML += tasks[i].parentElement.innerHTML;
        message.innerHTML = "found task";
        setTimeout(function () {
          message.innerHTML = "";
        }, 2000);
      } else {
        message.innerHTML = "no results found";
        setTimeout(function () {
          message.innerHTML = "";
        }, 2000);
      }
    }
  }
});

//reset functionality
resethbtn.addEventListener("click", function () {
  table.innerHTML = `<tr>
         <th></th>
         <th>Priority</th>
         <th>Task Name</th>
         <th>Date added</th>
         <th>Due date</th>
       </tr>`;
  for (let i = 0; i < rowsave.length; i++) {
    table.innerHTML += rowsave[i].innerHTML;
  }
});
