function addRow() {
    var tableRef = document.getElementById('table_id');

    var rowcount = tableRef.rows;
    var colCount = tableRef.rows[0].cells.length;

    var row = tableRef.insertRow(0);

    for (let i = 0; i < colCount; i++) {
        row.insertCell(i);
    }


}

function removeRow() {
    var tableRef = document.getElementById('table_id');

    var rowCount = tableRef.rows.length;
    var colCount = tableRef.rows[0].cells.length;


    if (rowCount > 2) {
        tableRef.deleteRow(rowCount - 1);
    }

    if(rowCount==2)
    {
        alert("Can not Remove other Row !!!! ");
    }
}


function addCol() {

    var tableRef = document.getElementById('table_id');
    var row = tableRef.rows;


    var i = 0;

    for (let j = 0; j < row.length; j++) {
        row[j].insertCell(i);
    }


}

function removeCol() {
    var tableRef = document.getElementById('table_id');

    var colcount = tableRef.rows[0].cells.length;

    var row = tableRef.rows;
    var i = 0;

    if (colcount > 2) {
        for (let j = 0; j < row.length; j++) {
            row[j].deleteCell(i);
        }
    }

    if(colcount==2)
    {
        alert('Can Not Remove Other Column !!!');
    }




}



