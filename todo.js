
// yHE HAI MERA ORIGINA L CODE JO MENE KHUD SE LIKHA POOOORA

// //button jo home page pe hoga
// const buttons = document.querySelector("button")

// //usko listen kraya click
// buttons.addEventListener("click",function(e){
//     //ek container bnega
//     const container = document.createElement("div")
//     container.id = "box"

//     //jisme ek text area hoga
//     const div = document.createElement("textarea")
//     div.id = "TextField"
//     div.style.border = "1px solid Black"
//     div.style.borderRadius = "20px"
//     div.style.width ="60%"
//     div.style.height = "120px"
//     div.style.color = "Black"

//     //ek add button hoga, jispe click krte ek new container bnega jisme ek div hogi or 2 button honge
//     const addtask = document.createElement("button")
//     addtask.innerText = "Add Task"
//     addtask.id = "addButton"
//     addtask.style.backgroundColor = "yellow"
//     //add button jo hai container1 me use listen krwaya, ke jesi click ho upper wala container gayab hojaye or ek new container ben usm ek div ho or 2 button (upd and dlt)
//     addtask.addEventListener("click",function(){
//         container.remove()
//         const container2 = document.createElement("div")
//         container2.id = "box2"
// // ye agya div ispe bola ke jo user ne container ke text area me dala hoga wo ishr show krdo
//         const text = document.createElement("div")
//             text.id = "TextField2"
//             text.style.border = "1px solid Black"
//             text.style.borderRadius = "20px"
//             text.style.width ="60%"
//             text.style.height = "60px"
//             text.style.color = "Black"
//             text.innerText = div.value
            
// // update button ko listen kraya ke jesi clickk ho contain er 2 remove ho or  container 1 wapis ajaye 
//         const update = document.createElement("button")
//             update.id = "upd"
//             update.innerText = "Update"
//             update.addEventListener("click",function(e){
//                 container2.remove()
//                 container.appendChild(div)
//                 container.appendChild(addtask)
//                 container.appendChild(dlt)
//                 document.body.appendChild(container)
                
//             })


// //dlt ko lsiten kraya ke wo dlt krde container 2 ko
//         const dlt = document.createElement('button')
//             dlt.id = "dltButton"
//             dlt.innerText = "Delete"
//             dlt.style.backgroundColor = "yellow"
//             dlt.addEventListener("click",function(){
//                  container2.remove()
//     })
// // or sb ko append kradia
//         container2.appendChild(text)
//         container2.appendChild(update)
//         container2.appendChild(dlt)
//         document.body.appendChild(container2)

//     })

//     //ek dlt button hoga, jispe click krte hi pooraa container gayab
//     const dlt = document.createElement('button')
//     dlt.id = "dltButton"
//     dlt.innerText = "Delete"
//     dlt.style.backgroundColor = "yellow"
//     dlt.addEventListener("click",function(){
//         container.remove()
//     })
//    // or ye us container 1 ko append krdia
//     container.appendChild(div)
//     container.appendChild(addtask)
//     container.appendChild(dlt)
//     document.body.appendChild(container)
// })
 
//dom se jo cheez bnao or usi me koi event lgana to creat krne ke baad hi lgao q ke jese for example is case me text field or button ye sb jb bnae dom jb user ne add task pe click kia to ab agr ham chahte dlt button jo khud ek event ke andr dom se bnawa usope koi eventlgayien to use hame crate krte hi lgan ahoga

//HAMNE JO KAAM KIA WO ACHA HAI HAMNE DIFFICULT APPROACH USE KRI, LKN YE SCABEL NHI HAI APPRAOCH TO DO AAP KE LIE

// yHE HAI WO CODE JO ALMOST MERA HI HAI R USME STORAGE WALA CODE BHIA HAI
// ---------- STORAGE SYSTEM -----------
// function loadTasks() {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
// }

// function saveTasks(tasks) {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function addTaskToStorage(text) {
//     const tasks = loadTasks();
//     tasks.push(text);
//     saveTasks(tasks);
// }

// function updateTaskInStorage(oldText, newText) {
//     const tasks = loadTasks();
//     const index = tasks.indexOf(oldText);
//     if (index !== -1) {
//         tasks[index] = newText;
//         saveTasks(tasks);
//     }
// }

// function deleteTaskFromStorage(text) {
//     let tasks = loadTasks();
//     tasks = tasks.filter(t => t !== text);
//     saveTasks(tasks);
// }
// // -------------------------------------

// // Button jo home page pe hoga
// const buttons = document.querySelector("button");

// // Load old tasks on page load
// window.onload = function () {
//     const tasks = loadTasks();
//     tasks.forEach(t => renderTask(t)); 
// };

// // input → display → update → delete ka pura system
// function renderTask(taskText) {

//     const container2 = document.createElement("div")
//     container2.id = "box2"

//     const text = document.createElement("div")
//     text.id = "TextField2"
//     text.style.border = "1px solid Black"
//     text.style.borderRadius = "20px"
//     text.style.width ="60%"
//     text.style.height = "60px"
//     text.style.color = "Black"
//     text.innerText = taskText

//     const update = document.createElement("button")
//     update.id = "upd"
//     update.innerText = "Update"

//     const dlt = document.createElement("button")
//     dlt.id = "dltButton"
//     dlt.innerText = "Delete"
//     dlt.style.backgroundColor = "yellow"

//     // UPDATE STORAGE + UI
//     update.addEventListener("click", function(){
//         const newText = prompt("Enter updated task:", text.innerText)
//         if(newText !== null && newText.trim() !== ""){
//             updateTaskInStorage(text.innerText, newText)
//             text.innerText = newText
//         }
//     })

//     // DELETE STORAGE + UI
//     dlt.addEventListener("click", function(){
//         deleteTaskFromStorage(text.innerText)
//         container2.remove()
//     })

//     container2.appendChild(text)
//     container2.appendChild(update)
//     container2.appendChild(dlt)
//     document.body.appendChild(container2)
// }



// // ---------------------- MAIN UI -----------------------

// buttons.addEventListener("click", function(){

//     const container = document.createElement("div")
//     container.id = "box"

//     const div = document.createElement("textarea")
//     div.id = "TextField"
//     div.style.border = "1px solid Black"
//     div.style.borderRadius = "20px"
//     div.style.width ="60%"
//     div.style.height = "120px"
//     div.style.color = "Black"

//     const addtask = document.createElement("button")
//     addtask.innerText = "Add Task"
//     addtask.id = "addButton"
//     addtask.style.backgroundColor = "yellow"

//     // ADD TASK
//     addtask.addEventListener("click", function(){
//         const taskValue = div.value.trim()

//         if(taskValue === ""){
//             alert("Task cannot be empty!")
//             return
//         }

//         // STORAGE ADD
//         addTaskToStorage(taskValue)

//         // UI Display
//         renderTask(taskValue)

//         container.remove()
//     })


//     const dlt = document.createElement("button")
//     dlt.id = "dltButton"
//     dlt.innerText = "Delete"
//     dlt.style.backgroundColor = "yellow"

//     dlt.addEventListener("click", function(){
//         container.remove()
//     })

//     container.appendChild(div)
//     container.appendChild(addtask)
//     container.appendChild(dlt)
//     document.body.appendChild(container)
// })


//*********************CHATGPT**********************************************
// ===== SELECT ELEMENT =====
const buttons = document.querySelector("button");

// ===== HELPER FUNCTIONS FOR LOCAL STORAGE =====

// Load all tasks from localStorage
function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Save all tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render a single task (container2) with Update & Delete buttons
function renderTask(taskText) {
    const container2 = document.createElement("div");
    container2.id = "box2";

    // Task display div
    const text = document.createElement("div");
    text.id = "TextField2";
    text.style.border = "1px solid Black";
    text.style.borderRadius = "20px";
    text.style.width = "60%";
    text.style.height = "60px";
    text.style.color = "Black";
    text.innerText = taskText;

    // Update button
    const update = document.createElement("button");
    update.id = "upd";
    update.innerText = "Update";
    update.addEventListener("click", () => {
        const newTask = prompt("Edit your task:", taskText);
        if (newTask && newTask.trim() !== "") {
            text.innerText = newTask;

            // Update localStorage
            const tasks = loadTasks();
            const index = tasks.indexOf(taskText);
            tasks[index] = newTask;
            saveTasks(tasks);

            taskText = newTask; // update reference for future updates
        }
    });

    // Delete button
    const dlt = document.createElement("button");
    dlt.id = "dltButton";
    dlt.innerText = "Delete";
    dlt.style.backgroundColor = "yellow";
    dlt.addEventListener("click", () => {
        container2.remove();
        // Remove task from localStorage
        const tasks = loadTasks();
        const updatedTasks = tasks.filter(t => t !== taskText);
        saveTasks(updatedTasks);
    });

    // Append elements to container2
    container2.appendChild(text);
    container2.appendChild(update);
    container2.appendChild(dlt);
    document.body.appendChild(container2);
}

// ===== MAIN LOGIC =====
buttons.addEventListener("click", function () {
    // Create first container
    const container = document.createElement("div");
    container.id = "box";

    // Textarea to enter task
    const div = document.createElement("textarea");
    div.id = "TextField";
    div.style.border = "1px solid Black";
    div.style.borderRadius = "20px";
    div.style.width = "60%";
    div.style.height = "120px";
    div.style.color = "Black";

    // Add Task button
    const addtask = document.createElement("button");
    addtask.innerText = "Add Task";
    addtask.id = "addButton";
    addtask.style.backgroundColor = "yellow";

    addtask.addEventListener("click", function () {
        if (!div.value.trim()) {
            alert("Task cannot be empty!");
            return;
        }

        // Remove first container
        container.remove();

        // Render the task in container2
        renderTask(div.value);

        // Save task to localStorage
        const tasks = loadTasks();
        tasks.push(div.value);
        saveTasks(tasks);
    });

    // Delete button for first container
    const dlt = document.createElement("button");
    dlt.id = "dltButton";
    dlt.innerText = "Delete";
    dlt.style.backgroundColor = "yellow";
    dlt.addEventListener("click", function () {
        container.remove();
    });

    // Append elements to container
    container.appendChild(div);
    container.appendChild(addtask);
    container.appendChild(dlt);
    document.body.appendChild(container);
});

// ===== RENDER TASKS ON PAGE LOAD =====
window.onload = function () {
    const tasks = loadTasks();
    tasks.forEach(task => renderTask(task));
};

//FOR REVIEW: https://chatgpt.com/s/t_69332d92cc348191b79ca3ad3fe718d1


