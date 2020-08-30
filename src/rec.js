import $ from 'jquery';
import ProgressBar from 'progressbar.js';
import {recStart, recEnd, recRestart} from './recusage.js';

var recLength = 0;
var recInstr = "test123";
var progressbar = new ProgressBar.Circle('#recprogress', {
    strokeWidth: 3,
    easing: 'linear',
    duration: 3000,
    color: 'grey',
    trailColor: 'black',
    trailWidth: 3,
    text: {autoStyleContainer: false},
    svgStyle: null,
    step: function(state, circle) {
        if (this) {
            let time = circle.value()*this.duration;
            let min = Math.floor(time/60000);
            let sec = ((time%60000)/1000.).toFixed(2);
            $("#time").text(`${fillzero(min)}:${fillzero(sec)}`);
        }
    }
});

$("#rec").click(()=>{
    progressbar.animate(0, {duration: 0}, ()=>{
        progressbar.animate(1.0, {duration: recLength}, recEnd);
    });
    recStart();
    
});
$("#rerec").click(()=>{
    recRestart();
});
$("#recprogress").click(progressStop);

export function progressStop() {
    progressbar.stop();
}

export function setRecLength(l) {
    recLength = l;
}

export function setRecInstr(instr) {
    $("#recinstr").text(instr);
    //recInstr = instr;
}

function fillzero(num) {
    return num >= 10 ? num : `0${num}`;
}