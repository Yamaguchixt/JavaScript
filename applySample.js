//JavaScriptのcall()とapply()の使用例


var greet = {
  runGreet : function() {
    console.log(this.name,arguments[0],arguments[1]);
    }
}

var yasuo = { name: 'yasuo' }
var ezreal = { name: 'ezreal'}

console.log(
    greet.runGreet.call(yasuo,'kazekiri','utiagedon')
);

//yasuo kazekiri utiagedon を出力

console.log(
    greet.runGreet.apply(ezreal,['you belong','museum'])
);

//ezreal you belong museum を出力
