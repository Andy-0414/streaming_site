var bar = document.getElementById('bar');
var list = document.getElementById('list');
var toggle = 0;

bar.addEventListener('click', function() {
    if (toggle) {
        toggle = 0;
        bar.className = "bar";
        list.className = "list";
    }
    else {
        toggle = 1;
        bar.className = "bar bar_active";
        list.className = "list list_active";
    }
});