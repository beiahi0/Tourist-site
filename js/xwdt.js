
var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('div');
var items = document.querySelectorAll('.item');
var a = tab_list.querySelectorAll('a');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        var index = this.getAttribute('index');
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
            a[i].className = '';
        }
        items[index].style.display = 'block';
        a[index].className = 'current';

    }
}
