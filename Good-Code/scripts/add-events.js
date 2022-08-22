
function addEvents() {

    for (var i = 0, n = localStorage.length; i < n; i++) {
        var k = localStorage.key(i);

        var event = document.createElement('div')
        event.classList.add('row')
        event.classList.add('col-12')

        var dates = document.createElement('div');

        dates.classList.add('col-sm-5');
        dates.classList.add('btn-info');

        dates.innerHTML += k;

        var del = document.createElement('button');
        del.innerHTML = "&times";
        del.id = k;
        del.classList.add('delBtn');
        del.classList.add('close');
        var info = document.createElement('div');

        info.classList.add('col-sm-7');
        dates.classList.add('btn-danger');


        info.innerHTML += localStorage[k];

        console.log(k + ": " + localStorage[k]);
        info.appendChild(del);
        events.appendChild(dates)
        events.appendChild(info)
    }
}
