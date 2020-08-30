import $ from 'jquery';
import './style.css';
import viewStep from '@zonesoundcreative/view-step';
import './rec.js';
import {recRestart, recStart} from './recusage.js';
import {progressStop, setRecLength} from './rec.js';
import {show, hide} from './cssusage';

const images = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));
var viewstep = new viewStep('.step', 1, 2, {
    2: selectMode
});
var mode = -1;

initPage();

function importAll(r) {
    return r.keys().map(r);
}

function initPage() {
    for (let i in images) {
        console.log(images[i].default);
        $('#selector').append(createBtn(`mode-${i}`, images[i].default, `mode-${i}`));
        // button onclick
        $('#mode-'+i).click(function() {
            mode = i;
            console.log('click', i);
            viewstep.showNext();
        });
    }
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => {img.onload = img.onerror = resolve; }))).then(() => {
        $('#selector div').removeClass('hidden');
    });
}

function createBtn(id, src, txt) {
    return `<div id=${id} class="square hidden">
        <div class="squarecontent">
            <img src="${src}"/>
            <div>${txt}</div>
        </div>
    </div>`;
}

$("#prev").click(function() {
    viewstep.showPrev();
    //if is recording...
    progressStop();
});

function selectMode () {
    console.log('select mode:', mode);
    
    switch (mode) {
        case '0': //shaker
            show('.recorduse');
            setRecLength(1000);
            recRestart();
            break;
        case '1': //gyro
            show('.recorduse');
            setRecLength(30000);
            recRestart();
            break;
        case '2': //jazz
            hide('.recorduse');
            break;
        case '3': //silence
            hide('.recorduse');
            break;
        default:
            break;
    }
}