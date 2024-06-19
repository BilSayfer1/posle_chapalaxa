let todos = [
    {
        time: new Date().toDateString(),
    }
];

function openModal() {
    let task_modal = document.getElementById("task_modal")
    task_modal.style.display = "block";
}

function closeModal() {
    let task_modal = document.getElementById("task_modal")
    task_modal.style.display = "none"
}

function addTask(e) {
    e.preventDefault();

    const taskName = document.getElementById("task_name").value;
    const taskCategory = document.getElementById("task_category").value;
    const taskDate = todos[0].time;

    let box = document.querySelector(".box");
    let task_category = box.querySelector('.task-category')
    let categoryDiv = Array.from(box.getElementsByClassName("task-category")).find(div => div.querySelector("h2").textContent === taskCategory);

    if (!categoryDiv) {
        categoryDiv = document.createElement("div");
        categoryDiv.className = "task-category";
        categoryDiv.innerHTML = `
            <h2 class="osnova">${taskCategory}</h2>
            <ul>
                <li>
                    <textarea>${taskName}</textarea>
                    <br>
                    <span class="due-date">Due: ${taskDate}</span>
                    <button class="delete-btn"><img src="./img/icons8-кнопка-удалить-50.png" alt=""></button>
                </li>
            </ul>
        `;
        box.append(categoryDiv);
    } else {
        let ul = categoryDiv.querySelector("ul");
        let li = document.createElement("li");
        li.innerHTML = `
            <textarea>${taskName}</textarea>
            <br>
            <span class="due-date">Due: ${taskDate}</span>
            <button class="delete-btn"><img src="./img/icons8-кнопка-удалить-50.png" alt=""></button>
        `;
        ul.append(li);
    }

    let deleteBtns = categoryDiv.querySelectorAll(".delete-btn");
    deleteBtns.forEach(btn => {
        btn.onclick = () => {
            let li = btn.parentElement;
            li.remove();
            if (categoryDiv.querySelector("ul").children.length === 0) {
                categoryDiv.remove();
            }
        };
    });

    let task_form = document.getElementById("task_form");
    task_form.reset();
    closeModal();
}