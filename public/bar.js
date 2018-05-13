var bar = document.getElementById('bar');
var list = document.getElementById('list');
var toggle = 0;
bar.addEventListener('click',()=>{
    if(toggle)
    {
        toggle = 0;
        bar.classList = "bar";
        list.classList = "list";
    }
    else
    {
        toggle = 1;
        bar.classList = "bar bar_active";
        list.classList = "list list_active";
    }
});