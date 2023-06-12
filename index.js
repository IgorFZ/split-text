var form = document.getElementById('form');
var text = document.getElementById('text');
var response = document.getElementById('response');

form.addEventListener('submit', function(e) {
    response.innerHTML = `<p>${text.value}</p>`;
    e.preventDefault();
});
