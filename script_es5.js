var BASE_URL = 'http://api.reactprototypes.com';
var API_KEY = '?key=c118demouser';

axios.get(BASE_URL + '/todos' + API_KEY).then(function(resp){
    var todos = resp.data.todos;
    var table = $('table tbody');

    // addToDom(todos, table);
    addToDomNoMap(todos, table);
});

var addToDom = function(list, container) {
    console.info('Using Map');

    var tableRows = list.map((item, index) => {

        var tableData = [
            $(`<td>${index + 1}</td>`),
            $(`<td>${item.title}</td>`),
            item.complete ? $(`<td class="text-success">Yes</td>`) : $(`<td class="text-danger">No</td>`)
        ];

        return $('<tr>').append(tableData);
    });

    container.append(tableRows);
};

var addToDomNoMap = function(list, container) {
    console.info('Using For Loop');

    var tableRows = [];

    for(var i = 0; i < list.length; i++){
        var item = list[i];

        var tableData = [
            $(`<td>${i + 1}</td>`),
            $(`<td>${item.title}</td>`),
            item.complete ? $(`<td class="text-success">Yes</td>`) : $(`<td class="text-danger">No</td>`)
        ];

        tableRows.push($('<tr>').append(tableData));
    }

    container.append(tableRows);
};
