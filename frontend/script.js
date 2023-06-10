const List = document.getElementById('todo');

const ManipulateList = (data) => {
    const FetchedData = data;
    for(let element of FetchedData){
        const Item = document.createElement('li');
        Item.textContent = element;
        List.appendChild(Item);
    };
}

const Fetchdata = async() => {
    try {
        const data = await fetch('http://localhost:3000/list');
        const response = await data.json();
        return response.todo;
    } catch (error) {
        console.log(error);
    }
}

const AddData = async(text) => {
    try {
        const response = await fetch(`http://localhost:3000/add?content=${text}`).json()
        return response.todo;
    } catch (error) {
        console.log(error);
    }
}

const DeleteData = async() => {
    try {
        const response = (await fetch(`http://localhost:3000/remove`)).json()
        return response.todo;
    } catch (error) {
        console.log(error);
    }
}

Fetchdata().then((data)=>{
    ManipulateList(data);
}).catch((error) => console.log(error));

document.getElementById('add').addEventListener('click',()=>{
    const text = document.getElementById('content').value;
    AddData(text).then((data)=>ManipulateList(data)).catch((err)=>console.log(err));
    location.reload();
});

document.getElementById('del').addEventListener('click',()=>{
    DeleteData().then((data)=>ManipulateList(data)).catch((err)=>console.log(err));
    location.reload();
});