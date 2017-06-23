/**
 * Created by thang on 6/22/17.
 */
var table = document.getElementById('table');

function tableForm(){
    for(var j = 10; j>0 ; j--){
        var row = table.insertRow(0);
        for(var i = 2; i<10; i++){
            row.insertCell((i-2)).innerHTML = i + 'x' + j +'=' + (i * j);
        }
    }
}

