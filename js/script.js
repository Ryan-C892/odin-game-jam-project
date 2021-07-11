
// select the list items
let ul = document.querySelectorAll('li');;
const letters= ["A", "B", "C", "D", "E", "F", "G", "H", ""]


const showModal = () => {
    document.getElementById('message').innerText = "You Won!";
    document.getElementById('modal').classList.remove("hide");

}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}