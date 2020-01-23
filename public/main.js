const deleteTodo = (id)=>{
    const url = `/api/delete-todo/${id}`
    fetch(url, {method: "DELETE"})
}
fetch("/api/todos")
.then(res=>res.json())
.then(data=> {

    data.map(item=>{
                

        const list = document.getElementById("list");
        const checkItem = document.createElement("li");
        checkItem.innerHTML = `<input onchange="deleteTodo(${item.id})" type="checkbox" value=${item.id}>${item.title}</input>`;
        list.appendChild(checkItem);

    })
});