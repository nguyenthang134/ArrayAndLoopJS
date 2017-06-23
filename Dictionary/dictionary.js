/**
 * Created by thang on 6/22/17.
 */
function translate() {
    var vn = document.getElementById('vn');
    var eng = document.getElementById('eng').value;
    var engArr = ['hello','hi','good','morning','afternoon','lunch','dinner'];
    var vnArr = ['xin chao','chao xin','tot', 'buoi sang', 'buoi chieu', 'bua trua', 'bua toi'];
    var a = 0;
    for(var i = 0; i< 7; i++){
        if(eng == engArr[i]){
            vn.value = vnArr[i];
            a = 1;
        }
    }
    if(a== 0){
        alert("We can't find the word ..");
    }
}

document.getElementById('translate').onclick = function () { translate() };
