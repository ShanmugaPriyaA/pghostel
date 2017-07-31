
    jQuery(document).ready(function () {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();

        /* @custom validation method (smartCaptcha)
         ------------------------------------------------------------------ */

        $.validator.methods.smartCaptcha = function (value, element, param) {
            return value == param;
        };



        // Cache several DOM elements
        var pageHeader = $('.content-header').find('b');
        var adminForm = $('.admin-form');
        var options = adminForm.find('.option');
        var switches = adminForm.find('.switch');
        var buttons = adminForm.find('.button');
        var Panel = adminForm.find('.panel');

        // Form Skin Switcher
        $('#skin-switcher a').on('click', function () {
            var btnData = $(this).data('form-skin');

            $('#skin-switcher a').removeClass('item-active');
            $(this).addClass('item-active')

            adminForm.each(function (i, e) {
                var skins = 'theme-primary theme-info theme-success theme-warning theme-danger theme-alert theme-system theme-dark'
                var panelSkins = 'panel-primary panel-info panel-success panel-warning panel-danger panel-alert panel-system panel-dark'
                $(e).removeClass(skins).addClass('theme-' + btnData);
                Panel.removeClass(panelSkins).addClass('panel-' + btnData);
                pageHeader.removeClass().addClass('text-' + btnData);
            });

            $(options).each(function (i, e) {
                if ($(e).hasClass('block')) {
                    $(e).removeClass().addClass('block mt15 option option-' + btnData);
                } else {
                    $(e).removeClass().addClass('option option-' + btnData);
                }
            });

            // var sliders = $('.ui-timepicker-div', adminForm).find('.ui-slider');
            $('body').find('.ui-slider').each(function (i, e) {
                $(e).addClass('slider-primary');
            });

            $(switches).each(function (i, ele) {
                if ($(ele).hasClass('switch-round')) {
                    if ($(ele).hasClass('block')) {
                        $(ele).removeClass().addClass('block mt15 switch switch-round switch-' + btnData);
                    } else {
                        $(ele).removeClass().addClass('switch switch-round switch-' + btnData);
                    }
                } else {
                    if ($(ele).hasClass('block')) {
                        $(ele).removeClass().addClass('block mt15 switch switch-' + btnData);
                    } else {
                        $(ele).removeClass().addClass('switch switch-' + btnData);
                    }
                }

            });
            buttons.removeClass().addClass('button btn-' + btnData);
        });

        setTimeout(function () {
            adminForm.addClass('theme-primary');
            Panel.addClass('panel-primary');
            pageHeader.addClass('text-primary');

            $(options).each(function (i, e) {
                if ($(e).hasClass('block')) {
                    $(e).removeClass().addClass('block mt15 option option-primary');
                } else {
                    $(e).removeClass().addClass('option option-primary');
                }
            });

            // var sliders = $('.ui-timepicker-div', adminForm).find('.ui-slider');
            $('body').find('.ui-slider').each(function (i, e) {
                $(e).addClass('slider-primary');
            });

            $(switches).each(function (i, ele) {
                if ($(ele).hasClass('switch-round')) {
                    if ($(ele).hasClass('block')) {
                        $(ele).removeClass().addClass('block mt15 switch switch-round switch-primary');
                    } else {
                        $(ele).removeClass().addClass('switch switch-round switch-primary');
                    }
                } else {
                    if ($(ele).hasClass('block')) {
                        $(ele).removeClass().addClass('block mt15 switch switch-primary');
                    } else {
                        $(ele).removeClass().addClass('switch switch-primary');
                    }
                }
            });
            buttons.removeClass().addClass('button btn-primary');
        }, 800);


    });



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
  $("#sidebar").load("sidebar.html");
});
