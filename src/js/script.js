'use strict';
import '@fancyapps/fancybox';
import 'jquery-validation';
import request from './modules/request';
import addfile from './modules/addfile';
import nicescroll from './modules/nicescroll';
import timeout from './modules/timeout';
import validation from './modules/validation';
import mailer from './modules/mailer';
import mask from './modules/mask';
import slider from './modules/slider';
import btnchange from './modules/btnchange';

window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};

window.addEventListener('DOMContentLoaded', () => {
    request();
    addfile();
    nicescroll();
    timeout();
    validation();
    mailer();
    mask();
    slider();
    btnchange();


});