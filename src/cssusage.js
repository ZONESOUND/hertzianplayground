import $ from 'jquery';
export function show(query) {
    $(query).removeClass('hidden');
    $(query).addClass('shown');
}

export function hide(query) {
    $(query).removeClass('shown');
    $(query).addClass('hidden');
}