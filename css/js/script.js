window.addEventListener("load", function () {
    const input = document.querySelector(".input-todo");
    const button = document.querySelector(".button");
    const todooutput = document.querySelector("#todo-output");

    input.addEventListener("click", function () {
button.classList.add("active");
    });
    todooutput.addEventListener("click", function () {
        let outputList = document.createElement("div");
        outputList.className = "form-items";
        push.appendChild(outputList);
        outputList.innerText = input.value;
        input.value = "";
        outputList.addEventListener("click", function () {
        todooutput.remove("active");
        });
      });