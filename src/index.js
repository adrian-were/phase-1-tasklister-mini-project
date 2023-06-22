document.addEventListener("DOMContentLoaded", () => {
document.querySelector('form').addEventListener('submit', (e) => {
e.preventDefault()
toPrint(e.target.new-task-description.value)
})
});

function toPrint() {

}
