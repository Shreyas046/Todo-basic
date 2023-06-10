const List = document.getElementById('todo');

const Fetchdata = async() => {
    try {
        const data = await fetch('http://localhost:3000/list');
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

Fetchdata();