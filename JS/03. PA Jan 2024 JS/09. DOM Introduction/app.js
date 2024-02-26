function hello() {
    console.log("from inline script");
    // alert("ALERT!")
    confirm("CLICK ME")
};
function add(a, b) {
    alert(a + b);
}
function changeColor() {
    const input = document.querySelector('[name="color"]');
    const color = input.value;
    const h1 = document.getElementById('title');
    h1.style.color = color; // instead of hardcoding 'red'
}