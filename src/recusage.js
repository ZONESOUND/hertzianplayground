import $ from 'jquery';
import {show, hide} from './cssusage.js';
function showRec() {
    show("recback");
    show("#mic");
    show("#recinstr");
}

function hideRec() {
    hide("#recback");
    hide("#mic");
    hide("#recinstr");
}

function showProgress() {
    $("#rec").removeClass('smaller');
    $("#rec").addClass('bigger');
    $("#recprogress").addClass('upper');
    show("#recprogress");
    show("#stop");
    show("#rectime");
}

function hideProgress() {
    $("#rec").removeClass('bigger');
    $("#rec").addClass('smaller');
    $("#recprogress").removeClass('upper');
    hide("#recprogress");
    hide("#stop");
    hide("#rectime");
}

function showInstr() {
    //hiderec
    hide("#recarea");
    show("#biginstr");
    show("#rerec");
}

function hideInstr() {
    //showrec
    show("#recarea");
    hide("#biginstr");
    hide("#rerec");
}

export function recRestart() {
    console.log('rec restart');
    $("#rec").attr('state', 'stop');
    show("#recarea");
    hideInstr();
    hideProgress();
    showRec();
}

export function recStart() {
    console.log('rec start');
    $("#rec").attr('state', 'record');
    hideRec();
    //hideInstr();
    showProgress();
    
}

export function recEnd() {
    console.log('rec end');
    $("#rec").attr('state', 'stop');
    hideProgress();
    showInstr();
}

