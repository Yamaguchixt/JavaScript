//JavaScript��call()��apply()�̎g�p��


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

//yasuo kazekiri utiagedon ���o��

console.log(
    greet.runGreet.apply(ezreal,['you belong','museum'])
);

//ezreal you belong museum ���o��
