'use strict';



var appConfig = window.appConfig || {};

appConfig.menu_speed = 200;

appConfig.smartSkin = "smart-style-0";

appConfig.skins = [
    {name: "smart-style-0",
        logo: "styles/img/logo.png",
        class: "btn btn-block btn-xs txt-color-white margin-right-5",
        style: "background-color:#4E463F;",
        label: "Smart Default"},

    {name: "smart-style-1",
        logo: "styles/img/logo-white.png",
        class: "btn btn-block btn-xs txt-color-white",
        style: "background:#3A4558;",
        label: "Dark Elegance"},

    {name: "smart-style-2",
        logo: "styles/img/logo-blue.png",
        class: "btn btn-xs btn-block txt-color-darken margin-top-5",
        style: "background:#fff;",
        label: "Ultra Light"},

    {name: "smart-style-3",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background:#f78c40",
        label: "Google Skin"},

    {name: "smart-style-4",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #bbc0cf; border: 1px solid #59779E; color: #17273D !important;",
        label: "PixelSmash"},

    {name: "smart-style-5",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: rgba(153, 179, 204, 0.2); border: 1px solid rgba(121, 161, 221, 0.8); color: #17273D !important;",
        label: "Glass"},

    {name: "smart-style-6",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #2196F3; border: 1px solid rgba(121, 161, 221, 0.8); color: #FFF !important;",
        beta: true,
        label: "MaterialDesign"
    }


];



appConfig.sound_path = "sound/";
appConfig.sound_on = true; 


/*
* DEBUGGING MODE
* debugState = true; will spit all debuging message inside browser console.
* The colors are best displayed in chrome browser.
*/


appConfig.debugState = false;	
appConfig.debugStyle = 'font-weight: bold; color: #00f;';
appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
appConfig.debugStyle_warning = 'background-color:yellow';
appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';


appConfig.voice_command = true;
appConfig.voice_command_auto = false;

/*
 *  Sets the language to the default 'en-US'. (supports over 50 languages 
 *  by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  CatalГ            ['ca-ES']
 *  ДЊeЕЎtina         ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  EspaГ±ol          ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'EspaГ±a']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'MГ©xico']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'PanamГЎ']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'PerГє']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'RepГєblica Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  FranГ§ais         ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  ГЌslenska         ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmГҐl     ['nb-NO']
 *  Polski            ['pl-PL']
 *  PortuguГЄs        ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  RomГўnДѓ          ['ro-RO']
 *  SlovenДЌina       ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  TГјrkГ§e          ['tr-TR']
 *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
 *  PСѓСЃСЃРєРёР№     ['ru-RU']
 *  РЎСЂРїСЃРєРё      ['sr-RS']
 *  н•њкµ­м–ґ         ['ko-KR']
 *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
 *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
 *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
 *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
 *  ж—Ґжњ¬иЄћ         ['ja-JP']
 *  Lingua latД«na    ['la']
 */
appConfig.voice_command_lang = 'en-US';
/*
 *  Use localstorage to remember on/off (best used with HTML Version)
 */ 
appConfig.voice_localStorage = false;
/*
 * Voice Commands
 * Defines all voice command variables and functions
 */ 
if (appConfig.voice_command) {
        
     	appConfig.commands = {
                
        'show dashboard' : function() { window.location.hash = "dashboard" },
        'show inbox' : function() {  window.location.hash = "inbox/" },
        'show graphs' : function() {  window.location.hash = "graphs/flot" },
        'show flotchart' : function() { window.location.hash = "graphs/flot" },
        'show morris chart' : function() { window.location.hash = "graphs/morris" },
        'show inline chart' : function() { window.location.hash = "graphs/inline-charts" },
        'show dygraphs' : function() { window.location.hash = "graphs/dygraphs" },
        'show tables' : function() { window.location.hash = "tables/table" },
        'show data table' : function() { window.location.hash = "tables/datatable" },
        'show jquery grid' : function() { window.location.hash = "tables/jqgrid" },
        'show form' : function() { window.location.hash = "forms/form-elements" },
        'show form layouts' : function() { window.location.hash = "forms/form-templates" },
        'show form validation' : function() { window.location.hash = "forms/validation" },
        'show form elements' : function() { window.location.hash = "forms/bootstrap-forms" },
        'show form plugins' : function() { window.location.hash = "forms/plugins" },
        'show form wizards' : function() { window.location.hash = "forms/wizards" },
        'show bootstrap editor' : function() { window.location.hash = "forms/other-editors" },
        'show dropzone' : function() { window.location.hash = "forms/dropzone" },
        'show image cropping' : function() { window.location.hash = "forms/image-editor" },
        'show general elements' : function() { window.location.hash = "ui/general-elements" },
        'show buttons' : function() { window.location.hash = "ui/buttons" },
        'show fontawesome' : function() { window.location.hash = "ui/icons/fa" },
        'show glyph icons' : function() { window.location.hash = "ui/icons/glyph" },
        'show flags' : function() { window.location.hash = "ui/icons/flags" },
        'show grid' : function() { window.location.hash = "ui/grid" },
        'show tree view' : function() { window.location.hash = "ui/treeview" },
        'show nestable lists' : function() { window.location.hash = "ui/nestable-list" },
        'show jquery U I' : function() { window.location.hash = "ui/jqui" },
        'show typography' : function() { window.location.hash = "ui/typography" },
        'show calendar' : function() { window.location.hash = "calendar" },
        'show widgets' : function() { window.location.hash = "widgets" },
        'show gallery' : function() { window.location.hash = "gallery" },
        'show maps' : function() { window.location.hash = "gmap-xml" },
        'go back' :  function() { history.back(1); }, 
        'scroll up' : function () { $('html, body').animate({ scrollTop: 0 }, 100); },
        'scroll down' : function () { $('html, body').animate({ scrollTop: $(document).height() }, 100);},
        'hide navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'show navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'mute' : function() {
            appConfig.sound_on = false;
            $.smallBox({
                title : "MUTE",
                content : "All sounds have been muted!",
                color : "#a90329",
                timeout: 4000,
                icon : "fa fa-volume-off"
            });
        },
        'sound on' : function() {
            appConfig.sound_on = true;
            $.speechApp.playConfirmation();
            $.smallBox({
                title : "UNMUTE",
                content : "All sounds have been turned on!",
                color : "#40ac2b",
                sound_file: 'voice_alert',
                timeout: 5000,
                icon : "fa fa-volume-up"
            });
        },
        'stop' : function() {
            smartSpeechRecognition.abort();
            $( ":root" ).removeClass("voice-command-active");
            $.smallBox({
                title : "VOICE COMMAND OFF",
                content : "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                color : "#40ac2b",
                sound_file: 'voice_off',
                timeout: 8000,
                icon : "fa fa-microphone-slash"
            });
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }
        },
        'help' : function() {

            $('#voiceModal').removeData('modal').modal( { remote: "app/layout/partials/voice-commands.tpl.html", show: true } );
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }

        },      
        'got it' : function() {
            $('#voiceModal').modal('hide');
        },  
        'logout' : function() {
            $.speechApp.stop();
            window.location = $('#logout > span > a').attr("href");
        }
    };
}

appConfig.apiRootUrl = 'api';

window.appConfig = appConfig;

/*
* END APP.appConfig
*/
'use strict';

$.sound_path = appConfig.sound_path;
$.sound_on = appConfig.sound_on;


$(function () {

    // moment.js default language
    moment.locale('en')

    angular.bootstrap(document, ['app']);
 
});

'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',

    // Smartadmin Angular Common Module
    'SmartAdmin',

    // App
    'app.auth',
    'app.layout',
    //'app.chat',
    //'app.dashboard',
    //'app.calendar',
    //'app.inbox',
    //'app.graphs',
    //'app.tables',
    //'app.forms',
    //'app.ui',
    //'app.widgets',
    //'app.maps',
    //'app.appViews',
    //'app.misc',
    //'app.smartAdmin',
    //'app.eCommerce'
    'app.home'
])
.config(function ($provide, $httpProvider, RestangularProvider) {


    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', function ($q) {
        var errorCounter = 0;
        function notifyError(rejection){
            console.log(rejection);
            $.bigBox({
                title: rejection.status + ' ' + rejection.statusText,
                content: rejection.data,
                color: "#C46A69",
                icon: "fa fa-warning shake animated",
                number: ++errorCounter,
                timeout: 6000
            });
        }

        return {
            // On request failure
            requestError: function (rejection) {
                // show notification
                notifyError(rejection);

                // Return the promise rejection.
                return $q.reject(rejection);
            },

            // On response failure
            responseError: function (rejection) {
                // show notification
                notifyError(rejection);
                // Return the promise rejection.
                return $q.reject(rejection);
            }
        };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('ErrorHttpInterceptor');

    RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

})
.constant('APP_CONFIG', window.appConfig)

.run(function ($rootScope
    , $state, $stateParams
    ) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    // editableOptions.theme = 'bs3';

});



(function(){
    "use strict";

    angular.module('SmartAdmin', [
        "SmartAdmin.Forms",
        "SmartAdmin.Layout",
        "SmartAdmin.UI",
    ]);
})();
"use strict";


angular.module('app.appViews', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.appViews', {
            abstract: true,
            data: {
                title: 'App views'
            }
        })

        .state('app.appViews.projects', {
            url: '/projects',
            data: {
                title: 'Projects'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/project-list.html',
                    controller: 'ProjectsDemoCtrl',
                    resolve: {
                        projects: function($http, APP_CONFIG){
                            return $http.get(APP_CONFIG.apiRootUrl + '/project-list.json')
                        }
                    }
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.datatables.js'
                    ]);
                }
            }
        })

        .state('app.appViews.blogDemo', {
            url: '/blog',
            data: {
                title: 'Blog'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/blog-demo.html'
                }
            }
        })

        .state('app.appViews.galleryDemo', {
            url: '/gallery',
            data: {
                title: 'Gallery'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/gallery-demo.html'
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'smartadmin-plugin/legacy/superbox/superbox.min.js'
                    ]);
                }
            }
        })

        .state('app.appViews.forumDemo', {
            url: '/forum',
            data: {
                title: 'Forum'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/forum-demo.html'
                }
            }
        })

        .state('app.appViews.forumTopicDemo', {
            url: '/forum-topic',
            data: {
                title: 'Forum Topic'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/forum-topic-demo.html'
                }
            }
        })

        .state('app.appViews.forumPostDemo', {
            url: '/forum-post',
            data: {
                title: 'Forum Post'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/forum-post-demo.html'
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ]);
                }
            }
        })


        .state('app.appViews.profileDemo', {
            url: '/profile',
            data: {
                title: 'Profile'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/profile-demo.html'
                }
            }
        })


        .state('app.appViews.timelineDemo', {
            url: '/timeline',
            data: {
                title: 'Timeline'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/app-views/views/timeline-demo.html'
                }
            }
        })
});

"use strict";

angular.module('app.auth', [
    'ui.router'
//        ,
//        'ezfb',
//        'googleplus'
]).config(function ($stateProvider
//        , ezfbProvider
//        , GooglePlusProvider
    ) {
//        GooglePlusProvider.init({
//            clientId: authKeys.googleClientId
//        });
//
//        ezfbProvider.setInitParams({
//            appId: authKeys.facebookAppId
//        });
    $stateProvider.state('realLogin', {
        url: '/real-login',

        views: {
            root: {
                templateUrl: "app/auth/login/login.html",
                controller: 'LoginCtrl'
            }
        },
        data: {
            title: 'Login',
            rootId: 'extra-page'
        }

    })

    .state('login', {
        url: '/login',
        views: {
            root: {
                templateUrl: 'app/auth/views/login.html'
            }
        },
        data: {
            title: 'Login',
            htmlId: 'extr-page'
        },
        resolve: {
            srcipts: function(lazyScript){
                return lazyScript.register([
                    'build/vendor.ui.js'
                ])

            }
        }
    })

    .state('register', {
        url: '/register',
        views: {
            root: {
                templateUrl: 'app/auth/views/register.html'
            }
        },
        data: {
            title: 'Register',
            htmlId: 'extr-page'
        }
    })

    .state('forgotPassword', {
        url: '/forgot-password',
        views: {
            root: {
                templateUrl: 'app/auth/views/forgot-password.html'
            }
        },
        data: {
            title: 'Forgot Password',
            htmlId: 'extr-page'
        }
    })

    .state('lock', {
        url: '/lock',
        views: {
            root: {
                templateUrl: 'app/auth/views/lock.html'
            }
        },
        data: {
            title: 'Locked Screen',
            htmlId: 'lock-page'
        }
    })


}).constant('authKeys', {
    googleClientId: '',
    facebookAppId: ''
});



"use strict";


angular
.module('app.calendar', ['ngResource','ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.calendar', {
            url: '/calendar',
            views: {
                content: {
                    templateUrl: 'app/calendar/views/calendar.tpl.html'
                }
            },
            data:{
                title: 'Calendar'
            }
        });
});



'use strict';

angular.module('app.dashboard', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                "content@app": {
                    controller: 'DashboardCtrl',
                    templateUrl: 'app/dashboard/dashboard.html'
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
        .state('app.dashboard-social', {
            url: '/dashboard-social',
            views: {
                "content@app": {
                    templateUrl: 'app/dashboard/social-wall.html'
                }
            },
            data:{
                title: 'Dashboard Social'
            }
        });
});

"use strict";


angular.module('app.eCommerce', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.eCommerce', {
            abstract: true,
            data: {
                title: 'E-Commerce'
            }
        })

        .state('app.eCommerce.orders', {
            url: '/e-commerce/orders',
            data: {
                title: 'Orders'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/orders.html',
                    controller: 'OrdersDemoCtrl',
                    resolve: {
                        orders: function($http, APP_CONFIG){
                            return $http.get(APP_CONFIG.apiRootUrl + '/e-commerce/orders.json')
                        }
                    }
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.datatables.js'
                    ]);
                }
            }
        })

        .state('app.eCommerce.products', {
            url: '/e-commerce/products-view',
            data: {
                title: 'Products View'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/products.html'
                }
            }
        })

        .state('app.eCommerce.detail', {
            url: '/e-commerce/products-detail',
            data: {
                title: 'Products Detail'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/detail.html'
                }
            }
        })
});

"use strict";


angular.module('app.forms', ['ui.router'])


angular.module('app.forms').config(function ($stateProvider) {

    $stateProvider
        .state('app.form', {
            abstract: true,
            data: {
                title: 'Forms'
            }
        })

        .state('app.form.elements', {
            url: '/form/elements',
            data: {
                title: 'Form Elements'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-elements.html'
                }
            }
        })

        .state('app.form.layouts', {
            url: '/form/layouts',
            data: {
                title: 'Form Layouts'
            },
            views: {
                "content@app": {
                    controller: 'FormLayoutsCtrl',
                    templateUrl: 'app/forms/views/form-layouts/form-layouts-demo.html'
                }
            }
        })

        .state('app.form.validation', {
            url: '/form/validation',
            data: {
                title: 'Form Validation'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-validation.html'
                }
            }
        })

        .state('app.form.bootstrapForms', {
            url: '/form/bootstrap-forms',
            data: {
                title: 'Bootstrap Forms'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/bootstrap-forms.html'
                }
            }
        })

        .state('app.form.bootstrapValidation', {
            url: '/form/bootstrap-validation',
            data: {
                title: 'Bootstrap Validation'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/bootstrap-validation.html'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })

        .state('app.form.plugins', {
            url: '/form/plugins',
            data: {
                title: 'Form Plugins'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-plugins.html',
                    controller: 'FormPluginsCtrl'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        "build/vendor.ui.js"
                    ])

                }
            }
        })
        .state('app.form.wizards', {
            url: '/form/wizards',
            data: {
                title: 'Wizards'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-wizards.html',
                    controller: 'FormWizardCtrl'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        "build/vendor.ui.js"
                    ])

                }
            }
        })
        .state('app.form.editors', {
            url: '/form/editors',
            data: {
                title: 'Editors'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/form-editors.html'
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        "build/vendor.ui.js"
                    ])
                }
            }
        })
        .state('app.form.dropzone', {
            url: '/form/dropzone',
            data: {
                title: 'Dropzone'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/dropzone.html',
                    controller: function($scope){
                        $scope.dropzoneConfig = {
                            'options': { // passed into the Dropzone constructor
                                'url': '/api/plug'
                            },
                            'eventHandlers': {
                                'sending': function (file, xhr, formData) {
                                },
                                'success': function (file, response) {
                                }
                            }
                        };
                    }
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register('build/vendor.ui.js')
                }
            }
        })
        .state('app.form.imageEditor', {
            url: '/form/image-editor',
            data: {
                title: 'Image Editor'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/forms/views/image-editor.html',
                    controller: 'ImageEditorCtrl'
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])
                }
            }
        })


});
"use strict";

angular.module('app.graphs', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider
        .state('app.graphs', {
            abstract: true,
            data: {
                title: 'Graphs'
            }
        })

        .state('app.graphs.flot', {
            url: '/graphs/flot',
            data: {
                title: 'Flot Charts'
            },
            views: {
                "content@app": {
                    controller: 'FlotCtrl',
                    templateUrl: "app/graphs/views/flot-charts.html"
                }
            }
        })

        .state('app.graphs.morris', {
            url: '/graphs/morris',
            data: {
                title: 'Morris Charts'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/morris-charts.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.graphs.js'
                    ]);
                }
            }
        })

        .state('app.graphs.sparkline', {
            url: '/graphs/sparkline',
            data: {
                title: 'Sparklines'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/sparkline.html"
                }
            }
        })
        .state('app.graphs.easyPieCharts', {
            url: '/graphs/easy-pie',
            data: {
                title: 'Easy Pie Charts'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/easy-pie-charts.html"
                }
            }
        })

        .state('app.graphs.dygraphs', {
            url: '/graphs/dygraphs',
            data: {
                title: 'Dygraphs Charts'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/dygraphs-charts.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.graphs.js'
                    ]);
                }
            }
        })

        .state('app.graphs.chartjs', {
            url: '/graphs/chartjs',
            data: {
                title: 'Chart.js'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/chartjs-charts.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.graphs.js'
                    ]);
                }
            }
        })


        .state('app.graphs.highchartTables', {
            url: '/graphs/highchart-tables',
            data: {
                title: 'Highchart Tables'
            },
            views: {
                "content@app": {
                    templateUrl: "app/graphs/views/highchart-tables.html"
                }
            }
        })
});
"use strict";


angular.module('app.home', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/home',
            data: {
                title: 'Blank'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/home/views/home.html',
                    controller: 'HomeController'
                }
            },
            resolve: {
                test: function(myTestService){
                    return myTestService.getTest().then(function(result){
                        return result.message
                    })
                }
            }
        })
});

'use strict';

angular.module('app.inbox', [
    'ui.router',
    'ngResource'
])
.config(function ($stateProvider) {
    
    $stateProvider
        .state('app.inbox', {
            url: '/inbox',
            data: {
                title: 'Inbox'
            },
            views: {
                content: {
                    templateUrl: 'app/inbox/views/inbox-layout.html',
                    controller: function ($scope, config) {
                        $scope.config = config.data;
                        $scope.deleteSelected = function(){
                            $scope.$broadcast('$inboxDeleteMessages')
                        }
                    },
                    controllerAs: 'inboxCtrl',
                    resolve: {
                        config: function (InboxConfig) {
                            return InboxConfig;
                        }
                    }
                }
            }

        })
        .state('app.inbox.folder', {
            url: '/:folder',
            views: {
                inbox: {
                    templateUrl: 'app/inbox/views/inbox-folder.html',
                    controller: function ($scope, messages, $stateParams) {
                        $scope.$parent.selectedFolder = _.find($scope.$parent.config.folders, {key: $stateParams.folder});
                        $scope.messages = messages;

                        $scope.$on('$inboxDeleteMessages', function(event){
                            angular.forEach($scope.messages, function(message, idx){
                                if(message.selected){
                                    message.$delete(function(){
                                        $scope.messages.splice(idx, 1);
                                    })
                                }
                            });
                        });

                    },
                    resolve: {
                        messages: function (InboxMessage, $stateParams) {
                            return InboxMessage.query({folder: $stateParams.folder});
                        }
                    }
                }
            }
        })
        .state('app.inbox.folder.detail', {
            url: '/detail/:message',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/inbox/views/inbox-detail.html',
                    controller: function ($scope, message) {
                        $scope.message = message;
                    },
                    resolve: {
                        message: function (InboxMessage, $stateParams) {
                            return InboxMessage.get({id: $stateParams.message})
                        }
                    }
                }
            }
        })
        .state('app.inbox.folder.replay', {
            url: '/replay/:message',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/inbox/views/inbox-replay.html',
                    controller: function ($scope, $timeout, $state, replayTo) {
                        $scope.replayTo = replayTo;
                        $scope.sending = false;
                        $scope.send = function(){
                            $scope.sending = true;
                            $timeout(function(){
                                $state.go('app.inbox.folder')
                            }, 1000);
                        }
                    },
                    controllerAs: 'replayCtrl',
                    resolve: {
                        replayTo: function (InboxMessage, $stateParams) {
                            return InboxMessage.get({id: $stateParams.message})
                        }
                    }
                }
            }
        })
        .state('app.inbox.folder.compose', {
            url: '/compose',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/inbox/views/inbox-compose.html',
                    controller: function ($scope, $timeout, $state) {
                        $scope.sending = false;
                        $scope.send = function(){
                            $scope.sending = true;
                            $timeout(function(){
                                $state.go('app.inbox.folder')
                            }, 1000);
                        }
                    },
                    controllerAs: 'composeCtrl'
                }
            }
        });
});
"use strict";


angular.module('app.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/layout/layout.tpl.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/home');

})


    "use strict";


    angular.module('app.maps', ['ui.router',
        'uiGmapgoogle-maps'
    ])
    //.config(function(uiGmapGoogleMapApiProvider) {
    //    uiGmapGoogleMapApiProvider.configure({
    //        //    key: 'your api key',
    //        v: '3.20', //defaults to latest 3.X anyhow
    //        libraries: 'weather,geometry,visualization'
    //    });
    //})


    angular.module('app.maps').config(function ($stateProvider) {

        $stateProvider
            .state('app.maps', {
                url: '/maps',
                data: {
                    title: 'Maps'
                },
                views: {
                    "content@app": {
                        controller: 'MapsDemoCtrl',
                        templateUrl: 'app/maps/views/maps-demo.html'
                    }
                }
            })
    });
"use strict";

angular.module('app.misc', ['ui.router']);


angular.module('app.misc').config(function ($stateProvider) {

    $stateProvider
        .state('app.misc', {
            abstract: true,
            data: {
                title: 'Miscellaneous'
            }
        })

        .state('app.misc.pricingTable', {
            url: '/pricing-table',
            data: {
                title: 'Pricing Table'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/pricing-table.html'
                }
            }
        })

        .state('app.misc.invoice', {
            url: '/invoice',
            data: {
                title: 'Invoice'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/invoice.html'
                }
            }
        })

        .state('app.misc.error404', {
            url: '/404',
            data: {
                title: 'Error 404'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/error404.html'
                }
            }
        })

        .state('app.misc.error500', {
            url: '/500',
            data: {
                title: 'Error 500'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/error500.html'
                }
            }
        })

        .state('app.misc.blank', {
            url: '/blank',
            data: {
                title: 'Blank'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/blank.html'
                }
            }
        })

        .state('app.misc.test', {
            url: '/test',
            data: {
                title: 'Test'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/test.html'
                }
            }
        })

        .state('app.misc.emailTemplate', {
            url: '/email-template',
            data: {
                title: 'Email Template'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/email-template.html'
                }
            }
        })

        .state('app.misc.search', {
            url: '/search',
            data: {
                title: 'Search'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/search.html'
                }
            }
        })

        .state('app.misc.ckeditor', {
            url: '/ckeditor',
            data: {
                title: 'CK Editor'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/misc/views/ckeditor.html'
                }
            },
            resolve:{
                scripts: function(lazyScript){
                    return lazyScript.register('smartadmin-plugin/legacy/ckeditor/ckeditor.js');
                }
            }
        })
});
"use strict";


angular.module('app.smartAdmin', ['ui.router']);


angular.module('app.smartAdmin').config(function ($stateProvider) {

    $stateProvider
        .state('app.smartAdmin', {
            abstract: true,
            data: {
                title: 'SmartAdmin Intel'
            }
        })

        .state('app.smartAdmin.appLayout', {
            url: '/app-layout',
            data: {
                title: 'App Layout'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layout.html'
                }
            }
        })

        .state('app.smartAdmin.diffVer', {
            url: '/different-versions',
            data: {
                title: 'Different Versions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/different-versions.html'
                }
            }
        })

        .state('app.smartAdmin.appLayouts', {
            url: '/app-layouts',
            data: {
                title: 'App Layouts'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layouts.html'
                }
            }
        })

        .state('app.smartAdmin.prebuiltSkins', {
            url: '/prebuilt-skins',
            data: {
                title: 'Prebuilt Skins'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/prebuilt-skins.html'
                }
            }
        })
});
"use strict";

angular.module('app.tables', [ 'ui.router', 'datatables', 'datatables.bootstrap']);

angular.module('app.tables').config(function ($stateProvider) {

    $stateProvider
        .state('app.tables', {
            abstract: true,
            data: {
                title: 'Tables'
            }
        })

        .state('app.tables.normal', {
            url: '/tables/normal',
            data: {
                title: 'Normal Tables'
            },
            views: {
                "content@app": {
                    templateUrl: "app/tables/views/normal.html"

                }
            }
        })

        .state('app.tables.datatables', {
            url: '/tables/datatables',
            data: {
                title: 'Data Tables'
            },
            views: {
                "content@app": {
                    controller: 'DatatablesCtrl as datatables',
                    templateUrl: "app/tables/views/datatables.html"
                }
            }
        })

        .state('app.tables.jqgrid', {
            url: '/tables/jqgrid',
            data: {
                title: 'Jquery Grid'
            },
            views: {
                "content@app": {
                    controller: 'JqGridCtrl',
                    templateUrl: "app/tables/views/jqgrid.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                        'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                    ])

                }
            }
        })
});
'use strict'

angular.module('app.ui', ['ui.router']);

angular.module('app.ui').config(function($stateProvider){

    $stateProvider
        .state('app.ui', {
            abstract: true,
            data: {
                title: 'UI Elements'
            }
        })
        .state('app.ui.general', {
            url: '/ui/general',
            data: {
                title: 'General Elements'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/general-elements.html',
                    controller: 'GeneralElementsCtrl'
                }
            }
        })
        .state('app.ui.buttons', {
            url: '/ui/buttons',
            data: {
                title: 'Buttons'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/buttons.html',
                    controller: 'GeneralElementsCtrl'
                }
            }
        })
        .state('app.ui.iconsFa', {
            url: '/ui/icons-font-awesome',
            data: {
                title: 'Font Awesome'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-fa.html'
                }
            }
        })
        .state('app.ui.iconsGlyph', {
            url: '/ui/icons-glyph',
            data: {
                title: 'Glyph Icons'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-glyph.html'
                }
            }
        })
        .state('app.ui.iconsFlags', {
            url: '/ui/icons-flags',
            data: {
                title: 'Flags'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/icons-flags.html'
                }
            }
        })
        .state('app.ui.grid', {
            url: '/ui/grid',
            data: {
                title: 'Grid'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/grid.html'
                }
            }
        })
        .state('app.ui.treeView', {
            url: '/ui/tree-view',
            data: {
                title: 'Tree View'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/tree-view.html',
                    controller: 'TreeviewCtrl'
                }
            }
        })
        .state('app.ui.nestableLists', {
            url: '/ui/nestable-lists',
            data: {
                title: 'Nestable Lists'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/nestable-lists.html'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })
        .state('app.ui.jqueryUi', {
            url: '/ui/jquery-ui',
            data: {
                title: 'JQuery UI'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/jquery-ui.html',
                    controller: 'JquiCtrl'
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.ui.js'
                    ])

                }
            }
        })
        .state('app.ui.typography', {
            url: '/ui/typography',
            data: {
                title: 'JQuery UI'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/ui/views/typography.html'
                }
            }
        })
});
"use strict";

angular.module('app.widgets', ['ui.router'])


.config(function ($stateProvider) {

    $stateProvider
        .state('app.widgets', {
            url: '/widgets',
            data: {
                title: 'Widgets'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/widgets/views/widgets-demo.html'

                }
            }

        })

});

(function(){
    "use strict";

    angular.module('SmartAdmin.Forms', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.UI', []);
})();
    "use strict";


angular.module('app.chat', ['ngSanitize'])
.run(function ($templateCache) {

    $templateCache.put("template/popover/popover.html",
        "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
        "  <div class=\"arrow\"></div>\n" +
        "\n" +
        "  <div class=\"popover-inner\">\n" +
        "      <h3 class=\"popover-title\" ng-bind-html=\"title | unsafe\" ng-show=\"title\"></h3>\n" +
        "      <div class=\"popover-content\"ng-bind-html=\"content | unsafe\"></div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");

}).filter('unsafe', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);
'use strict';

angular.module('app.dashboard').controller('DashboardCtrl', function ($scope, $interval, CalendarEvent) {

    // Live Feeds Widget Data And Display Controls
    // Live Stats Tab


    function getFakeItem(index, prevValue){
        var limitUp = Math.min(100, prevValue + 5),
            limitDown = Math.abs(prevValue - 5);
        return [
            index,
            _.random(limitDown, limitUp, true)
        ]
    }

    function getFakeData() {
        return _(_.range(199)).reduce(function (out, number) {

            out.push(getFakeItem(number+1, _.last(out)[1]));
            return out;
        }, [
            [0, 50] // starting point
        ])
    }

    $scope.autoUpdate = false;

    var updateInterval;
    $scope.$watch('autoUpdate', function(autoUpdate){

        if(autoUpdate){
            updateInterval = $interval(function(){
                var stats = _.rest($scope.liveStats[0]).map(function(elem, i){
                    elem[0] = i;
                    return elem;
                });
                stats.push([199, _.last(stats)[1]]);
                $scope.liveStats = [stats];
            }, 1500)
        } else {
            $interval.cancel(updateInterval);
        }
    });


    $scope.liveStats = [getFakeData()];



    $scope.liveStatsOptions = {
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            min: 0,
            max: 100
        },
        colors: ['rgb(87, 136, 156)'],
        series: {
            lines: {
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.4
                        },
                        {
                            opacity: 0
                        }
                    ]
                },
                steps: false

            }
        }
    };


    // Stats Display With Flot Chart

    var twitter = [
        [1, 27],
        [2, 34],
        [3, 51],
        [4, 48],
        [5, 55],
        [6, 65],
        [7, 61],
        [8, 70],
        [9, 65],
        [10, 75],
        [11, 57],
        [12, 59],
        [13, 62]
    ];
    var facebook = [
        [1, 25],
        [2, 31],
        [3, 45],
        [4, 37],
        [5, 38],
        [6, 40],
        [7, 47],
        [8, 55],
        [9, 43],
        [10, 50],
        [11, 47],
        [12, 39],
        [13, 47]
    ];
    $scope.statsData = [
        {
            label: "Twitter",
            data: twitter,
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.1
                        },
                        {
                            opacity: 0.13
                        }
                    ]
                }
            },
            points: {
                show: true
            }
        },
        {
            label: "Facebook",
            data: facebook,
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.1
                        },
                        {
                            opacity: 0.13
                        }
                    ]
                }
            },
            points: {
                show: true
            }
        }
    ];

    $scope.statsDisplayOptions = {
        grid: {
            hoverable: true
        },
        colors: ["#568A89", "#3276B1"],
        tooltip: true,
        tooltipOpts: {
            //content : "Value <b>$x</b> Value <span>$y</span>",
            defaultTheme: false
        },
        xaxis: {
            ticks: [
                [1, "JAN"],
                [2, "FEB"],
                [3, "MAR"],
                [4, "APR"],
                [5, "MAY"],
                [6, "JUN"],
                [7, "JUL"],
                [8, "AUG"],
                [9, "SEP"],
                [10, "OCT"],
                [11, "NOV"],
                [12, "DEC"],
                [13, "JAN+1"]
            ]
        },
        yaxes: {

        }
    };


    /* Live stats TAB 3: Revenew  */

    var trgt = [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]],
        prft = [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]],
        sgnups = [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]];

    var targets = {
        label : "Target Profit",
        data : trgt,
        bars : {
            show : true,
            align : "center",
            barWidth : 30 * 30 * 60 * 1000 * 80
        }
    };
    $scope.targetsShow = true;

    $scope.$watch('targetsShow', function(toggle){
        reveniewElementToggle(targets, toggle);
    });


    var actuals = {
        label : "Actual Profit",
        data : prft,
        color : '#3276B1',
        lines : {
            show : true,
            lineWidth : 3
        },
        points : {
            show : true
        }
    };

    $scope.actualsShow = true;

    $scope.$watch('actualsShow', function(toggle){
        reveniewElementToggle(actuals, toggle);
    });

    var signups = {
        label : "Actual Signups",
        data : sgnups,
        color : '#71843F',
        lines : {
            show : true,
            lineWidth : 1
        },
        points : {
            show : true
        }
    };
    $scope.signupsShow = true;

    $scope.$watch('signupsShow', function(toggle){
        reveniewElementToggle(signups, toggle);
    });

    $scope.revenewData = [targets, actuals, signups];

    function reveniewElementToggle(element, toggle){
        if(toggle){
            if($scope.revenewData.indexOf(element) == -1)
                $scope.revenewData.push(element)
        } else {
            $scope.revenewData = _.without($scope.revenewData, element);
        }
    }

    $scope.revenewDisplayOptions = {
        grid : {
            hoverable : true
        },
        tooltip : true,
        tooltipOpts : {
            //content: '%x - %y',
            //dateFormat: '%b %y',
            defaultTheme : false
        },
        xaxis : {
            mode : "time"
        },
        yaxes : {
            tickFormatter : function(val, axis) {
                return "$" + val;
            },
            max : 1200
        }

    };

    // bird eye widget data
    $scope.countriesVisitsData = {
        "US": 4977,
        "AU": 4873,
        "IN": 3671,
        "BR": 2476,
        "TR": 1476,
        "CN": 146,
        "CA": 134,
        "BD": 100
    };

    $scope.events = [];

    // Queriing our events from CalendarEvent resource...
    // Scope update will automatically update the calendar
    CalendarEvent.query().$promise.then(function (events) {
        $scope.events = events;
    });


});
'use strict'

angular.module('app.forms').value('formsCommon', {
        countries: [
            {key: "244", value: "Aaland Islands"},
            {key: "1", value: "Afghanistan"},
            {key: "2", value: "Albania"},
            {key: "3", value: "Algeria"},
            {key: "4", value: "American Samoa"},
            {key: "5", value: "Andorra"},
            {key: "6", value: "Angola"},
            {key: "7", value: "Anguilla"},
            {key: "8", value: "Antarctica"},
            {key: "9", value: "Antigua and Barbuda"},
            {key: "10", value: "Argentina"},
            {key: "11", value: "Armenia"},
            {key: "12", value: "Aruba"},
            {key: "13", value: "Australia"},
            {key: "14", value: "Austria"},
            {key: "15", value: "Azerbaijan"},
            {key: "16", value: "Bahamas"},
            {key: "17", value: "Bahrain"},
            {key: "18", value: "Bangladesh"},
            {key: "19", value: "Barbados"},
            {key: "20", value: "Belarus"},
            {key: "21", value: "Belgium"},
            {key: "22", value: "Belize"},
            {key: "23", value: "Benin"},
            {key: "24", value: "Bermuda"},
            {key: "25", value: "Bhutan"},
            {key: "26", value: "Bolivia"},
            {key: "245", value: "Bonaire, Sint Eustatius and Saba"},
            {key: "27", value: "Bosnia and Herzegovina"},
            {key: "28", value: "Botswana"},
            {key: "29", value: "Bouvet Island"},
            {key: "30", value: "Brazil"},
            {key: "31", value: "British Indian Ocean Territory"},
            {key: "32", value: "Brunei Darussalam"},
            {key: "33", value: "Bulgaria"},
            {key: "34", value: "Burkina Faso"},
            {key: "35", value: "Burundi"},
            {key: "36", value: "Cambodia"},
            {key: "37", value: "Cameroon"},
            {key: "38", value: "Canada"},
            {key: "251", value: "Canary Islands"},
            {key: "39", value: "Cape Verde"},
            {key: "40", value: "Cayman Islands"},
            {key: "41", value: "Central African Republic"},
            {key: "42", value: "Chad"},
            {key: "43", value: "Chile"},
            {key: "44", value: "China"},
            {key: "45", value: "Christmas Island"},
            {key: "46", value: "Cocos (Keeling) Islands"},
            {key: "47", value: "Colombia"},
            {key: "48", value: "Comoros"},
            {key: "49", value: "Congo"},
            {key: "50", value: "Cook Islands"},
            {key: "51", value: "Costa Rica"},
            {key: "52", value: "Cote D'Ivoire"},
            {key: "53", value: "Croatia"},
            {key: "54", value: "Cuba"},
            {key: "246", value: "Curacao"},
            {key: "55", value: "Cyprus"},
            {key: "56", value: "Czech Republic"},
            {key: "237", value: "Democratic Republic of Congo"},
            {key: "57", value: "Denmark"},
            {key: "58", value: "Djibouti"},
            {key: "59", value: "Dominica"},
            {key: "60", value: "Dominican Republic"},
            {key: "61", value: "East Timor"},
            {key: "62", value: "Ecuador"},
            {key: "63", value: "Egypt"},
            {key: "64", value: "El Salvador"},
            {key: "65", value: "Equatorial Guinea"},
            {key: "66", value: "Eritrea"},
            {key: "67", value: "Estonia"},
            {key: "68", value: "Ethiopia"},
            {key: "69", value: "Falkland Islands (Malvinas)"},
            {key: "70", value: "Faroe Islands"},
            {key: "71", value: "Fiji"},
            {key: "72", value: "Finland"},
            {key: "74", value: "France, skypolitan"},
            {key: "75", value: "French Guiana"},
            {key: "76", value: "French Polynesia"},
            {key: "77", value: "French Southern Territories"},
            {key: "126", value: "FYROM"},
            {key: "78", value: "Gabon"},
            {key: "79", value: "Gambia"},
            {key: "80", value: "Georgia"},
            {key: "81", value: "Germany"},
            {key: "82", value: "Ghana"},
            {key: "83", value: "Gibraltar"},
            {key: "84", value: "Greece"},
            {key: "85", value: "Greenland"},
            {key: "86", value: "Grenada"},
            {key: "87", value: "Guadeloupe"},
            {key: "88", value: "Guam"},
            {key: "89", value: "Guatemala"},
            {key: "241", value: "Guernsey"},
            {key: "90", value: "Guinea"},
            {key: "91", value: "Guinea-Bissau"},
            {key: "92", value: "Guyana"},
            {key: "93", value: "Haiti"},
            {key: "94", value: "Heard and Mc Donald Islands"},
            {key: "95", value: "Honduras"},
            {key: "96", value: "Hong Kong"},
            {key: "97", value: "Hungary"},
            {key: "98", value: "Iceland"},
            {key: "99", value: "India"},
            {key: "100", value: "Indonesia"},
            {key: "101", value: "Iran (Islamic Republic of)"},
            {key: "102", value: "Iraq"},
            {key: "103", value: "Ireland"},
            {key: "104", value: "Israel"},
            {key: "105", value: "Italy"},
            {key: "106", value: "Jamaica"},
            {key: "107", value: "Japan"},
            {key: "240", value: "Jersey"},
            {key: "108", value: "Jordan"},
            {key: "109", value: "Kazakhstan"},
            {key: "110", value: "Kenya"},
            {key: "111", value: "Kiribati"},
            {key: "113", value: "Korea, Republic of"},
            {key: "114", value: "Kuwait"},
            {key: "115", value: "Kyrgyzstan"},
            {key: "116", value: "Lao People's Democratic Republic"},
            {key: "117", value: "Latvia"},
            {key: "118", value: "Lebanon"},
            {key: "119", value: "Lesotho"},
            {key: "120", value: "Liberia"},
            {key: "121", value: "Libyan Arab Jamahiriya"},
            {key: "122", value: "Liechtenstein"},
            {key: "123", value: "Lithuania"},
            {key: "124", value: "Luxembourg"},
            {key: "125", value: "Macau"},
            {key: "127", value: "Madagascar"},
            {key: "128", value: "Malawi"},
            {key: "129", value: "Malaysia"},
            {key: "130", value: "Maldives"},
            {key: "131", value: "Mali"},
            {key: "132", value: "Malta"},
            {key: "133", value: "Marshall Islands"},
            {key: "134", value: "Martinique"},
            {key: "135", value: "Mauritania"},
            {key: "136", value: "Mauritius"},
            {key: "137", value: "Mayotte"},
            {key: "138", value: "Mexico"},
            {key: "139", value: "Micronesia, Federated States of"},
            {key: "140", value: "Moldova, Republic of"},
            {key: "141", value: "Monaco"},
            {key: "142", value: "Mongolia"},
            {key: "242", value: "Montenegro"},
            {key: "143", value: "Montserrat"},
            {key: "144", value: "Morocco"},
            {key: "145", value: "Mozambique"},
            {key: "146", value: "Myanmar"},
            {key: "147", value: "Namibia"},
            {key: "148", value: "Nauru"},
            {key: "149", value: "Nepal"},
            {key: "150", value: "Netherlands"},
            {key: "151", value: "Netherlands Antilles"},
            {key: "152", value: "New Caledonia"},
            {key: "153", value: "New Zealand"},
            {key: "154", value: "Nicaragua"},
            {key: "155", value: "Niger"},
            {key: "156", value: "Nigeria"},
            {key: "157", value: "Niue"},
            {key: "158", value: "Norfolk Island"},
            {key: "112", value: "North Korea"},
            {key: "159", value: "Northern Mariana Islands"},
            {key: "160", value: "Norway"},
            {key: "161", value: "Oman"},
            {key: "162", value: "Pakistan"},
            {key: "163", value: "Palau"},
            {key: "247", value: "Palestinian Territory, Occupied"},
            {key: "164", value: "Panama"},
            {key: "165", value: "Papua New Guinea"},
            {key: "166", value: "Paraguay"},
            {key: "167", value: "Peru"},
            {key: "168", value: "Philippines"},
            {key: "169", value: "Pitcairn"},
            {key: "170", value: "Poland"},
            {key: "171", value: "Portugal"},
            {key: "172", value: "Puerto Rico"},
            {key: "173", value: "Qatar"},
            {key: "174", value: "Reunion"},
            {key: "175", value: "Romania"},
            {key: "176", value: "Russian Federation"},
            {key: "177", value: "Rwanda"},
            {key: "178", value: "Saint Kitts and Nevis"},
            {key: "179", value: "Saint Lucia"},
            {key: "180", value: "Saint Vincent and the Grenadines"},
            {key: "181", value: "Samoa"},
            {key: "182", value: "San Marino"},
            {key: "183", value: "Sao Tome and Principe"},
            {key: "184", value: "Saudi Arabia"},
            {key: "185", value: "Senegal"},
            {key: "243", value: "Serbia"},
            {key: "186", value: "Seychelles"},
            {key: "187", value: "Sierra Leone"},
            {key: "188", value: "Singapore"},
            {key: "189", value: "Slovak Republic"},
            {key: "190", value: "Slovenia"},
            {key: "191", value: "Solomon Islands"},
            {key: "192", value: "Somalia"},
            {key: "193", value: "South Africa"},
            {key: "194", value: "South Georgia &amp; South Sandwich Islands"},
            {key: "248", value: "South Sudan"},
            {key: "195", value: "Spain"},
            {key: "196", value: "Sri Lanka"},
            {key: "249", value: "St. Barthelemy"},
            {key: "197", value: "St. Helena"},
            {key: "250", value: "St. Martin (French part)"},
            {key: "198", value: "St. Pierre and Miquelon"},
            {key: "199", value: "Sudan"},
            {key: "200", value: "Suriname"},
            {key: "201", value: "Svalbard and Jan Mayen Islands"},
            {key: "202", value: "Swaziland"},
            {key: "203", value: "Sweden"},
            {key: "204", value: "Switzerland"},
            {key: "205", value: "Syrian Arab Republic"},
            {key: "206", value: "Taiwan"},
            {key: "207", value: "Tajikistan"},
            {key: "208", value: "Tanzania, United Republic of"},
            {key: "209", value: "Thailand"},
            {key: "210", value: "Togo"},
            {key: "211", value: "Tokelau"},
            {key: "212", value: "Tonga"},
            {key: "213", value: "Trinidad and Tobago"},
            {key: "214", value: "Tunisia"},
            {key: "215", value: "Turkey"},
            {key: "216", value: "Turkmenistan"},
            {key: "217", value: "Turks and Caicos Islands"},
            {key: "218", value: "Tuvalu"},
            {key: "219", value: "Uganda"},
            {key: "220", value: "Ukraine"},
            {key: "221", value: "United Arab Emirates"},
            {key: "222", value: "United Kingdom"},
            {key: "223", value: "United States"},
            {key: "224", value: "United States Minor Outlying Islands"},
            {key: "225", value: "Uruguay"},
            {key: "226", value: "Uzbekistan"},
            {key: "227", value: "Vanuatu"},
            {key: "228", value: "Vatican City State (Holy See)"},
            {key: "229", value: "Venezuela"},
            {key: "230", value: "Viet Nam"},
            {key: "231", value: "Virgin Islands (British)"},
            {key: "232", value: "Virgin Islands (U.S.)"},
            {key: "233", value: "Wallis and Futuna Islands"},
            {key: "234", value: "Western Sahara"},
            {key: "235", value: "Yemen"},
            {key: "238", value: "Zambia"},
            {key: "239", value: "Zimbabwe"}
        ],
        validateOptions: {
            errorElement: 'em',
            errorClass: 'invalid',
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).parent().addClass('state-error').removeClass('state-success');

            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).parent().removeClass('state-error').addClass('state-success');
            },
            errorPlacement : function(error, element) {
                error.insertAfter(element.parent());
            }
        }
    });
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/dashboard/live-feeds.tpl.html","<div jarvis-widget id=\"live-feeds-widget\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\"\n     data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\n<!-- widget options:\nusage: <div class=\"jarviswidget\" id=\"wid-id-0\" data-widget-editbutton=\"false\">\n\ndata-widget-colorbutton=\"false\"\ndata-widget-editbutton=\"false\"\ndata-widget-togglebutton=\"false\"\ndata-widget-deletebutton=\"false\"\ndata-widget-fullscreenbutton=\"false\"\ndata-widget-custombutton=\"false\"\ndata-widget-collapsed=\"true\"\ndata-widget-sortable=\"false\"\n\n-->\n<header>\n    <span class=\"widget-icon\"> <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\n\n    <h2>Live Feeds </h2>\n\n    <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\n        <li class=\"active\">\n            <a data-toggle=\"tab\" href=\"#s1\"><i class=\"fa fa-clock-o\"></i> <span class=\"hidden-mobile hidden-tablet\">Live Stats</span></a>\n        </li>\n\n        <li>\n            <a data-toggle=\"tab\" href=\"#s2\"><i class=\"fa fa-facebook\"></i> <span class=\"hidden-mobile hidden-tablet\">Social Network</span></a>\n        </li>\n\n        <li>\n            <a data-toggle=\"tab\" href=\"#s3\"><i class=\"fa fa-dollar\"></i> <span class=\"hidden-mobile hidden-tablet\">Revenue</span></a>\n        </li>\n    </ul>\n\n</header>\n\n<!-- widget div-->\n<div class=\"no-padding\">\n\n    <div class=\"widget-body\">\n        <!-- content -->\n        <div id=\"myTabContent\" class=\"tab-content\">\n            <div class=\"tab-pane fade active in padding-10 no-padding-bottom\" id=\"s1\">\n                <div class=\"row no-space\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n														<span class=\"demo-liveupdate-1\"> <span\n                                                                class=\"onoffswitch-title\">Live switch</span> <span\n                                                                class=\"onoffswitch\">\n																<input type=\"checkbox\" name=\"start_interval\" ng-model=\"autoUpdate\"\n                                                                       class=\"onoffswitch-checkbox\" id=\"start_interval\">\n																<label class=\"onoffswitch-label\" for=\"start_interval\">\n                                                                    <span class=\"onoffswitch-inner\"\n                                                                          data-swchon-text=\"ON\"\n                                                                          data-swchoff-text=\"OFF\"></span>\n                                                                    <span class=\"onoffswitch-switch\"></span>\n                                                                </label> </span> </span>\n\n                        <div id=\"updating-chart\" class=\"chart-large txt-color-blue\" flot-basic flot-data=\"liveStats\" flot-options=\"liveStatsOptions\"></div>\n\n                    </div>\n                    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats\">\n\n                        <div class=\"row\">\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> My Tasks <span\n                                    class=\"pull-right\">130/200</span> </span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-color-blueDark\" style=\"width: 65%;\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> Transfered <span\n                                    class=\"pull-right\">440 GB</span> </span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-color-blue\" style=\"width: 34%;\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> Bugs Squashed<span\n                                    class=\"pull-right\">77%</span> </span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-color-blue\" style=\"width: 77%;\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> User Testing <span\n                                    class=\"pull-right\">7 Days</span> </span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-color-greenLight\" style=\"width: 84%;\"></div>\n                                </div>\n                            </div>\n\n                            <span class=\"show-stat-buttons\"> <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"> <a\n                                    href-void class=\"btn btn-default btn-block hidden-xs\">Generate PDF</a> </span> <span\n                                    class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"> <a href-void\n                                                                                     class=\"btn btn-default btn-block hidden-xs\">Report\n                                a bug</a> </span> </span>\n\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"show-stat-microcharts\" data-sparkline-container data-easy-pie-chart-container>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\n                        <div class=\"easy-pie-chart txt-color-orangeDark\" data-percent=\"33\" data-pie-size=\"50\">\n                            <span class=\"percent percent-sign\">35</span>\n                        </div>\n                        <span class=\"easy-pie-title\"> Server Load <i class=\"fa fa-caret-up icon-color-bad\"></i> </span>\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\n                            <li>\n                                <span class=\"label bg-color-greenLight\"><i class=\"fa fa-caret-up\"></i> 97%</span>\n                            </li>\n                            <li>\n                                <span class=\"label bg-color-blueLight\"><i class=\"fa fa-caret-down\"></i> 44%</span>\n                            </li>\n                        </ul>\n                        <div class=\"sparkline txt-color-greenLight hidden-sm hidden-md pull-right\"\n                             data-sparkline-type=\"line\" data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n                             data-fill-color=\"transparent\">\n                            130, 187, 250, 257, 200, 210, 300, 270, 363, 247, 270, 363, 247\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                        <div class=\"easy-pie-chart txt-color-greenLight\" data-percent=\"78.9\" data-pie-size=\"50\">\n                            <span class=\"percent percent-sign\">78.9 </span>\n                        </div>\n                        <span class=\"easy-pie-title\"> Disk Space <i class=\"fa fa-caret-down icon-color-good\"></i></span>\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\n                            <li>\n                                <span class=\"label bg-color-blueDark\"><i class=\"fa fa-caret-up\"></i> 76%</span>\n                            </li>\n                            <li>\n                                <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 3%</span>\n                            </li>\n                        </ul>\n                        <div class=\"sparkline txt-color-blue hidden-sm hidden-md pull-right\" data-sparkline-type=\"line\"\n                             data-sparkline-height=\"33px\" data-sparkline-width=\"70px\" data-fill-color=\"transparent\">\n                            257, 200, 210, 300, 270, 363, 130, 187, 250, 247, 270, 363, 247\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                        <div class=\"easy-pie-chart txt-color-blue\" data-percent=\"23\" data-pie-size=\"50\">\n                            <span class=\"percent percent-sign\">23 </span>\n                        </div>\n                        <span class=\"easy-pie-title\"> Transfered <i class=\"fa fa-caret-up icon-color-good\"></i></span>\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\n                            <li>\n                                <span class=\"label bg-color-darken\">10GB</span>\n                            </li>\n                            <li>\n                                <span class=\"label bg-color-blueDark\"><i class=\"fa fa-caret-up\"></i> 10%</span>\n                            </li>\n                        </ul>\n                        <div class=\"sparkline txt-color-darken hidden-sm hidden-md pull-right\"\n                             data-sparkline-type=\"line\" data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n                             data-fill-color=\"transparent\">\n                            200, 210, 363, 247, 300, 270, 130, 187, 250, 257, 363, 247, 270\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                        <div class=\"easy-pie-chart txt-color-darken\" data-percent=\"36\" data-pie-size=\"50\">\n                            <span class=\"percent degree-sign\">36 <i class=\"fa fa-caret-up\"></i></span>\n                        </div>\n                        <span class=\"easy-pie-title\"> Temperature <i\n                                class=\"fa fa-caret-down icon-color-good\"></i></span>\n                        <ul class=\"smaller-stat hidden-sm pull-right\">\n                            <li>\n                                <span class=\"label bg-color-red\"><i class=\"fa fa-caret-up\"></i> 124</span>\n                            </li>\n                            <li>\n                                <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 40 F</span>\n                            </li>\n                        </ul>\n                        <div class=\"sparkline txt-color-red hidden-sm hidden-md pull-right\" data-sparkline-type=\"line\"\n                             data-sparkline-height=\"33px\" data-sparkline-width=\"70px\" data-fill-color=\"transparent\">\n                            2700, 3631, 2471, 2700, 3631, 2471, 1300, 1877, 2500, 2577, 2000, 2100, 3000\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <!-- end s1 tab pane -->\n\n            <div class=\"tab-pane fade\" id=\"s2\">\n                <div class=\"widget-body-toolbar bg-color-white\">\n\n                    <form class=\"form-inline\" role=\"form\">\n\n                        <div class=\"form-group\">\n                            <label class=\"sr-only\" for=\"s123\">Show From</label>\n                            <input type=\"email\" class=\"form-control input-sm\" id=\"s123\" placeholder=\"Show From\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"email\" class=\"form-control input-sm\" id=\"s124\" placeholder=\"To\">\n                        </div>\n\n                        <div class=\"btn-group hidden-phone pull-right\">\n                            <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n                                    class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n                            <ul class=\"dropdown-menu pull-right\">\n                                <li>\n                                    <a href-void><i class=\"fa fa-file-text-alt\"></i> Export to PDF</a>\n                                </li>\n                                <li>\n                                    <a href-void><i class=\"fa fa-question-sign\"></i> Help</a>\n                                </li>\n                            </ul>\n                        </div>\n\n                    </form>\n\n                </div>\n                <div class=\"padding-10\">\n                    <div id=\"statsChart\" class=\"chart-large has-legend-unique\" flot-basic flot-data=\"statsData\" flot-options=\"statsDisplayOptions\"></div>\n                </div>\n\n            </div>\n            <!-- end s2 tab pane -->\n\n            <div class=\"tab-pane fade\" id=\"s3\">\n\n                <div class=\"widget-body-toolbar bg-color-white smart-form\" id=\"rev-toggles\">\n\n                    <div class=\"inline-group\">\n\n                        <label for=\"gra-0\" class=\"checkbox\">\n                            <input type=\"checkbox\" id=\"gra-0\" ng-model=\"targetsShow\">\n                            <i></i> Target </label>\n                        <label for=\"gra-1\" class=\"checkbox\">\n                            <input type=\"checkbox\" id=\"gra-1\" ng-model=\"actualsShow\">\n                            <i></i> Actual </label>\n                        <label for=\"gra-2\" class=\"checkbox\">\n                            <input type=\"checkbox\" id=\"gra-2\" ng-model=\"signupsShow\">\n                            <i></i> Signups </label>\n                    </div>\n\n                    <div class=\"btn-group hidden-phone pull-right\">\n                        <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n                                class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n                        <ul class=\"dropdown-menu pull-right\">\n                            <li>\n                                <a href-void><i class=\"fa fa-file-text-alt\"></i> Export to PDF</a>\n                            </li>\n                            <li>\n                                <a href-void><i class=\"fa fa-question-sign\"></i> Help</a>\n                            </li>\n                        </ul>\n                    </div>\n\n                </div>\n\n                <div class=\"padding-10\">\n                    <div id=\"flotcontainer\" class=\"chart-large has-legend-unique\" flot-basic flot-data=\"revenewData\" flot-options=\"revenewDisplayOptions\" ></div>\n                </div>\n            </div>\n            <!-- end s3 tab pane -->\n        </div>\n\n        <!-- end content -->\n    </div>\n\n</div>\n<!-- end widget div -->\n</div>\n");
$templateCache.put("app/layout/layout.tpl.html","<!-- HEADER -->\n<div data-smart-include=\"app/layout/partials/header.tpl.html\" class=\"placeholder-header\"></div>\n<!-- END HEADER -->\n\n\n<!-- Left panel : Navigation area -->\n<!-- Note: This width of the aside area can be adjusted through LESS variables -->\n<div data-smart-include=\"app/layout/partials/navigation.tpl.html\" class=\"placeholder-left-panel\"></div>\n\n<!-- END NAVIGATION -->\n\n<!-- MAIN PANEL -->\n<div id=\"main\" role=\"main\">\n\n    <!-- RIBBON -->\n    <div id=\"ribbon\">\n\n        <!-- breadcrumb -->\n        <state-breadcrumbs></state-breadcrumbs>\n        <!-- end breadcrumb -->\n\n\n    </div>\n    <!-- END RIBBON -->\n\n\n    <div data-smart-router-animation-wrap=\"content content@app\" data-wrap-for=\"#content\">\n        <div data-ui-view=\"content\" data-autoscroll=\"false\"></div>\n    </div>\n\n</div>\n<!-- END MAIN PANEL -->\n\n<!-- PAGE FOOTER -->\n<div data-smart-include=\"app/layout/partials/footer.tpl.html\"></div>\n\n<div data-smart-include=\"app/layout/shortcut/shortcut.tpl.html\"></div>\n\n<!-- END PAGE FOOTER -->\n\n\n");
$templateCache.put("app/auth/directives/login-info.tpl.html","<div class=\"login-info ng-cloak\">\n    <span> <!-- User image size is adjusted inside CSS, it should stay as it -->\n        <a  href=\"\" toggle-shortcut>\n            <img ng-src=\"{{user.picture}}\" alt=\"me\" class=\"online\">\n                <span>{{user.username}}\n                </span>\n            <i class=\"fa fa-angle-down\"></i>\n        </a>\n     </span>\n</div>");
$templateCache.put("app/calendar/directives/full-calendar.tpl.html","<div jarvis-widget data-widget-color=\"blueDark\">\n    <header>\n        <span class=\"widget-icon\"> <i class=\"fa fa-calendar\"></i> </span>\n\n        <h2> My Events </h2>\n\n        <div class=\"widget-toolbar\">\n            <!-- add: non-hidden - to disable auto hide -->\n            <div class=\"btn-group dropdown\" dropdown >\n                <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\n                    Showing <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu js-status-update pull-right\">\n                    <li>\n                        <a ng-click=\"changeView(\'month\')\">Month</a>\n                    </li>\n                    <li>\n                        <a ng-click=\"changeView(\'agendaWeek\')\">Agenda</a>\n                    </li>\n                    <li>\n                        <a ng-click=\"changeView(\'agendaDay\')\">Today</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </header>\n\n    <!-- widget div-->\n    <div>\n        <div class=\"widget-body no-padding\">\n            <!-- content goes here -->\n            <div class=\"widget-body-toolbar\">\n\n                <div id=\"calendar-buttons\">\n\n                    <div class=\"btn-group\">\n                        <a ng-click=\"prev()\" class=\"btn btn-default btn-xs\"><i\n                                class=\"fa fa-chevron-left\"></i></a>\n                        <a ng-click=\"next()\" class=\"btn btn-default btn-xs\"><i\n                                class=\"fa fa-chevron-right\"></i></a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"calendar\"></div>\n\n            <!-- end content -->\n        </div>\n\n    </div>\n    <!-- end widget div -->\n</div>\n");
$templateCache.put("app/calendar/views/calendar.tpl.html","<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n    <div class=\"row\">\n        <big-breadcrumbs items=\"[\'Home\', \'Calendar\']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></big-breadcrumbs>\n        <div smart-include=\"app/layout/partials/sub-header.tpl.html\"></div>\n    </div>\n    <!-- widget grid -->\n    <section id=\"widget-grid\" widget-grid>\n        <!-- row -->\n        <div class=\"row\" ng-controller=\"CalendarCtrl\" >\n\n\n            <div class=\"col-sm-12 col-md-12 col-lg-3\">\n                <!-- new widget -->\n                <div class=\"jarviswidget jarviswidget-color-blueDark\">\n                    <header>\n                        <h2> Add Events </h2>\n                    </header>\n\n                    <!-- widget div-->\n                    <div>\n\n                        <div class=\"widget-body\">\n                            <!-- content goes here -->\n\n                            <form id=\"add-event-form\">\n                                <fieldset>\n\n                                    <div class=\"form-group\">\n                                        <label>Select Event Icon</label>\n                                        <div class=\"btn-group btn-group-sm btn-group-justified\" data-toggle=\"buttons\" > <!--  -->\n                                            <label class=\"btn btn-default active\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-1\" value=\"fa-info\" radio-toggle ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-info text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-2\" value=\"fa-warning\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-warning text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-3\" value=\"fa-check\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-check text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-4\" value=\"fa-user\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-user text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-5\" value=\"fa-lock\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-lock text-muted\"></i> </label>\n                                            <label class=\"btn btn-default\">\n                                                <input type=\"radio\" name=\"iconselect\" id=\"icon-6\" value=\"fa-clock-o\" radio-toggle  ng-model=\"newEvent.icon\">\n                                                <i class=\"fa fa-clock-o text-muted\"></i> </label>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <label>Event Title</label>\n                                        <input ng-model=\"newEvent.title\" class=\"form-control\"  id=\"title\" name=\"title\" maxlength=\"40\" type=\"text\" placeholder=\"Event Title\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Event Description</label>\n                                        <textarea  ng-model=\"newEvent.description\" class=\"form-control\" placeholder=\"Please be brief\" rows=\"3\" maxlength=\"40\" id=\"description\"></textarea>\n                                        <p class=\"note\">Maxlength is set to 40 characters</p>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <label>Select Event Color</label>\n                                        <div class=\"btn-group btn-group-justified btn-select-tick\" data-toggle=\"buttons\" >\n                                            <label class=\"btn bg-color-darken active\">\n                                                <input   ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option1\" value=\"bg-color-darken txt-color-white\" >\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-blue\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option2\" value=\"bg-color-blue txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-orange\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option3\" value=\"bg-color-orange txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-greenLight\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option4\" value=\"bg-color-greenLight txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-blueLight\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option5\" value=\"bg-color-blueLight txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                            <label class=\"btn bg-color-red\">\n                                                <input  ng-model=\"newEvent.className\" radio-toggle   type=\"radio\" name=\"priority\" id=\"option6\" value=\"bg-color-red txt-color-white\">\n                                                <i class=\"fa fa-check txt-color-white\"></i> </label>\n                                        </div>\n                                    </div>\n\n                                </fieldset>\n                                <div class=\"form-actions\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <button class=\"btn btn-default\" type=\"button\" id=\"add-event\" ng-click=\"addEvent()\" >\n                                                Add Event\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n\n                            <!-- end content -->\n                        </div>\n\n                    </div>\n                    <!-- end widget div -->\n                </div>\n                <!-- end widget -->\n\n                <div class=\"well well-sm\" id=\"event-container\">\n                    <form>\n                        <legend>\n                            Draggable Events\n                        </legend>\n                        <ul id=\'external-events\' class=\"list-unstyled\">\n\n                            <li ng-repeat=\"event in eventsExternal\" dragable-event>\n                                <span class=\"{{event.className}}\" \n                                    data-description=\"{{event.description}}\"\n                                    data-icon=\"{{event.icon}}\"\n                                >\n                                {{event.title}}</span>\n                            </li>\n                            \n                        </ul>\n\n                        <!-- <ul id=\'external-events\' class=\"list-unstyled\">\n                            <li>\n                                <span class=\"bg-color-darken txt-color-white\" data-description=\"Currently busy\" data-icon=\"fa-time\">Office Meeting</span>\n                            </li>\n                            <li>\n                                <span class=\"bg-color-blue txt-color-white\" data-description=\"No Description\" data-icon=\"fa-pie\">Lunch Break</span>\n                            </li>\n                            <li>\n                                <span class=\"bg-color-red txt-color-white\" data-description=\"Urgent Tasks\" data-icon=\"fa-alert\">URGENT</span>\n                            </li>\n                        </ul> -->\n\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\" id=\"drop-remove\" class=\"checkbox style-0\" checked=\"checked\">\n                                <span>remove after drop</span> </label>\n\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n\n\n            <article class=\"col-sm-12 col-md-12 col-lg-9\">\n                <full-calendar id=\"main-calendar-widget\" data-events=\"events\"></full-calendar>\n            </article>\n        </div>\n    </section>\n</div>");
$templateCache.put("app/dashboard/projects/recent-projects.tpl.html","<div class=\"project-context hidden-xs dropdown\" dropdown>\n\n    <span class=\"label\">{{getWord(\'Projects\')}}:</span>\n    <span class=\"project-selector dropdown-toggle\" data-toggle=\"dropdown\">{{getWord(\'Recent projects\')}} <i ng-if=\"projects.length\"\n            class=\"fa fa-angle-down\"></i></span>\n\n    <ul class=\"dropdown-menu\" ng-if=\"projects.length\">\n        <li ng-repeat=\"project in projects\">\n            <a href=\"{{project.href}}\">{{project.title}}</a>\n        </li>\n        <li class=\"divider\"></li>\n        <li>\n            <a ng-click=\"clearProjects()\"><i class=\"fa fa-power-off\"></i> Clear</a>\n        </li>\n    </ul>\n\n</div>");
$templateCache.put("app/dashboard/todo/todo-widget.tpl.html","<div id=\"todo-widget\" jarvis-widget data-widget-editbutton=\"false\" data-widget-color=\"blue\"\n     ng-controller=\"TodoCtrl\">\n    <header>\n        <span class=\"widget-icon\"> <i class=\"fa fa-check txt-color-white\"></i> </span>\n\n        <h2> ToDo\'s </h2>\n\n        <div class=\"widget-toolbar\">\n            <!-- add: non-hidden - to disable auto hide -->\n            <button class=\"btn btn-xs btn-default\" ng-class=\"{active: newTodo}\" ng-click=\"toggleAdd()\"><i ng-class=\"{ \'fa fa-plus\': !newTodo, \'fa fa-times\': newTodo}\"></i> Add</button>\n\n        </div>\n    </header>\n    <!-- widget div-->\n    <div>\n        <div class=\"widget-body no-padding smart-form\">\n            <!-- content goes here -->\n            <div ng-show=\"newTodo\">\n                <h5 class=\"todo-group-title\"><i class=\"fa fa-plus-circle\"></i> New Todo</h5>\n\n                <form name=\"newTodoForm\" class=\"smart-form\">\n                    <fieldset>\n                        <section>\n                            <label class=\"input\">\n                                <input type=\"text\" required class=\"input-lg\" ng-model=\"newTodo.title\"\n                                       placeholder=\"What needs to be done?\">\n                            </label>\n                        </section>\n                        <section>\n                            <div class=\"col-xs-6\">\n                                <label class=\"select\">\n                                    <select class=\"input-sm\" ng-model=\"newTodo.state\"\n                                            ng-options=\"state as state for state in states\"></select> <i></i> </label>\n                            </div>\n                        </section>\n                    </fieldset>\n                    <footer>\n                        <button ng-disabled=\"newTodoForm.$invalid\" type=\"button\" class=\"btn btn-primary\"\n                                ng-click=\"createTodo()\">\n                            Add\n                        </button>\n                        <button type=\"button\" class=\"btn btn-default\" ng-click=\"toggleAdd()\">\n                            Cancel\n                        </button>\n                    </footer>\n                </form>\n            </div>\n\n            <todo-list state=\"Critical\"  title=\"Critical Tasks\" icon=\"warning\" todos=\"todos\"></todo-list>\n\n            <todo-list state=\"Important\" title=\"Important Tasks\" icon=\"exclamation\" todos=\"todos\"></todo-list>\n\n            <todo-list state=\"Completed\" title=\"Completed Tasks\" icon=\"check\" todos=\"todos\"></todo-list>\n\n            <!-- end content -->\n        </div>\n\n    </div>\n    <!-- end widget div -->\n</div>");
$templateCache.put("app/layout/language/language-selector.tpl.html","<ul class=\"header-dropdown-list hidden-xs ng-cloak\" ng-controller=\"LanguagesCtrl\">\n    <li class=\"dropdown\" dropdown>\n        <a class=\"dropdown-toggle\"  data-toggle=\"dropdown\" href> <img src=\"styles/img/blank.gif\" class=\"flag flag-{{currentLanguage.key}}\" alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\n            <i class=\"fa fa-angle-down\"></i> </a>\n        <ul class=\"dropdown-menu pull-right\">\n            <li ng-class=\"{active: language==currentLanguage}\" ng-repeat=\"language in languages\">\n                <a ng-click=\"selectLanguage(language)\" ><img src=\"styles/img/blank.gif\" class=\"flag flag-{{language.key}}\"\n                                                   alt=\"{{language.alt}}\"> {{language.title}}</a>\n            </li>\n        </ul>\n    </li>\n</ul>");
$templateCache.put("app/layout/partials/footer.tpl.html","<div class=\"page-footer\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6\">\n            <span class=\"txt-color-white\">SmartAdmin WebApp © 2013-2016</span>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n            <div class=\"txt-color-white inline-block\">\n                <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i>\n                    <strong>52 mins ago &nbsp;</strong> </i>\n\n                <div class=\"btn-group dropup\">\n                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu pull-right text-left\">\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\n                                </p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <button class=\"btn btn-block btn-default\">refresh</button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/layout/partials/header.tpl.html","<header id=\"header\">\n<div id=\"logo-group\">\n\n    <!-- PLACE YOUR LOGO HERE -->\n    <span id=\"logo\"> <img src=\"styles/img/logo.png\" alt=\"SmartAdmin\"> </span>\n    <!-- END LOGO PLACEHOLDER -->\n\n    <!-- Note: The activity badge color changes when clicked and resets the number to 0\n    Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->\n    <span id=\"activity\" class=\"activity-dropdown\" activities-dropdown-toggle> \n        <i class=\"fa fa-user\"></i> \n        <b class=\"badge bg-color-red\">21</b> \n    </span>\n    <div smart-include=\"app/dashboard/activities/activities.html\"></div>\n</div>\n\n\n<recent-projects></recent-projects>\n\n\n\n<!-- pulled right: nav area -->\n<div class=\"pull-right\">\n\n    <!-- collapse menu button -->\n    <div id=\"hide-menu\" class=\"btn-header pull-right\">\n        <span> <a toggle-menu title=\"Collapse Menu\"><i\n                class=\"fa fa-reorder\"></i></a> </span>\n    </div>\n    <!-- end collapse menu -->\n\n    <!-- #MOBILE -->\n    <!-- Top menu profile link : this shows only when top menu is active -->\n    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\">\n        <li class=\"\">\n            <a href=\"#\" class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\n                <img src=\"styles/img/avatars/sunny.png\" alt=\"John Doe\" class=\"online\"/>\n            </a>\n            <ul class=\"dropdown-menu pull-right\">\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"><i\n                            class=\"fa fa-cog\"></i> Setting</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a ui-sref=\"app.appViews.profileDemo\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i class=\"fa fa-user\"></i>\n                        <u>P</u>rofile</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"\n                       data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href-void class=\"padding-10 padding-top-0 padding-bottom-0\"\n                       data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#/login\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i\n                            class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n\n    <!-- logout button -->\n    <div id=\"logout\" class=\"btn-header transparent pull-right\">\n        <span> <a ui-sref=\"login\" title=\"Sign Out\" data-action=\"userLogout\"\n                  data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i\n                class=\"fa fa-sign-out\"></i></a> </span>\n    </div>\n    <!-- end logout button -->\n\n    <!-- search mobile button (this is hidden till mobile view port) -->\n    <div id=\"search-mobile\" class=\"btn-header transparent pull-right\" data-search-mobile>\n        <span> <a href=\"#\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n    </div>\n    <!-- end search mobile button -->\n\n    <!-- input: search field -->\n    <form action=\"#/search\" class=\"header-search pull-right\">\n        <input id=\"search-fld\" type=\"text\" name=\"param\" placeholder=\"Find reports and more\" data-autocomplete=\'[\n					\"ActionScript\",\n					\"AppleScript\",\n					\"Asp\",\n					\"BASIC\",\n					\"C\",\n					\"C++\",\n					\"Clojure\",\n					\"COBOL\",\n					\"ColdFusion\",\n					\"Erlang\",\n					\"Fortran\",\n					\"Groovy\",\n					\"Haskell\",\n					\"Java\",\n					\"JavaScript\",\n					\"Lisp\",\n					\"Perl\",\n					\"PHP\",\n					\"Python\",\n					\"Ruby\",\n					\"Scala\",\n					\"Scheme\"]\'>\n        <button type=\"submit\">\n            <i class=\"fa fa-search\"></i>\n        </button>\n        <a href=\"$\" id=\"cancel-search-js\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n    </form>\n    <!-- end input: search field -->\n\n    <!-- fullscreen button -->\n    <div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n        <span> <a full-screen title=\"Full Screen\"><i\n                class=\"fa fa-arrows-alt\"></i></a> </span>\n    </div>\n    <!-- end fullscreen button -->\n\n\n    <!-- multiple lang dropdown : find all flags in the flags page -->\n    <language-selector></language-selector>\n    <!-- end multiple lang -->\n\n</div>\n<!-- end pulled right: nav area -->\n\n</header>");
$templateCache.put("app/layout/partials/navigation.tpl.html","<aside id=\"left-panel\">\n\n    <!-- User info -->\n    <div login-info></div>\n    <!-- end user info -->\n\n    <nav>\n        <!-- NOTE: Notice the gaps after each icon usage <i></i>..\n        Please note that these links work a bit different than\n        traditional href=\"\" links. See documentation for details.\n        -->\n\n        <ul data-smart-menu>\n\n            <li data-ui-sref-active=\"active\">\n                <a data-ui-sref=\"app.home\" title=\"Outlook\">\n                    <i class=\"fa fa-lg fa-fw fa-home\"></i> <span class=\"menu-item-parent\">{{getWord(\'Home\')}}</span></a>\n            </li>\n\n        </ul>\n\n        <!-- NOTE: This allows you to pull menu items from server -->\n        <!-- <ul data-smart-menu-items=\"/api/menu-items.json\"></ul> -->\n    </nav>\n\n  <span class=\"minifyme\" data-action=\"minifyMenu\" minify-menu>\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n  </span>\n\n</aside>");
$templateCache.put("app/layout/partials/sub-header.tpl.html","<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" data-sparkline-container>\n    <ul id=\"sparks\" class=\"\">\n        <li class=\"sparks-info\">\n            <h5> My Income <span class=\"txt-color-blue\">$47,171</span></h5>\n            <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n                1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n            </div>\n        </li>\n        <li class=\"sparks-info\">\n            <h5> Site Traffic <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\n            <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\n                110,150,300,130,400,240,220,310,220,300, 270, 210\n            </div>\n        </li>\n        <li class=\"sparks-info\">\n            <h5> Site Orders <span class=\"txt-color-greenDark\"><i class=\"fa fa-shopping-cart\"></i>&nbsp;2447</span></h5>\n            <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\n                110,150,300,130,400,240,220,310,220,300, 270, 210\n            </div>\n        </li>\n    </ul>\n</div>\n			");
$templateCache.put("app/layout/partials/voice-commands.tpl.html","<!-- TRIGGER BUTTON:\n<a href=\"/my-ajax-page.html\" data-toggle=\"modal\" data-target=\"#remoteModal\" class=\"btn btn-default\">Open Modal</a>  -->\n\n<!-- MODAL PLACE HOLDER\n<div class=\"modal fade\" id=\"remoteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"remoteModalLabel\" aria-hidden=\"true\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\"></div>\n</div>\n</div>   -->\n<!--////////////////////////////////////-->\n\n<!--<div class=\"modal-header\">\n<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n&times;\n</button>\n<h4 class=\"modal-title\" id=\"myModalLabel\">Command List</h4>\n</div>-->\n<div class=\"modal-body\">\n\n	<h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\n	<hr class=\"simple\">\n	<h5>Instruction</h5>\n\n	Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\n	You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon indicating activation.\n	The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don\'t have any microphone installed.\n	<br>\n	<br>\n	As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\n	<br>\n	<br>\n	If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer) protocol you can wave this security measure and have an unintrupted Voice Command.\n	<br>\n	<br>\n	<h5>Commands</h5>\n	<ul>\n		<li>\n			<strong>\'show\' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show inbox\"</strong> or <strong>\"show calendar\"</strong>\n		</li>\n		<li>\n			<strong>\'mute\' </strong> - mutes all sound effects for the theme.\n		</li>\n		<li>\n			<strong>\'sound on\'</strong> - unmutes all sound effects for the theme.\n		</li>\n		<li>\n			<span class=\"text-danger\"><strong>\'stop\'</strong></span> - deactivates voice command.\n		</li>\n		<li>\n			<span class=\"text-primary\"><strong>\'help\'</strong></span> - brings up the command list\n		</li>\n		<li>\n			<span class=\"text-danger\"><strong>\'got it\'</strong></span> - closes help modal\n		</li>\n		<li>\n			<strong>\'hide navigation\'</strong> - toggle navigation collapse\n		</li>\n		<li>\n			<strong>\'show navigation\'</strong> - toggle navigation to open (can be used again to close)\n		</li>\n		<li>\n			<strong>\'scroll up\'</strong> - scrolls to the top of the page\n		</li>\n		<li>\n			<strong>\'scroll down\'</strong> - scrollts to the bottom of the page\n		</li>\n		<li>\n			<strong>\'go back\' </strong> - goes back in history (history -1 click)\n		</li>\n		<li>\n			<strong>\'logout\'</strong> - logs you out\n		</li>\n	</ul>\n	<br>\n	<h5>Adding your own commands</h5>\n	Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored inside <strong>app.config.js</strong> file under the <code>var commands = {...}</code>. \n\n	<hr class=\"simple\">\n	<div class=\"text-right\">\n		<button type=\"button\" class=\"btn btn-success btn-lg\" data-dismiss=\"modal\">\n			Got it!\n		</button>\n	</div>\n\n</div>\n<!--<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Got it!</button>\n</div> -->");
$templateCache.put("app/layout/shortcut/shortcut.tpl.html","<div id=\"shortcut\">\n	<ul>\n		<li>\n			<a href=\"#/inbox/\" class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/calendar\" class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/maps\" class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/invoice\" class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i class=\"fa fa-book fa-4x\"></i> <span>Invoice <span class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/gallery\" class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\n		</li>\n		<li>\n			<a href=\"#/profile\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\n		</li>\n	</ul>\n</div>");
$templateCache.put("app/dashboard/chat/directives/aside-chat-widget.tpl.html","<ul>\n    <li>\n        <div class=\"display-users\">\n            <input class=\"form-control chat-user-filter\" placeholder=\"Filter\" type=\"text\">\n            <dl>\n                <dt>\n                    <a href=\"#\" class=\"usr\"\n                       data-chat-id=\"cha1\"\n                       data-chat-fname=\"Sadi\"\n                       data-chat-lname=\"Orlaf\"\n                       data-chat-status=\"busy\"\n                       data-chat-alertmsg=\"Sadi Orlaf is in a meeting. Please do not disturb!\"\n                       data-chat-alertshow=\"true\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/5.png\' alt=\'Sadi Orlaf\'>\n											<div class=\'usr-card-content\'>\n												<h3>Sadi Orlaf</h3>\n												<p>Marketing Executive</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Sadi Orlaf\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr\"\n                       data-chat-id=\"cha2\"\n                       data-chat-fname=\"Jessica\"\n                       data-chat-lname=\"Dolof\"\n                       data-chat-status=\"online\"\n                       data-chat-alertmsg=\"\"\n                       data-chat-alertshow=\"false\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/1.png\' alt=\'Jessica Dolof\'>\n											<div class=\'usr-card-content\'>\n												<h3>Jessica Dolof</h3>\n												<p>Sales Administrator</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Jessica Dolof\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr\"\n                       data-chat-id=\"cha3\"\n                       data-chat-fname=\"Zekarburg\"\n                       data-chat-lname=\"Almandalie\"\n                       data-chat-status=\"online\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/3.png\' alt=\'Zekarburg Almandalie\'>\n											<div class=\'usr-card-content\'>\n												<h3>Zekarburg Almandalie</h3>\n												<p>Sales Admin</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Zekarburg Almandalie\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr\"\n                       data-chat-id=\"cha4\"\n                       data-chat-fname=\"Barley\"\n                       data-chat-lname=\"Krazurkth\"\n                       data-chat-status=\"away\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/4.png\' alt=\'Barley Krazurkth\'>\n											<div class=\'usr-card-content\'>\n												<h3>Barley Krazurkth</h3>\n												<p>Sales Director</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Barley Krazurkth\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr offline\"\n                       data-chat-id=\"cha5\"\n                       data-chat-fname=\"Farhana\"\n                       data-chat-lname=\"Amrin\"\n                       data-chat-status=\"incognito\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/female.png\' alt=\'Farhana Amrin\'>\n											<div class=\'usr-card-content\'>\n												<h3>Farhana Amrin</h3>\n												<p>Support Admin <small><i class=\'fa fa-music\'></i> Playing Beethoven Classics</small></p>\n											</div>\n										</div>\n									\">\n                        <i></i>Farhana Amrin (offline)\n                    </a>\n                </dt>\n                <dt>\n                    <a href=\"#\" class=\"usr offline\"\n                       data-chat-id=\"cha6\"\n                       data-chat-fname=\"Lezley\"\n                       data-chat-lname=\"Jacob\"\n                       data-chat-status=\"incognito\"\n                       popover-trigger=\"hover\"\n                       popover-placement=\"right\"\n                       smart-popover-html=\"\n										<div class=\'usr-card\'>\n											<img src=\'styles/img/avatars/male.png\' alt=\'Lezley Jacob\'>\n											<div class=\'usr-card-content\'>\n												<h3>Lezley Jacob</h3>\n												<p>Sales Director</p>\n											</div>\n										</div>\n									\">\n                        <i></i>Lezley Jacob (offline)\n                    </a>\n                </dt>\n            </dl>\n\n\n            <!--<a href=\"chat.html\" class=\"btn btn-xs btn-default btn-block sa-chat-learnmore-btn\">About the API</a>-->\n        </div>\n    </li>\n</ul>");
$templateCache.put("app/dashboard/chat/directives/chat-users.tpl.html","<div id=\"chat-container\" ng-class=\"{open: open}\">\n    <span class=\"chat-list-open-close\" ng-click=\"openToggle()\"><i class=\"fa fa-user\"></i><b>!</b></span>\n\n    <div class=\"chat-list-body custom-scroll\">\n        <ul id=\"chat-users\">\n            <li ng-repeat=\"chatUser in chatUsers | filter: chatUserFilter\">\n                <a ng-click=\"messageTo(chatUser)\"><img ng-src=\"{{chatUser.picture}}\">{{chatUser.username}} <span\n                        class=\"badge badge-inverse\">{{chatUser.username.length}}</span><span class=\"state\"><i\n                        class=\"fa fa-circle txt-color-green pull-right\"></i></span></a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"chat-list-footer\">\n        <div class=\"control-group\">\n            <form class=\"smart-form\">\n                <section>\n                    <label class=\"input\" >\n                        <input type=\"text\" ng-model=\"chatUserFilter\" id=\"filter-chat-list\" placeholder=\"Filter\">\n                    </label>\n                </section>\n            </form>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/dashboard/chat/directives/chat-widget.tpl.html","<div id=\"chat-widget\" jarvis-widget data-widget-color=\"blueDark\" data-widget-editbutton=\"false\"\n     data-widget-fullscreenbutton=\"false\">\n\n\n    <header>\n        <span class=\"widget-icon\"> <i class=\"fa fa-comments txt-color-white\"></i> </span>\n\n        <h2> SmartMessage </h2>\n\n        <div class=\"widget-toolbar\">\n            <!-- add: non-hidden - to disable auto hide -->\n\n            <div class=\"btn-group\" data-dropdown>\n                <button class=\"btn dropdown-toggle btn-xs btn-success\" data-toggle=\"dropdown\">\n                    Status <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu pull-right js-status-update\">\n                    <li>\n                        <a href-void><i class=\"fa fa-circle txt-color-green\"></i> Online</a>\n                    </li>\n                    <li>\n                        <a href-void><i class=\"fa fa-circle txt-color-red\"></i> Busy</a>\n                    </li>\n                    <li>\n                        <a href-void><i class=\"fa fa-circle txt-color-orange\"></i> Away</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li>\n                        <a href-void><i class=\"fa fa-power-off\"></i> Log Off</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </header>\n\n    <!-- widget div-->\n    <div>\n        <div class=\"widget-body widget-hide-overflow no-padding\">\n            <!-- content goes here -->\n\n            <chat-users></chat-users>\n\n            <!-- CHAT BODY -->\n            <div id=\"chat-body\" class=\"chat-body custom-scroll\">\n                <ul>\n                    <li class=\"message\" ng-repeat=\"message in chatMessages\">\n                        <img class=\"message-picture online\" ng-src=\"{{message.user.picture}}\">\n\n                        <div class=\"message-text\">\n                            <time>\n                                {{message.date | date }}\n                            </time>\n                            <a ng-click=\"messageTo(message.user)\" class=\"username\">{{message.user.username}}</a>\n                            <div ng-bind-html=\"message.body\"></div>\n\n                        </div>\n                    </li>\n                </ul>\n            </div>\n\n            <!-- CHAT FOOTER -->\n            <div class=\"chat-footer\">\n\n                <!-- CHAT TEXTAREA -->\n                <div class=\"textarea-div\">\n\n                    <div class=\"typearea\">\n                        <textarea placeholder=\"Write a reply...\" id=\"textarea-expand\"\n                                  class=\"custom-scroll\" ng-model=\"newMessage\"></textarea>\n                    </div>\n\n                </div>\n\n                <!-- CHAT REPLY/SEND -->\n											<span class=\"textarea-controls\">\n												<button class=\"btn btn-sm btn-primary pull-right\" ng-click=\"sendMessage()\">\n                                                    Reply\n                                                </button> <span class=\"pull-right smart-form\"\n                                                                style=\"margin-top: 3px; margin-right: 10px;\"> <label\n                                                    class=\"checkbox pull-right\">\n                                                <input type=\"checkbox\" name=\"subscription\" id=\"subscription\">\n                                                <i></i>Press <strong> ENTER </strong> to send </label> </span> <a\n                                                    href-void class=\"pull-left\"><i\n                                                    class=\"fa fa-camera fa-fw fa-lg\"></i></a> </span>\n\n            </div>\n\n            <!-- end content -->\n        </div>\n\n    </div>\n    <!-- end widget div -->\n</div>");
$templateCache.put("app/dashboard/todo/directives/todo-list.tpl.html","<div>\n    <h5 class=\"todo-group-title\"><i class=\"fa fa-{{icon}}\"></i> {{title}} (\n        <small class=\"num-of-tasks\">{{scopeItems.length}}</small>\n        )\n    </h5>\n    <ul class=\"todo\">\n        <li ng-class=\"{complete: todo.completedAt}\" ng-repeat=\"todo in todos | orderBy: todo._id | filter: filter  track by todo._id\" >\n    	<span class=\"handle\"> <label class=\"checkbox\">\n            <input type=\"checkbox\" ng-click=\"todo.toggle()\" ng-checked=\"todo.completedAt\"\n                   name=\"checkbox-inline\">\n            <i></i> </label> </span>\n\n            <p>\n                <strong>Ticket #{{$index + 1}}</strong> - {{todo.title}}\n                <span class=\"text-muted\" ng-if=\"todo.description\">{{todo.description}}</span>\n                <span class=\"date\">{{todo.createdAt | date}} &dash; <a ng-click=\"deleteTodo(todo)\" class=\"text-muted\"><i\n                        class=\"fa fa-trash\"></i></a></span>\n\n            </p>\n        </li>\n    </ul>\n</div>");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-attribute-form.tpl.html","<form id=\"attributeForm\" class=\"form-horizontal\"\n      data-bv-message=\"This value is not valid\"\n      data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n      data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n      data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n\n    <fieldset>\n        <legend>\n            Set validator options via HTML attributes\n        </legend>\n\n        <div class=\"alert alert-warning\">\n            <code>&lt; input\n                data-bv-validatorname\n                data-bv-validatorname-validatoroption=\"...\" / &gt;</code>\n\n            <br>\n            <br>\n            More validator options can be found here:\n            <a href=\"http://bootstrapvalidator.com/validators/\" target=\"_blank\">http://bootstrapvalidator.com/validators/</a>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Full name</label>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The first name is required and cannot be empty\" />\n            </div>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The last name is required and cannot be empty\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Username</label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"username\"\n                       data-bv-message=\"The username is not valid\"\n\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The username is required and cannot be empty\"\n\n                       data-bv-regexp=\"true\"\n                       data-bv-regexp-regexp=\"^[a-zA-Z0-9_\\.]+$\"\n                       data-bv-regexp-message=\"The username can only consist of alphabetical, number, dot and underscore\"\n\n                       data-bv-stringlength=\"true\"\n                       data-bv-stringlength-min=\"6\"\n                       data-bv-stringlength-max=\"30\"\n                       data-bv-stringlength-message=\"The username must be more than 6 and less than 30 characters long\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"password\"\n                       data-bv-different-message=\"The username and password cannot be the same as each other\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Email address</label>\n            <div class=\"col-lg-5\">\n                <input class=\"form-control\" name=\"email\" type=\"email\"\n                       data-bv-emailaddress=\"true\"\n                       data-bv-emailaddress-message=\"The input is not a valid email address\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Password</label>\n            <div class=\"col-lg-5\">\n                <input type=\"password\" class=\"form-control\" name=\"password\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The password is required and cannot be empty\"\n\n                       data-bv-identical=\"true\"\n                       data-bv-identical-field=\"confirmPassword\"\n                       data-bv-identical-message=\"The password and its confirm are not the same\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"username\"\n                       data-bv-different-message=\"The password cannot be the same as username\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Retype password</label>\n            <div class=\"col-lg-5\">\n                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\"\n                       data-bv-notempty=\"true\"\n                       data-bv-notempty-message=\"The confirm password is required and cannot be empty\"\n\n                       data-bv-identical=\"true\"\n                       data-bv-identical-field=\"password\"\n                       data-bv-identical-message=\"The password and its confirm are not the same\"\n\n                       data-bv-different=\"true\"\n                       data-bv-different-field=\"username\"\n                       data-bv-different-message=\"The password cannot be the same as username\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Languages</label>\n            <div class=\"col-lg-5\">\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"english\"\n                               data-bv-message=\"Please specify at least one language you can speak\"\n                               data-bv-notempty=\"true\" />\n                        English </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"french\" />\n                        French </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"german\" />\n                        German </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"russian\" />\n                        Russian </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"other\" />\n                        Other </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n     ");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-button-group-form.tpl.html","<form id=\"buttonGroupForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Gender</label>\n            <div class=\"col-lg-9\">\n                <div class=\"btn-group\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"male\" />\n                        Male </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"female\" />\n                        Female </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"radio\" name=\"gender\" value=\"other\" />\n                        Other </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Languages</label>\n            <div class=\"col-lg-9\">\n                <div class=\"btn-group\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"english\" />\n                        English </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"german\" />\n                        German </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"french\" />\n                        French </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"russian\" />\n                        Russian </label>\n                    <label class=\"btn btn-default\">\n                        <input type=\"checkbox\" name=\"languages[]\" value=\"italian\">\n                        Italian </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-contact-form.tpl.html","<form id=\"contactForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>Showing messages in custom area</legend>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Full name</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"fullName\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Email</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"email\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Title</label>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"title\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Content</label>\n            <div class=\"col-md-6\">\n                <textarea class=\"form-control\" name=\"content\" rows=\"5\"></textarea>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <!-- #messages is where the messages are placed inside -->\n        <div class=\"form-group\">\n            <div class=\"col-md-9 col-md-offset-3\">\n                <div id=\"messages\"></div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-movie-form.tpl.html","\n<form id=\"movieForm\" method=\"post\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <label class=\"control-label\">Movie title</label>\n                    <input type=\"text\" class=\"form-control\" name=\"title\" />\n                </div>\n\n                <div class=\"col-md-4 selectContainer\">\n                    <label class=\"control-label\">Genre</label>\n                    <select class=\"form-control\" name=\"genre\">\n                        <option value=\"\">Choose a genre</option>\n                        <option value=\"action\">Action</option>\n                        <option value=\"comedy\">Comedy</option>\n                        <option value=\"horror\">Horror</option>\n                        <option value=\"romance\">Romance</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Director</label>\n                    <input type=\"text\" class=\"form-control\" name=\"director\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Writer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"writer\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-4\">\n                    <label class=\"control-label\">Producer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"producer\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-6\">\n                    <label class=\"control-label\">Website</label>\n                    <input type=\"text\" class=\"form-control\" name=\"website\" />\n                </div>\n\n                <div class=\"col-sm-12 col-md-6\">\n                    <label class=\"control-label\">Youtube trailer</label>\n                    <input type=\"text\" class=\"form-control\" name=\"trailer\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"control-label\">Review</label>\n            <textarea class=\"form-control\" name=\"review\" rows=\"8\"></textarea>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <label class=\"control-label\">Rating</label>\n                </div>\n\n                <div class=\"col-sm-12 col-md-10\">\n\n                    <label class=\"radio radio-inline no-margin\">\n                        <input type=\"radio\" name=\"rating\" value=\"terrible\" class=\"radiobox style-2\" />\n                        <span>Terrible</span> </label>\n\n                    <label class=\"radio radio-inline\">\n                        <input type=\"radio\" name=\"rating\" value=\"watchable\" class=\"radiobox style-2\" />\n                        <span>Watchable</span> </label>\n                    <label class=\"radio radio-inline\">\n                        <input type=\"radio\" name=\"rating\" value=\"best\" class=\"radiobox style-2\" />\n                        <span>Best ever</span> </label>\n\n                </div>\n\n            </div>\n\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n\n</form>\n\n ");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-product-form.tpl.html","<form id=\"productForm\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Price</label>\n            <div class=\"col-xs-9 col-lg-6 inputGroupContainer\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"price\" />\n                    <span class=\"input-group-addon\">$</span>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Amount</label>\n            <div class=\"col-xs-9 col-lg-6 inputGroupContainer\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">&#8364;</span>\n                    <input type=\"text\" class=\"form-control\" name=\"amount\" />\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Color</label>\n            <div class=\"col-xs-9 col-lg-6 selectContainer\">\n                <select class=\"form-control\" name=\"color\">\n                    <option value=\"\">Choose a color</option>\n                    <option value=\"blue\">Blue</option>\n                    <option value=\"green\">Green</option>\n                    <option value=\"red\">Red</option>\n                    <option value=\"yellow\">Yellow</option>\n                    <option value=\"white\">White</option>\n                </select>\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-xs-2 col-lg-3 control-label\">Size</label>\n            <div class=\"col-xs-9 col-lg-6 selectContainer\">\n                <select class=\"form-control\" name=\"size\">\n                    <option value=\"\">Choose a size</option>\n                    <option value=\"S\">S</option>\n                    <option value=\"M\">M</option>\n                    <option value=\"L\">L</option>\n                    <option value=\"XL\">XL</option>\n                </select>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-profile-form.tpl.html","<form id=\"profileForm\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label>Email address</label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" />\n        </div>\n    </fieldset>\n    <fieldset>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" />\n        </div>\n    </fieldset>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n");
$templateCache.put("app/_common/forms/directives/bootstrap-validation/bootstrap-toggling-form.tpl.html","<form id=\"togglingForm\" method=\"post\" class=\"form-horizontal\">\n\n    <fieldset>\n        <legend>\n            Default Form Elements\n        </legend>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Full name <sup>*</sup></label>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\" />\n            </div>\n            <div class=\"col-lg-4\">\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\" />\n            </div>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Company <sup>*</sup></label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"company\"\n                       required data-bv-notempty-message=\"The company name is required\" />\n            </div>\n            <div class=\"col-lg-2\">\n                <button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"#jobInfo\">\n                    Add more info\n                </button>\n            </div>\n        </div>\n    </fieldset>\n\n    <!-- These fields will not be validated as long as they are not visible -->\n    <div id=\"jobInfo\" style=\"display: none;\">\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Job title <sup>*</sup></label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"job\" />\n                </div>\n            </div>\n        </fieldset>\n\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Department <sup>*</sup></label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"department\" />\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Mobile phone <sup>*</sup></label>\n            <div class=\"col-lg-5\">\n                <input type=\"text\" class=\"form-control\" name=\"mobilePhone\" />\n            </div>\n            <div class=\"col-lg-2\">\n                <button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"#phoneInfo\">\n                    Add more phone numbers\n                </button>\n            </div>\n        </div>\n    </fieldset>\n    <!-- These fields will not be validated as long as they are not visible -->\n    <div id=\"phoneInfo\" style=\"display: none;\">\n\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Home phone</label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"homePhone\" />\n                </div>\n            </div>\n        </fieldset>\n        <fieldset>\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Office phone</label>\n                <div class=\"col-lg-5\">\n                    <input type=\"text\" class=\"form-control\" name=\"officePhone\" />\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n    <div class=\"form-actions\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"fa fa-eye\"></i>\n                    Validate\n                </button>\n            </div>\n        </div>\n    </div>\n</form>");
$templateCache.put("app/_common/layout/directives/demo/demo-states.tpl.html","<div class=\"demo\"><span id=\"demo-setting\"><i class=\"fa fa-cog txt-color-blueDark\"></i></span>\n\n    <form>\n        <legend class=\"no-padding margin-bottom-10\">Layout Options</legend>\n        <section>\n            <label><input type=\"checkbox\" ng-model=\"fixedHeader\"\n                          class=\"checkbox style-0\"><span>Fixed Header</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedNavigation\"\n                          class=\"checkbox style-0\"><span>Fixed Navigation</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedRibbon\"\n                          class=\"checkbox style-0\"><span>Fixed Ribbon</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"fixedPageFooter\"\n                          class=\"checkbox style-0\"><span>Fixed Footer</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"insideContainer\"\n                          class=\"checkbox style-0\"><span>Inside <b>.container</b></span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"rtl\"\n                          class=\"checkbox style-0\"><span>RTL</span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"menuOnTop\"\n                          class=\"checkbox style-0\"><span>Menu on <b>top</b></span></label>\n            <label><input type=\"checkbox\"\n                          ng-model=\"colorblindFriendly\"\n                          class=\"checkbox style-0\"><span>For Colorblind <div\n                    class=\"font-xs text-right\">(experimental)\n            </div></span>\n            </label><span id=\"smart-bgimages\"></span></section>\n        <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">Clear Localstorage</h6><a\n                ng-click=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\n                class=\"fa fa-refresh\"></i> Factory Reset</a></section>\n\n        <h6 class=\"margin-top-10 semi-bold margin-bottom-5\">SmartAdmin Skins</h6>\n\n\n        <section id=\"smart-styles\">\n            <a ng-repeat=\"skin in skins\" ng-click=\"setSkin(skin)\" class=\"{{skin.class}}\" style=\"{{skin.style}}\"><i ng-if=\"skin.name == $parent.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup ng-if=\"skin.beta\">beta</sup></a>\n        </section>\n    </form>\n</div>");}]);
'use strict';

angular.module('app.appViews').controller('ProjectsDemoCtrl', function ($scope, projects) {

    $scope.projects = projects.data;

    $scope.tableOptions =  {
        "data": projects.data.data,
//            "bDestroy": true,
        "iDisplayLength": 15,
        "columns": [
            {
                "class":          'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "est" },
            { "data": "contacts" },
            { "data": "status" },
            { "data": "target-actual" },
            { "data": "starts" },
            { "data": "ends" },
            { "data": "tracker" }
        ],
        "order": [[1, 'asc']]
    }
});
"use strict";

angular.module('app.auth').directive('loginInfo', function(User){

    return {
        restrict: 'A',
        templateUrl: 'app/auth/directives/login-info.tpl.html',
        link: function(scope, element){
            User.initialized.then(function(){
                scope.user = User
            });
        }
    }
})

"use strict";

angular.module('app.auth').controller('LoginCtrl', function ($scope, $state, GooglePlus, User, ezfb) {

    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
        if (authResult.status.method == 'PROMPT') {
            GooglePlus.getUser().then(function (user) {
                User.username = user.name;
                User.picture = user.picture;
                $state.go('app.dashboard');
            });
        }
    });

    $scope.$on('event:facebook-signin-success', function (event, authResult) {
        ezfb.api('/me', function (res) {
            User.username = res.name;
            User.picture = 'https://graph.facebook.com/' + res.id + '/picture';
            $state.go('app.dashboard');
        });
    });
})



'use strict';

angular.module('app.auth').factory('User', function ($http, $q, APP_CONFIG) {
    var dfd = $q.defer();

    var UserModel = {
        initialized: dfd.promise,
        username: undefined,
        picture: undefined
    };
     $http.get(APP_CONFIG.apiRootUrl + '/user.json').then(function(response){
         UserModel.username = response.data.username;
         UserModel.picture= response.data.picture;
         dfd.resolve(UserModel)
     });

    return UserModel;
});

'use strict';

angular.module('app.calendar').controller('CalendarCtrl', function ($scope, $log, CalendarEvent) {


    // Events scope
    $scope.events = [];

    // Unassigned events scope
    $scope.eventsExternal = [
        {
            title: "Office Meeting",
            description: "Currently busy",
            className: "bg-color-darken txt-color-white",
            icon: "fa-time"
        },
        {
            title: "Lunch Break",
            description: "No Description",
            className: "bg-color-blue txt-color-white",
            icon: "fa-pie"
        },
        {
            title: "URGENT",
            description: "urgent tasks",
            className: "bg-color-red txt-color-white",
            icon: "fa-alert"
        }
    ];


    // Queriing our events from CalendarEvent resource...
    // Scope update will automatically update the calendar
    CalendarEvent.query().$promise.then(function (events) {
        $scope.events = events;
    });


    $scope.newEvent = {};

    $scope.addEvent = function() {

        $log.log("Adding new event:", $scope.newEvent);

        var newEventDefaults = {
            title: "Untitled Event",
            description: "no description",
            className: "bg-color-darken txt-color-white",
            icon: "fa-info"
        };


        $scope.newEvent = angular.extend(newEventDefaults, $scope.newEvent);

        $scope.eventsExternal.unshift($scope.newEvent);

        $scope.newEvent = {};

        // $log.log("New events now:", $scope.eventsExternal);

    };


});

"use strict";

angular.module('app.calendar').directive('dragableEvent', function ($log) {
    return {
        restrict: 'A',
        link: function (scope, element) {

            // $log.log(element.scope());

            var eventObject = element.scope().event;

            element.data('eventObject', eventObject);


            element.draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });


        }
    }
})
"use strict";

angular.module('app.calendar').directive('fullCalendar', function (CalendarEvent, $log, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/calendar/directives/full-calendar.tpl.html',
        scope: {
            events: "=events"
        },
        link: function (scope, element) {


            var $calendar = $("#calendar");

            var calendar = null;


            function initCalendar() {

                // $log.log(events);


                calendar = $calendar.fullCalendar({
                    lang: 'en',
                    editable: true,
                    draggable: true,
                    selectable: false,
                    selectHelper: true,
                    unselectAuto: false,
                    disableResizing: false,
                    droppable: true,

                    header: {
                        left: 'title', //,today
                        center: 'prev, next, today',
                        right: 'month, agendaWeek, agendaDay' //month, agendaDay,
                    },

                    drop: function (date, allDay) { // this function is called when something is dropped

                        // retrieve the dropped element's stored Event Object
                        var originalEventObject = $(this).data('eventObject');
            
                        // we need to copy it, so that multiple events don't have a reference to the same object
                        var copiedEventObject = $.extend({}, originalEventObject);
            
                        // assign it the date that was reported
                        copiedEventObject.start = date;
                        copiedEventObject.allDay = allDay;

                        // $log.log(scope);
            
                        // render the event on the calendar
                        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
            
                        // is the "remove after drop" checkbox checked?
                        if ($('#drop-remove').is(':checked')) {

                            // if so, remove the element from the "Draggable Events" list
                            // $(this).remove();
                            // $log.log($(this).scope());
                            var index = $(this).scope().$index;

                            $("#external-events").scope().eventsExternal.splice(index, 1);
                            $(this).remove();

                        }
            
                    },

                    select: function (start, end, allDay) {
                        var title = prompt('Event Title:');
                        if (title) {
                            calendar.fullCalendar('renderEvent', {
                                    title: title,
                                    start: start,
                                    end: end,
                                    allDay: allDay
                                }, true // make the event "stick"
                            );
                        }
                        calendar.fullCalendar('unselect');
                    },

                    // events: scope.events,

                    events: function(start, end, timezone, callback) {

                        callback(scope.events);

                    },

                    eventRender: function (event, element, icon) {
                        if (!event.description == "") {
                            element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
                        }
                        if (!event.icon == "") {
                            element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
                        }
                    }
                });

                $('.fc-header-right, .fc-header-center', $calendar).hide();
            }


            initCalendar();


            // Now events will be refetched every time events scope is updated in controller!!!
            scope.$watch("events", function(newValue, oldValue) {

                $calendar.fullCalendar( 'refetchEvents' );

            }, true);


            scope.next = function () {
                $('.fc-button-next', $calendar).click();
            };
            scope.prev = function () {
                $('.fc-button-prev', $calendar).click();
            };
            scope.today = function () {
                $('.fc-button-today', $calendar).click();
            };
            scope.changeView = function (period) {
                $calendar.fullCalendar('changeView', period);
            };
        }
    }
});

"use strict";

angular.module('app.calendar').factory('CalendarEvent', function($resource, APP_CONFIG){
    return $resource( APP_CONFIG.apiRootUrl + '/events.json', {_id:'@id'})
});
"use strict";	

angular.module('app').controller("ActivitiesCtrl", function ActivitiesCtrl($scope, $log, activityService){

	$scope.activeTab = 'default';
	$scope.currentActivityItems = [];
	
	// Getting different type of activites
	activityService.get(function(data){

		$scope.activities = data.activities;
		
	});


	$scope.isActive = function(tab){
		return $scope.activeTab === tab;
	};

	$scope.setTab = function(activityType){
		$scope.activeTab = activityType;

		activityService.getbytype(activityType, function(data) {

			$scope.currentActivityItems = data.data;

		});

	};

});
"use strict";

angular.module('app').directive('activitiesDropdownToggle', function($log) {

	var link = function($scope,$element, attrs){
		var ajax_dropdown = null;

		$element.on('click',function(){
			var badge = $(this).find('.badge');

			if (badge.hasClass('bg-color-red')) {

				badge.removeClass('bg-color-red').text(0);

			}

			ajax_dropdown = $(this).next('.ajax-dropdown');

			if (!ajax_dropdown.is(':visible')) {

				ajax_dropdown.fadeIn(150);

				$(this).addClass('active');

			}
			 else {
				
				ajax_dropdown.fadeOut(150);
				
				$(this).removeClass('active');

			}

		})

		$(document).mouseup(function(e) {
			if (ajax_dropdown && !ajax_dropdown.is(e.target) && ajax_dropdown.has(e.target).length === 0) {
				ajax_dropdown.fadeOut(150);
				$element.removeClass('active');
			}
		});
	}
	
	return{
		restrict:'EA',
		link:link
	}
});
"use strict";

angular.module('app').factory('activityService', function($http, $log, APP_CONFIG) {

	function getActivities(callback){

		$http.get(APP_CONFIG.apiRootUrl + '/activities/activity.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getActivitiesByType(type, callback){

		$http.get(APP_CONFIG.apiRootUrl + '/activities/activity-' + type + '.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}
	
	return{
		get:function(callback){
			getActivities(callback);
		},
		getbytype:function(type,callback){
			getActivitiesByType(type, callback);
		}
	}
});
"use strict";

angular.module('app').factory('Project', function($http, APP_CONFIG){
    return {
        list: $http.get(APP_CONFIG.apiRootUrl + '/projects.json')
    }
});
"use strict";

angular.module('app').directive('recentProjects', function(Project){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/dashboard/projects/recent-projects.tpl.html",
        scope: true,
        link: function(scope, element){

            Project.list.then(function(response){
                scope.projects = response.data;
            });
            scope.clearProjects = function(){
                scope.projects = [];
            }
        }
    }
});
"use strict";

angular.module('app').controller('TodoCtrl', function ($scope, $timeout, Todo) {
    $scope.newTodo = undefined;

    $scope.states = ['Critical', 'Important', 'Completed'];

    $scope.todos = Todo.getList().$object;

    // $scope.$watch('todos', function(){ }, true)

    $scope.toggleAdd = function () {
        if (!$scope.newTodo) {
            $scope.newTodo = {
                state: 'Important'
            };
        } else {
            $scope.newTodo = undefined;
        }
    };

    $scope.createTodo = function () {
        $scope.todos.push(
           Todo.normalize($scope.newTodo)
        );
        $scope.newTodo = undefined;

    };

    $scope.deleteTodo = function (todo) {
        todo.remove().then(function () {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        });

    };

});
'use strict';

angular.module('app.eCommerce').controller('OrdersDemoCtrl', function ($scope, orders) {

    $scope.orders = orders.data;

    $scope.tableOptions =  {
        "data": orders.data.data,
//            "bDestroy": true,
        "iDisplayLength": 15,
        columns: [
            {data: "orderId"},
            {data: "customerId"},
            {data: "purchase"},
            {data: "delivery"},
            {data: "basePrice"},
            {data: "postalZip"},
            {data: "status"}
        ],
        "order": [[1, 'asc']]
    }
});

"use strict";

angular.module('app.forms').controller('FormLayoutsCtrl', function($scope, $modal, $log){

    $scope.openModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'app/forms/views/form-layout-modal.html',
            controller: 'ModalDemoCtrl' 
        });

        modalInstance.result.then(function () {
            $log.info('Modal closed at: ' + new Date());

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });


    };

    $scope.registration = {};

    $scope.$watch('registration.date', function(changed){
        console.log('registration model changed', $scope.registration)
    })


});

"use strict";

angular.module('app.forms').controller('FormPluginsCtrl', function($scope, $log){

	$scope.editableOptions =  {
		mode: 'popup',
		disabled: false
	};

	$scope.toggleInline = function() {
		if($scope.editableOptions.mode == 'popup') {
			$scope.editableOptions.mode = 'inline';
		}
		else {
			$scope.editableOptions.mode = 'popup'
		}
	};

	$scope.toggleDisabled = function() {
		$scope.editableOptions.disabled = !$scope.editableOptions.disabled;
	};


	$scope.datepickerOptions = {
		changeMonth: true,
		changeYear: true
	}
});
"use strict";


angular.module('app.forms').controller('FormWizardCtrl', function($scope){

    $scope.wizard1CompleteCallback = function(wizardData){
        console.log('wizard1CompleteCallback', wizardData);
        $.smallBox({
            title: "Congratulations! Smart wizard finished",
            content: "<i class='fa fa-clock-o'></i> <i>1 seconds ago...</i>",
            color: "#5F895F",
            iconSmall: "fa fa-check bounce animated",
            timeout: 4000
        });
    };

    $scope.wizard2CompleteCallback = function(wizardData){
        console.log('wizard2CompleteCallback', wizardData);
        $.smallBox({
            title: "Congratulations! Smart fuekux wizard finished",
            content: "<i class='fa fa-clock-o'></i> <i>1 seconds ago...</i>",
            color: "#5F895F",
            iconSmall: "fa fa-check bounce animated",
            timeout: 4000
        });

    };

});
"use strict";

angular.module('app.forms').controller('FormXeditableCtrl', function($scope, $log){

    $scope.username = 'superuser';
    $scope.firstname = null;
    $scope.sex = 'not selected';
    $scope.group = "Admin";
    $scope.vacation = "25.02.2013";
    $scope.combodate = "15/05/1984";
    $scope.event = null;
    $scope.comments = 'awesome user!';
    $scope.state2 = 'California';
    $scope.fruits = 'peach<br/>apple';
    

    $scope.fruits_data = [
        {value: 'banana', text: 'banana'},
        {value: 'peach', text: 'peach'},
        {value: 'apple', text: 'apple'},
        {value: 'watermelon', text: 'watermelon'},
        {value: 'orange', text: 'orange'}]
    ;


    $scope.genders =  [
        {value: 'not selected', text: 'not selected'},
        {value: 'Male', text: 'Male'},
        {value: 'Female', text: 'Female'}
    ];

    $scope.groups =  [
        {value: 'Guest', text: 'Guest'},
        {value: 'Service', text: 'Service'},
        {value: 'Customer', text: 'Customer'},
        {value: 'Operator', text: 'Operator'},
        {value: 'Support', text: 'Support'},
        {value: 'Admin', text: 'Admin'}
    ]; 

});
"use strict";


angular.module('app.forms').controller('ImageEditorCtrl', function ($scope) {

    // api tab
    $scope.apiDemoSelection = [100, 100, 400, 300];

    $scope.apiDemoOptions = {
        allowSelect: true,
        allowResize: true,
        allowMove: true,
        animate: false
    };

    $scope.apiRandomSelection = function () {
        $scope.apiDemoOptions.animate = false;
        $scope.apiDemoSelection = [
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400)
        ]
    };

    $scope.apiRandomAnimation = function () {
        $scope.apiDemoOptions.animate = true;
        $scope.apiDemoSelection = [
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 600),
            Math.round(Math.random() * 400)
        ]
    };

    $scope.apiReleaseSelection = function () {
        $scope.apiDemoOptions.animate = true;
        $scope.apiDemoSelection = 'release';
    };


    $scope.apiToggleDisable = function () {
        $scope.apiDemoOptions.disabled = !$scope.apiDemoOptions.disabled;
    };

    $scope.apiToggleDestroy = function () {
        $scope.apiDemoOptions.destroyed = !$scope.apiDemoOptions.destroyed;
    };

    $scope.apiDemoShowAspect = false;
    $scope.apiDemoToggleAspect = function () {
        $scope.apiDemoShowAspect = !$scope.apiDemoShowAspect;
        if ($scope.apiDemoShowAspect)
            $scope.apiDemoOptions.aspectRatio = 4 / 3;
        else
            $scope.apiDemoOptions.aspectRatio = 0;
    };

    $scope.apiDemoShowSizeRestrict = false;
    $scope.apiDemoToggleSizeRestrict = function () {
        $scope.apiDemoShowSizeRestrict = !$scope.apiDemoShowSizeRestrict;
        if ($scope.apiDemoShowSizeRestrict) {
            $scope.apiDemoOptions.minSizeWidth = 80;
            $scope.apiDemoOptions.minSizeHeight = 80;
            $scope.apiDemoOptions.maxSizeWidth = 350;
            $scope.apiDemoOptions.maxSizeHeight = 350;
        } else {
            $scope.apiDemoOptions.minSizeWidth = 0;
            $scope.apiDemoOptions.minSizeHeight = 0;
            $scope.apiDemoOptions.maxSizeWidth = 0;
            $scope.apiDemoOptions.maxSizeHeight = 0;
        }

    };


    $scope.setApiDemoImage = function (image) {
        $scope.apiDemoImage = image;
        $scope.apiDemoOptions.src = image.src;
        $scope.apiDemoOptions.bgOpacity = image.bgOpacity;
        $scope.apiDemoOptions.outerImage = image.outerImage;
        $scope.apiRandomAnimation();
    };

    $scope.apiDemoImages = [
        {
            name: 'Lego',
            src: 'styles/img/superbox/superbox-full-24.jpg',
            bgOpacity: .6
        },
        {
            name: 'Breakdance',
            src: 'styles/img/superbox/superbox-full-7.jpg',
            bgOpacity: .6
        },
        {
            name: 'Dragon Fly',
            src: 'styles/img/superbox/superbox-full-20.jpg',
            bgOpacity: 1,
            outerImage: 'styles/img/superbox/superbox-full-20-bw.jpg'
        }
    ];

    $scope.apiDemoImage = $scope.apiDemoImages[1];

    // animations tab
    $scope.animationsDemoOptions = {
        bgOpacity: undefined,
        bgColor: undefined,
        bgFade: true,
        shade: false,
        animate: true
    };
    $scope.animationsDemoSelection = undefined;
    $scope.selections = {
        1: [217, 122, 382, 284],
        2: [20, 20, 580, 380],
        3: [24, 24, 176, 376],
        4: [347, 165, 550, 355],
        5: [136, 55, 472, 183],
        Release: 'release'
    };

    $scope.opacities = {
        Low: .2,
        Mid: .5,
        High: .8,
        Full: 1
    };

    $scope.colors = {
        R: '#900',
        B: '#4BB6F0',
        Y: '#F0B207',
        G: '#46B81C',
        W: 'white',
        K: 'black'
    };


    // styling tab

    $scope.styles = [
        {
            name: 'jcrop-light',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'white',
            bgOpacity: 0.5
        },
        {
            name: 'jcrop-dark',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'black',
            bgOpacity: 0.4
        },
        {
            name: 'jcrop-normal',
            bgFade: true,
            animate: true,
            selection: [130, 65, 130 + 350, 65 + 285],
            bgColor: 'black',
            bgOpacity: 0.6
        }
    ];

    $scope.demoStyle = $scope.styles[0]
});
'use strict'

angular.module('app.forms').controller('ModalDemoCtrl', function($scope, $modalInstance){
    $scope.closeModal = function(){
        $modalInstance.dismiss('cancel');
    }
});
"use strict";

angular.module('app.graphs').controller('FlotCtrl', function ($scope) {


    $scope.salesChartData = [
        [1196463600000, 0],
        [1196550000000, 0],
        [1196636400000, 0],
        [1196722800000, 77],
        [1196809200000, 3636],
        [1196895600000, 3575],
        [1196982000000, 2736],
        [1197068400000, 1086],
        [1197154800000, 676],
        [1197241200000, 1205],
        [1197327600000, 906],
        [1197414000000, 710],
        [1197500400000, 639],
        [1197586800000, 540],
        [1197673200000, 435],
        [1197759600000, 301],
        [1197846000000, 575],
        [1197932400000, 481],
        [1198018800000, 591],
        [1198105200000, 608],
        [1198191600000, 459],
        [1198278000000, 234],
        [1198364400000, 1352],
        [1198450800000, 686],
        [1198537200000, 279],
        [1198623600000, 449],
        [1198710000000, 468],
        [1198796400000, 392],
        [1198882800000, 282],
        [1198969200000, 208],
        [1199055600000, 229],
        [1199142000000, 177],
        [1199228400000, 374],
        [1199314800000, 436],
        [1199401200000, 404],
        [1199487600000, 253],
        [1199574000000, 218],
        [1199660400000, 476],
        [1199746800000, 462],
        [1199833200000, 500],
        [1199919600000, 700],
        [1200006000000, 750],
        [1200092400000, 600],
        [1200178800000, 500],
        [1200265200000, 900],
        [1200351600000, 930],
        [1200438000000, 1200],
        [1200524400000, 980],
        [1200610800000, 950],
        [1200697200000, 900],
        [1200783600000, 1000],
        [1200870000000, 1050],
        [1200956400000, 1150],
        [1201042800000, 1100],
        [1201129200000, 1200],
        [1201215600000, 1300],
        [1201302000000, 1700],
        [1201388400000, 1450],
        [1201474800000, 1500],
        [1201561200000, 546],
        [1201647600000, 614],
        [1201734000000, 954],
        [1201820400000, 1700],
        [1201906800000, 1800],
        [1201993200000, 1900],
        [1202079600000, 2000],
        [1202166000000, 2100],
        [1202252400000, 2200],
        [1202338800000, 2300],
        [1202425200000, 2400],
        [1202511600000, 2550],
        [1202598000000, 2600],
        [1202684400000, 2500],
        [1202770800000, 2700],
        [1202857200000, 2750],
        [1202943600000, 2800],
        [1203030000000, 3245],
        [1203116400000, 3345],
        [1203202800000, 3000],
        [1203289200000, 3200],
        [1203375600000, 3300],
        [1203462000000, 3400],
        [1203548400000, 3600],
        [1203634800000, 3700],
        [1203721200000, 3800],
        [1203807600000, 4000],
        [1203894000000, 4500]
    ]
        .map(function (item) {
            return [
                item[0] + 60 * 60 * 1000,
                item[1]
            ]
        });

    $scope.barChartData = _.range(3).map(function (barNum) {
        return {
            data: _.range(12).map(function (i) {
                return [i, parseInt(Math.random() * 30)]
            }),
            bars: {
                show: true,
                barWidth: 0.2,
                order: barNum + 1
            }
        }
    });

    $scope.horizontalBarChartData = _.range(3).map(function (barNum) {
        return {
            data: _.range(4).map(function (i) {
                return [i, parseInt(Math.random() * 30)]
            }),
            bars: {
                horizontal: true,
                show: true,
                barWidth: 0.2,
                order: barNum + 1
            }
        }
    });

    $scope.sinChartData = [
        {
            data: _.range(16).map(function (i) {
                return [i, Math.sin(i)];
            }),
            label: "sin(x)"
        },
        {
            data: _.range(16).map(function (i) {
                return [i, Math.cos(i)];
            }),
            label: "cos(x)"
        }
    ];


    // fill chart

    var males = {
        '15%' : [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6], [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9], [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]],
        '90%' : [[2, 96.8], [3, 105.2], [4, 113.9], [5, 120.8], [6, 127.0], [7, 133.1], [8, 139.1], [9, 143.9], [10, 151.3], [11, 161.1], [12, 164.8], [13, 173.5], [14, 179.0], [15, 182.0], [16, 186.9], [17, 185.2], [18, 186.3], [19, 186.6]],
        '25%' : [[2, 89.2], [3, 94.9], [4, 104.4], [5, 111.4], [6, 117.5], [7, 120.2], [8, 127.1], [9, 132.9], [10, 136.8], [11, 144.4], [12, 149.5], [13, 154.1], [14, 163.1], [15, 169.2], [16, 170.4], [17, 171.2], [18, 172.4], [19, 170.8]],
        '10%' : [[2, 86.9], [3, 92.6], [4, 99.9], [5, 107.0], [6, 114.0], [7, 113.5], [8, 123.6], [9, 129.2], [10, 133.0], [11, 140.6], [12, 145.2], [13, 149.7], [14, 158.4], [15, 163.5], [16, 166.9], [17, 167.5], [18, 167.1], [19, 165.3]],
        'mean' : [[2, 91.9], [3, 98.5], [4, 107.1], [5, 114.4], [6, 120.6], [7, 124.7], [8, 131.1], [9, 136.8], [10, 142.3], [11, 150.0], [12, 154.7], [13, 161.9], [14, 168.7], [15, 173.6], [16, 175.9], [17, 176.6], [18, 176.8], [19, 176.7]],
        '75%' : [[2, 94.5], [3, 102.1], [4, 110.8], [5, 117.9], [6, 124.0], [7, 129.3], [8, 134.6], [9, 141.4], [10, 147.0], [11, 156.1], [12, 160.3], [13, 168.3], [14, 174.7], [15, 178.0], [16, 180.2], [17, 181.7], [18, 181.3], [19, 182.5]],
        '85%' : [[2, 96.2], [3, 103.8], [4, 111.8], [5, 119.6], [6, 125.6], [7, 131.5], [8, 138.0], [9, 143.3], [10, 149.3], [11, 159.8], [12, 162.5], [13, 171.3], [14, 177.5], [15, 180.2], [16, 183.8], [17, 183.4], [18, 183.5], [19, 185.5]],
        '50%' : [[2, 91.9], [3, 98.2], [4, 106.8], [5, 114.6], [6, 120.8], [7, 125.2], [8, 130.3], [9, 137.1], [10, 141.5], [11, 149.4], [12, 153.9], [13, 162.2], [14, 169.0], [15, 174.8], [16, 176.0], [17, 176.8], [18, 176.4], [19, 177.4]]
    };

    var females = {
        '15%' : [[2, 84.8], [3, 93.7], [4, 100.6], [5, 105.8], [6, 113.3], [7, 119.3], [8, 124.3], [9, 131.4], [10, 136.9], [11, 143.8], [12, 149.4], [13, 151.2], [14, 152.3], [15, 155.9], [16, 154.7], [17, 157.0], [18, 156.1], [19, 155.4]],
        '90%' : [[2, 95.6], [3, 104.1], [4, 111.9], [5, 119.6], [6, 127.6], [7, 133.1], [8, 138.7], [9, 147.1], [10, 152.8], [11, 161.3], [12, 166.6], [13, 167.9], [14, 169.3], [15, 170.1], [16, 172.4], [17, 169.2], [18, 171.1], [19, 172.4]],
        '25%' : [[2, 87.2], [3, 95.9], [4, 101.9], [5, 107.4], [6, 114.8], [7, 121.4], [8, 126.8], [9, 133.4], [10, 138.6], [11, 146.2], [12, 152.0], [13, 153.8], [14, 155.7], [15, 158.4], [16, 157.0], [17, 158.5], [18, 158.4], [19, 158.1]],
        '10%' : [[2, 84.0], [3, 91.9], [4, 99.2], [5, 105.2], [6, 112.7], [7, 118.0], [8, 123.3], [9, 130.2], [10, 135.0], [11, 141.1], [12, 148.3], [13, 150.0], [14, 150.7], [15, 154.3], [16, 153.6], [17, 155.6], [18, 154.7], [19, 153.1]],
        'mean' : [[2, 90.2], [3, 98.3], [4, 105.2], [5, 112.2], [6, 119.0], [7, 125.8], [8, 131.3], [9, 138.6], [10, 144.2], [11, 151.3], [12, 156.7], [13, 158.6], [14, 160.5], [15, 162.1], [16, 162.9], [17, 162.2], [18, 163.0], [19, 163.1]],
        '75%' : [[2, 93.2], [3, 101.5], [4, 107.9], [5, 116.6], [6, 122.8], [7, 129.3], [8, 135.2], [9, 143.7], [10, 148.7], [11, 156.9], [12, 160.8], [13, 163.0], [14, 165.0], [15, 165.8], [16, 168.7], [17, 166.2], [18, 167.6], [19, 168.0]],
        '85%' : [[2, 94.5], [3, 102.8], [4, 110.4], [5, 119.0], [6, 125.7], [7, 131.5], [8, 137.9], [9, 146.0], [10, 151.3], [11, 159.9], [12, 164.0], [13, 166.5], [14, 167.5], [15, 168.5], [16, 171.5], [17, 168.0], [18, 169.8], [19, 170.3]],
        '50%' : [[2, 90.2], [3, 98.1], [4, 105.2], [5, 111.7], [6, 118.2], [7, 125.6], [8, 130.5], [9, 138.3], [10, 143.7], [11, 151.4], [12, 156.7], [13, 157.7], [14, 161.0], [15, 162.0], [16, 162.8], [17, 162.2], [18, 162.8], [19, 163.3]]
    };

    $scope.fillChartData = [{
        label : 'female mean',
        data : females['mean'],
        lines : {
            show : true
        },
        color : "rgb(255,50,50)"
    }, {
        id : 'f15%',
        data : females['15%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : false
        },
        color : "rgb(255,50,50)"
    }, {
        id : 'f25%',
        data : females['25%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.2
        },
        color : "rgb(255,50,50)",
        fillBetween : 'f15%'
    }, {
        id : 'f50%',
        data : females['50%'],
        lines : {
            show : true,
            lineWidth : 0.5,
            fill : 0.4,
            shadowSize : 0
        },
        color : "rgb(255,50,50)",
        fillBetween : 'f25%'
    }, {
        id : 'f75%',
        data : females['75%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.4
        },
        color : "rgb(255,50,50)",
        fillBetween : 'f50%'
    }, {
        id : 'f85%',
        data : females['85%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.2
        },
        color : "rgb(255,50,50)",
        fillBetween : 'f75%'
    }, {
        label : 'male mean',
        data : males['mean'],
        lines : {
            show : true
        },
        color : "rgb(50,50,255)"
    }, {
        id : 'm15%',
        data : males['15%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : false
        },
        color : "rgb(50,50,255)"
    }, {
        id : 'm25%',
        data : males['25%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.2
        },
        color : "rgb(50,50,255)",
        fillBetween : 'm15%'
    }, {
        id : 'm50%',
        data : males['50%'],
        lines : {
            show : true,
            lineWidth : 0.5,
            fill : 0.4,
            shadowSize : 0
        },
        color : "rgb(50,50,255)",
        fillBetween : 'm25%'
    }, {
        id : 'm75%',
        data : males['75%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.4
        },
        color : "rgb(50,50,255)",
        fillBetween : 'm50%'
    }, {
        id : 'm85%',
        data : males['85%'],
        lines : {
            show : true,
            lineWidth : 0,
            fill : 0.2
        },
        color : "rgb(50,50,255)",
        fillBetween : 'm75%'
    }];



    //
    $scope.pieChartData = _.range(Math.floor(Math.random() * 10) + 1).map(function(i){
        return {
            label : "Series" + (i + 1),
            data : Math.floor(Math.random() * 100) + 1
        }
    });

    var pageviews = [[1, 75], [3, 87], [4, 93], [5, 127], [6, 116], [7, 137], [8, 135], [9, 130], [10, 167], [11, 169], [12, 179], [13, 185], [14, 176], [15, 180], [16, 174], [17, 193], [18, 186], [19, 177], [20, 153], [21, 149], [22, 130], [23, 100], [24, 50]];
    var visitors = [[1, 65], [3, 50], [4, 73], [5, 100], [6, 95], [7, 103], [8, 111], [9, 97], [10, 125], [11, 100], [12, 95], [13, 141], [14, 126], [15, 131], [16, 146], [17, 158], [18, 160], [19, 151], [20, 125], [21, 110], [22, 100], [23, 85], [24, 37]];

    $scope.siteStatsData = [{
        data : pageviews,
        label : "Your pageviews"
    }, {
        data : visitors,
        label : "Site visitors"
    }];
});
'use strict';

angular.module('app.home').controller('HomeController', function ($scope,test) {
    $scope.test 
    var init = function(){
        $scope.test = test
    }()
});
'use strict';  

angular.module('app.home').service('myTestService', function ($http) {
      return {
         getTest : function(){
            var baseUrl = "http://localhost:8080"
            var url = "/simple"
            var apiUrl = baseUrl + url
              return $http.get(apiUrl)
                .then(function (result) {
                    return result.data;
                });
         }
        //  ,
        //  saveTest : function(payload){
        //     var url = $global.getServerAddr("/simple")
        //     return $http.post(url, payload)
        //     .then(function (result) {
        //         return result.data;
        //     });
        //  }
      }
});
"use strict";

angular.module('app.inbox').directive('messageLabels', function (InboxConfig) {
    return {
        replace: true,
        restrict: 'AE',
        link: function (scope, element) {

            if (scope.message.labels && scope.message.labels.length) {
                InboxConfig.success(function (config) {
                    var html = _.map(scope.message.labels, function (label) {
                        return '<span class="label bg-color-'+config.labels[label].color +'">' + config.labels[label].name + '</span>';
                    }).join('');
                    element.replaceWith(html);
                });

            } else {
                element.replaceWith('');
            }
        }
    }
});
"use strict";

angular.module('app.inbox').directive('unreadMessagesCount', function(InboxConfig){
    return {
        restrict: 'A',
        link: function(scope, element){
            InboxConfig.success(function(config){
                element.html(_.find(config.folders, {key: 'inbox'}).unread);
            })
        }
    }
});
"use strict";

angular.module('app.inbox').factory('InboxConfig', function($http, APP_CONFIG){
    return $http.get(APP_CONFIG.apiRootUrl + '/inbox.json');
})
"use strict";

angular.module('app.inbox').factory('InboxMessage', function($resource, APP_CONFIG){
   var InboxMessage = $resource(APP_CONFIG.apiRootUrl + '/messages.json/:id', {'id': '@_id'}, {
        get:{
            url: APP_CONFIG.apiRootUrl + '/message.json',
            isArray: false
        }
    });

    _.extend(InboxMessage.prototype, {
        selected: false,
        hasAttachments: function(){
            return (_.isArray(this.attachments) && this.attachments.length)
        },
        fullAttachmentsTootlip: function(){
            return 'FILES: ' + _.pluck(this.attachments, 'name').join(', ');
        },
        getBodyTeaser: function(){
            var clearBody  = this.body.replace(/<[^<>]+?>/gm, ' ').replace(/(\s{2}|\n)/gm, ' ');

            var teaserMaxLength = 55 - this.subject.length;

            return clearBody.length > teaserMaxLength ? clearBody.substring(0, teaserMaxLength) + '...' : clearBody;
        }
    });

    return InboxMessage;

});
"use strict";

angular.module('app').factory('Language', function($http, APP_CONFIG){

	function getLanguage(key, callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/langs/' + key + '.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getLanguages(callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/languages.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		getLang: function(type, callback) {
			getLanguage(type, callback);
		},
		getLanguages:function(callback){
			getLanguages(callback);
		}
	}

});
"use strict";

angular.module('app').controller("LanguagesCtrl",  function LanguagesCtrl($scope, $rootScope, $log, Language){

    $rootScope.lang = {};
    
    Language.getLanguages(function(data){

        $rootScope.currentLanguage = data[0];

        $rootScope.languages = data;

        Language.getLang(data[0].key,function(data){

            $rootScope.lang = data;
        });

    });

    $scope.selectLanguage = function(language){
        $rootScope.currentLanguage = language;
        
        Language.getLang(language.key,function(data){

            $rootScope.lang = data;
            
        });
    }

    $rootScope.getWord = function(key){
        if(angular.isDefined($rootScope.lang[key])){
            return $rootScope.lang[key];
        } 
        else {
            return key;
        }
    }

});
"use strict";

angular.module('app').directive('languageSelector', function(Language){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/layout/language/language-selector.tpl.html",
        scope: true
    }
});
"use strict";

angular.module('app').directive('toggleShortcut', function($log,$timeout) {

	var initDomEvents = function($element){

		var shortcut_dropdown = $('#shortcut');

		$element.on('click',function(){
		
			if (shortcut_dropdown.is(":visible")) {
				shortcut_buttons_hide();
			} else {
				shortcut_buttons_show();
			}

		})

		shortcut_dropdown.find('a').click(function(e) {
			e.preventDefault();
			window.location = $(this).attr('href');
			setTimeout(shortcut_buttons_hide, 300);
		});

		

		// SHORTCUT buttons goes away if mouse is clicked outside of the area
		$(document).mouseup(function(e) {
			if (shortcut_dropdown && !shortcut_dropdown.is(e.target) && shortcut_dropdown.has(e.target).length === 0) {
				shortcut_buttons_hide();
			}
		});

		// SHORTCUT ANIMATE HIDE
		function shortcut_buttons_hide() {
			shortcut_dropdown.animate({
				height : "hide"
			}, 300, "easeOutCirc");
			$('body').removeClass('shortcut-on');

		}

		// SHORTCUT ANIMATE SHOW
		function shortcut_buttons_show() {
			shortcut_dropdown.animate({
				height : "show"
			}, 200, "easeOutCirc");
			$('body').addClass('shortcut-on');
		}
	}

	var link = function($scope,$element){
		$timeout(function(){
			initDomEvents($element);
		});
	}

	return{
		restrict:'EA',
		link:link
	}
})
'use strict';

angular.module('app.maps').controller('MapsDemoCtrl',
    function ($scope, $http, $q, SmartMapStyle, uiGmapGoogleMapApi) {


        $scope.styles = SmartMapStyle.styles;

        $scope.setType = function (key) {
            SmartMapStyle.getMapType(key).then(function (type) {
                $scope.map.control.getGMap().mapTypes.set(key, type);
                $scope.map.control.getGMap().setMapTypeId(key);
            });
            $scope.currentType = key;
        };


        $scope.map = {
            center: {latitude: 45, longitude: -73},
            zoom: 8,
            control: {}
        };


        uiGmapGoogleMapApi.then(function (maps) {

            })
            .then(function () {
                return SmartMapStyle.getMapType('colorful')
            }).then(function () {
            $scope.setType('colorful')
        });



    });
"use strict";


angular.module('app.maps').factory('SmartMapStyle', function ($q, $http, APP_CONFIG) {

    var styles = {
        'colorful': { name: 'Colorful', url: APP_CONFIG.apiRootUrl + '/maps/colorful.json'},
        'greyscale': { name: 'greyscale', url: APP_CONFIG.apiRootUrl + '/maps/greyscale.json'},
        'metro': { name: 'metro', url: APP_CONFIG.apiRootUrl + '/maps/metro.json'},
        'mono-color': { name: 'mono-color', url: APP_CONFIG.apiRootUrl + '/maps/mono-color.json'},
        'monochrome': { name: 'monochrome', url: APP_CONFIG.apiRootUrl + '/maps/monochrome.json'},
        'nightvision': { name: 'Nightvision', url: APP_CONFIG.apiRootUrl + '/maps/nightvision.json'},
        'nightvision-highlight': { name: 'nightvision-highlight', url: APP_CONFIG.apiRootUrl + '/maps/nightvision-highlight.json'},
        'old-paper': { name: 'Old Paper', url: APP_CONFIG.apiRootUrl + '/maps/old-paper.json'}
    };


    function getMapType(key){
        var keyData = styles[key];

        if(!keyData.cache){
            keyData.cache = createMapType(keyData)
        }

        return keyData.cache;
    }

    function createMapType(keyData){
        var dfd = $q.defer();
        $http.get(keyData.url).then(function(resp){
            var styleData = resp.data;
            var type = new google.maps.StyledMapType(styleData, {name: keyData.name})
            dfd.resolve(type);
        }, function(reason){
            console.error(reason);
            dfd.reject(reason);
        });

        return dfd.promise;
    }


    return {
        getMapType: getMapType,
        styles: styles
    }



});
/**
 * Created by griga on 2/9/16.
 */


angular.module('app.tables').controller('DatatablesCtrl', function(DTOptionsBuilder, DTColumnBuilder){


    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/datatables.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
        DTColumnBuilder.newColumn('id').withClass('text-danger'),
        DTColumnBuilder.newColumn('name'),
        DTColumnBuilder.newColumn('phone'),
        DTColumnBuilder.newColumn('company'),
        DTColumnBuilder.newColumn('zip'),
        DTColumnBuilder.newColumn('city'),
        DTColumnBuilder.newColumn('date')
    ];


});
'use strict';

angular.module('app.tables').controller('JqGridCtrl', function ($scope) {
    $scope.gridData = {
        data: [
            {
                id: "1",
                date: "2007-10-01",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "2",
                date: "2007-10-02",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "3",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "4",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "5",
                date: "2007-10-05",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "6",
                date: "2007-09-06",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "7",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "8",
                date: "2007-10-03",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "9",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "10",
                date: "2007-10-01",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "11",
                date: "2007-10-02",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "12",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "13",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "14",
                date: "2007-10-05",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "15",
                date: "2007-09-06",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            },
            {
                id: "16",
                date: "2007-10-04",
                name: "test",
                note: "note",
                amount: "200.00",
                tax: "10.00",
                total: "210.00"
            },
            {
                id: "17",
                date: "2007-10-03",
                name: "test2",
                note: "note2",
                amount: "300.00",
                tax: "20.00",
                total: "320.00"
            },
            {
                id: "18",
                date: "2007-09-01",
                name: "test3",
                note: "note3",
                amount: "400.00",
                tax: "30.00",
                total: "430.00"
            }
        ],
        colNames: ['Actions', 'Inv No', 'Date', 'Client', 'Amount', 'Tax', 'Total', 'Notes'],
        colModel: [
            {
                name: 'act',
                index: 'act',
                sortable: false
            },
            {
                name: 'id',
                index: 'id'
            },
            {
                name: 'date',
                index: 'date',
                editable: true
            },
            {
                name: 'name',
                index: 'name',
                editable: true
            },
            {
                name: 'amount',
                index: 'amount',
                align: "right",
                editable: true
            },
            {
                name: 'tax',
                index: 'tax',
                align: "right",
                editable: true
            },
            {
                name: 'total',
                index: 'total',
                align: "right",
                editable: true
            },
            {
                name: 'note',
                index: 'note',
                sortable: false,
                editable: true
            }
        ]
    }


    $scope.getSelection = function(){
        alert(jQuery('table').jqGrid('getGridParam', 'selarrrow'));
    };

    $scope.selectRow = function(row){
       jQuery('table').jqGrid('setSelection', row);

    }
});
"use strict";

angular.module('app.ui').controller('GeneralElementsCtrl', function ($scope, $sce) {
    /*
     * Smart Notifications
     */
    $scope.eg1 = function () {

        $.bigBox({
            title: "Big Information box",
            content: "This message will dissapear in 6 seconds!",
            color: "#C46A69",
            //timeout: 6000,
            icon: "fa fa-warning shake animated",
            number: "1",
            timeout: 6000
        });
    };

    $scope.eg2 = function () {

        $.bigBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#3276B1",
            //timeout: 8000,
            icon: "fa fa-bell swing animated",
            number: "2"
        });

    };

    $scope.eg3 = function () {

        $.bigBox({
            title: "Shield is up and running!",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#C79121",
            //timeout: 8000,
            icon: "fa fa-shield fadeInLeft animated",
            number: "3"
        });

    };

    $scope.eg4 = function () {

        $.bigBox({
            title: "Success Message Example",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#739E73",
            //timeout: 8000,
            icon: "fa fa-check",
            number: "4"
        }, function () {
            $scope.closedthis();
        });

    };


    $scope.eg5 = function() {

        $.smallBox({
            title: "Ding Dong!",
            content: "Someone's at the door...shall one get it sir? <p class='text-align-right'><a href-void class='btn btn-primary btn-sm'>Yes</a> <a href-void class='btn btn-danger btn-sm'>No</a></p>",
            color: "#296191",
            //timeout: 8000,
            icon: "fa fa-bell swing animated"
        });
    };


    $scope.eg6 = function() {

        $.smallBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#5384AF",
            //timeout: 8000,
            icon: "fa fa-bell"
        });

    };

    $scope.eg7 = function() {

        $.smallBox({
            title: "James Simmons liked your comment",
            content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
            color: "#296191",
            iconSmall: "fa fa-thumbs-up bounce animated",
            timeout: 4000
        });

    };

    $scope.closedthis = function() {
        $.smallBox({
            title: "Great! You just closed that last alert!",
            content: "This message will be gone in 5 seconds!",
            color: "#739E73",
            iconSmall: "fa fa-cloud",
            timeout: 5000
        });
    };

    /*
     * SmartAlerts
     */
    // With Callback
    $scope.smartModEg1 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed === "Yes") {

                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed Yes...</i>",
                    color: "#659265",
                    iconSmall: "fa fa-check fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }
            if (ButtonPressed === "No") {
                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed No...</i>",
                    color: "#C46A69",
                    iconSmall: "fa fa-times fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }

        });
    };

    // With Input
    $scope.smartModEg2 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert: Input",
            content: "Please enter your user name",
            buttons: "[Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });
    };

    // With Buttons
    $scope.smartModEg3 =  function () {
        $.SmartMessageBox({
            title: "Smart Notification: Buttons",
            content: "Lots of buttons to go...",
            buttons: '[Need?][You][Do][Buttons][Many][How]'
        });

    }
    // With Select
    $scope.smartModEg4 =  function () {
        $.SmartMessageBox({
            title: "Smart Alert: Select",
            content: "You can even create a group of options.",
            buttons: "[Done]",
            input: "select",
            options: "[Costa Rica][United States][Autralia][Spain]"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });

    };

    // With Login
    $scope.smartModEg5 =  function () {

        $.SmartMessageBox({
            title: "Login form",
            content: "Please enter your user name",
            buttons: "[Cancel][Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            if (ButtonPress == "Cancel") {
                alert("Why did you cancel that? :(");
                return 0;
            }

            var Value1 = Value.toUpperCase();
            var ValueOriginal = Value;
            $.SmartMessageBox({
                title: "Hey! <strong>" + Value1 + ",</strong>",
                content: "And now please provide your password:",
                buttons: "[Login]",
                input: "password",
                placeholder: "Password"
            }, function (ButtonPress, Value) {
                alert("Username: " + ValueOriginal + " and your password is: " + Value);
            });
        });

    };

    $scope.tabsPopoverContent = $sce.trustAsHtml("<ul id='popup-tab' class='nav nav-tabs bordered'><li class='active'><a href='#pop-1' data-toggle='tab'>Active Tab </a></li><li><a href='#pop-2' data-toggle='tab'>Tab 2</a></li></ul><div id='popup-tab-content' class='tab-content padding-10'><div class='tab-pane fade in active' id='pop-1'><p>I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.</p></div><div class='tab-pane fade' id='pop-2'><p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. wes anderson artisan four loko farm-to-table craft beer twee.</p></div></div>")

    $scope.formPopoverContent = $sce.trustAsHtml("<form action='/api/plug' style='min-width:170px'><div class='checkbox'><label><input type='checkbox' class='checkbox style-0' checked='checked'><span>Read</span></label></div><div class='checkbox'><label><input type='checkbox' class='checkbox style-0'><span>Write</span></label></div><div class='checkbox'><label><input type='checkbox' class='checkbox style-0'><span>Execute</span></label></div><div class='form-actions'><div class='row'><div class='col-md-12'><button class='btn btn-primary btn-sm' type='submit'>SAVE</button></div></div></div></form>")

});

"use strict";


angular.module('app.ui').controller('JquiCtrl', function ($scope) {
    $scope.demoAutocompleteWords = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"];


    $scope.demoAjaxAutocomplete = '';


    $scope.modalDemo1 = function(){
        console.log('modalDemo1');
    }

    $scope.modalDemo2 = function(){
        console.log('modalDemo2');
    }


});
"use strict";


angular.module('app.ui').controller('TreeviewCtrl', function ($scope) {
    $scope.demoTree1 = [
        {"content": "<span><i class=\"fa fa-lg fa-calendar\"></i> 2013, Week 2</span>", "expanded": true, "children": [
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-plus-circle\"></i> Monday, January 7: 8.00 hours</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 8.00</span> &ndash; <a> Changed CSS to accomodate...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 8.00</span> &ndash; <a> Changed CSS to accomodate...</a>"},
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-minus-circle\"></i> Tuesday, January 8: 8.00 hours</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 6.00</span> &ndash; <a> Altered code...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Simplified our approach to...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 6.00</span> &ndash; <a> Altered code...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Simplified our approach to...</a>"},
            {"content": "<span class=\"label label-warning\"><i class=\"fa fa-lg fa-minus-circle\"></i> Wednesday, January 9: 6.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Fixed bug caused by...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Comitting latest code to Git...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Fixed bug caused by...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 3.00</span> &ndash; <a> Comitting latest code to Git...</a>"},
            {"content": "<span class=\"label label-danger\"><i class=\"fa fa-lg fa-minus-circle\"></i> Wednesday, January 9: 4.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Create component that...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 2.00</span> &ndash; <a> Create component that...</a>"}
        ]},
        {"content": "<span><i class=\"fa fa-lg fa-calendar\"></i> 2013, Week 3</span>", "children": [
            {"content": "<span class=\"label label-success\"><i class=\"fa fa-lg fa-minus-circle\"></i> Monday, January 14: 8.00 hours</span>", "children": [
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 7.75</span> &ndash; <a> Writing documentation...</a>"},
                {"content": "<span><i class=\"fa fa-clock-o\"></i> 0.25</span> &ndash; <a> Reverting code back to...</a>"}
            ]},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 7.75</span> &ndash; <a> Writing documentation...</a>"},
            {"content": "<span><i class=\"fa fa-clock-o\"></i> 0.25</span> &ndash; <a> Reverting code back to...</a>"}
        ]}
    ]

    $scope.demoTree2 = [
        {"content": "<span><i class=\"fa fa-lg fa-folder-open\"></i> Parent</span>", "expanded": true, "children": [
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Administrators</span>", "expanded": true, "children": [
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" name=\"checkbox-inline\"><i></i>Michael.Jackson</label> </span>"},
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Sunny.Ahmed</label> </span>"},
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Jackie.Chan</label> </span>"}
            ]},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" name=\"checkbox-inline\"><i></i>Michael.Jackson</label> </span>"},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Sunny.Ahmed</label> </span>"},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Jackie.Chan</label> </span>"},
            {"content": "<span><i class=\"fa fa-lg fa-minus-circle\"></i> Child</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Grand Child</span>",  "children": [
                    {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                        {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                        {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                    ]},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Grand Child</span>", "children": [
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
        ]},
        {"content": "<span><i class=\"fa fa-lg fa-folder-open\"></i> Parent2</span>", "children": [
            {"content": "<span><i class=\"icon-leaf\"></i> Child</span>"}
        ]}
    ]
});
'use strict';

angular.module('app.ui').directive('smartClassFilter', function () {
    return {
        restrict: 'A',
        scope: {
            model: '=',
            displayElements: '@',
            filterElements: '@'
        },
        link: function (scope, element) {
            scope.$watch('model', function (model) {
                if (angular.isString(model)) {
                    var search = model.trim();
                    if (search) {
                        angular.element(scope.displayElements, element).hide();

                        angular.element(scope.filterElements, element)
                            .filter(function () {
                                var r = new RegExp(search, 'i');
                                return r.test($(this).attr('class') + $(this).attr('alt'))
                            })
                            .closest(scope.displayElements).show();
                    } else {
                        angular.element(scope.displayElements, element).show();
                    }
                }
            })
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiAccordion', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.accordion({
                autoHeight : false,
                heightStyle : "content",
                collapsible : true,
                animate : 300,
                icons: {
                    header: "fa fa-plus",    // custom icon class
                    activeHeader: "fa fa-minus" // custom icon class
                },
                header : "h4"
            })
        }
    }
});

'use strict';

angular.module('app.ui').directive('smartJquiAjaxAutocomplete', function () {
    return {
        restrict: 'A',
        scope: {
            ngModel: '='
        },
        link: function (scope, element, attributes) {
            function split(val) {
                return val.split(/,\s*/);
            }

            function extractLast(term) {
                return split(term).pop();
            }

            function extractFirst(term) {
                return split(term)[0];
            }


            element.autocomplete({
                source: function (request, response) {
                    jQuery.getJSON(
                            "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + extractLast(request.term),
                        function (data) {
                            response(data);
                        }
                    );
                },
                minLength: 3,
                select: function (event, ui) {
                    var selectedObj = ui.item,
                    placeName = selectedObj.value;
                    if (typeof placeName == "undefined") placeName = element.val();

                    if (placeName) {
                        var terms = split(element.val());
                        // remove the current input
                        terms.pop();
                        // add the selected item (city only)
                        terms.push(extractFirst(placeName));
                        // add placeholder to get the comma-and-space at the end
                        terms.push("");

                        scope.$apply(function(){
                            scope.ngModel = terms.join(", ")
                        });
                    }

                    return false;
                },
                focus: function() {
                    // prevent value inserted on focus
                    return false;
                },
                delay: 100
            });
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiAutocomplete', function () {
    return {
        restrict: 'A',
        scope: {
            'source': '='
        },
        link: function (scope, element, attributes) {

            element.autocomplete({
                source: scope.source
            });
        }
    }
});
'use strict';

/*
 * CONVERT DIALOG TITLE TO HTML
 * REF: http://stackoverflow.com/questions/14488774/using-html-in-a-dialogs-title-in-jquery-ui-1-10
 */
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function (title) {
        if (!this.options.title) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));


angular.module('app.ui').directive('smartJquiDialog', function () {

    var optionAttributes = ['autoOpen', 'modal', 'width', 'resizable'];

    var defaults = {
        width: Math.min($(window).width() * .7, 600),
        autoOpen: false,
        resizable: false
    };


    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            var title = element.find('[data-dialog-title]').remove().html();

            var options = _.clone(defaults);

            optionAttributes.forEach(function (option) {
                if (element.data(option)) {
                    options[option] = element.data(option);
                }
            });

            var buttons = element.find('[data-dialog-buttons]').remove()
                .find('button').map(function (idx, button) {
                    return {
                        class: button.className,
                        html: button.innerHTML,
                        click: function () {
                            if ($(button).data('action'))
                                scope.$eval($(button).data('action'));
                            element.dialog("close");
                        }
                    }
                });

            element.dialog(_.extend({
                title: title,
                buttons: buttons
            }, options));

        }
    }
});
'use strict';

//    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
//        _title: function (title) {
//            if (!this.options.title) {
//                title.html("&#160;");
//            } else {
//                title.html(this.options.title);
//            }
//        }
//    }));


angular.module('app.ui').directive('smartJquiDialogLauncher', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-jqui-dialog-launcher data-smart-jqui-dialog-launcher');
            element.on('click', function (e) {
                $(attributes.smartJquiDialogLauncher).dialog('open');
                e.preventDefault();
            })
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiDynamicTabs', function ($timeout) {

	
	function addDomEvents(element){

		$('#tabs2').tabs();

		var tabTitle = $("#tab_title"), tabContent = $("#tab_content"), tabTemplate = "<li style='position:relative;'> <span class='air air-top-left delete-tab' style='top:7px; left:7px;'><button class='btn btn-xs font-xs btn-default hover-transparent'><i class='fa fa-times'></i></button></span></span><a href='#{href}'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #{label}</a></li>", tabCounter = 2;

		var tabs = $('#tabs2').tabs();

		// modal dialog init: custom buttons and a "close" callback reseting the form inside
		var dialog = $("#addtab").dialog({
			autoOpen : false,
			width : 600,
			resizable : false,
			modal : true,
			buttons : [{
			html : "<i class='fa fa-times'></i>&nbsp; Cancel",
			"class" : "btn btn-default",
			click : function() {
			$(this).dialog("close");

		}
		}, {

			html : "<i class='fa fa-plus'></i>&nbsp; Add",
			"class" : "btn btn-danger",
			click : function() {
				addTab();
				$(this).dialog("close");
			}
		}]
		});

		// addTab form: calls addTab function on submit and closes the dialog
		var form = dialog.find("form").submit(function(event) {
			addTab();
			dialog.dialog("close");
			event.preventDefault();
		});

		// actual addTab function: adds new tab using the input from the form above
		function addTab() {
			var label = tabTitle.val() || "Tab " + tabCounter, id = "tabs-" + tabCounter, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)), tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

			tabs.find(".ui-tabs-nav").append(li);
			tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
			tabs.tabs("refresh");
			tabCounter++;

			// clear fields
			$("#tab_title").val("");
			$("#tab_content").val("");
		}

		// addTab button: just opens the dialog
		$("#add_tab").button().click(function() {
			dialog.dialog("open");
		});

		// close icon: removing the tab on click
		$("#tabs2").on("click", 'span.delete-tab', function() {

			var panelId = $(this).closest("li").remove().attr("aria-controls");
			$("#" + panelId).remove();
			tabs.tabs("refresh");

		});

	}

	function link(element){

		$timeout(function(){
			addDomEvents(element);
		});

	}


    return {
        restrict: 'A',
        link: link
    }
});

'use strict';

angular.module('app.ui').directive('smartJquiMenu', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.menu();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartJquiTabs', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            element.tabs();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartNestable', function () {
    return {
        restrict: 'A',
        scope: {
            group: '@',
            output: '='
        },
        link: function (scope, element, attributes) {
            var options = {};
            if(scope.group){
                options.group = scope.group;
            }
            element.nestable(options);
            if(attributes.output){
                element.on('change', function(){
                    scope.$apply(function(){
                        scope.output = element.nestable('serialize');
                    });
                });
                scope.output = element.nestable('serialize');
            }

        }
    }
});
'use strict';

angular.module('app.ui').directive('smartProgressbar', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
        	lazyScript.register('build/vendor.ui.js').then(function(){
        		tElement.removeAttr('smart-progressbar data-smart-progressbar');
        		tElement.progressbar({
        		    display_text : 'fill'
        		})
        	})

        }
    }
});
'use strict';

angular.module('app.ui').directive('smartRideCarousel', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-ride-carousel data-smart-ride-carousel');
            tElement.carousel(tElement.data());
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartSuperBox', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {

            tElement.removeAttr('smart-super-box data-smart-super-box');

            tElement.SuperBox();
        }
    }
});
'use strict';

angular.module('app.ui').directive('smartTreeviewContent', function ($compile) {
    return {
        restrict: 'E',
        link: function (scope, element) {
            var $content = $(scope.item.content);

            function handleExpanded(){
                $content.find('>i')
                    .toggleClass('fa-plus-circle', !scope.item.expanded)
                    .toggleClass('fa-minus-circle', !!scope.item.expanded)

            }


            if (scope.item.children && scope.item.children.length) {
                $content.on('click', function(){
                    scope.$apply(function(){
                        scope.item.expanded = !scope.item.expanded;
                        handleExpanded();
                    });


                });
                handleExpanded();
            }

            element.replaceWith($content);


        }
    }
});

angular.module('app.ui').directive('smartTreeview', function ($compile, $sce) {
    return {
        restrict: 'A',
        scope: {
            'items': '='
        },
        template: '<li ng-class="{parent_li: item.children.length}" ng-repeat="item in items" role="treeitem">' +
            '<smart-treeview-content></smart-treeview-content>' +
            '<ul ng-if="item.children.length" smart-treeview ng-show="item.expanded"  items="item.children" role="group" class="smart-treeview-group" ></ul>' +
            '</li>',
        compile: function (element) {
            // Break the recursion loop by removing the contents
            var contents = element.contents().remove();
            var compiledContents;
            return {
                post: function (scope, element) {
                    // Compile the contents
                    if (!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    // Re-add the compiled contents to the element
                    compiledContents(scope, function (clone) {
                        element.append(clone);
                    });
                }
            };
        }
    };
});
"use strict";

angular.module('SmartAdmin.Layout').directive('fullScreen', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');
            var toggleFullSceen = function(e){
                if (!$body.hasClass("full-screen")) {
                    $body.addClass("full-screen");
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                } else {
                    $body.removeClass("full-screen");
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            };

            element.on('click', toggleFullSceen);

        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('minifyMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
                var $body = $('body');
            var minifyMenu = function() {
                if (!$body.hasClass("menu-on-top")) {
                    $body.toggleClass("minified");
                    $body.removeClass("hidden-menu");
                    $('html').removeClass("hidden-menu-mobile-lock");
                }
            };

            element.on('click', minifyMenu);
        }
    }
})
'use strict';

angular.module('SmartAdmin.Layout').directive('reloadState', function ($rootScope) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('reload-state data-reload-state');
            tElement.on('click', function (e) {
                $rootScope.$state.transitionTo($rootScope.$state.current, $rootScope.$stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
                e.preventDefault();
            })
        }
    }
});

"use strict";

angular.module('SmartAdmin.Layout').directive('resetWidgets', function($state){

    return {
        restrict: 'A',
        link: function(scope, element){
            element.on('click', function(){
                $.SmartMessageBox({
                    title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content : "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons : '[No][Yes]'
                }, function(ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });

            });
        }
    }

});

'use strict';

angular.module('SmartAdmin.Layout').directive('searchMobile', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('search-mobile data-search-mobile');

            element.on('click', function (e) {
                $('body').addClass('search-mobile');
                e.preventDefault();
            });

            $('#cancel-search-js').on('click', function (e) {
                $('body').removeClass('search-mobile');
                e.preventDefault();
            });
        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('toggleMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');

            var toggleMenu = function(){
                if (!$body.hasClass("menu-on-top")){
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                } else if ( $body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated") ) {
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                }
            };

            element.on('click', toggleMenu);

            scope.$on('requestToggleMenu', function(){
                toggleMenu();
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('bigBreadcrumbs', function () {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div><h1 class="page-title txt-color-blueDark"></h1></div>',
        scope: {
            items: '=',
            icon: '@'
        },
        link: function (scope, element) {
            var first = _.first(scope.items);

            var icon = scope.icon || 'home';
            element.find('h1').append('<i class="fa-fw fa fa-' + icon + '"></i> ' + first);
            _.rest(scope.items).forEach(function (item) {
                element.find('h1').append(' <span>> ' + item + '</span>')
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('dismisser', function () {
    return {
        restrict: 'A',
        compile: function (element) {
            element.removeAttr('dismisser data-dissmiser')
            var closer = '<button class="close">&times;</button>';
            element.prepend(closer);
            element.on('click', '>button.close', function(){
                element.fadeOut('fast',function(){ $(this).remove(); });

            })
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('hrefVoid', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.attr('href','#');
            element.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
            })
        }
    }
});
'use strict';

/*
* Directive for toggling a ng-model with a button
* Source: https://gist.github.com/aeife/9374784
*/

angular.module('SmartAdmin.Layout').directive('radioToggle', function ($log) {
    return {
        scope: {
            model: "=ngModel",
            value: "@value"
        },
        link: function(scope, element, attrs) {

            element.parent().on('click', function() {
                scope.model = scope.value;
                scope.$apply();
            });
        }
    }
});
/**
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is
 *
 * detected class is inserted to <tElement>.
 *
 *  (so far this is covering most hand held devices)
 */
'use strict';

angular.module('SmartAdmin.Layout').directive('smartDeviceDetect', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-device-detect data-smart-device-detect');

            var isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
            
            tElement.toggleClass('desktop-detected', !isMobile);
            tElement.toggleClass('mobile-detected', isMobile);


        }
    }
});
/**
 *
 * Description: Directive utilizes FastClick library.
 *
 *
 * FastClick is a simple, easy-to-use library for eliminating the
 * 300ms delay between a physical tap and the firing of a click event on mobile browsers.
 * FastClick doesn't attach any listeners on desktop browsers.
 * @link: https://github.com/ftlabs/fastclick
 *
 * On mobile devices 'needsclick' class is attached to <tElement>
 *
 */


'use strict';

angular.module('SmartAdmin.Layout').directive('smartFastClick', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-fast-click data-smart-fast-click');

            FastClick.attach(tElement);

            if(!FastClick.notNeeded())
                tElement.addClass('needsclick')
        }
    }
});

/*'use strict';

angular.module('SmartAdmin.Layout').directive('smartFitAppView', function ($rootScope, SmartCss) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-fit-app-view data-smart-fit-app-view leading-y data-leading-y');

            var leadingY = attributes.leadingY ? parseInt(attributes.leadingY) : 0;

            var selector = attributes.smartFitAppView;

            if(SmartCss.appViewSize && SmartCss.appViewSize.height){
                var height =  SmartCss.appViewSize.height - leadingY < 252 ? 252 :  SmartCss.appViewSize.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            }

            var listenerDestroy = $rootScope.$on('$smartContentResize', function (event, data) {
                var height = data.height - leadingY < 252 ? 252 : data.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            });

            element.on('$destroy', function () {
                listenerDestroy();
                SmartCss.remove(selector, 'height');
            });


        }
    }
});*/

"use strict";

angular.module('SmartAdmin.Layout').directive('smartInclude', function () {
        return {
            replace: true,
            restrict: 'A',
            templateUrl: function (element, attr) {
                return attr.smartInclude;
            },
            compile: function(element){
                element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
            }
        };
    }
);


'use strict';

angular.module('SmartAdmin.Layout').directive('smartLayout', function ($rootScope, $timeout, $interval, $q, SmartCss, APP_CONFIG) {
    
    var _debug = 0;

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    var initialized = false, 
           initializedResolver = $q.defer();
    initializedResolver.promise.then(function () {
        initialized = true;
    });

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body'),
        $navigation ,
        $menu,
        $ribbon,
        $footer,
        $contentAnimContainer;


    (function cacheElements() {
        $navigation = $('#header');
        $menu = $('#left-panel');
        $ribbon = $('#ribbon');
        $footer = $('.page-footer');
        if (_.every([$navigation, $menu, $ribbon, $footer], function ($it) {
            return angular.isNumber($it.height())
        })) {
            initializedResolver.resolve();
        } else {
            $timeout(cacheElements, 100);
        }
    })();

    (function applyConfigSkin(){
        if(APP_CONFIG.smartSkin){
            $body.removeClass(_.pluck(APP_CONFIG.skins, 'name').join(' '));
            $body.addClass(APP_CONFIG.smartSkin);
        }
    })();


    return {
        priority: 2014,
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-layout data-smart-layout');

            var appViewHeight = 0 ,
                appViewWidth = 0,
                calcWidth,
                calcHeight,
                deltaX,
                deltaY;

            var forceResizeTrigger = false;

            function resizeListener() {

//                    full window height appHeight = Math.max($menu.outerHeight() - 10, getDocHeight() - 10);

                var menuHeight = $body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.height() : 0;
                var menuWidth = !$body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.width() + $menu.offset().left : 0;

                var $content = $('#content');
                var contentXPad = $content.outerWidth(true) - $content.width();
                var contentYPad = $content.outerHeight(true) - $content.height();


                calcWidth = $window.width() - menuWidth - contentXPad;
                calcHeight = $window.height() - menuHeight - contentYPad - $navigation.height() - $ribbon.height() - $footer.height();

                deltaX = appViewWidth - calcWidth;
                deltaY = appViewHeight - calcHeight;
                if (Math.abs(deltaX) || Math.abs(deltaY) || forceResizeTrigger) {

                    //console.log('exec', calcWidth, calcHeight);
                    $rootScope.$broadcast('$smartContentResize', {
                        width: calcWidth,
                        height: calcHeight,
                        deltaX: deltaX,
                        deltaY: deltaY
                    });
                    appViewWidth = calcWidth;
                    appViewHeight = calcHeight;
                    forceResizeTrigger = false;
                }
            }


            var looping = false;
            $interval(function () {
                if (looping) loop();
            }, 300);

            var debouncedRun = _.debounce(function () {
                run(300)
            }, 300);

            function run(delay) {
                initializedResolver.promise.then(function () {
                    attachOnResize(delay);
                });
            }

            run(10);

            function detachOnResize() {
                looping = false;
            }

            function attachOnResize(delay) {
                $timeout(function () {
                    looping = true;
                }, delay);
            }

            function loop() {
                $body.toggleClass('mobile-view-activated', $window.width() < 979);

                if ($window.width() < 979)
                    $body.removeClass('minified');

                resizeListener();
            }

            function handleHtmlId(toState) {
                if (toState.data && toState.data.htmlId) $html.attr('id', toState.data.htmlId);
                else $html.removeAttr('id');
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //console.log(1, '$stateChangeStart', event, toState, toParams, fromState, fromParams);

                handleHtmlId(toState);
                detachOnResize();
            });

            // initialized with 1 cause we came here with one $viewContentLoading request
            var viewContentLoading = 1;
            $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
                //console.log(2, '$viewContentLoading', event, viewConfig);
                viewContentLoading++;
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                //console.log(3, '$stateChangeSuccess', event, toState, toParams, fromState, fromParams);
                forceResizeTrigger = true;
            });

            $rootScope.$on('$viewContentLoaded', function (event) {
                //console.log(4, '$viewContentLoaded', event);
                viewContentLoading--;

                if (viewContentLoading == 0 && initialized) {
                    debouncedRun();
                }
            });
        }
    }
});



'use strict';

angular.module('SmartAdmin.Layout').directive('smartPageTitle', function ($rootScope, $timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-page-title data-smart-page-title');

            var defaultTitle = attributes.smartPageTitle;
            var listener = function(event, toState, toParams, fromState, fromParams) {
                var title = defaultTitle;
                if (toState.data && toState.data.title) title = toState.data.title + ' | ' + title;
                // Set asynchronously so page changes before title does
                $timeout(function() {
                    $('html head title').text(title);
                });
            };

            $rootScope.$on('$stateChangeStart', listener);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('smartRouterAnimationWrap', function ($rootScope,$timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-router-animation-wrap data-smart-router-animation-wrap wrap-for data-wrap-for');

            element.addClass('router-animation-container');


            var $loader = $('<div class="router-animation-loader"><i class="fa fa-gear fa-4x fa-spin"></i></div>')
                .css({
                    position: 'absolute',
                    top: 50,
                    left: 10
                }).hide().appendTo(element);


            var animateElementSelector = attributes.wrapFor;
            var viewsToMatch = attributes.smartRouterAnimationWrap.split(/\s/);

            var needRunContentViewAnimEnd = false;
            function contentViewAnimStart() {
                needRunContentViewAnimEnd = true;
                element.css({
                    height: element.height() + 'px',
                    overflow: 'hidden'
                }).addClass('active');
                $loader.fadeIn();

                $(animateElementSelector).addClass('animated faster fadeOutDown');
            }

            function contentViewAnimEnd() {
                if(needRunContentViewAnimEnd){
                    element.css({
                        height: 'auto',
                        overflow: 'visible'
                    }).removeClass('active');
                    

                    $(animateElementSelector).addClass('animated faster fadeInUp');

                    needRunContentViewAnimEnd = false;

                    $timeout(function(){
                        $(animateElementSelector).removeClass('animated');
                    },10);
                }
                $loader.fadeOut();
            }


            var destroyForStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                var isAnimRequired = _.any(viewsToMatch, function(view){
                   return _.has(toState.views, view) || _.has(fromState.views, view);
                });
                if(isAnimRequired){
                    contentViewAnimStart()
                }
            });

            var destroyForEnd = $rootScope.$on('$viewContentLoaded', function (event) {
                contentViewAnimEnd();
            });

            element.on('$destroy', function(){
                destroyForStart();
                destroyForEnd();

            });



        }
    }
});
angular.module('SmartAdmin.Layout').directive('speechRecognition', function ($log) {
	'use strict';

	$.root_ = $('body');
	var root, commands;

    root = window;
    window.appConfig = window.appConfig || {};

	if (appConfig.voice_command) {
		commands = appConfig.commands;
	}


	/*
	 * SMART VOICE
	 * Author: MyOrange | @bootstraphunt
	 * http://www.myorange.ca
	 */

	var SpeechRecognition = root.SpeechRecognition || root.webkitSpeechRecognition || root.mozSpeechRecognition || root.msSpeechRecognition || root.oSpeechRecognition;

// ref: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API


// function
	$.speechApp = (function(speech) {

		speech.start = function() {

			// Add our commands to smartSpeechRecognition
			smartSpeechRecognition.addCommands(commands);

			if (smartSpeechRecognition) {
				// activate plugin
				smartSpeechRecognition.start();
				// add btn class
				$.root_.addClass("voice-command-active");
				// play sound
				$.speechApp.playON();
				// set localStorage when switch is on manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'true');
				}

			} else {
				// if plugin not found
				alert("speech plugin not loaded");
			}

		};
		speech.stop = function() {

			if (smartSpeechRecognition) {
				// deactivate plugin
				smartSpeechRecognition.abort();
				// remove btn class
				$.root_.removeClass("voice-command-active");
				// sound
				$.speechApp.playOFF();
				// del localStorage when switch if off manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'false');
				}
				// remove popover if visible
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			}

		};

		// play sound
		speech.playON = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".mp3");

			//$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playOFF = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playConfirmation = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		return speech;

	})({});



	/*
	 * SPEECH RECOGNITION ENGINE
	 * Copyright (c) 2013 Tal Ater
	 * Modified by MyOrange
	 * All modifications made are hereby copyright (c) 2014 MyOrange
	 */

	(function(undefined) {"use strict";

		// Check browser support
		// This is done as early as possible, to make it as fast as possible for unsupported browsers
		if (!SpeechRecognition) {
			root.smartSpeechRecognition = null;
			return undefined;
		}

		var commandsList = [], recognition, callbacks = {
				start : [],
				error : [],
				end : [],
				result : [],
				resultMatch : [],
				resultNoMatch : [],
				errorNetwork : [],
				errorPermissionBlocked : [],
				errorPermissionDenied : []
			}, autoRestart, lastStartedAt = 0,
		//debugState = false, // decleared in app.appConfig.js
		//appConfig.debugStyle = 'font-weight: bold; color: #00f;', // decleared in app.appConfig.js

		// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
			optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g, commandToRegExp = function(command) {
				command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
					return optional ? match : '([^\\s]+)';
				}).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
				return new RegExp('^' + command + '$', 'i');
			};

		// This method receives an array of callbacks to iterate over, and invokes each of them
		var invokeCallbacks = function(callbacks) {
			callbacks.forEach(function(callback) {
				callback.callback.apply(callback.context);
			});
		};

		var initIfNeeded = function() {
			if (!isInitialized()) {
				root.smartSpeechRecognition.init({}, false);
			}
		};

		var isInitialized = function() {
			return recognition !== undefined;
		};

		root.smartSpeechRecognition = {
			// Initialize smartSpeechRecognition with a list of commands to recognize.
			// e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
			// smartSpeechRecognition understands commands with named variables, splats, and optional words.
			init : function(commands, resetCommands) {

				// resetCommands defaults to true
				if (resetCommands === undefined) {
					resetCommands = true;
				} else {
					resetCommands = !!resetCommands;
				}

				// Abort previous instances of recognition already running
				if (recognition && recognition.abort) {
					recognition.abort();
				}

				// initiate SpeechRecognition
				recognition = new SpeechRecognition();

				// Set the max number of alternative transcripts to try and match with a command
				recognition.maxAlternatives = 5;
				recognition.continuous = true;
				// Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
				recognition.lang = appConfig.voice_command_lang || 'en-US';

				recognition.onstart = function() {
					invokeCallbacks(callbacks.start);
					//debugState
					if (appConfig.debugState) {
						root.console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', appConfig.debugStyle_success);
						root.console.log('Language setting is set to: ' + recognition.lang, appConfig.debugStyle);
					}
					$.root_.removeClass("service-not-allowed");
					$.root_.addClass("service-allowed");
				};

				recognition.onerror = function(event) {
					invokeCallbacks(callbacks.error);
					switch (event.error) {
						case 'network':
							invokeCallbacks(callbacks.errorNetwork);
							break;
						case 'not-allowed':
						case 'service-not-allowed':
							// if permission to use the mic is denied, turn off auto-restart
							autoRestart = false;
							$.root_.removeClass("service-allowed");
							$.root_.addClass("service-not-allowed");
							//debugState
							if (appConfig.debugState) {
								root.console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', appConfig.debugStyle_warning);
							}
							// determine if permission was denied by user or automatically.
							if (new Date().getTime() - lastStartedAt < 200) {
								invokeCallbacks(callbacks.errorPermissionBlocked);
							} else {
								invokeCallbacks(callbacks.errorPermissionDenied);
								//console.log("You need your mic to be active")
							}
							break;
					}
				};

				recognition.onend = function() {
					invokeCallbacks(callbacks.end);
					// smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
					if (autoRestart) {
						// play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
						var timeSinceLastStart = new Date().getTime() - lastStartedAt;
						if (timeSinceLastStart < 1000) {
							setTimeout(root.smartSpeechRecognition.start, 1000 - timeSinceLastStart);
						} else {
							root.smartSpeechRecognition.start();
						}
					}
				};

				recognition.onresult = function(event) {
					invokeCallbacks(callbacks.result);

					var results = event.results[event.resultIndex], commandText;

					// go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
					for (var i = 0; i < results.length; i++) {
						// the text recognized
						commandText = results[i].transcript.trim();
						if (appConfig.debugState) {
							root.console.log('Speech recognized: %c' + commandText, appConfig.debugStyle);
						}

						// try and match recognized text to one of the commands on the list
						for (var j = 0, l = commandsList.length; j < l; j++) {
							var result = commandsList[j].command.exec(commandText);
							if (result) {
								var parameters = result.slice(1);
								if (appConfig.debugState) {
									root.console.log('command matched: %c' + commandsList[j].originalPhrase, appConfig.debugStyle);
									if (parameters.length) {
										root.console.log('with parameters', parameters);
									}
								}
								// execute the matched command
								commandsList[j].callback.apply(this, parameters);
								invokeCallbacks(callbacks.resultMatch);

								// for commands "sound on", "stop" and "mute" do not play sound or display message
								//var myMatchedCommand = commandsList[j].originalPhrase;

								var ignoreCallsFor = ["sound on", "mute", "stop"];

								if (ignoreCallsFor.indexOf(commandsList[j].originalPhrase) < 0) {
									// play sound when match found
									console.log(2);
									$.smallBox({
										title : (commandsList[j].originalPhrase),
										content : "loading...",
										color : "#333",
										sound_file : 'voice_alert',
										timeout : 2000
									});

									if ($('#speech-btn .popover').is(':visible')) {
										$('#speech-btn .popover').fadeOut(250);
									}
								}// end if

								return true;
							}
						} // end for
					}// end for

					invokeCallbacks(callbacks.resultNoMatch);
					//console.log("no match found for: " + commandText)
					$.smallBox({
						title : "Error: <strong>" + ' " ' + commandText + ' " ' + "</strong> no match found!",
						content : "Please speak clearly into the microphone",
						color : "#a90329",
						timeout : 5000,
						icon : "fa fa-microphone"
					});
					if ($('#speech-btn .popover').is(':visible')) {
						$('#speech-btn .popover').fadeOut(250);
					}
					return false;
				};

				// build commands list
				if (resetCommands) {
					commandsList = [];
				}
				if (commands.length) {
					this.addCommands(commands);
				}
			},

			// Start listening (asking for permission first, if needed).
			// Call this after you've initialized smartSpeechRecognition with commands.
			// Receives an optional options object:
			// { autoRestart: true }
			start : function(options) {
				initIfNeeded();
				options = options || {};
				if (options.autoRestart !== undefined) {
					autoRestart = !!options.autoRestart;
				} else {
					autoRestart = true;
				}
				lastStartedAt = new Date().getTime();
				recognition.start();
			},

			// abort the listening session (aka stop)
			abort : function() {
				autoRestart = false;
				if (isInitialized) {
					recognition.abort();
				}
			},

			// Turn on output of debug messages to the console. Ugly, but super-handy!
			debug : function(newState) {
				if (arguments.length > 0) {
					appConfig.debugState = !!newState;
				} else {
					appConfig.debugState = true;
				}
			},

			// Set the language the user will speak in. If not called, defaults to 'en-US'.
			// e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
			setLanguage : function(language) {
				initIfNeeded();
				recognition.lang = language;
			},

			// Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
			addCommands : function(commands) {
				var cb, command;

				initIfNeeded();

				for (var phrase in commands) {
					if (commands.hasOwnProperty(phrase)) {
						cb = root[commands[phrase]] || commands[phrase];
						if ( typeof cb !== 'function') {
							continue;
						}
						//convert command to regex
						command = commandToRegExp(phrase);

						commandsList.push({
							command : command,
							callback : cb,
							originalPhrase : phrase
						});
					}
				}
				if (appConfig.debugState) {
					root.console.log('Commands successfully loaded: %c' + commandsList.length, appConfig.debugStyle);
				}
			},

			// Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
			removeCommands : function(commandsToRemove) {
				if (commandsToRemove === undefined) {
					commandsList = [];
					return;
				}
				commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
				commandsList = commandsList.filter(function(command) {
					for (var i = 0; i < commandsToRemove.length; i++) {
						if (commandsToRemove[i] === command.originalPhrase) {
							return false;
						}
					}
					return true;
				});
			},

			// Lets the user add a callback of one of 9 types:
			// start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
			// Can also optionally receive a context for the callback function as the third argument
			addCallback : function(type, callback, context) {
				if (callbacks[type] === undefined) {
					return;
				}
				var cb = root[callback] || callback;
				if ( typeof cb !== 'function') {
					return;
				}
				callbacks[type].push({
					callback : cb,
					context : context || this
				});
			}
		};

	}).call(this);

	var autoStart = function() {

		smartSpeechRecognition.addCommands(commands);

		if (smartSpeechRecognition) {
			// activate plugin
			smartSpeechRecognition.start();
			// add btn class
			$.root_.addClass("voice-command-active");
			// set localStorage when switch is on manually
			if (appConfig.voice_localStorage) {
				localStorage.setItem('sm-setautovoice', 'true');
			}

		} else {
			// if plugin not found
			alert("speech plugin not loaded");
		}
	}
// if already running with localstorage
	if (SpeechRecognition && appConfig.voice_command && localStorage.getItem('sm-setautovoice') == 'true') {
		autoStart();
	}

// auto start
	if (SpeechRecognition && appConfig.voice_command_auto && appConfig.voice_command) {
		autoStart();
	}


	var link = function(scope, element) {


		if (SpeechRecognition && appConfig.voice_command) {

			// create dynamic modal instance
			var modal = $('<div class="modal fade" id="voiceModal" tabindex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>');
			// attach to body
			modal.appendTo("body");

			element.on("click", function(e) {

            	if ($.root_.hasClass("voice-command-active")) {
					$.speechApp.stop();
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone-slash');
				} else {
					$.speechApp.start();
					//add popover
					$('#speech-btn .popover').fadeIn(350);
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone')

				}

				e.preventDefault();

            });

			//remove popover
			$(document).mouseup(function(e) {
				if (!$('#speech-btn .popover').is(e.target) && $('#speech-btn .popover').has(e.target).length === 0) {
					$('#speech-btn .popover').fadeOut(250);
				}
			});


			$("#speech-help-btn").on("click", function() {
				commands.help();
			});

		}
		else {
			$("#speech-btn").addClass("display-none");
		}


	}



    return {
        restrict: 'AE',
        link: link
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('stateBreadcrumbs', function ($rootScope, $state) {


    return {
        restrict: 'EA',
        replace: true,
        template: '<ol class="breadcrumb"><li>Home</li></ol>',
        link: function (scope, element) {

            function setBreadcrumbs(breadcrumbs) {
                var html = '<li>Home</li>';
                angular.forEach(breadcrumbs, function (crumb) {
                    html += '<li>' + crumb + '</li>'
                });
                element.html(html)
            }

            function fetchBreadcrumbs(stateName, breadcrunbs) {

                var state = $state.get(stateName);

                if (state && state.data && state.data.title && breadcrunbs.indexOf(state.data.title) == -1) {
                    breadcrunbs.unshift(state.data.title)
                }

                var parentName = stateName.replace(/.?\w+$/, '');
                if (parentName) {
                    return fetchBreadcrumbs(parentName, breadcrunbs);
                } else {
                    return breadcrunbs;
                }
            }

            function processState(state) {
                var breadcrumbs;
                if (state.data && state.data.breadcrumbs) {
                    breadcrumbs = state.data.breadcrumbs;
                } else {
                    breadcrumbs = fetchBreadcrumbs(state.name, []);
                }
                setBreadcrumbs(breadcrumbs);
            }

            processState($state.current);

            $rootScope.$on('$stateChangeStart', function (event, state) {
                processState(state);
            })
        }
    }
});
'use strict'

angular.module('SmartAdmin.Layout').factory('myGlobal',  function () {
  //  var settings = {
  //            serverAddr : "http://localhost:8080" 
  //  } 
   function getServerAddr(apiUrl){
      return "hello world"
    }

});
'use strict';

angular.module('SmartAdmin.Layout').factory('SmartCss', function ($rootScope, $timeout) {

    var sheet = (function () {
        // Create the <style> tag
        var style = document.createElement("style");

        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "@media only screen and (max-width : 1024px)")

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        return style.sheet;
    })();

    var _styles = {};


    var SmartCss = {
        writeRule: function(selector){
            SmartCss.deleteRuleFor(selector);
            if(_.has(_styles, selector)){
                var css = selector + '{ ' + _.map(_styles[selector], function(v, k){
                    return  k + ':' +  v + ';'
                }).join(' ') +'}';
                sheet.insertRule(css, _.size(_styles) - 1);
            }
        },
        add: function (selector, property, value, delay) {
            if(!_.has(_styles, selector))
                _styles[selector] = {};

            if(value == undefined || value == null || value == '')
                delete _styles[selector][property];
            else
                _styles[selector][property] = value;


            if(_.keys(_styles[selector]).length == 0)
                delete _styles[selector];

            if(!delay)
                delay = 0;
            $timeout(function(){
                SmartCss.writeRule(selector);
            }, delay);

        },
        remove: function(selector, property, delay){
            SmartCss.add(selector, property, null, delay);
        },
        deleteRuleFor: function (selector) {
            _(sheet.rules).forEach(function (rule, idx) {
                if (rule.selectorText == selector) {
                    sheet.deleteRule(idx);
                }
            });
        },
        appViewSize: null
    };

    $rootScope.$on('$smartContentResize', function (event, data) {
        SmartCss.appViewSize = data;
    });

    return SmartCss;

});




'use strict';

angular.module('SmartAdmin.Layout').factory('lazyScript', function($q, $http){

    var cache = {};

    function isPending(scriptName){
        return (cache.hasOwnProperty(scriptName) && cache[scriptName].promise && cache[scriptName].promise.$$state.pending)
    }

    function isRegistered(scriptName){
        return cache.hasOwnProperty(scriptName)
    }
    function loadScript(scriptName){
        if(!cache[scriptName]){
            cache[scriptName] = $q.defer();
            var el = document.createElement( 'script' );
            el.onload = function(script){
                console.log('script is lazy loaded:', scriptName)
                cache[scriptName].resolve(scriptName);
            };
            el.src = scriptName;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(el, x);
            
        }
        return cache[scriptName].promise;

    }

    function register(scriptName){
        if(isPending(scriptName)){
            return cache[scriptName].promise
        }
        if(isRegistered(scriptName)){
            return $q.resolve(scriptName);
        } else {
            var dfd = $q.defer();

            loadScript(scriptName).then(function(){
                dfd.resolve(scriptName);
            });

            return dfd.promise; 

        }
    }
    return {
        register: function (scripts) {
            
            var dfd = $q.defer();
            var promises = [];
            if (angular.isString(scripts))
                scripts = [scripts];

            angular.forEach(scripts, function(script){
                promises.push(register(script));
            })

            $q.all(promises).then(function(resolves){
                dfd.resolve(resolves);
            })
            return dfd.promise;

        }
    };
});

"use strict";

angular.module('SmartAdmin.UI').directive('smartPopoverHtml', function () {
    return {
        restrict: "A",
        link: function(scope, element, attributes){
            var options = {};
            options.content = attributes.smartPopoverHtml;
            options.placement = attributes.popoverPlacement || 'top';
            options.html = true;
            options.trigger =  attributes.popoverTrigger || 'click';
            options.title =  attributes.popoverTitle || attributes.title;
            element.popover(options)

        }

    };
});


"use strict";

angular.module('SmartAdmin.UI').directive('smartTooltipHtml', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attributes){
                element.tooltip({
                    placement: attributes.tooltipPlacement || 'top',
                    html: true,
                    title: attributes.smartTooltipHtml
                })
            }
        };
    }
);

"use strict";

angular.module('app.auth').directive('facebookSignin', function ($rootScope, ezfb) {
    return {
        replace: true,
        restrict: 'E',
        template: '<a class="btn btn-block btn-social btn-facebook"><i class="fa fa-facebook"></i> Sign in with Facebook</a>',
        link: function(scope, element){
            element.on('click', function(){
                ezfb.login(function (res) {
                    if (res.authResponse) {
                        $rootScope.$broadcast('event:facebook-signin-success', res.authResponse);
                    }
                }, {scope: 'public_profile'});
            })

        }
    }
});
"use strict";

angular.module('app.auth').directive('googleSignin', function ($rootScope, GooglePlus) {
    return {
        restrict: 'E',
        template: '<a class="g-signin btn btn-block btn-social btn-google-plus"><i class="fa fa-google-plus"></i> Sign in with Google</a>',
        replace: true,
        link: function (scope, element) {
            element.on('click', function(){
                GooglePlus.login().then(function (authResult) {
                    $rootScope.$broadcast('event:google-plus-signin-success', authResult);

                }, function (err) {
                    $rootScope.$broadcast('event:google-plus-signin-failure', err);

                });
            })
        }
    };
});

'use strict';

angular.module('app.chat').factory('ChatApi', function ($q, $rootScope, User, $http, APP_CONFIG) {
    var dfd = $q.defer();
    var _user;
    var ChatSrv = {
        initialized: dfd.promise,
        users: [],
        messages: [],
        statuses: ['Online', 'Busy', 'Away', 'Log Off'],
        status: 'Online',
        setUser: function (user) {
            if (ChatSrv.users.indexOf(_user) != -1)
                ChatSrv.users.splice(ChatSrv.users.indexOf(_user), 1);
            _user = user;
            ChatSrv.users.push(_user);
        },
        sendMessage: function (text) {
            var message = {
                user: _user,
                body: text,
                date: new Date()
            };
            this.messages.push(message);
        }
    };


    $http.get(APP_CONFIG.apiRootUrl + '/chat.json').then(function(res){
        ChatSrv.messages = res.data.messages;
        ChatSrv.users = res.data.users;
        dfd.resolve();
    });

    ChatSrv.initialized.then(function () {

        User.initialized.then(function () {
            ChatSrv.setUser({
                username: User.username,
                picture: User.picture,
                status: ChatSrv.status
            });
        });

        $rootScope.$watch(function () {
            return User.username
        }, function (name, oldName) {
            if (name != oldName) {
                ChatSrv.setUser({
                    username: User.username,
                    picture: User.picture,
                    status: ChatSrv.status
                });
            }
        });
    });


    return ChatSrv;

});
(function() {
        
   'use strict';

    /*
    * SMARTCHAT PLUGIN ARRAYS & CONFIG
    * Dependency: js/plugin/moment/moment.min.js 
    *             js/plugin/cssemotions/jquery.cssemoticons.min.js 
    *             js/smart-chat-ui/smart.chat.ui.js
    * (DO NOT CHANGE) 
    */ 
        var boxList = [],
        showList = [],
        nameList = [],
        idList = [];
    /*
    * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
    */ 
        var chatbox_config = {
            width: 200,
            gap: 35,
            offset: 0
        };



    /*
    * SMART CHAT ENGINE
    * Copyright (c) 2013 Wen Pu
    * Modified by MyOrange
    * All modifications made are hereby copyright (c) 2014-2015 MyOrange
    */

    // TODO: implement destroy()
    (function($) {
    $.widget("ui.chatbox", {
        options: {
            id: null, //id for the DOM element
            title: null, // title of the chatbox
            user: null, // can be anything associated with this chatbox
            hidden: false,
            offset: 0, // relative to right edge of the browser window
            width: 300, // width of the chatbox
            status: 'online', //
            alertmsg: null,
            alertshow: null,
            messageSent: function(id, user, msg) {
                // override this
                this.boxManager.addMsg(user.first_name, msg);
            },
            boxClosed: function(id) {
            }, // called when the close icon is clicked
            boxManager: {
                // thanks to the widget factory facility
                // similar to http://alexsexton.com/?p=51
                init: function(elem) {
                    this.elem = elem;
                },
                addMsg: function(peer, msg) {
                    var self = this;
                    var box = self.elem.uiChatboxLog;
                    var e = document.createElement('div');
                    box.append(e);
                    $(e).hide();

                    var systemMessage = false;

                    if (peer) {
                        var peerName = document.createElement("b");
                        $(peerName).text(peer + ": ");
                        e.appendChild(peerName);
                    } else {
                        systemMessage = true;
                    }

                    var msgElement = document.createElement(
                        systemMessage ? "i" : "span");
                    $(msgElement).text(msg);
                    e.appendChild(msgElement);
                    $(e).addClass("ui-chatbox-msg");
                    $(e).css("maxWidth", $(box).width());
                    $(e).fadeIn();
                    //$(e).prop( 'title', moment().calendar() ); // add dep: moment.js
                    $(e).find("span").emoticonize(); // add dep: jquery.cssemoticons.js
                    self._scrollToBottom();

                    if (!self.elem.uiChatboxTitlebar.hasClass("ui-state-focus")
                        && !self.highlightLock) {
                        self.highlightLock = true;
                        self.highlightBox();
                    }
                },
                highlightBox: function() {
                    var self = this;
                    self.elem.uiChatboxTitlebar.effect("highlight", {}, 300);
                    self.elem.uiChatbox.effect("bounce", {times: 2}, 300, function() {
                        self.highlightLock = false;
                        self._scrollToBottom();
                    });
                },
                toggleBox: function() {
                    this.elem.uiChatbox.toggle();
                },
                _scrollToBottom: function() {
                    var box = this.elem.uiChatboxLog;
                    box.scrollTop(box.get(0).scrollHeight);
                }
            }
        },
        toggleContent: function(event) {
            this.uiChatboxContent.toggle();
            if (this.uiChatboxContent.is(":visible")) {
                this.uiChatboxInputBox.focus();
            }
        },
        widget: function() {
            return this.uiChatbox
        },
        _create: function() {
            var self = this,
            options = self.options,
            title = options.title || "No Title",
            // chatbox
            uiChatbox = (self.uiChatbox = $('<div></div>'))
                .appendTo(document.body)
                .addClass('ui-widget ' +
                          //'ui-corner-top ' +
                          'ui-chatbox'
                         )
                .attr('outline', 0)
                .focusin(function() {
                    // ui-state-highlight is not really helpful here
                    //self.uiChatbox.removeClass('ui-state-highlight');
                    self.uiChatboxTitlebar.addClass('ui-state-focus');
                })
                .focusout(function() {
                    self.uiChatboxTitlebar.removeClass('ui-state-focus');
                }),
            // titlebar
            uiChatboxTitlebar = (self.uiChatboxTitlebar = $('<div></div>'))
                .addClass('ui-widget-header ' +
                          //'ui-corner-top ' +
                          'ui-chatbox-titlebar ' +
                          self.options.status +
                          ' ui-dialog-header' // take advantage of dialog header style
                         )
                .click(function(event) {
                    self.toggleContent(event);
                })
                .appendTo(uiChatbox),
            uiChatboxTitle = (self.uiChatboxTitle = $('<span></span>'))
                .html(title)
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarClose = (self.uiChatboxTitlebarClose = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Hide"></a>'))
                .addClass(//'ui-corner-all ' +
                          'ui-chatbox-icon '
                         )
                .attr('role', 'button')
                .hover(function() { uiChatboxTitlebarClose.addClass('ui-state-hover'); },
                       function() { uiChatboxTitlebarClose.removeClass('ui-state-hover'); })
                .click(function(event) {
                    uiChatbox.hide();
                    self.options.boxClosed(self.options.id);
                    return false;
                })
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarCloseText = $('<i></i>')
                .addClass('fa ' +
                          'fa-times')
                .appendTo(uiChatboxTitlebarClose),
            uiChatboxTitlebarMinimize = (self.uiChatboxTitlebarMinimize = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Minimize"></a>'))
                .addClass(//'ui-corner-all ' +
                          'ui-chatbox-icon'
                         )
                .attr('role', 'button')
                .hover(function() { uiChatboxTitlebarMinimize.addClass('ui-state-hover'); },
                       function() { uiChatboxTitlebarMinimize.removeClass('ui-state-hover'); })
                .click(function(event) {
                    self.toggleContent(event);
                    return false;
                })
                .appendTo(uiChatboxTitlebar),
            uiChatboxTitlebarMinimizeText = $('<i></i>')
                .addClass('fa ' +
                          'fa-minus')
                .appendTo(uiChatboxTitlebarMinimize),
            // content
            uiChatboxContent = (self.uiChatboxContent = $('<div class="'+ self.options.alertshow +'"><span class="alert-msg">'+ self.options.alertmsg + '</span></div>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-content '
                         )
                .appendTo(uiChatbox),
            uiChatboxLog = (self.uiChatboxLog = self.element)
                .addClass('ui-widget-content ' +
                          'ui-chatbox-log ' +
                          'custom-scroll'
                         )
                .appendTo(uiChatboxContent),
            uiChatboxInput = (self.uiChatboxInput = $('<div></div>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-input'
                         )
                .click(function(event) {
                    // anything?
                })
                .appendTo(uiChatboxContent),
            uiChatboxInputBox = (self.uiChatboxInputBox = $('<textarea></textarea>'))
                .addClass('ui-widget-content ' +
                          'ui-chatbox-input-box '
                         )
                .appendTo(uiChatboxInput)
                .keydown(function(event) {
                    if (event.keyCode && event.keyCode == $.ui.keyCode.ENTER) {
                        var msg = $.trim($(this).val());
                        if (msg.length > 0) {
                            self.options.messageSent(self.options.id, self.options.user, msg);
                        }
                        $(this).val('');
                        return false;
                    }
                })
                .focusin(function() {
                    uiChatboxInputBox.addClass('ui-chatbox-input-focus');
                    var box = $(this).parent().prev();
                    box.scrollTop(box.get(0).scrollHeight);
                })
                .focusout(function() {
                    uiChatboxInputBox.removeClass('ui-chatbox-input-focus');
                });

            // disable selection
            uiChatboxTitlebar.find('*').add(uiChatboxTitlebar).disableSelection();

            // switch focus to input box when whatever clicked
            uiChatboxContent.children().click(function() {
                // click on any children, set focus on input box
                self.uiChatboxInputBox.focus();
            });

            self._setWidth(self.options.width);
            self._position(self.options.offset);

            self.options.boxManager.init(self);

            if (!self.options.hidden) {
                uiChatbox.show();
            }
            
            $(".ui-chatbox [rel=tooltip]").tooltip();
            //console.log("tooltip created");
        },
        _setOption: function(option, value) {
            if (value != null) {
                switch (option) {
                case "hidden":
                    if (value)
                        this.uiChatbox.hide();
                    else
                        this.uiChatbox.show();
                    break;
                case "offset":
                    this._position(value);
                    break;
                case "width":
                    this._setWidth(value);
                    break;
                }
            }
            $.Widget.prototype._setOption.apply(this, arguments);
        },
        _setWidth: function(width) {
            this.uiChatbox.width((width + 28) + "px");
            //this.uiChatboxTitlebar.width((width + 28) + "px");
            //this.uiChatboxLog.width(width + "px");
           // this.uiChatboxInput.css("maxWidth", width + "px");
            // padding:2, boarder:2, margin:5
            this.uiChatboxInputBox.css("width", (width + 18) + "px");
        },
        _position: function(offset) {
            this.uiChatbox.css("right", offset);
        }
    });
    }(jQuery));


    /*
    * jQuery CSSEmoticons plugin 0.2.9
    *
    * Copyright (c) 2010 Steve Schwartz (JangoSteve)
    *
    * Dual licensed under the MIT and GPL licenses:
    *   http://www.opensource.org/licenses/mit-license.php
    *   http://www.gnu.org/licenses/gpl.html
    *
    * Date: Sun Oct 22 1:00:00 2010 -0500
    */
    (function($) {
    $.fn.emoticonize = function(options) {

    var opts = $.extend({}, $.fn.emoticonize.defaults, options);

    var escapeCharacters = [ ")", "(", "*", "[", "]", "{", "}", "|", "^", "<", ">", "\\", "?", "+", "=", "." ];

    var threeCharacterEmoticons = [
        // really weird bug if you have :{ and then have :{) in the same container anywhere *after* :{ then :{ doesn't get matched, e.g. :] :{ :) :{) :) :-) will match everything except :{
        //  But if you take out the :{) or even just move :{ to the right of :{) then everything works fine. This has something to do with the preMatch string below I think, because
        //  it'll work again if you set preMatch equal to '()'
        //  So for now, we'll just remove :{) from the emoticons, because who actually uses this mustache man anyway?
      // ":{)",
      ":-)", ":o)", ":c)", ":^)", ":-D", ":-(", ":-9", ";-)", ":-P", ":-p", ":-Þ", ":-b", ":-O", ":-/", ":-X", ":-#", ":'(", "B-)", "8-)", ";*(", ":-*", ":-\\",
      "?-)", // <== This is my own invention, it's a smiling pirate (with an eye-patch)!
      // and the twoCharacterEmoticons from below, but with a space inserted
      ": )", ": ]", "= ]", "= )", "8 )", ": }", ": D", "8 D", "X D", "x D", "= D", ": (", ": [", ": {", "= (", "; )", "; ]", "; D", ": P", ": p", "= P", "= p", ": b", ": Þ", ": O", "8 O", ": /", "= /", ": S", ": #", ": X", "B )", ": |", ": \\", "= \\", ": *", ": &gt;", ": &lt;"//, "* )"
    ];

    var twoCharacterEmoticons = [ // separate these out so that we can add a letter-spacing between the characters for better proportions
      ":)", ":]", "=]", "=)", "8)", ":}", ":D", ":(", ":[", ":{", "=(", ";)", ";]", ";D", ":P", ":p", "=P", "=p", ":b", ":Þ", ":O", ":/", "=/", ":S", ":#", ":X", "B)", ":|", ":\\", "=\\", ":*", ":&gt;", ":&lt;"//, "*)"
    ];

    var specialEmoticons = { // emoticons to be treated with a special class, hash specifies the additional class to add, along with standard css-emoticon class
      "&gt;:)": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
      "&gt;;)": { cssClass: "red-emoticon small-emoticon spaced-emoticon"},
      "&gt;:(": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
      "&gt;: )": { cssClass: "red-emoticon small-emoticon" },
      "&gt;; )": { cssClass: "red-emoticon small-emoticon"},
      "&gt;: (": { cssClass: "red-emoticon small-emoticon" },
      ";(":     { cssClass: "red-emoticon spaced-emoticon" },
      "&lt;3":  { cssClass: "pink-emoticon counter-rotated" },
      "O_O":    { cssClass: "no-rotate" },
      "o_o":    { cssClass: "no-rotate" },
      "0_o":    { cssClass: "no-rotate" },
      "O_o":    { cssClass: "no-rotate" },
      "T_T":    { cssClass: "no-rotate" },
      "^_^":    { cssClass: "no-rotate" },
      "O:)":    { cssClass: "small-emoticon spaced-emoticon" },
      "O: )":   { cssClass: "small-emoticon" },
      "8D":     { cssClass: "small-emoticon spaced-emoticon" },
      "XD":     { cssClass: "small-emoticon spaced-emoticon" },
      "xD":     { cssClass: "small-emoticon spaced-emoticon" },
      "=D":     { cssClass: "small-emoticon spaced-emoticon" },
      "8O":     { cssClass: "small-emoticon spaced-emoticon" },
      "[+=..]":  { cssClass: "no-rotate nintendo-controller" }
      //"OwO":  { cssClass: "no-rotate" }, // these emoticons overflow and look weird even if they're made even smaller, could probably fix this with some more css trickery
      //"O-O":  { cssClass: "no-rotate" },
      //"O=)":    { cssClass: "small-emoticon" } 
    }

    var specialRegex = new RegExp( '(\\' + escapeCharacters.join('|\\') + ')', 'g' );
    // One of these characters must be present before the matched emoticon, or the matched emoticon must be the first character in the container HTML
    //  This is to ensure that the characters in the middle of HTML properties or URLs are not matched as emoticons
    //  Below matches ^ (first character in container HTML), \s (whitespace like space or tab), or \0 (NULL character)
    // (<\\S+.*>) matches <\\S+.*> (matches an HTML tag like <span> or <div>), but haven't quite gotten it working yet, need to push this fix now
    var preMatch = '(^|[\\s\\0])';

    for ( var i=threeCharacterEmoticons.length-1; i>=0; --i ){
      threeCharacterEmoticons[i] = threeCharacterEmoticons[i].replace(specialRegex,'\\$1');
      threeCharacterEmoticons[i] = new RegExp( preMatch+'(' + threeCharacterEmoticons[i] + ')', 'g' );
    }

    for ( var i=twoCharacterEmoticons.length-1; i>=0; --i ){
      twoCharacterEmoticons[i] = twoCharacterEmoticons[i].replace(specialRegex,'\\$1');
      twoCharacterEmoticons[i] = new RegExp( preMatch+'(' + twoCharacterEmoticons[i] + ')', 'g' );
    }

    for ( var emoticon in specialEmoticons ){
      specialEmoticons[emoticon].regexp = emoticon.replace(specialRegex,'\\$1');
      specialEmoticons[emoticon].regexp = new RegExp( preMatch+'(' + specialEmoticons[emoticon].regexp + ')', 'g' );
    }

    var exclude = 'span.css-emoticon';
    if(opts.exclude){ exclude += ','+opts.exclude; }
    var excludeArray = exclude.split(',')

    return this.not(exclude).each(function() {
      var container = $(this);
      var cssClass = 'css-emoticon'
      if(opts.animate){ cssClass += ' un-transformed-emoticon animated-emoticon'; }
      
      for( var emoticon in specialEmoticons ){
        var specialCssClass = cssClass + " " + specialEmoticons[emoticon].cssClass;
        container.html(container.html().replace(specialEmoticons[emoticon].regexp,"$1<span class='" + specialCssClass + "'>$2</span>"));
      }
      $(threeCharacterEmoticons).each(function(){
        container.html(container.html().replace(this,"$1<span class='" + cssClass + "'>$2</span>"));
      });                                                          
      $(twoCharacterEmoticons).each(function(){                    
        container.html(container.html().replace(this,"$1<span class='" + cssClass + " spaced-emoticon'>$2</span>"));
      });
      // fix emoticons that got matched more then once (where one emoticon is a subset of another emoticon), and thus got nested spans
      $.each(excludeArray,function(index,item){
        container.find($.trim(item)+" span.css-emoticon").each(function(){
          $(this).replaceWith($(this).text());
        });
      });
      if(opts.animate){
        setTimeout(function(){$('.un-transformed-emoticon').removeClass('un-transformed-emoticon');}, opts.delay);
      }
    });
    }

    $.fn.unemoticonize = function(options) {
    var opts = $.extend({}, $.fn.emoticonize.defaults, options);
    return this.each(function() {
      var container = $(this);
      container.find('span.css-emoticon').each(function(){
        // add delay equal to animate speed if animate is not false
        var span = $(this);
        if(opts.animate){
          span.addClass('un-transformed-emoticon');
          setTimeout(function(){span.replaceWith(span.text());}, opts.delay); 
        }else{
          span.replaceWith(span.text());
        }
      });
    });
    }

    $.fn.emoticonize.defaults = {animate: true, delay: 500, exclude: 'pre,code,.no-emoticons'}
    })(jQuery);

    var chatboxManager = function () {
        
    var init = function (options) {
        $.extend(chatbox_config, options)
    };


    var delBox = function (id) {
        // TODO
    };

    var getNextOffset = function () {
        return (chatbox_config.width + chatbox_config.gap) * showList.length;
    };

    var boxClosedCallback = function (id) {
        // close button in the titlebar is clicked
        var idx = showList.indexOf(id);
        if (idx != -1) {
            showList.splice(idx, 1);
            var diff = chatbox_config.width + chatbox_config.gap;
            for (var i = idx; i < showList.length; i++) {
                chatbox_config.offset = $("#" + showList[i]).chatbox("option", "offset");
                $("#" + showList[i]).chatbox("option", "offset", chatbox_config.offset - diff);
            }
        } else {
            alert("NOTE: Id missing from array: " + id);
        }
    };

    // caller should guarantee the uniqueness of id
    var addBox = function (id, user, name) {
        var idx1 = showList.indexOf(id);
        var idx2 = boxList.indexOf(id);
        if (idx1 != -1) {
            // found one in show box, do nothing
        } else if (idx2 != -1) {
            // exists, but hidden
            // show it and put it back to showList
            $("#" + id).chatbox("option", "offset", getNextOffset());
            var manager = $("#" + id).chatbox("option", "boxManager");
            manager.toggleBox();
            showList.push(id);
        } else {
            var el = document.createElement('div');
            el.setAttribute('id', id);
            $(el).chatbox({
                id: id,
                user: user,
                title: '<i title="' + user.status + '"></i>' + user.first_name + " " + user.last_name,
                hidden: false,
                offset: getNextOffset(),
                width: chatbox_config.width,
                status: user.status,
                alertmsg: user.alertmsg,
                alertshow: user.alertshow,
                messageSent: dispatch,
                boxClosed: boxClosedCallback
            });
            boxList.push(id);
            showList.push(id);
            nameList.push(user.first_name);
        }
    };

    var messageSentCallback = function (id, user, msg) {
        var idx = boxList.indexOf(id);
        chatbox_config.messageSent(nameList[idx], msg);
    };

    // not used in demo
    var dispatch = function (id, user, msg) {
        //$("#log").append("<i>" + moment().calendar() + "</i> you said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>");
        if ($('#chatlog').length){
            $("#chatlog").append("You said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>").effect("highlight", {}, 500);;
        }
        $("#" + id).chatbox("option", "boxManager").addMsg("Me", msg);
    }

    return {
        init: init,
        addBox: addBox,
        delBox: delBox,
        dispatch: dispatch
    };
    }();

    var link = function (scope, element, attributes) {

        $('a[data-chat-id]').click(function (event, ui) {
            if(!$(this).hasClass('offline')){

                var $this = $(this),
                    temp_chat_id = $this.attr("data-chat-id"),
                    fname = $this.attr("data-chat-fname"),
                    lname = $this.attr("data-chat-lname"),
                    status = $this.attr("data-chat-status") || "online",
                    alertmsg = $this.attr("data-chat-alertmsg"),
                    alertshow =  $this.attr("data-chat-alertshow") || false;


                chatboxManager.addBox(temp_chat_id, {
                    // dest:"dest" + counter, 
                    // not used in demo
                    title: "username" + temp_chat_id,
                    first_name: fname,
                    last_name: lname,
                    status: status,
                    alertmsg: alertmsg,
                    alertshow: alertshow
                    //you can add your own options too
                });
            }

            event.preventDefault();

        });

    }

    angular.module('app.chat').directive('asideChatWidget', function (ChatApi) {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/dashboard/chat/directives/aside-chat-widget.tpl.html',
            link: link
        }
    });

})(); 
"use strict";

angular.module('app.chat').directive('chatUsers', function(ChatApi){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/dashboard/chat/directives/chat-users.tpl.html',
        scope: true,
        link: function(scope, element){
            scope.open = false;
            scope.openToggle = function(){
                scope.open = !scope.open;
            };

            scope.chatUserFilter = '';

            ChatApi.initialized.then(function () {
                scope.chatUsers = ChatApi.users;
            });
        }
    }
});

"use strict";

angular.module('app.chat').directive('chatWidget', function (ChatApi) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/dashboard/chat/directives/chat-widget.tpl.html',
        scope: {},
        link: function (scope, element) {
            scope.newMessage = '';

            scope.sendMessage = function () {
                ChatApi.sendMessage(scope.newMessage);
                scope.newMessage = '';
            };

            scope.messageTo = function(user){
                scope.newMessage += (user.username + ', ');
            };

            ChatApi.initialized.then(function () {
                scope.chatMessages = ChatApi.messages;
            });
            scope.$watch(function () {
                return ChatApi.messages.length
            }, function (count) {
                if (count){
                    var $body = $('.chat-body', element);
                    $body.animate({scrollTop: $body[0].scrollHeight});
                }
            })
        }
    }
});
"use strict";

 angular.module('app').directive('todoList', function ($timeout, Todo) {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/dashboard/todo/directives/todo-list.tpl.html',
        scope: {
            todos: '='
        },
        link: function (scope, element, attributes) {
            scope.title = attributes.title
            scope.icon = attributes.icon
            scope.state = attributes.state
            scope.filter = {
                state: scope.state
            }

            element.find('.todo').sortable({
                handle: '.handle',
                connectWith: ".todo",
                receive: function (event, ui) {

                    console.log(ui.item.scope().todo,scope.state)
                    var todo = ui.item.scope().todo;
                    var state = scope.state
                    // // console.log(ui.item, todo, state)
                    // // console.log(state, todo)
                    if (todo && state) {
                        todo.setState(state);
                         // ui.sender.sortable("cancel");
                        // scope.$apply();
                    } else {
                        console.log('Wat', todo, state);
                    }
                    
                }
            }).disableSelection();

        }
    }
});
"use strict";

angular.module('app').factory('Todo', function (Restangular, APP_CONFIG, $httpBackend) {

    var normalize = function(todo) {
        if(!todo._id){
            todo._id = _.unique('todo')
        }
        todo.toggle = function(){
            if (!todo.completedAt) {
                todo.state = 'Completed';
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.state = 'Critical';
                todo.completedAt = null;
            }
        };

        todo.setState = function(state){
            todo.state = state;
            if (state == 'Completed') {
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.completedAt = null;
            }
        };

        return todo;
    };

    var Todo = Restangular.all(APP_CONFIG.apiRootUrl + '/todos.json');

    Restangular.extendModel(APP_CONFIG.apiRootUrl + '/todos.json', normalize);
    Todo.normalize = normalize;

    return Todo
});
'use strict';

angular.module('app.graphs').directive('chartjsBarChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            var barOptions = {
                //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                scaleBeginAtZero : true,
                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines : true,
                //String - Colour of the grid lines
                scaleGridLineColor : "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth : 1,
                //Boolean - If there is a stroke on each bar
                barShowStroke : true,
                //Number - Pixel width of the bar stroke
                barStrokeWidth : 1,
                //Number - Spacing between each of the X value sets
                barValueSpacing : 5,
                //Number - Spacing between data sets within X values
                barDatasetSpacing : 1,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            }

            var barData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.5)",
                        strokeColor: "rgba(220,220,220,0.8)",
                        highlightFill: "rgba(220,220,220,0.75)",
                        highlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.5)",
                        strokeColor: "rgba(151,187,205,0.8)",
                        highlightFill: "rgba(151,187,205,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            var ctx = element[0].getContext("2d");
            new Chart(ctx).Bar(barData, barOptions);

        }
    }
});
'use strict';

angular.module('app.graphs').directive('chartjsDoughnutChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var doughnutOptions = {
                //Boolean - Whether we should show a stroke on each segment
                segmentShowStroke : true,
                //String - The colour of each segment stroke
                segmentStrokeColor : "#fff",
                //Number - The width of each segment stroke
                segmentStrokeWidth : 2,
                //Number - The percentage of the chart that we cut out of the middle
                percentageInnerCutout : 50, // This is 0 for Pie charts
                //Number - Amount of animation steps
                animationSteps : 100,
                //String - Animation easing effect
                animationEasing : "easeOutBounce",
                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate : true,
                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale : false,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
            };

            var doughnutData = [
                {
                    value: 300,
                    color:"rgba(220,220,220,0.8)",
                    highlight: "rgba(220,220,220,0.7)",
                    label: "Grey"
                },
                {
                    value: 50,
                    color: "rgba(151,187,205,1)",
                    highlight: "rgba(151,187,205,0.8)",
                    label: "Blue"
                },
                {
                    value: 100,
                    color: "rgba(169, 3, 41, 0.7)",
                    highlight: "rgba(169, 3, 41, 0.7)",
                    label: "Red"
                }
            ];

            // render chart
            var ctx = element[0].getContext("2d");
            new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
        }}
});
'use strict';

angular.module('app.graphs').directive('chartjsLineChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            // LINE CHART
            // ref: http://www.chartjs.org/docs/#line-chart-introduction
            var lineOptions = {
                ///Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines : true,
                //String - Colour of the grid lines
                scaleGridLineColor : "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth : 1,
                //Boolean - Whether the line is curved between points
                bezierCurve : true,
                //Number - Tension of the bezier curve between points
                bezierCurveTension : 0.4,
                //Boolean - Whether to show a dot for each point
                pointDot : true,
                //Number - Radius of each point dot in pixels
                pointDotRadius : 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth : 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius : 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke : true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth : 2,
                //Boolean - Whether to fill the dataset with a colour
                datasetFill : true,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            };

            var lineData = { labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            var ctx = element[0].getContext("2d");
            var myNewChart = new Chart(ctx).Line(lineData, lineOptions);



        }
    }
});
'use strict';

angular.module('app.graphs').directive('chartjsPieChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var pieOptions = {
                //Boolean - Whether we should show a stroke on each segment
                segmentShowStroke: true,
                //String - The colour of each segment stroke
                segmentStrokeColor: "#fff",
                //Number - The width of each segment stroke
                segmentStrokeWidth: 2,
                //Number - Amount of animation steps
                animationSteps: 100,
                //String - types of animation
                animationEasing: "easeOutBounce",
                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate: true,
                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale: false,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
            };

            var pieData = [
                {
                    value: 300,
                    color:"rgba(220,220,220,0.9)",
                    highlight: "rgba(220,220,220,0.8)",
                    label: "Grey"
                },
                {
                    value: 50,
                    color: "rgba(151,187,205,1)",
                    highlight: "rgba(151,187,205,0.8)",
                    label: "Blue"
                },
                {
                    value: 100,
                    color: "rgba(169, 3, 41, 0.7)",
                    highlight: "rgba(169, 3, 41, 0.7)",
                    label: "Red"
                }
            ];

            // render chart
            var ctx = element[0].getContext("2d");
            var myNewChart = new Chart(ctx).Pie(pieData, pieOptions);
        }}
});
'use strict';

angular.module('app.graphs').directive('chartjsPolarChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var polarOptions = {
                //Boolean - Show a backdrop to the scale label
                scaleShowLabelBackdrop : true,
                //String - The colour of the label backdrop
                scaleBackdropColor : "rgba(255,255,255,0.75)",
                // Boolean - Whether the scale should begin at zero
                scaleBeginAtZero : true,
                //Number - The backdrop padding above & below the label in pixels
                scaleBackdropPaddingY : 2,
                //Number - The backdrop padding to the side of the label in pixels
                scaleBackdropPaddingX : 2,
                //Boolean - Show line for each value in the scale
                scaleShowLine : true,
                //Boolean - Stroke a line around each segment in the chart
                segmentShowStroke : true,
                //String - The colour of the stroke on each segement.
                segmentStrokeColor : "#fff",
                //Number - The width of the stroke value in pixels
                segmentStrokeWidth : 2,
                //Number - Amount of animation steps
                animationSteps : 100,
                //String - Animation easing effect.
                animationEasing : "easeOutBounce",
                //Boolean - Whether to animate the rotation of the chart
                animateRotate : true,
                //Boolean - Whether to animate scaling the chart from the centre
                animateScale : false,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
            };

            var polarData = [
                {
                    value: 300,
                    color:"rgba(220,220,220,0.8)",
                    highlight: "rgba(220,220,220,0.7)",
                    label: "Grey"
                },
                {
                    value: 50,
                    color: "rgba(151,187,205,1)",
                    highlight: "rgba(151,187,205,0.8)",
                    label: "Blue"
                },
                {
                    value: 100,
                    color: "rgba(169, 3, 41, 0.7)",
                    highlight: "rgba(169, 3, 41, 0.7)",
                    label: "Red"
                },
                {
                    value: 40,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Grey"
                },
                {
                    value: 120,
                    color: "#4D5360",
                    highlight: "#616774",
                    label: "Dark Grey"
                }
            ];

            // render chart
            var ctx = element[0].getContext("2d");
            new Chart(ctx).PolarArea(polarData, polarOptions);
        }}
});
'use strict';

angular.module('app.graphs').directive('chartjsRadarChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var radarData = {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };

            var radarOptions = {
                //Boolean - Whether to show lines for each scale point
                scaleShowLine : true,
                //Boolean - Whether we show the angle lines out of the radar
                angleShowLineOut : true,
                //Boolean - Whether to show labels on the scale
                scaleShowLabels : false,
                // Boolean - Whether the scale should begin at zero
                scaleBeginAtZero : true,
                //String - Colour of the angle line
                angleLineColor : "rgba(0,0,0,.1)",
                //Number - Pixel width of the angle line
                angleLineWidth : 1,
                //String - Point label font declaration
                pointLabelFontFamily : "'Arial'",
                //String - Point label font weight
                pointLabelFontStyle : "normal",
                //Number - Point label font size in pixels
                pointLabelFontSize : 10,
                //String - Point label font colour
                pointLabelFontColor : "#666",
                //Boolean - Whether to show a dot for each point
                pointDot : true,
                //Number - Radius of each point dot in pixels
                pointDotRadius : 3,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth : 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius : 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke : true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth : 2,
                //Boolean - Whether to fill the dataset with a colour
                datasetFill : true,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            }

            // render chart
            var ctx = element[0].getContext("2d");
            var myNewChart = new Chart(ctx).Radar(radarData, radarOptions);
        }}
});
"use strict";


angular.module('app.graphs').value('FlotConfig', {
    "chartBorderColor": "#efefef",
    "chartGridColor": "#DDD",
    "charMain": "#E24913",
    "chartSecond": "#6595b4",
    "chartThird": "#FF9F01",
    "chartFourth": "#7e9d3a",
    "chartFifth": "#BD362F",
    "chartMono": "#000"

});

"use strict";

angular.module('app.graphs').directive('flotAutoUpdatingChart', function($timeout, FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

// For the demo we use generated data, but normally it would be coming from the server
            var data = [], totalPoints = 200;
            function getRandomData() {
                if (data.length > 0)
                    data = data.slice(1);

                // do a random walk
                while (data.length < totalPoints) {
                    var prev = data.length > 0 ? data[data.length - 1] : 50;
                    var y = prev + Math.random() * 10 - 5;
                    if (y < 0)
                        y = 0;
                    if (y > 100)
                        y = 100;
                    data.push(y);
                }

                // zip the generated y values with the x values
                var res = [];
                for (var i = 0; i < data.length; ++i)
                    res.push([i, data[i]])
                return res;
            }

            // setup control widget
            var updateInterval = 1000;
            element.val(updateInterval).change(function() {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1)
                        updateInterval = 1;
                    if (updateInterval > 2000)
                        updateInterval = 2000;
                    $(this).val("" + updateInterval);
                }
            });

            // setup plot
            var options = {
                yaxis : {
                    min : 0,
                    max : 100
                },
                xaxis : {
                    min : 0,
                    max : 100
                },
                colors : [FlotConfig.chartFourth],
                series : {
                    lines : {
                        lineWidth : 1,
                        fill : true,
                        fillColor : {
                            colors : [{
                                opacity : 0.4
                            }, {
                                opacity : 0
                            }]
                        },
                        steps : false

                    }
                }
            };
            var plot = $.plot(element, [getRandomData()], options);

            function update() {
                plot.setData([getRandomData()]);
                // since the axes don't change, we don't need to call plot.setupGrid()
                plot.draw();

                $timeout(update, updateInterval);
            }

            update();
        }
    }
});

"use strict";

angular.module('app.graphs').directive('flotBarChart', function(FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

            $.plot(element, scope.data, {
                colors : [FlotConfig.chartSecond, FlotConfig.chartFourth, "#666", "#BBB"],
                grid : {
                    show : true,
                    hoverable : true,
                    clickable : true,
                    tickColor : FlotConfig.chartBorderColor,
                    borderWidth : 0,
                    borderColor : FlotConfig.chartBorderColor
                },
                legend : true,
                tooltip : true,
                tooltipOpts : {
                    content : "<b>%x</b> = <span>%y</span>",
                    defaultTheme : false
                }

            });
        }
    }
});
'use strict';

angular.module('app.graphs').directive('flotBasic', function () {
    return {
        restrict: 'A',
        scope:{
            data:'=flotData',
            options: '=flotOptions'
        },
        link: function (scope, element, attributes) {
            var plot = $.plot(element, scope.data, scope.options);

            scope.$watchCollection('data', function(newData, oldData){
                if(newData != oldData){
                    plot.setData(newData);
                    plot.draw();
                }
            });
        }
    }
});
"use strict";

angular.module('app.graphs').directive('flotFillChart', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

            $.plot(element, scope.data, {

                xaxis : {
                    tickDecimals : 0
                },

                yaxis : {
                    tickFormatter : function(v) {
                        return v + " cm";
                    }
                }

            });
        }
    }
})
"use strict";

angular.module('app.graphs').directive('flotHorizontalBarChart', function(FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){
            $.plot(element, scope.data, {
                colors : [FlotConfig.chartSecond, FlotConfig.chartFourth, "#666", "#BBB"],
                grid : {
                    show : true,
                    hoverable : true,
                    clickable : true,
                    tickColor : FlotConfig.chartBorderColor,
                    borderWidth : 0,
                    borderColor : FlotConfig.chartBorderColor
                },
                legend : true,
                tooltip : true,
                tooltipOpts : {
                    content : "<b>%x</b> = <span>%y</span>",
                    defaultTheme : false
                }
            });
        }
    }
});
"use strict";

angular.module('app.graphs').directive('flotPieChart', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){
            $.plot(element, scope.data, {
                series : {
                    pie : {
                        show : true,
                        innerRadius : 0.5,
                        radius : 1,
                        label : {
                            show : false,
                            radius : 2 / 3,
                            formatter : function(label, series) {
                                return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                            },
                            threshold : 0.1
                        }
                    }
                },
                legend : {
                    show : true,
                    noColumns : 1, // number of colums in legend table
                    labelFormatter : null, // fn: string -> string
                    labelBoxBorderColor : "#000", // border color for the little label boxes
                    container : null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position : "ne", // position of default legend container within plot
                    margin : [5, 10], // distance from grid edge to default legend container within plot
                    backgroundColor : "#efefef", // null means auto-detect
                    backgroundOpacity : 1 // set to 0 to avoid background
                },
                grid : {
                    hoverable : true,
                    clickable : true
                },
            });

        }
    }
});

"use strict";

angular.module('app.graphs').directive('flotSalesChart', function(FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

            $.plot(element, [scope.data], {
                xaxis : {
                    mode : "time",
                    tickLength : 5
                },
                series : {
                    lines : {
                        show : true,
                        lineWidth : 1,
                        fill : true,
                        fillColor : {
                            colors : [{
                                opacity : 0.1
                            }, {
                                opacity : 0.15
                            }]
                        }
                    },
                    //points: { show: true },
                    shadowSize : 0
                },
                selection : {
                    mode : "x"
                },
                grid : {
                    hoverable : true,
                    clickable : true,
                    tickColor : FlotConfig.chartBorderColor,
                    borderWidth : 0,
                    borderColor : FlotConfig.chartBorderColor
                },
                tooltip : true,
                tooltipOpts : {
                    content : "Your sales for <b>%x</b> was <span>$%y</span>",
                    dateFormat : "%y-%0m-%0d",
                    defaultTheme : false
                },
                colors : [FlotConfig.chartSecond]

            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('flotSinChart', function (FlotConfig) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function (scope, element) {

            var plot = $.plot(element, scope.data, {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: FlotConfig.chartBorderColor,
                    borderWidth: 0,
                    borderColor: FlotConfig.chartBorderColor
                },
                tooltip: true,
                tooltipOpts: {
                    //content : "Value <b>$x</b> Value <span>$y</span>",
                    defaultTheme: false
                },
                colors: [FlotConfig.chartSecond, FlotConfig.chartFourth],
                yaxis: {
                    min: -1.1,
                    max: 1.1
                },
                xaxis: {
                    min: 0,
                    max: 15
                }
            });

            element.on("plotclick", function (event, pos, item) {
                if (item) {
                    $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
                    plot.highlight(item.series, item.datapoint);
                }
            });
        }
    }
});
"use strict";

angular.module('app.graphs').directive('flotSiteStatsChart', function(FlotConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope: {
            data: '='
        },
        link: function(scope, element){

            $.plot(element, scope.data, {
                series : {
                    lines : {
                        show : true,
                        lineWidth : 1,
                        fill : true,
                        fillColor : {
                            colors : [{
                                opacity : 0.1
                            }, {
                                opacity : 0.15
                            }]
                        }
                    },
                    points : {
                        show : true
                    },
                    shadowSize : 0
                },

                yaxes : [{
                    min : 20,
                    tickLength : 5
                }],
                grid : {
                    hoverable : true,
                    clickable : true,
                    tickColor : FlotConfig.chartBorderColor,
                    borderWidth : 0,
                    borderColor : FlotConfig.chartBorderColor
                },
                tooltip : true,
                tooltipOpts : {
                    content : "%s for <b>%x:00 hrs</b> was %y",
                    dateFormat : "%y-%0m-%0d",
                    defaultTheme : false
                },
                colors : [FlotConfig.charMain, FlotConfig.chartSecond],
                xaxis : {
                    mode : "time",
                    tickLength : 10,
                    ticks : 15,
                    tickDecimals : 2
                },
                yaxis : {
                    ticks : 15,
                    tickDecimals : 0
                }
            });

        }
    }
});
'use strict'

angular.module('app.graphs').factory('DygraphsDataDemo', function(){
    function data_nolabel() {
        return "20070101,62,39\n20070102,62,44\n20070103,62,42\n20070104,57,45\n20070105,54,44\n20070106,55,36\n20070107,62,45\n20070108,66,48\n20070109,63,39\n20070110,57,37\n20070111,50,37\n20070112,48,35\n20070113,48,30\n20070114,48,28\n20070115,53,28\n20070116,50,30\n20070117,57,37\n20070118,61,33\n20070119,55,35\n20070120,61,35\n20070121,64,43\n20070122,61,36\n20070123,57,35\n20070124,60,35\n20070125,55,39\n20070126,54,44\n20070127,57,48\n20070128,59,45\n20070129,63,45\n20070130,59,41\n20070131,55,48\n20070201,53,46\n20070202,55,44\n20070203,59,37\n20070204,66,39\n20070205,64,43\n20070206,61,46\n20070207,61,51\n20070208,60,51\n20070209,61,55\n20070210,62,55\n20070211,61,46\n20070212,59,43\n20070213,57,46\n20070214,61,39\n20070215,64,44\n20070216,71,46\n20070217,73,51\n20070218,60,46\n20070219,63,44\n20070220,57,45\n20070221,59,48\n20070222,55,44\n20070223,55,42\n20070224,57,39\n20070225,55,48\n20070226,57,44\n20070227,53,39\n20070228,53,37\n20070301,54,37\n20070302,61,39\n20070303,66,43\n20070304,70,48\n20070305,68,53\n20070306,69,46\n20070307,62,51\n20070308,61,46\n20070309,60,45\n20070310,68,46\n20070311,79,48\n20070312,80,52\n20070313,73,53\n20070314,64,48\n20070315,78,46\n20070316,78,50\n20070317,62,51\n20070318,66,46\n20070319,64,48\n20070320,60,48\n20070321,66,46\n20070322,73,43\n20070323,78,48\n20070324,68,48\n20070325,64,53\n20070326,66,48\n20070327,57,46\n20070328,66,42\n20070329,73,42\n20070330,72,46\n20070331,69,46\n20070401,64,46\n20070402,69,46\n20070403,71,46\n20070404,69,50\n20070405,71,52\n20070406,64,52\n20070407,68,51\n20070408,71,51\n20070409,66,50\n20070410,72,46\n20070411,63,50\n20070412,64,46\n20070413,70,44\n20070414,57,51\n20070415,68,46\n20070416,75,46\n20070417,62,48\n20070418,61,45\n20070419,57,42\n20070420,64,46\n20070421,61,43\n20070422,63,48\n20070423,70,44\n20070424,66,46\n20070425,66,48\n20070426,69,48\n20070427,82,50\n20070428,81,55\n20070429,70,53\n20070430,77,51\n20070501,70,48\n20070502,66,52\n20070503,63,48\n20070504,64,51\n20070505,73,46\n20070506,88,54\n20070507,91,57\n20070508,84,60\n20070509,73,55\n20070510,57,52\n20070511,64,51\n20070512,64,50\n20070513,72,46\n20070514,66,50\n20070515,63,51\n20070516,70,48\n20070517,68,50\n20070518,73,50\n20070519,70,52\n20070520,73,51\n20070521,78,54\n20070522,81,51\n20070523,86,55\n20070524,78,55\n20070525,69,54\n20070526,69,55\n20070527,69,54\n20070528,73,52\n20070529,69,53\n20070530,66,55\n20070531,64,54\n20070601,66,54\n20070602,64,54\n20070603,70,55\n20070604,73,59\n20070605,68,55\n20070606,70,53\n20070607,75,51\n20070608,70,50\n20070609,75,53\n20070610,75,55\n20070611,75,53\n20070612,79,52\n20070613,90,59\n20070614,89,60\n20070615,86,59\n20070616,72,55\n20070617,79,53\n20070618,79,57\n20070619,73,55\n20070620,71,55\n20070621,77,55\n20070622,79,54\n20070623,77,54\n20070624,77,53\n20070625,82,53\n20070626,71,54\n20070627,73,55\n20070628,73,57\n20070629,77,60\n20070630,75,54\n20070701,78,54\n20070702,82,57\n20070703,72,57\n20070704,84,59\n20070705,84,61\n20070706,75,60\n20070707,73,55\n20070708,78,55\n20070709,73,57\n20070710,73,59\n20070711,78,62\n20070712,75,59\n20070713,79,60\n20070714,73,60\n20070715,78,62\n20070716,75,59\n20070717,77,60\n20070718,75,63\n20070719,80,59\n20070720,79,59\n20070721,77,61\n20070722,75,63\n20070723,79,64\n20070724,73,61\n20070725,72,57\n20070726,75,60\n20070727,78,60\n20070728,77,57\n20070729,73,57\n20070730,80,59\n20070731,75,59\n20070801,75,59\n20070802,73,60\n20070803,79,60\n20070804,77,59\n20070805,71,57\n20070806,71,59\n20070807,73,57\n20070808,71,55\n20070809,77,60\n20070810,77,57\n20070811,73,57\n20070812,72,55\n20070813,75,55\n20070814,73,55\n20070815,75,57\n20070816,79,60\n20070817,80,55\n20070818,78,57\n20070819,77,55\n20070820,80,64\n20070821,82,62\n20070822,82,60\n20070823,82,57\n20070824,78,59\n20070825,73,61\n20070826,73,61\n20070827,78,59\n20070828,86,62\n20070829,88,68\n20070830,90,68\n20070831,80,66\n20070901,87,62\n20070902,89,61\n20070903,78,61\n20070904,78,63\n20070905,89,57\n20070906,82,64\n20070907,75,61\n20070908,73,62\n20070909,71,61\n20070910,73,59\n20070911,71,59\n20070912,72,60\n20070913,77,57\n20070914,75,60\n20070915,73,57\n20070916,72,61\n20070917,72,55\n20070918,73,55\n20070919,66,55\n20070920,71,52\n20070921,77,57\n20070922,64,57\n20070923,68,55\n20070924,78,52\n20070925,84,53\n20070926,87,57\n20070927,75,55\n20070928,66,54\n20070929,73,52\n20070930,75,48\n20071001,71,57\n20071002,81,53\n20071003,73,54\n20071004,69,55\n20071005,64,50\n20071006,73,45\n20071007,77,46\n20071008,79,53\n20071009,72,53\n20071010,69,54\n20071011,70,48\n20071012,64,54\n20071013,70,53\n20071014,66,51\n20071015,68,52\n20071016,66,52\n20071017,66,50\n20071018,73,50\n20071019,72,57\n20071020,66,54\n20071021,73,51\n20071022,81,51\n20071023,84,53\n20071024,79,55\n20071025,66,53\n20071026,68,46\n20071027,66,52\n20071028,75,52\n20071029,63,55\n20071030,63,53\n20071031,63,54\n20071101,66,53\n20071102,77,50\n20071103,80,48\n20071104,77,48\n20071105,66,48\n20071106,62,52\n20071107,61,48\n20071108,59,53\n20071109,63,48\n20071110,66,48\n20071111,63,48\n20071112,68,44\n20071113,72,51\n20071114,75,55\n20071115,69,51\n20071116,63,55\n20071117,66,51\n20071118,64,53\n20071119,66,48\n20071120,63,46\n20071121,64,43\n20071122,64,37\n20071123,70,37\n20071124,60,37\n20071125,60,46\n20071126,63,42\n20071127,63,45\n20071128,64,46\n20071129,62,41\n20071130,55,42\n20071201,57,37\n20071202,61,45\n20071203,66,50\n20071204,61,54\n20071205,60,50\n20071206,57,48\n20071207,55,45\n20071208,53,42\n20071209,57,39\n20071210,57,39\n20071211,57,41\n20071212,55,35\n20071213,59,34\n20071214,55,34\n20071215,55,39\n20071216,55,43\n20071217,57,48\n20071218,57,43\n20071219,59,41\n20071220,55,43\n20071221,53,39\n20071222,53,32\n20071223,55,37\n20071224,57,45\n20071225,57,37\n20071226,53,43\n20071227,48,37\n20071228,48,43\n20071229,57,44\n20071230,52,43\n20071231,57,42\n";
    }

    function data() {
        return "Date,High,Low\n" + data_nolabel();
    }

    function NoisyData() {
        return "Date,A,B\n20061001,3.01953818828,0.7212041046,2.18487394958,0.599318549691\n20061002,3.63321799308,0.778297234566,1.69491525424,0.531417655826\n20061003,2.44328097731,0.644967734352,2.51256281407,0.640539070386\n20061004,3.52733686067,0.774700921683,2.68456375839,0.66207105053\n20061005,3.28719723183,0.741636245748,2.35294117647,0.621407707226\n20061006,1.58450704225,0.523967868159,3.78657487091,0.791868460623\n20061007,5.32859680284,0.946589405904,4.0404040404,0.807910739509\n20061008,2.64084507042,0.672799548916,2.37288135593,0.626609885481\n20061009,2.26480836237,0.620990945917,3.5413153457,0.75897176848\n20061010,3.29289428076,0.74289969528,2.02702702703,0.579191340004\n20061011,2.7633851468,0.681234043829,1.1744966443,0.4413034044\n20061012,3.28719723183,0.741636245748,3.37268128162,0.741327769578\n20061013,1.77304964539,0.55569466381,1.85810810811,0.555011329732\n20061014,3.39892665474,0.7664008338,1.67224080268,0.524368852929\n20061015,2.65017667845,0.675144574777,3.35570469799,0.737661045752\n20061016,3.63951473137,0.779620631266,2.34899328859,0.620377617453\n20061017,2.25694444444,0.618859623032,1.68067226891,0.526990133716\n20061018,4.47504302926,0.857766274964,2.51677852349,0.641599927369\n20061019,2.44755244755,0.646081155692,1.68067226891,0.526990133716\n20061020,3.67775831874,0.787656442774,3.066439523,0.711598843969\n20061021,3.94265232975,0.823839169829,3.85906040268,0.788990618726\n20061022,2.59067357513,0.660187558973,3.71621621622,0.777438794254\n20061023,4.33275563258,0.847570482324,3.85906040268,0.788990618726\n20061024,3.10344827586,0.720049610821,2.84280936455,0.679611549697\n20061025,1.40350877193,0.492720767725,2.7027027027,0.666482380968\n20061026,1.95035460993,0.582291234145,2.36486486486,0.624518599275\n20061027,2.30905861456,0.632980642182,2.03045685279,0.580161203819\n20061028,4.09252669039,0.835706590809,2.87648054146,0.68754192469\n20061029,2.66903914591,0.679883997626,2.02360876897,0.578224712918\n20061030,4.74516695958,0.89127787497,4.36241610738,0.836670992529\n20061031,2.78260869565,0.685905251933,3.20945945946,0.724388507178\n20061101,1.5873015873,0.524884521441,1.51260504202,0.500373860545\n20061102,2.78745644599,0.687083077461,2.0202020202,0.57726130639\n20061103,5.11463844797,0.925157232782,2.68907563025,0.663168401088\n20061104,4.9001814882,0.919644816432,3.07692307692,0.713993047527\n20061105,5.13274336283,0.928343545136,3.55329949239,0.761492892041\n20061106,1.92644483363,0.575222935029,2.35294117647,0.621407707226\n20061107,2.46478873239,0.650573541306,1.52027027027,0.502889967904\n20061108,2.13523131673,0.609772022763,2.6981450253,0.665374048085\n20061109,3.88007054674,0.811026422222,2.72572402044,0.672079879106\n20061110,2.63620386643,0.671633132526,3.71621621622,0.777438794254\n20061111,3.69718309859,0.791736755355,3.0303030303,0.703344064467\n20061112,3.83944153578,0.802703592906,4.05405405405,0.81058250986\n20061113,2.47787610619,0.653984033555,2.20338983051,0.604340313133\n20061114,1.77304964539,0.55569466381,2.22222222222,0.60944692682\n20061115,2.30088495575,0.630766388737,0.843170320405,0.375484163785\n20061116,1.57894736842,0.522144132232,2.19594594595,0.602321544724\n20061118,2.45183887916,0.647198426991,1.69491525424,0.531417655826\n20061119,3.52733686067,0.774700921683,1.85185185185,0.55316023504\n20061120,2.97723292469,0.711254751484,2.6981450253,0.665374048085\n20061121,2.29681978799,0.629665059963,2.01680672269,0.576301104352\n20061122,3.01418439716,0.719945245328,2.5466893039,0.649125445325\n20061123,3.78378378378,0.809917534069,2.6936026936,0.664269394219\n20061124,3.18584070796,0.738851643987,2.01005025126,0.57439025002\n20061125,2.83185840708,0.697868332879,3.066439523,0.711598843969\n20061126,3.01953818828,0.7212041046,2.53378378378,0.645878720149\n20061127,2.81195079086,0.693033387099,1.51006711409,0.499540743312\n20061128,2.97723292469,0.711254751484,2.54237288136,0.648039583782\n20061129,1.41093474427,0.495309102312,3.02013422819,0.701020603129";
    }

    function data_showzerovalues() {
        return "20070101,0,39\n20070102,62,0\n20070103,0,42\n20070104,57,0\n20070105,65,44\n20070106,55,44\n20070107,0,45\n20070108,66,0\n20070109,0,39\n";
    }

    function data_temp() {
        return "Date,NY,SF\n20070101,46;51;56,43;45;48\n20070102,43;48;52,48;56;63\n20070103,39;46;53,50;54;62\n20070104,44;51;58,45;52;56\n20070105,51;57;62,44;49;58\n20070106,55;64;72,40;50;60\n20070107,46;51;56,45;53;63\n20070108,40;49;57,43;53;64\n20070109,37;41;45,49;56;66\n20070110,31;35;38,45;49;54\n20070111,29;35;41,41;46;54\n20070112,39;45;50,41;44;49\n20070113,46;52;57,38;44;53\n20070114,42;44;46,36;43;51\n20070115,41;46;51,36;46;55\n20070116,25;41;57,37;45;54\n20070117,21;26;31,41;47;56\n20070118,25;32;38,38;48;61\n20070119,33;38;43,\n20070120,23;29;35,\n20070121,21;26;31,55;60;68\n20070122,28;31;34,44;54;66\n20070123,30;34;38,41;51;64\n20070124,34;37;40,42;51;64\n20070125,17;27;37,45;49;56\n20070126,11;18;24,44;48;52\n20070127,22;32;41,47;52;58\n20070128,32;38;43,48;52;60\n20070129,24;28;32,47;55;64\n20070130,23;30;37,51;54;56\n20070131,27;31;34,49;52;56\n20070201,28;33;37,46;50;52\n20070202,34;37;39,47;51;57\n20070203,25;32;38,42;51;62\n20070204,18;25;31,44;55;69\n20070205,10;15;20,48;55;68\n20070206,13;20;26,48;54;62\n20070207,14;21;27,51;56;62\n20070208,17;24;30,49;54;56\n20070209,20;27;33,55;56;58\n20070210,25;30;34,55;57;60\n20070211,21;28;34,51;55;59\n20070212,30;36;41,48;51;59\n20070213,23;29;34,48;52;58\n20070214,19;25;31,44;52;60\n20070215,17;21;25,49;55;65\n20070216,16;23;30,48;59;72\n20070217,22;29;36,51;62;77\n20070218,20;28;35,48;54;61\n20070219,14;22;29,48;53;61\n20070220,29;39;49,49;53;59\n20070221,39;44;49,50;54;61\n20070222,33;40;46,43;48;54\n20070223,23;32;40,43;48;54\n20070224,22;33;43,46;51;60\n20070225,26;33;39,49;52;55\n20070226,31;34;37,44;49;54\n20070227,35;39;43,40;45;52\n20070228,37;42;46,42;47;53\n20070301,33;39;45,44;49;55\n20070302,36;49;61,45;52;60\n20070303,37;48;59,48;58;68\n20070304,35;39;42,53;60;72\n20070305,23;33;42,52;58;67\n20070306,14;19;24,49;54;66\n20070307,14;20;25,50;53;60\n20070308,20;28;35,48;52;60\n20070309,15;25;34,49;53;58\n20070310,30;43;55,50;57;69\n20070311,40;45;50,53;63;79\n20070312,36;46;56,57;65;78\n20070313,44;49;54,52;58;68\n20070314,46;56;66,50;54;62\n20070315,37;53;69,51;59;75\n20070316,28;33;38,53;62;76\n20070317,27;35;42,50;53;57\n20070318,29;35;41,50;53;61\n20070319,33;38;43,49;53;59\n20070320,35;43;50,50;54;58\n20070321,27;34;41,48;55;62\n20070322,41;54;67,50;58;71\n20070323,46;54;62,49;56;67\n20070324,40;48;55,50;52;56\n20070325,38;46;53,50;53;56\n20070326,41;48;55,48;53;60\n20070327,48;62;75,46;50;56\n20070328,47;55;63,47;52;61\n20070329,40;48;56,49;57;68\n20070330,42;55;67,48;53;64\n20070331,44;51;57,49;55;68\n20070401,42;47;51,49;52;58\n20070402,42;48;54,48;54;68\n20070403,43;52;60,48;54;66\n20070404,41;43;45,50;56;67\n20070405,36;42;47,50;54;63\n20070406,34;39;43,48;51;55\n20070407,34;39;43,51;54;59\n20070408,32;37;42,51;55;61\n20070409,35;42;49,52;55;59\n20070410,36;43;50,50;56;67\n20070411,37;44;51,51;54;57\n20070412,41;43;45,48;53;58\n20070413,44;47;50,49;54;64\n20070414,42;50;57,50;53;56\n20070415,42;49;56,48;55;65\n20070416,40;47;54,52;58;69\n20070417,43;47;50,48;52;56\n20070418,43;48;53,46;50;55\n20070419,46;55;63,46;50;55\n20070420,46;59;71,47;52;60\n20070421,48;63;78,49;52;57\n20070422,52;64;76,51;55;59\n20070423,54;70;85,48;55;65\n20070424,59;67;75,49;54;63\n20070425,49;56;63,51;54;59\n20070426,48;55;62,50;54;63\n20070427,48;52;55,53;62;78\n20070428,53;63;72,52;61;78\n20070429,55;61;66,50;53;61\n20070430,55;68;81,51;57;66\n20070501,52;62;71,50;55;61\n20070502,51;61;71,52;56;62\n20070503,53;63;72,50;53;58\n20070504,52;62;71,50;54;60\n20070505,52;63;73,50;59;70\n20070506,48;55;62,57;72;86\n20070507,48;57;65,69;76;88\n20070508,50;60;70,53;68;79\n20070509,58;70;82,50;55;61\n20070510,62;71;79,50;54;61\n20070511,61;70;78,49;52;56\n20070512,55;64;73,50;54;60\n20070513,53;61;68,47;55;66\n20070514,52;61;69,49;53;60\n20070515,59;73;87,49;52;59\n20070516,63;76;89,48;55;66\n20070517,55;62;68,49;54;61\n20070518,49;52;55,50;55;63\n20070519,52;55;57,52;57;66\n20070520,55;67;78,51;57;67\n20070521,56;65;74,49;59;69\n20070522,55;64;73,52;61;71\n20070523,58;66;74,56;68;83\n20070524,61;75;88,50;56;69\n20070525,69;82;95,50;52;60\n20070526,73;80;86,50;52;60\n20070527,68;77;85,50;52;56\n20070528,67;77;87,50;55;64\n20070529,63;72;81,51;54;59\n20070530,62;73;84,53;54;57\n20070531,67;79;90,52;54;57\n20070601,64;78;92,50;53;59\n20070602,73;82;90,50;52;56\n20070603,65;73;81,51;54;61\n20070604,60;66;71,55;59;65\n20070605,68;77;85,54;57;61\n20070606,58;65;72,52;56;62\n20070607,58;67;76,51;57;68\n20070608,66;76;85,51;54;62\n20070609,64;73;81,50;58;66\n20070610,63;69;74,53;58;64\n20070611,66;76;85,52;58;66\n20070612,68;76;84,52;60;72\n20070613,59;65;70,57;68;80\n20070614,58;63;67,57;67;84\n20070615,62;68;73,54;62;76\n20070616,64;73;82,52;55;59\n20070617,69;80;90,52;59;70\n20070618,70;78;85,52;56;64\n20070619,69;76;83,54;58;65\n20070620,70;75;80,54;56;61\n20070621,65;75;85,53;59;67\n20070622,65;71;77,53;59;67\n20070623,61;69;77,53;58;67\n20070624,63;74;84,52;58;66\n20070625,71;78;84,52;60;75\n20070626,73;84;94,51;57;65\n20070627,73;84;95,53;59;67\n20070628,73;84;94,54;61;72\n20070629,70;75;79,55;61;72\n20070630,68;76;84,53;58;66\n20070701,64;70;75,52;59;68\n20070702,60;68;76,55;62;71\n20070703,65;74;82,54;59;64\n20070704,68;71;73,55;64;75\n20070705,69;76;82,55;62;72\n20070706,70;79;87,53;57;62\n20070707,72;80;88,52;54;58\n20070708,76;85;93,53;57;65\n20070709,71;84;96,55;59;67\n20070710,75;84;93,56;61;70\n20070711,74;81;88,59;65;74\n20070712,69;77;84,58;66;75\n20070713,75;80;85,57;65;78\n20070714,70;78;86,56;60;69\n20070715,75;83;91,57;63;72\n20070716,72;78;83,56;60;67\n20070717,71;80;88,56;62;73\n20070718,71;75;79,61;66;74\n20070719,71;82;92,58;62;72\n20070720,69;75;81,58;64;73\n20070721,67;76;84,60;66;76\n20070722,70;77;84,60;65;74\n20070723,65;71;76,58;64;76\n20070724,63;73;83,56;60;71\n20070725,71;78;85,56;59;64\n20070726,73;80;86,55;58;72\n20070727,75;82;88,55;60;72\n20070728,74;81;88,55;61;70\n20070729,74;77;80,55;60;74\n20070730,72;80;88,55;63;80\n20070731,74;82;90,54;59;68\n20070801,75;84;93,55;60;69\n20070802,76;87;98,55;61;70\n20070803,73;83;93,54;60;71\n20070804,75;84;92,54;58;67\n20070805,72;78;84,55;58;62\n20070806,75;81;86,56;60;68\n20070807,78;84;90,56;61;69\n20070808,75;85;95,56;59;65\n20070809,74;80;85,57;61;72\n20070810,59;67;75,55;62;73\n20070811,60;72;83,56;60;68\n20070812,73;81;88,54;60;70\n20070813,75;82;88,55;61;74\n20070814,71;77;83,55;60;71\n20070815,72;81;89,54;61;70\n20070816,77;82;87,57;62;72\n20070817,66;77;87,53;64;77\n20070818,62;69;76,56;62;71\n20070819,62;68;73,57;64;75\n20070820,61;67;73,59;65;74\n20070821,58;60;62,58;65;80\n20070822,58;64;69,57;65;80\n20070823,63;71;79,56;62;73\n20070824,67;77;86,58;62;70\n20070825,75;83;91,58;62;71\n20070826,75;80;85,57;61;68\n20070827,71;77;83,56;61;71\n20070828,72;78;84,55;66;82\n20070829,72;79;86,61;69;83\n20070830,73;81;88,62;71;82\n20070831,72;77;81,59;64;72\n20070901,66;73;79,58;66;80\n20070902,63;72;80,58;67;86\n20070903,67;77;86,58;63;71\n20070904,73;79;85,60;64;72\n20070905,69;74;79,58;68;84\n20070906,70;77;83,60;64;69\n20070907,72;80;88,59;63;71\n20070908,74;82;90,58;61;66\n20070909,74;80;86,59;61;66\n20070910,73;76;78,60;64;71\n20070911,72;75;77,59;62;70\n20070912,66;72;77,59;62;65\n20070913,65;71;76,59;65;74\n20070914,67;72;77,60;66;74\n20070915,58;65;71,58;62;72\n20070916,55;62;69,59;63;71\n20070917,56;63;70,56;62;71\n20070918,57;65;72,56;60;67\n20070919,59;68;76,54;57;63\n20070920,64;74;83,54;59;72\n20070921,68;76;84,58;62;73\n20070922,68;72;76,58;60;65\n20070923,67;75;82,56;61;67\n20070924,65;73;81,52;62;78\n20070925,66;78;89,54;66;86\n20070926,72;81;90,58;70;92\n20070927,73;79;84,57;61;68\n20070928,64;71;77,55;59;63\n20070929,62;69;76,51;60;74\n20070930,61;67;73,51;60;71\n20071001,62;67;71,56;62;71\n20071002,60;68;75,54;62;76\n20071003,66;73;80,53;59;67\n20071004,69;77;85,53;55;59\n20071005,67;75;83,51;56;62\n20071006,68;77;85,48;57;68\n20071007,67;75;82,51;59;75\n20071008,67;78;89,52;59;78\n20071009,61;72;83,52;59;67\n20071010,62;68;73,\n20071011,59;64;69,\n20071012,51;57;62,\n20071013,49;56;63,\n20071014,52;59;65,\n20071015,53;61;69,\n20071016,58;65;71,\n20071017,60;67;73,\n20071018,64;72;79,\n20071019,66;70;74,\n20071020,64;68;72,\n20071021,59;68;76,\n20071022,62;70;77,\n20071023,67;74;81,\n20071024,54;62;70,\n20071025,52;57;61,\n20071026,53;57;60,\n20071027,59;65;70,\n20071028,46;53;59,\n20071029,43;49;54,\n20071030,49;57;64,\n20071031,51;58;64,53;60;67\n20071101,52;60;67,51;56;72\n20071102,46;51;56,49;60;82\n20071103,47;50;53,50;61;79\n20071104,49;53;56,53;62;80\n20071105,48;53;58,50;54;59\n20071106,45;52;58,50;54;61\n20071107,42;46;50,50;53;59\n20071108,38;43;48,53;56;60\n20071109,40;44;48,53;58;66\n20071110,39;43;47,52;57;62\n20071111,34;41;48,51;56;64\n20071112,40;46;52,47;56;68\n20071113,49;55;61,57;61;73\n20071114,44;53;61,53;61;72\n20071115,45;54;62,56;59;67\n20071116,39;44;48,54;56;61\n20071117,38;43;47,53;56;61\n20071118,41;44;47,53;57;63\n20071119,39;43;46,50;56;60\n20071120,40;45;50,48;54;63\n20071121,44;51;58,44;53;66\n20071122,42;54;66,46;54;68\n20071123,32;37;42,44;57;72\n20071124,28;34;40,44;54;65\n20071125,37;44;50,51;55;62\n20071126,41;52;63,47;54;65\n20071127,46;56;65,50;55;65\n20071128,37;42;47,47;56;66\n20071129,42;47;52,48;53;64\n20071130,37;40;43,45;49;57\n20071201,26;34;42,46;49;56\n20071202,21;30;38,47;54;59\n20071203,34;42;49,52;59;64\n20071204,30;33;35,31;57;69\n20071205,29;32;34,52;56;63\n20071206,23;30;37,51;52;54\n20071207,34;35;36,48;52;57\n20071208,35;40;45,42;49;56\n20071209,36;39;41,44;51;59\n20071210,37;40;43,45;50;59\n20071211,36;41;46,46;52;59\n20071212,37;46;54,42;49;57\n20071213,30;34;38,42;49;59\n20071214,32;39;45,40;48;57\n20071215,30;34;38,43;49;56\n20071216,31;36;40,46;51;57\n20071217,27;31;35,48;52;56\n20071218,31;35;38,49;52;55\n20071219,35;41;47,46;51;57\n20071220,38;42;45,45;51;56\n20071221,36;39;42,43;48;54\n20071222,36;39;42,39;46;53\n20071223,41;52;62,44;51;61\n20071224,39;46;52,49;53;60\n20071225,38;41;44,41;49;57\n20071226,34;38;41,44;48;55\n20071227,37;42;46,41;46;52\n20071228,43;47;50,41;44;45\n20071229,43;48;53,45;48;52\n20071230,37;41;44,46;49;53\n20071231,36;41;46,38;47;56\n20080101,35;42;49,42;50;58\n20080102,19;29;39,43;50;60\n20080103,15;19;23,51;53;58\n20080104,19;28;37,51;53;59\n20080105,33;38;43,46;49;51\n20080106,37;42;47,42;47;51\n20080107,42;52;61,43;48;53\n20080108,52;58;64,44;49;53\n20080109,49;58;66,46;49;52\n20080110,42;47;51,48;50;51\n20080111,41;49;57,48;51;55\n20080112,40;45;49,46;51;58\n20080113,37;42;47,44;51;60\n20080114,34;37;39,46;51;58\n20080115,34;37;40,44;49;57\n20080116,31;36;40,41;50;60\n20080117,30;36;41,44;50;61\n20080118,37;43;49,42;52;63\n20080119,34;36;37,42;50;62\n20080120,19;27;35,46;49;53\n20080121,16;22;28,43;45;46\n20080122,25;33;40,42;44;47\n20080123,32;37;41,42;44;49\n20080124,26;31;35,43;44;45\n20080125,23;29;34,45;49;52\n20080126,27;31;35,52;55;62\n20080127,31;35;39,45;51;54\n20080128,29;36;43,42;46;51\n20080129,33;39;44,41;45;49\n20080130,34;42;50,42;47;54\n20080131,30;35;40,45;48;52\n20080201,33;45;56,40;46;52\n20080202,36;40;44,42;47;53\n20080203,33;42;50,46;49;52\n20080204,34;39;43,43;49;58\n20080205,38;45;52,40;49;58\n20080206,40;55;69,47;50;55\n20080207,39;45;50,43;50;58\n20080208,36;41;46,46;53;65\n20080209,37;41;45,46;57;69\n20080210,17;31;45,49;57;70\n20080211,12;19;25,48;56;69\n20080212,19;25;31,46;54;70\n20080213,31;43;54,48;57;65\n20080214,30;36;41,49;54;64\n20080215,32;40;48,46;52;60\n20080216,25;30;35,45;51;64\n20080217,30;42;53,46;50;55\n20080218,42;53;64,47;50;58\n20080219,29;36;42,48;51;53\n20080220,25;29;33,48;51;57\n20080221,22;28;34,48;51;56\n20080222,26;30;34,46;50;56\n20080223,30;33;36,43;48;54\n20080224,27;34;40,52;54;58\n20080225,33;41;49,49;55;63\n20080226,38;43;48,48;58;70\n20080227,24;36;47,52;58;71\n20080228,20;25;29,48;56;74\n20080229,19;28;36,48;52;62\n20080301,34;40;45,50;53;59\n20080302,30;36;43,49;59;71\n20080303,35;44;52,47;57;72\n20080304,43;53;62,46;55;68\n20080305,39;49;58,46;55;71\n20080306,36;43;49,47;55;65\n20080307,35;40;45,48;56;69\n20080308,38;48;57,49;55;66\n20080309,31;37;43,47;58;76\n20080310,28;37;46,52;58;70\n20080311,36;43;49,50;54;66\n20080312,36;42;48,48;53;63\n20080313,33;39;45,30;55;61\n20080314,39;46;53,49;52;58\n20080315,42;49;55,43;50;57\n20080316,36;42;47,47;55;68\n20080317,32;41;49,49;56;66\n20080318,36;41;46,48;55;64\n20080319,42;47;52,49;52;60\n20080320,37;48;59,46;51;59\n20080321,35;41;47,47;54;67\n20080322,35;43;50,46;55;73\n20080323,32;40;48,46;54;66\n20080324,33;41;49,47;54;64\n20080325,32;39;46,49;53;59\n20080326,43;52;60,48;52;60\n20080327,44;47;50,45;50;59\n20080328,40;45;49,46;52;60\n20080329,34;41;47,48;52;59\n20080330,28;37;46,44;49;56\n20080331,39;48;57,41;50;62\n20080401,55;60;64,49;53;60\n20080402,39;47;54,48;54;62\n20080403,35;42;49,48;53;62\n20080404,42;49;55,45;50;57\n20080405,49;54;59,46;50;57\n20080406,42;46;50,48;52;59\n20080407,41;46;51,45;51;59\n20080408,41;48;55,47;50;55\n20080409,39;48;56,47;52;59\n20080410,48;62;75,46;55;66\n20080411,47;54;61,50;65;84\n20080412,47;61;74,57;71;87\n20080413,44;50;55,51;64;80\n20080414,41;49;56,48;52;58\n20080415,43;51;59,45;51;60\n20080416,46;56;65,46;51;66\n20080417,45;59;72,49;57;75\n20080418,50;67;83,48;52;60\n20080419,51;62;72,45;49;55\n20080420,48;52;56,43;48;55\n20080421,47;52;57,44;49;57\n20080422,48;59;69,48;54;64\n20080423,52;64;76,48;53;60\n20080424,58;68;77,45;53;65\n20080425,55;63;70,48;57;69\n20080426,52;58;63,51;62;78\n20080427,49;52;55,53;62;77\n20080428,48;54;59,49;56;66\n20080429,47;53;58,50;53;61\n20080430,44;51;57,47;52;60\n20080501,45;52;59,47;55;66\n20080502,50;53;55,49;53;60\n20080503,48;52;56,48;54;63\n20080504,49;61;72,49;52;59\n20080505,51;61;71,48;53;61\n20080506,52;65;77,49;56;68\n20080507,58;66;73,49;55;65\n20080508,64;69;74,48;53;62\n20080509,50;57;64,46;54;65\n20080510,50;59;67,47;54;64\n20080511,50;56;61,48;54;64\n20080512,48;53;57,50;56;66\n20080513,52;61;70,49;61;78\n20080514,53;64;74,55;69;85\n20080515,54;64;73,68;81;102\n20080516,51;56;61,65;77;99\n20080517,50;62;74,52;63;73\n20080518,56;62;67,51;54;62\n20080519,51;56;61,50;54;60\n20080520,50;54;58,52;56;63\n20080521,50;60;69,50;57;65\n20080522,50;56;61,52;58;68\n20080523,52;60;68,49;55;65\n20080524,56;63;70,51;54;62\n20080525,58;68;77,50;56;64\n20080526,60;68;76,50;55;62\n20080527,60;73;85,51;56;64\n20080528,53;61;69,52;58;67\n20080529,54;66;78,53;57;63\n20080530,62;72;82,52;56;66\n20080531,63;70;77,52;54;60\n20080601,67;76;84,49;55;63\n20080602,61;71;80,49;54;62\n20080603,65;75;84,51;55;62\n20080604,58;65;71,51;54;62\n20080605,62;67;72,51;58;70\n20080606,59;66;73,51;57;66\n20080607,60;78;96,50;59;70\n20080608,78;87;96,52;61;74\n20080609,76;88;99,54;66;83\n20080610,73;87;100,53;64;77\n20080611,72;80;88,57;65;79\n20080612,71;79;86,55;67;93\n20080613,65;74;82,50;56;65\n20080614,70;80;90,52;56;65\n20080615,65;74;83,50;54;61\n20080616,64;71;78,49;52;58\n20080617,64;71;77,48;60;78\n20080618,60;68;75,54;65;79\n20080619,60;69;77,57;72;92\n20080620,63;71;79,63;80;102\n20080621,65;75;85,56;75;85\n20080622,71;76;80,51;56;63\n20080623,70;77;83,50;52;56\n20080624,70;76;81,50;58;71\n20080625,68;77;85,51;56;64\n20080626,74;80;85,50;57;70\n20080627,76;81;85,52;57;62\n20080628,70;80;90,55;58;64\n20080629,74;82;90,53;57;65\n20080630,73;79;85,52;57;68\n20080701,71;79;86,53;58;67\n20080702,69;78;87,52;56;65\n20080703,73;83;93,54;60;71\n20080704,71;76;80,55;60;69\n20080705,69;72;75,56;62;74\n20080706,68;74;79,56;62;74\n20080707,70;78;85,56;66;80\n20080708,76;84;91,59;69;86\n20080709,75;81;87,62;69;82\n20080710,73;80;87,59;64;72\n20080711,69;79;89,58;64;73\n20080712,73;80;86,60;64;73\n20080713,72;79;85,60;64;71\n20080714,70;77;83,59;62;68\n20080715,72;81;90,59;62;70\n20080716,71;81;90,57;60;66\n20080717,74;83;92,54;58;65\n20080718,76;86;96,52;56;64\n20080719,81;89;97,53;57;63\n20080720,79;87;94,52;55;63\n20080721,75;84;93,54;57;63\n20080722,73;80;87,52;60;73\n20080723,70;76;82,54;61;76\n20080724,70;78;85,52;60;72\n20080725,71;79;87,52;61;72\n20080726,74;81;88,55;65;79\n20080727,70;76;82,55;57;62\n20080728,69;79;88,54;57;65\n20080729,75;83;90,55;59;68\n20080730,73;80;87,56;60;69\n20080731,75;83;90,55;58;69\n20080801,74;81;88,55;62;74\n20080802,69;76;82,55;64;79\n20080803,68;76;83,54;57;62\n20080804,68;77;85,53;56;65\n20080805,73;79;84,52;56;64\n20080806,72;80;88,54;57;68\n20080807,68;77;86,54;57;66\n20080808,68;75;82,54;58;66\n20080809,66;74;82,54;59;67\n20080810,69;76;82,53;64;79\n20080811,60;67;73,56;63;78\n20080812,63;72;81,55;63;79\n20080813,69;75;81,56;64;82\n20080814,68;76;84,55;61;74\n20080815,67;74;81,55;62;75\n20080816,66;74;82,57;60;66\n20080817,69;77;85,57;60;69\n20080818,73;81;88,58;62;68\n20080819,65;74;82,58;62;73\n20080820,61;69;77,58;65;74\n20080821,66;74;81,60;64;73\n20080822,69;76;83,58;62;72\n20080823,67;74;80,57;62;71\n20080824,71;76;81,57;64;73\n20080825,68;77;85,58;62;72\n20080826,62;71;80,55;61;79\n20080827,64;71;77,59;70;88\n20080828,66;75;84,62;72;86\n20080829,68;74;80,59;67;84\n20080830,68;76;84,57;61;70\n20080831,69;77;84,54;61;73\n20080901,68;76;84,57;68;83\n20080902,71;79;86,58;68;85\n20080903,70;76;81,59;69;87\n20080904,72;81;90,60;73;94\n20080905,73;80;86,63;74;92\n20080906,72;78;83,63;72;84\n20080907,70;77;83,56;62;70\n20080908,68;76;83,55;60;67\n20080909,67;73;78,58;60;65\n20080910,63;68;73,57;61;68\n20080911,62;68;73,56;60;66\n20080912,65;69;72,55;57;63\n20080913,68;74;79,55;59;67\n20080914,71;80;89,55;59;67\n20080915,67;76;84,54;58;67\n20080916,63;67;70,54;58;65\n20080917,61;68;75,56;60;67\n20080918,61;68;74,53;60;70\n20080919,55;61;66,55;62;72\n20080920,54;61;68,59;62;69\n20080921,59;70;80,57;61;70\n20080922,62;68;73,55;64;79\n20080923,57;63;69,56;67;85\n20080924,58;64;69,57;64;74\n20080925,56;62;67,57;65;76\n20080926,60;64;68,56;63;75\n20080927,64;67;69,54;62;78\n20080928,67;71;74,55;59;65\n20080929,63;68;73,57;61;67\n20080930,62;68;73,57;63;76\n20081001,61;67;73,59;64;74\n20081002,56;60;64,60;65;73\n20081003,54;60;65,59;63;71\n20081004,53;58;63,58;62;68\n20081005,54;59;63,57;62;69\n20081006,51;57;63,59;64;76\n20081007,48;56;64,56;64;79\n20081008,52;59;66,58;64;75\n20081009,60;69;77,54;61;71\n20081010,61;67;73,54;58;64\n20081011,57;64;71,55;60;67\n20081012,57;64;71,55;62;72\n20081013,60;68;75,58;64;77\n20081014,59;64;68,53;63;80\n20081015,60;66;71,55;65;83\n20081016,57;68;78,58;68;86\n20081017,52;56;60,59;69;86\n20081018,44;51;57,53;58;65\n20081019,43;51;58,52;54;57\n20081020,45;54;62,51;57;65\n20081021,46;55;63,52;62;79\n20081022,42;47;52,55;67;83\n20081023,40;47;54,61;70;85\n20081024,43;50;57,59;66;86\n20081025,54;61;67,57;67;82\n20081026,51;57;63,52;57;66\n20081027,50;57;64,51;55;65\n20081028,41;46;51,50;55;65\n20081029,40;44;48,49;54;64\n20081030,38;44;49,51;56;61\n20081031,42;53;64,58;61;66\n20081101,52;59;65,34;58;63\n20081102,39;46;52,\n20081103,44;52;59,53;56;61\n20081104,50;57;64,51;54;61\n20081105,55;59;63,46;55;66\n20081106,59;62;65,54;60;72\n20081107,58;62;65,52;60;75\n20081108,55;58;60,53;56;62\n20081109,50;53;56,52;56;63\n20081110,44;48;51,49;55;62\n20081111,40;46;51,53;58;64\n20081112,43;47;50,56;59;68\n20081113,47;53;58,52;61;74\n20081114,55;59;63,55;67;80\n20081115,58;62;65,60;70;82\n20081116,42;52;61,58;66;78\n20081117,39;43;47,57;66;77\n20081118,31;36;41,52;56;62\n20081119,28;33;37,52;54;57\n20081120,31;35;39,54;58;66\n20081121,27;33;39,47;55;67\n20081122,25;29;33,47;55;68\n20081123,26;32;37,49;56;69\n20081124,33;43;53,49;56;64\n20081125,38;43;48,52;57;61\n20081126,38;42;45,53;55;58\n20081127,37;41;44,53;55;61\n20081128,38;44;50,50;54;60\n20081129,38;42;45,50;57;68\n20081130,36;40;44,51;58;70\n20081201,43;49;55,53;55;57\n20081202,38;42;46,52;56;64\n20081203,35;39;43,50;54;59\n20081204,39;45;51,47;53;62\n20081205,34;38;42,46;54;66\n20081206,31;34;37,47;53;62\n20081207,22;30;37,44;50;56\n20081208,20;26;31,46;51;55\n20081209,31;44;56,42;50;59\n20081210,44;54;63,47;52;63\n20081211,38;41;44,48;54;63\n20081212,33;40;46,48;53;60\n20081213,28;31;33,45;49;55\n20081214,30;40;49,43;46;50\n20081215,48;58;67,41;46;51\n20081216,31;45;59,39;42;47\n20081217,33;39;44,39;45;53\n20081218,37;40;43,38;47;55\n20081219,30;35;39,45;50;55\n20081220,23;28;32,39;46;54\n20081221,26;33;40,46;48;51\n20081222,14;22;29,44;49;54\n20081223,20;26;31,43;48;53\n20081224,31;45;58,46;50;54\n20081225,35;47;58,45;48;53\n20081226,32;37;41,\n20081227,40;44;48,\n20081228,47;56;65,\n20081229,38;44;49,47;53;63\n20081230,34;39;44,46;51;58\n20081231,19;28;36,45;48;55\n20090101,16;22;27,44;48;51\n20090102,24;30;36,45;50;55\n20090103,30;35;39,40;46;54\n20090104,26;35;43,36;45;54\n20090105,39;42;44,45;46;48\n20090106,31;35;39,44;49;54\n20090107,32;36;40,44;47;52\n20090108,30;35;39,46;49;56\n20090109,27;30;33,41;51;62\n20090110,24;27;30,48;56;66\n20090111,26;29;32,44;55;70\n20090112,23;29;34,49;62;76\n20090113,29;35;41,55;64;75\n20090114,18;28;37,48;59;70\n20090115,17;20;23,48;60;74\n20090116,11;15;18,48;60;72\n20090117,8;15;22,48;57;68\n20090118,22;28;33,49;58;70\n20090119,26;30;33,46;58;71\n20090120,22;26;30,47;58;71\n20090121,19;24;28,52;57;62\n20090122,22;30;37,51;53;55\n20090123,28;37;45,53;55;56\n20090124,18;33;47,49;52;55\n20090125,15;22;28,46;50;55\n20090126,20;25;30,43;49;57\n20090127,26;29;31,43;50;58\n20090128,24;33;42,43;51;61\n20090129,27;32;37,44;56;70\n20090130,28;32;35,47;56;69\n20090131,21;25;28,44;52;69\n20090201,28;41;53,44;54;70\n20090202,33;43;52,47;57;69\n20090203,26;32;37,47;57;71\n20090204,18;25;31,47;55;67\n20090205,14;19;24,51;54;58\n20090206,17;25;32,51;53;55\n20090207,24;37;49,48;54;63\n20090208,38;49;59,45;50;56\n20090209,35;41;46,43;47;56\n20090210,33;42;50,38;47;54\n20090211,38;51;63,43;48;56\n20090212,44;51;57,44;48;55\n20090213,32;38;44,43;46;54\n20090214,29;35;41,43;48;54\n20090215,30;36;42,46;48;51\n20090216,29;35;40,47;49;56\n20090217,26;34;41,47;50;54\n20090218,32;38;43,45;52;60\n20090219,28;39;50,43;54;66\n20090220,24;29;34,49;57;68\n20090221,28;35;42,50;56;63\n20090222,32;38;43,53;55;58\n20090223,25;30;34,52;56;60\n20090224,23;30;37,50;52;53\n20090225,26;34;41,51;55;61\n20090226,35;43;50,48;54;60\n20090227,40;49;58,46;53;62\n20090228,32;43;54,50;56;66\n20090301,28;32;35,54;57;59\n20090302,18;23;28,53;56;61\n20090303,14;21;28,48;52;58\n20090304,19;27;35,44;50;58\n20090305,28;36;43,46;51;60\n20090306,38;46;54,47;52;58\n20090307,46;58;69,43;52;65\n20090308,44;53;62,50;53;60\n20090309,37;42;46,\n20090310,37;42;46,\n20090311,41;50;59,\n20090312,32;38;44,\n20090313,27;33;38,\n20090314,34;42;50,\n20090315,42;48;53,\n20090316,38;42;46,\n20090317,36;44;52,\n20090318,40;51;61,\n20090319,41;46;50,\n20090320,33;39;44,\n20090321,32;40;47,53;55;60\n20090322,36;45;53,45;50;58\n20090323,30;36;42,44;51;59\n20090324,29;38;47,43;54;66\n20090325,36;44;52,47;56;68\n20090326,40;43;45,51;58;68\n20090327,43;53;63,52;61;75\n20090328,42;48;53,51;59;71\n20090329,42;47;52,48;56;64\n20090330,42;47;51,51;57;68\n20090331,40;50;60,47;56;70\n20090401,42;46;50,50;57;68\n20090402,42;51;59,48;52;60\n20090403,44;53;61,47;53;61\n20090404,48;52;55,43;55;70\n20090405,45;56;66,46;61;80\n20090406,44;48;51,51;61;79\n20090407,40;45;50,51;55;63\n20090408,37;43;49,50;55;64\n20090409,38;50;61,50;53;58\n20090410,46;52;58,48;54;63\n20090411,43;47;50,46;53;61\n20090412,38;43;48,49;56;66\n20090413,36;47;57,49;56;65\n20090414,43;48;53,45;50;57\n20090415,43;49;54,46;46;47\n20090416,44;53;62,44;52;61\n20090417,44;57;69,46;54;70\n20090418,56;67;78,52;62;74\n20090419,47;54;61,51;70;92\n20090420,43;47;51,60;77;99\n20090421,47;52;56,64;78;93\n20090422,49;53;57,52;62;71\n20090423,45;51;57,50;54;61\n20090424,45;57;69,48;52;59\n20090425,50;69;88,45;52;60\n20090426,63;77;91,46;53;63\n20090427,53;66;79,48;51;57\n20090428,68;79;89,47;52;60\n20090429,50;59;68,46;53;61\n20090430,46;54;61,47;54;69\n20090501,54;63;72,51;56;62\n20090502,56;62;67,55;59;65\n20090503,53;56;58,53;59;66\n20090504,51;54;56,52;60;71\n20090505,51;54;56,57;61;69\n20090506,49;57;65,55;61;73\n20090507,52;63;73,51;61;72\n20090508,56;65;74,51;60;71\n20090509,57;68;78,50;57;69\n20090510,55;63;70,50;57;68\n20090511,51;59;66,50;56;65\n20090512,52;60;68,47;57;67\n20090513,51;60;68,50;59;70\n20090514,57;62;66,51;58;69\n20090515,58;66;74,51;58;67\n20090516,58;65;71,54;70;93\n20090517,53;59;64,55;70;92\n20090518,50;55;59,51;55;63\n20090519,50;60;69,51;56;64\n20090520,53;67;81,49;55;62\n20090521,64;73;81,49;54;65\n20090522,63;75;86,51;54;63\n20090523,59;68;76,50;52;56\n20090524,57;71;84,49;51;56\n20090525,64;73;81,49;54;63\n20090526,53;60;66,49;59;73\n20090527,52;56;60,52;57;64\n20090528,56;58;59,51;55;62\n20090529,55;65;74,52;57;63\n20090530,63;71;78,54;56;62\n20090531,58;70;82,53;55;60\n20090601,53;61;69,53;56;61\n20090602,63;72;80,52;57;68\n20090603,54;64;73,53;58;67\n20090604,54;62;69,55;59;67\n20090605,55;59;62,57;62;70\n20090606,58;68;78,57;61;68\n20090607,66;74;82,56;61;67\n20090608,63;70;77,55;58;62\n20090609,60;67;73,56;60;66\n20090610,59;62;65,57;61;69\n20090611,59;61;63,56;60;68\n20090612,62;71;80,56;60;67\n20090613,64;68;71,56;62;70\n20090614,61;67;72,57;62;69\n20090615,58;65;71,58;61;68\n20090616,56;62;68,57;59;66\n20090617,57;63;69,57;60;66\n20090618,62;64;66,56;63;75\n20090619,63;71;79,55;62;71\n20090620,63;68;72,53;59;69\n20090621,63;71;78,53;60;70\n20090622,67;71;75,54;62;75\n20090623,67;74;80,54;63;77\n20090624,66;71;75,54;59;69\n20090625,65;73;81,54;58;66\n20090626,65;75;85,53;60;70\n20090627,66;74;81,53;68;85\n20090628,68;75;82,60;68;78\n20090629,68;76;83,56;61;68\n20090630,67;76;84,56;61;68\n20090701,67;73;79,56;61;68\n20090702,66;72;77,56;60;66\n20090703,68;74;80,55;58;65\n20090704,68;75;81,54;60;67\n20090705,64;72;80,55;57;63\n20090706,68;77;85,54;60;69\n20090707,62;73;83,56;58;62\n20090708,61;69;77,52;62;71\n20090709,62;68;73,53;59;68\n20090710,63;69;75,54;59;66\n20090711,65;71;77,53;58;68\n20090712,66;75;83,53;60;70\n20090713,65;72;79,53;66;84\n20090714,66;74;81,58;68;86\n20090715,67;75;83,53;59;66\n20090716,73;79;85,52;57;69\n20090717,69;79;88,52;58;69\n20090718,71;78;84,54;60;74\n20090719,68;76;83,54;61;73\n20090720,68;75;82,54;57;62\n20090721,65;68;71,53;56;61\n20090722,67;75;82,52;56;60\n20090723,64;72;80,52;55;61\n20090724,65;73;80,53;56;62\n20090725,67;77;86,52;56;67\n20090726,71;79;86,53;57;72\n20090727,71;78;85,52;57;70\n20090728,73;80;87,55;58;63\n20090729,73;78;83,58;58;58\n20090730,74;81;87,56;60;65\n20090731,69;79;89,55;58;64\n20090801,69;77;85,55;58;64\n20090802,73;76;78,56;60;66\n20090803,72;79;85,56;62;70\n20090804,72;79;86,57;64;73\n20090805,74;82;89,58;62;72\n20090806,68;74;79,59;63;71\n20090807,67;74;80,58;63;71\n20090808,65;72;78,58;64;76\n20090809,71;76;81,57;66;82\n20090810,71;83;94,59;66;82\n20090811,77;85;92,58;61;66\n20090812,71;76;80,57;66;79\n20090813,70;72;74,57;63;74\n20090814,69;77;85,56;61;70\n20090815,73;81;89,55;62;76\n20090816,75;83;91,55;62;73\n20090817,77;85;93,55;58;64\n20090818,73;82;91,55;59;65\n20090819,75;83;91,57;59;65\n20090820,76;83;89,56;60;67\n20090821,75;84;92,56;62;78\n20090822,72;79;85,56;59;64\n20090823,75;81;86,55;58;65\n20090824,72;78;84,54;58;64\n20090825,71;79;86,55;60;70\n20090826,74;81;87,55;59;68\n20090827,68;74;80,53;66;87\n20090828,66;70;73,63;76;97\n20090829,67;70;73,58;73;87\n20090830,66;75;83,55;57;62\n20090831,64;68;72,54;59;69\n20090901,59;67;74,58;63;72\n20090902,61;69;77,61;70;90\n20090903,64;71;78,58;67;79\n20090904,65;74;83,54;59;66\n20090905,71;78;85,56;62;70\n20090906,64;69;74,57;62;69\n20090907,61;67;72,56;63;73\n20090908,65;70;75,55;61;71\n20090909,65;71;76,54;58;66\n20090910,61;66;71,55;65;82\n20090911,58;64;69,54;62;76\n20090912,65;67;68,58;60;64\n20090913,67;74;81,59;64;73\n20090914,65;72;79,58;63;69\n20090915,68;75;81,57;63;73\n20090916,63;67;71,58;63;72\n20090917,57;61;65,59;67;79\n20090918,58;68;77,62;70;89\n20090919,55;63;71,58;62;73\n20090920,57;66;75,57;63;76\n20090921,61;69;76,56;61;71\n20090922,66;71;75,55;62;77\n20090923,69;76;82,56;58;65\n20090924,68;75;82,55;58;65\n20090925,59;64;69,55;61;73\n20090926,55;61;66,53;66;87\n20090927,60;65;69,59;68;84\n20090928,60;67;74,56;59;63\n20090929,58;63;68,55;58;64\n20090930,51;56;60,51;58;70\n20091001,51;54;57,52;64;79\n20091002,49;58;66,55;63;77\n20091003,65;68;71,52;57;63\n20091004,59;68;76,50;55;62\n20091005,55;62;68,50;57;68\n20091006,54;61;68,50;60;74\n20091007,59;65;71,53;58;68\n20091008,55;60;64,54;57;62\n20091009,61;66;71,52;56;63\n20091010,54;61;68,51;54;59\n20091011,50;58;65,51;54;59\n20091012,46;51;55,56;60;66\n20091013,47;56;64,58;61;64\n20091014,44;49;53,63;66;76\n20091015,39;44;48,64;67;76\n20091016,39;44;49,59;67;79\n20091017,44;47;50,56;64;74\n20091018,43;45;47,56;59;63\n20091019,41;50;58,57;60;68\n20091020,47;58;68,56;59;67\n20091021,53;61;69,54;60;71\n20091022,55;66;76,57;62;72\n20091023,51;59;66,55;63;75\n20091024,53;60;67,55;61;74\n20091025,53;59;65,54;64;81\n20091026,49;55;61,57;62;71\n20091027,50;54;58,54;59;69\n20091028,51;55;58,53;58;67\n20091029,49;54;58,51;58;67\n20091030,52;56;60,52;59;74\n20091031,56;64;71,53;58;72\n20091101,50;55;60,52;63;77\n20091102,48;52;55,56;66;81\n20091103,46;54;62,56;66;80\n20091104,44;48;52,54;58;65\n20091105,44;49;53,57;61;68\n20091106,41;46;50,53;59;63\n20091107,38;46;53,49;56;65\n20091108,48;60;71,50;57;68\n20091109,48;58;67,49;56;64\n20091110,56;60;64,54;58;66\n20091111,49;54;58,54;58;65\n20091112,48;51;53,51;56;62\n20091113,49;52;55,48;53;60\n20091114,52;55;58,50;54;61\n20091115,54;59;63,44;53;65\n20091116,49;54;59,47;54;66\n20091117,46;51;55,45;54;64\n20091118,43;48;53,48;53;62\n20091119,48;55;61,44;53;63\n20091120,50;56;61,46;52;58\n20091121,47;52;57,47;51;59\n20091122,46;51;56,49;53;59\n20091123,45;53;60,44;54;66\n20091124,49;53;57,48;58;69\n20091125,49;51;53,\n20091126,49;52;54,50;55;67\n20091127,44;47;50,51;54;58\n20091128,44;48;51,\n20091129,42;51;59,49;60;71\n20091130,41;49;57,48;55;64\n20091201,38;43;48,46;52;64\n20091202,40;49;57,45;48;55\n20091203,51;59;66,46;50;58\n20091204,46;49;52,44;48;57\n20091205,37;42;47,\n";
    }

    var stockData = function() {
        return "Month,Nominal,Real\n1913-01-15,59.740;61.330;64.880,609.591836734694;625.816326530612;662.04081632653\n1913-02-15,57.670;58.840;61.140,588.469387755102;600.408163265306;623.877551020408\n1913-03-15,57.320;59.280;59.840,584.897959183673;604.897959183673;610.612244897959\n1913-04-15,57.430;57.540;60.940,586.020408163265;587.142857142857;621.836734693877\n1913-05-15,57.420;57.420;58.570,591.958762886598;591.958762886598;603.814432989691\n1913-06-15,52.830;54.860;56.610,539.081632653061;559.795918367347;577.65306122449\n1913-07-15,55.110;57.490;57.920,556.666666666667;580.707070707071;585.050505050505\n1913-08-15,57.290;59.930;59.930,578.686868686869;605.353535353535;605.353535353535\n1913-09-15,58.800;58.880;60.830,588;588.8;608.3\n1913-10-15,56.470;57.360;59.650,564.7;573.6;596.5\n1913-11-15,55.630;55.830;57.220,550.792079207921;552.772277227723;566.534653465347\n1913-12-15,55.140;57.710;57.760,551.4;577.1;577.6\n1914-01-15,57.570;60.660;60.710,575.7;606.6;607.1\n1914-02-15,59.560;60.070;60.940,601.616161616162;606.767676767677;615.555555555556\n1914-03-15,59.430;60.360;61.120,600.30303030303;609.69696969697;617.373737373737\n1914-04-15,56.790;57.960;60.410,579.489795918367;591.428571428571;616.428571428571\n1914-05-15,57.990;59.760;59.820,585.757575757576;603.636363636364;604.242424242424\n1914-06-15,58.090;59.090;59.950,586.767676767677;596.868686868687;605.555555555556\n1914-07-15,52.320;52.320;59.920,523.2;523.2;599.2\n1914-12-15,53.170;54.580;56.760,526.435643564356;540.39603960396;561.980198019802\n1915-01-15,55.400;56.540;58.510,548.514851485149;559.80198019802;579.306930693069\n1915-02-15,54.220;55.020;57.830,542.2;550.2;578.3\n1915-03-15,55.290;60.830;61.300,558.484848484848;614.444444444444;619.191919191919\n1915-04-15,61.050;71.780;71.780,610.5;717.8;717.8\n1915-05-15,60.380;65.010;69.580,597.821782178218;643.663366336634;688.910891089109\n1915-06-15,64.860;70.060;71.900,642.178217821782;693.663366336634;711.881188118812\n1915-07-15,67.880;75.530;75.790,672.079207920792;747.821782178218;750.396039603961\n1915-08-15,76.460;81.200;81.880,757.029702970297;803.960396039604;810.693069306931\n1915-09-15,80.700;90.580;90.580,799.009900990099;896.831683168317;896.831683168317\n1915-10-15,88.230;95.340;96.460,865;934.705882352941;945.686274509804\n1915-11-15,91.080;96.710;97.560,884.271844660194;938.932038834951;947.184466019417\n1915-12-15,94.780;99.150;99.210,920.194174757282;962.621359223301;963.203883495146\n1916-01-15,90.580;90.580;98.810,870.961538461538;870.961538461538;950.096153846154\n1916-02-15,90.890;91.030;96.150,873.942307692308;875.288461538461;924.519230769231\n1916-03-15,90.520;93.250;96.080,862.095238095238;888.095238095238;915.047619047619\n1916-04-15,87.000;89.650;94.460,820.754716981132;845.754716981132;891.132075471698\n1916-05-15,87.710;91.800;92.620,819.719626168224;857.943925233645;865.607476635514\n1916-06-15,87.680;89.580;93.610,811.851851851852;829.444444444444;866.759259259259\n1916-07-15,86.420;89.250;90.530,800.185185185185;826.388888888889;838.240740740741\n1916-08-15,88.150;92.250;93.830,808.715596330275;846.330275229358;860.825688073395\n1916-09-15,91.190;103.730;103.730,821.531531531532;934.504504504505;934.504504504505\n1916-10-15,98.940;104.610;105.280,875.575221238938;925.75221238938;931.681415929203\n1916-11-15,105.630;105.970;110.150,918.521739130435;921.478260869565;957.826086956522\n1916-12-15,90.160;95.000;106.760,777.241379310345;818.965517241379;920.344827586207\n1917-01-15,95.430;95.430;99.180,815.641025641026;815.641025641026;847.692307692308\n1917-02-15,87.010;91.560;94.910,725.083333333333;763;790.916666666667\n1917-03-15,91.100;96.720;98.200,759.166666666667;806;818.333333333333\n1917-04-15,90.660;93.230;97.060,719.52380952381;739.920634920635;770.31746031746\n1917-05-15,89.080;97.380;97.410,695.9375;760.78125;761.015625\n1917-06-15,94.780;95.380;98.580,729.076923076923;733.692307692308;758.307692307692\n1917-07-15,90.480;91.750;95.310,706.875;716.796875;744.609375\n1917-08-15,83.400;83.400;93.850,641.538461538462;641.538461538462;721.923076923077\n1917-09-15,81.200;83.460;86.020,610.526315789474;627.518796992481;646.766917293233\n1917-10-15,74.500;74.500;83.580,551.851851851852;551.851851851852;619.111111111111\n1917-11-15,68.580;72.650;74.230,508;538.148148148148;549.851851851852\n1917-12-15,65.950;74.380;74.380,481.386861313869;542.919708029197;542.919708029197\n1918-01-15,73.380;79.800;79.800,524.142857142857;570;570\n1918-02-15,77.780;80.390;82.080,551.631205673759;570.141843971631;582.127659574468\n1918-03-15,76.410;76.410;79.930,545.785714285714;545.785714285714;570.928571428571\n1918-04-15,75.580;77.510;79.420,532.253521126761;545.845070422535;559.295774647887\n1918-05-15,78.080;78.080;84.040,538.48275862069;538.48275862069;579.586206896552\n1918-06-15,78.530;82.580;83.020,534.21768707483;561.768707482993;564.761904761905\n1918-07-15,80.510;81.230;82.960,533.17880794702;537.94701986755;549.403973509934\n1918-08-15,80.710;82.460;83.180,524.090909090909;535.454545454545;540.12987012987\n1918-09-15,80.290;84.680;84.680,511.40127388535;539.363057324841;539.363057324841\n1918-10-15,83.360;85.510;89.070,521;534.4375;556.6875\n1918-11-15,79.870;80.930;87.660,490;496.503067484663;537.791411042945\n1918-12-15,80.440;82.200;84.500,487.515151515152;498.181818181818;512.121212121212\n1919-01-15,79.880;80.610;83.350,484.121212121212;488.545454545455;505.151515151515\n1919-02-15,79.350;84.810;85.680,489.814814814815;523.518518518518;528.888888888889\n1919-03-15,84.240;88.850;89.050,513.658536585366;541.768292682927;542.987804878049\n1919-04-15,88.840;92.880;93.510,531.976047904192;556.167664670659;559.940119760479\n1919-05-15,93.260;105.500;105.500,551.834319526627;624.260355029586;624.260355029586\n1919-06-15,99.560;106.980;107.550,589.112426035503;633.01775147929;636.390532544379\n1919-07-15,107.160;107.160;112.230,615.862068965517;615.862068965517;645\n1919-08-15,98.460;104.750;107.990,556.271186440678;591.80790960452;610.112994350283\n1919-09-15,105.840;111.420;111.420,594.606741573034;625.955056179775;625.955056179775\n1919-10-15,108.900;118.920;118.920,601.657458563536;657.016574585635;657.016574585635\n1919-11-15,103.720;103.720;119.620,560.648648648649;560.648648648649;646.594594594595\n1919-12-15,103.550;107.230;107.970,547.883597883598;567.354497354497;571.269841269841\n1920-01-15,101.900;104.210;108.850,527.979274611399;539.948186528497;563.989637305699\n1920-02-15,89.980;91.180;103.010,461.435897435897;467.589743589744;528.25641025641\n1920-03-15,91.680;102.810;104.170,465.380710659899;521.878172588833;528.781725888325\n1920-04-15,93.160;93.540;105.650,458.916256157635;460.788177339901;520.443349753695\n1920-05-15,87.360;91.810;94.410,424.077669902913;445.679611650485;458.300970873786\n1920-06-15,90.160;90.760;93.060,431.387559808612;434.258373205742;445.263157894737\n1920-07-15,86.860;86.860;94.510,417.596153846154;417.596153846154;454.375\n1920-08-15,83.200;86.160;87.290,409.852216748768;424.433497536946;430\n1920-09-15,82.950;82.950;89.950,414.75;414.75;449.75\n1920-10-15,84.000;85.080;85.730,422.110552763819;427.537688442211;430.804020100503\n1920-11-15,73.120;76.040;85.480,369.292929292929;384.040404040404;431.717171717172\n1920-12-15,66.750;71.950;77.300,344.072164948454;370.876288659794;398.453608247423\n1921-01-15,72.670;76.130;76.760,382.473684210526;400.684210526316;404\n1921-02-15,74.340;74.980;77.140,404.021739130435;407.5;419.239130434783\n1921-03-15,72.250;75.760;77.780,394.808743169399;413.989071038251;425.027322404372\n1921-04-15,75.060;78.570;78.860,414.696132596685;434.088397790055;435.690607734807\n1921-05-15,73.440;73.440;80.030,414.915254237288;414.915254237288;452.146892655367\n1921-06-15,64.900;68.450;73.510,368.75;388.920454545455;417.670454545455\n1921-07-15,67.250;68.370;69.860,379.943502824859;386.271186440678;394.689265536723\n1921-08-15,63.900;67.110;69.950,361.016949152542;379.152542372881;395.197740112994\n1921-09-15,66.830;71.080;71.720,381.885714285714;406.171428571429;409.828571428571\n1921-10-15,69.460;73.210;73.800,396.914285714286;418.342857142857;421.714285714286\n1921-11-15,73.440;77.300;78.010,422.068965517241;444.252873563218;448.333333333333\n1921-12-15,78.120;80.800;81.500,451.560693641618;467.052023121387;471.098265895954\n1922-01-15,78.590;81.300;82.950,465.029585798817;481.065088757396;490.828402366864\n1922-02-15,81.680;85.460;85.810,483.313609467456;505.680473372781;507.751479289941\n1922-03-15,85.330;89.050;89.050,510.958083832335;533.233532934132;533.233532934132\n1922-04-15,89.300;91.930;93.210,534.730538922156;550.479041916168;558.14371257485\n1922-05-15,91.500;95.630;96.410,547.904191616767;572.634730538922;577.305389221557\n1922-06-15,90.730;92.930;96.360,543.293413173653;556.467065868264;577.005988023952\n1922-07-15,92.920;97.050;97.050,553.095238095238;577.678571428571;577.678571428571\n1922-08-15,96.210;100.780;100.780,579.578313253012;607.10843373494;607.10843373494\n1922-09-15,96.580;97.120;102.050,581.807228915663;585.060240963855;614.759036144578\n1922-10-15,96.110;96.110;102.760,575.508982035928;575.508982035928;615.329341317365\n1922-11-15,92.030;94.650;99.530,547.797619047619;563.392857142857;592.440476190476\n1922-12-15,95.030;98.170;99.220,562.307692307692;580.887573964497;587.100591715976\n1923-01-15,96.960;97.430;99.420,577.142857142857;579.940476190476;591.785714285714\n1923-02-15,97.710;103.900;103.900,581.607142857143;618.452380952381;618.452380952381\n1923-03-15,102.360;102.770;105.380,609.285714285714;611.72619047619;627.261904761905\n1923-04-15,98.380;98.380;102.700,582.130177514793;582.130177514793;607.692307692308\n1923-05-15,92.770;97.530;98.190,548.934911242604;577.100591715976;581.005917159763\n1923-06-15,88.400;88.400;97.240,520;520;572\n1923-07-15,86.910;86.910;91.720,505.290697674419;505.290697674419;533.255813953488\n1923-08-15,87.960;93.460;93.700,514.385964912281;546.549707602339;547.953216374269\n1923-09-15,87.940;87.970;93.610,511.279069767442;511.453488372093;544.244186046512\n1923-10-15,85.910;88.530;90.450,496.589595375722;511.734104046243;522.832369942196\n1923-11-15,88.410;92.340;92.880,511.040462427746;533.757225433526;536.878612716763\n1923-12-15,92.640;95.520;95.610,535.491329479769;552.138728323699;552.658959537572\n1924-01-15,94.880;100.660;100.660,548.439306358381;581.849710982659;581.849710982659\n1924-02-15,96.330;97.220;101.310,560.058139534884;565.232558139535;589.011627906977\n1924-03-15,92.540;93.010;98.860,541.169590643275;543.918128654971;578.12865497076\n1924-04-15,89.180;90.630;94.690,524.588235294118;533.117647058823;557\n1924-05-15,88.330;89.900;92.470,519.588235294118;528.823529411765;543.941176470588\n1924-06-15,89.180;96.370;96.370,524.588235294118;566.882352941176;566.882352941176\n1924-07-15,96.380;102.140;102.140,563.625730994152;597.309941520468;597.309941520468\n1924-08-15,101.510;104.140;105.570,597.117647058824;612.588235294118;621\n1924-09-15,101.070;103.160;104.950,591.052631578947;603.27485380117;613.74269005848\n1924-10-15,99.180;104.060;104.080,576.627906976744;605;605.116279069768\n1924-11-15,103.890;111.100;111.100,604.011627906977;645.93023255814;645.93023255814\n1924-12-15,110.440;120.510;120.510,638.381502890173;696.589595375723;696.589595375723\n1925-01-15,119.460;123.490;123.600,690.520231213873;713.815028901734;714.450867052023\n1925-02-15,117.960;122.240;122.860,685.813953488372;710.697674418605;714.302325581395\n1925-03-15,115.000;116.750;125.680,664.739884393064;674.85549132948;726.473988439306\n1925-04-15,117.400;120.010;121.540,682.558139534884;697.732558139535;706.627906976744\n1925-05-15,121.100;129.950;129.950,700;751.156069364162;751.156069364162\n1925-06-15,126.750;131.010;131.010,724.285714285714;748.628571428571;748.628571428571\n1925-07-15,131.330;133.810;136.500,741.977401129944;755.988700564972;771.186440677966\n1925-08-15,135.710;141.180;143.180,766.723163841808;797.627118644068;808.926553672316\n1925-09-15,137.220;143.460;147.160,775.254237288136;810.508474576271;831.412429378531\n1925-10-15,144.770;155.650;155.650,817.909604519774;879.378531073446;879.378531073446\n1925-11-15,148.180;151.080;159.390,823.222222222222;839.333333333333;885.5\n1925-12-15,152.110;156.660;156.870,849.776536312849;875.195530726257;876.368715083799\n1926-01-15,153.200;157.350;158.930,855.865921787709;879.050279329609;887.877094972067\n1926-02-15,154.680;154.680;162.310,864.134078212291;864.134078212291;906.759776536313\n1926-03-15,135.200;140.460;153.130,759.550561797753;789.101123595506;860.280898876404\n1926-04-15,136.270;143.710;144.550,761.284916201117;802.849162011173;807.541899441341\n1926-05-15,137.160;143.430;143.430,770.561797752809;805.786516853933;805.786516853933\n1926-06-15,142.300;153.040;154.030,803.954802259887;864.632768361582;870.225988700565\n1926-07-15,153.010;160.180;160.580,874.342857142857;915.314285714286;917.6\n1926-08-15,160.410;162.510;166.140,921.896551724138;933.965517241379;954.827586206897\n1926-09-15,156.260;158.190;166.100,892.914285714286;903.942857142857;949.142857142857\n1926-10-15,145.660;150.760;159.690,827.613636363636;856.590909090909;907.329545454545\n1926-11-15,150.510;156.550;157.370,850.338983050847;884.463276836158;889.09604519774\n1926-12-15,156.650;157.200;160.750,885.028248587571;888.135593220339;908.19209039548\n1927-01-15,152.730;156.410;156.560,872.742857142857;893.771428571429;894.628571428571\n1927-02-15,154.310;161.960;161.960,886.83908045977;930.80459770115;930.80459770115\n1927-03-15,158.410;160.080;161.780,915.664739884393;925.317919075144;935.14450867052\n1927-04-15,160.710;164.640;167.360,928.959537572254;951.676300578035;967.398843930636\n1927-05-15,164.550;172.960;172.960,945.689655172414;994.022988505747;994.022988505747\n1927-06-15,165.730;166.230;171.980,941.647727272727;944.488636363636;977.159090909091\n1927-07-15,168.060;181.400;181.400,971.445086705202;1048.5549132948;1048.5549132948\n1927-08-15,177.130;189.790;190.630,1029.82558139535;1103.43023255814;1108.31395348837\n1927-09-15,191.560;197.590;198.970,1107.28323699422;1142.1387283237;1150.11560693642\n1927-10-15,181.430;181.730;199.780,1042.70114942529;1044.42528735632;1148.16091954023\n1927-11-15,181.650;198.210;198.210,1050;1145.7225433526;1145.7225433526\n1927-12-15,193.580;200.700;200.930,1118.95953757225;1160.11560693642;1161.4450867052\n1928-01-15,194.500;198.590;203.350,1124.2774566474;1147.91907514451;1175.43352601156\n1928-02-15,191.330;194.780;199.350,1118.88888888889;1139.06432748538;1165.78947368421\n1928-03-15,194.530;214.450;214.450,1137.60233918129;1254.09356725146;1254.09356725146\n1928-04-15,207.940;211.630;216.930,1216.02339181287;1237.60233918129;1268.59649122807\n1928-05-15,211.730;219.810;220.880,1230.98837209302;1277.96511627907;1284.18604651163\n1928-06-15,201.960;210.370;220.270,1181.05263157895;1230.23391812865;1288.12865497076\n1928-07-15,205.100;216.000;216.620,1199.41520467836;1263.15789473684;1266.78362573099\n1928-08-15,214.080;240.410;240.410,1251.9298245614;1405.90643274854;1405.90643274854\n1928-09-15,236.860;237.380;241.720,1369.13294797688;1372.1387283237;1397.22543352601\n1928-10-15,237.750;252.160;257.130,1382.26744186047;1466.04651162791;1494.94186046512\n1928-11-15,254.380;293.380;295.620,1478.95348837209;1705.6976744186;1718.72093023256\n1928-12-15,263.950;300.000;300.000,1543.56725146199;1754.38596491228;1754.38596491228\n1929-01-15,296.980;317.510;317.510,1736.72514619883;1856.78362573099;1856.78362573099\n1929-02-15,300.410;317.410;322.060,1756.78362573099;1856.19883040936;1883.3918128655\n1929-03-15,296.510;308.850;321.180,1744.17647058824;1816.76470588235;1889.29411764706\n1929-04-15,299.130;319.290;319.290,1770;1889.2899408284;1889.2899408284\n1929-05-15,293.420;297.410;326.160,1726;1749.47058823529;1918.58823529412\n1929-06-15,303.270;331.650;331.650,1773.50877192982;1939.47368421053;1939.47368421053\n1929-07-15,335.220;347.700;347.700,1937.68786127168;2009.82658959538;2009.82658959538\n1929-08-15,337.990;380.330;380.330,1953.69942196532;2198.43930635838;2198.43930635838\n1929-09-15,343.450;343.450;381.170,1985.26011560694;1985.26011560694;2203.29479768786\n1929-10-15,230.070;273.510;352.860,1329.88439306358;1580.98265895954;2039.65317919075\n1929-11-15,198.690;238.950;257.680,1148.49710982659;1381.21387283237;1489.47976878613\n1929-12-15,230.890;248.480;262.200,1342.38372093023;1444.6511627907;1524.41860465116\n1930-01-15,244.200;267.140;267.140,1428.0701754386;1562.22222222222;1562.22222222222\n1930-02-15,262.470;271.110;272.270,1543.94117647059;1594.76470588235;1601.58823529412\n1930-03-15,270.590;286.100;286.100,1601.12426035503;1692.89940828402;1692.89940828402\n1930-04-15,276.940;279.230;294.070,1629.05882352941;1642.52941176471;1729.82352941176\n1930-05-15,259.680;275.070;275.070,1536.56804733728;1627.63313609467;1627.63313609467\n1930-06-15,211.840;226.340;274.450,1260.95238095238;1347.2619047619;1633.63095238095\n1930-07-15,218.330;233.990;240.810,1315.24096385542;1409.57831325301;1450.66265060241\n1930-08-15,217.240;240.420;240.420,1316.60606060606;1457.09090909091;1457.09090909091\n1930-09-15,204.900;204.900;245.090,1234.33734939759;1234.33734939759;1476.44578313253\n1930-10-15,183.350;183.350;214.180,1111.21212121212;1111.21212121212;1298.06060606061\n1930-11-15,171.600;180.910;190.300,1046.34146341463;1103.10975609756;1160.36585365854\n1930-12-15,157.510;164.580;186.820,978.32298136646;1022.23602484472;1160.37267080745\n1931-01-15,161.450;169.340;173.040,1015.40880503145;1065.03144654088;1088.30188679245\n1931-02-15,168.710;190.340;194.360,1074.58598726115;1212.35668789809;1237.96178343949\n1931-03-15,172.360;172.360;187.720,1104.87179487179;1104.87179487179;1203.33333333333\n1931-04-15,143.610;151.190;171.070,926.516129032258;975.41935483871;1103.67741935484\n1931-05-15,128.460;128.460;154.410,839.607843137255;839.607843137255;1009.21568627451\n1931-06-15,121.700;150.180;154.040,805.960264900662;994.569536423841;1020.13245033113\n1931-07-15,135.390;135.390;155.260,896.622516556291;896.622516556291;1028.2119205298\n1931-08-15,133.770;139.410;144.150,885.894039735099;923.245033112583;954.635761589404\n1931-09-15,96.610;96.610;140.130,644.066666666667;644.066666666667;934.2\n1931-10-15,86.480;103.970;108.880,580.402684563758;697.785234899329;730.738255033557\n1931-11-15,91.550;93.870;116.790,622.789115646259;638.571428571429;794.489795918367\n1931-12-15,73.790;77.900;91.170,505.41095890411;533.561643835617;624.452054794521\n1932-01-15,71.240;76.550;85.880,498.181818181818;535.314685314685;600.55944055944\n1932-02-15,71.800;81.440;85.980,509.219858156028;577.58865248227;609.787234042553\n1932-03-15,73.280;73.280;88.780,523.428571428571;523.428571428571;634.142857142857\n1932-04-15,55.930;55.930;72.180,402.374100719424;402.374100719424;519.280575539568\n1932-05-15,44.740;44.740;59.010,326.569343065693;326.569343065693;430.729927007299\n1932-06-15,42.840;42.840;50.620,315;315;372.205882352941\n1932-07-15,41.220;53.890;53.890,303.088235294118;396.25;396.25\n1932-08-15,53.160;73.160;75.220,393.777777777778;541.925925925926;557.185185185185\n1932-09-15,65.060;71.560;79.930,485.522388059701;534.029850746269;596.492537313433\n1932-10-15,58.470;61.900;71.210,439.624060150376;465.413533834586;535.413533834586\n1932-11-15,56.350;56.350;68.030,426.893939393939;426.893939393939;515.378787878788\n1932-12-15,55.910;60.260;61.930,426.793893129771;460;472.748091603053\n1933-01-15,59.290;60.900;64.350,459.612403100775;472.093023255814;498.837209302326\n1933-02-15,50.160;51.390;60.090,394.96062992126;404.645669291339;473.149606299213\n1933-03-15,52.540;55.400;62.950,416.984126984127;439.68253968254;499.603174603175\n1933-04-15,55.690;73.100;73.690,441.984126984127;580.15873015873;584.84126984127\n1933-05-15,76.630;88.110;90.020,608.174603174603;699.285714285714;714.444444444444\n1933-06-15,88.870;98.140;98.740,699.763779527559;772.755905511811;777.48031496063\n1933-07-15,88.710;90.770;108.670,677.175572519084;692.900763358779;829.541984732824\n1933-08-15,92.550;102.410;105.070,701.136363636364;775.833333333333;795.984848484848\n1933-09-15,93.180;94.240;105.740,705.909090909091;713.939393939394;801.060606060606\n1933-10-15,84.380;88.160;99.720,639.242424242424;667.878787878788;755.454545454545\n1933-11-15,89.620;98.140;101.280,678.939393939394;743.484848484848;767.272727272727\n1933-12-15,95.280;98.670;102.040,721.818181818182;747.5;773.030303030303\n1934-01-15,96.730;107.220;108.990,732.80303030303;812.272727272727;825.681818181818\n1934-02-15,103.120;103.460;110.740,775.338345864662;777.894736842105;832.631578947368\n1934-03-15,98.760;100.310;105.790,742.556390977444;754.210526315789;795.413533834586\n1934-04-15,100.490;100.490;106.550,755.563909774436;755.563909774436;801.127819548872\n1934-05-15,91.810;94.000;100.620,690.300751879699;706.766917293233;756.541353383459\n1934-06-15,91.790;95.750;100.420,685;714.55223880597;749.402985074627\n1934-07-15,85.510;88.050;98.820,638.134328358209;657.089552238806;737.462686567164\n1934-08-15,87.470;92.860;95.480,652.761194029851;692.985074626866;712.537313432836\n1934-09-15,86.690;92.490;93.650,637.426470588235;680.073529411765;688.602941176471\n1934-10-15,90.410;93.360;95.600,669.703703703704;691.555555555556;708.148148148148\n1934-11-15,93.460;102.940;103.080,692.296296296296;762.518518518518;763.555555555556\n1934-12-15,99.590;104.040;104.040,743.208955223881;776.417910447761;776.417910447761\n1935-01-15,100.490;101.690;105.880,738.897058823529;747.720588235294;778.529411764706\n1935-02-15,100.230;102.380;107.170,731.605839416059;747.299270072993;782.262773722628\n1935-03-15,96.710;100.780;103.270,705.912408759124;735.620437956204;753.795620437956\n1935-04-15,100.390;109.450;110.470,727.463768115942;793.115942028986;800.507246376812\n1935-05-15,108.710;110.640;116.810,787.753623188406;801.739130434783;846.449275362319\n1935-06-15,111.450;118.360;120.040,813.503649635037;863.941605839416;876.204379562044\n1935-07-15,118.690;126.230;126.560,866.350364963504;921.386861313869;923.795620437956\n1935-08-15,124.930;127.350;128.990,911.897810218978;929.562043795621;941.532846715329\n1935-09-15,127.270;131.920;134.110,928.978102189781;962.919708029197;978.905109489051\n1935-10-15,128.060;139.740;140.780,934.744525547445;1020;1027.59124087591\n1935-11-15,141.070;142.340;148.440,1022.24637681159;1031.44927536232;1075.65217391304\n1935-12-15,138.940;144.130;144.130,1006.8115942029;1044.42028985507;1044.42028985507\n1936-01-15,143.110;149.490;149.490,1037.02898550725;1083.26086956522;1083.26086956522\n1936-02-15,149.810;152.530;154.430,1085.57971014493;1105.28985507246;1119.05797101449\n1936-03-15,150.420;156.340;158.750,1097.95620437956;1141.16788321168;1158.75912408759\n1936-04-15,143.650;145.670;161.990,1048.5401459854;1063.28467153285;1182.40875912409\n1936-05-15,146.700;152.640;152.640,1070.80291970803;1114.16058394161;1114.16058394161\n1936-06-15,149.260;157.690;160.660,1081.59420289855;1142.68115942029;1164.20289855072\n1936-07-15,155.600;164.860;167.010,1119.42446043165;1186.04316546763;1201.51079136691\n1936-08-15,160.800;166.290;169.050,1148.57142857143;1187.78571428571;1207.5\n1936-09-15,165.160;167.820;169.550,1179.71428571429;1198.71428571429;1211.07142857143\n1936-10-15,168.260;177.150;177.420,1201.85714285714;1265.35714285714;1267.28571428571\n1936-11-15,176.670;183.220;184.900,1261.92857142857;1308.71428571429;1320.71428571429\n1936-12-15,175.850;179.900;182.180,1256.07142857143;1285;1301.28571428571\n1937-01-15,177.720;184.740;186.900,1260.42553191489;1310.21276595745;1325.53191489362\n1937-02-15,186.010;187.170;190.290,1319.21985815603;1327.44680851064;1349.57446808511\n1937-03-15,179.820;186.410;194.400,1266.33802816901;1312.74647887324;1369.01408450704\n1937-04-15,170.130;174.270;185.190,1189.72027972028;1218.67132867133;1295.03496503496\n1937-05-15,167.460;174.710;176.300,1162.91666666667;1213.26388888889;1224.30555555556\n1937-06-15,165.510;169.320;175.140,1149.375;1175.83333333333;1216.25\n1937-07-15,170.130;184.010;184.420,1173.31034482759;1269.03448275862;1271.86206896552\n1937-08-15,175.910;177.410;189.340,1213.1724137931;1223.51724137931;1305.79310344828\n1937-09-15,147.380;154.570;173.080,1009.45205479452;1058.69863013699;1185.47945205479\n1937-10-15,125.730;138.480;153.890,861.164383561644;948.493150684931;1054.04109589041\n1937-11-15,113.640;123.480;135.940,783.724137931035;851.586206896552;937.51724137931\n1937-12-15,118.930;120.850;129.980,825.902777777778;839.236111111111;902.638888888889\n1938-01-15,120.570;121.870;134.350,849.084507042254;858.239436619718;946.12676056338\n1938-02-15,118.490;129.640;132.410,840.354609929078;919.432624113475;939.078014184397\n1938-03-15,98.950;98.950;130.470,701.77304964539;701.77304964539;925.31914893617\n1938-04-15,103.020;111.660;118.990,725.492957746479;786.338028169014;837.957746478873\n1938-05-15,107.740;107.740;119.430,764.113475177305;764.113475177305;847.021276595745\n1938-06-15,109.710;133.880;135.870,778.085106382979;949.503546099291;963.617021276596\n1938-07-15,134.560;141.200;144.910,954.326241134752;1001.41843971631;1027.7304964539\n1938-08-15,136.510;139.270;144.470,968.156028368794;987.730496453901;1024.60992907801\n1938-09-15,129.910;141.450;143.080,921.347517730497;1003.1914893617;1014.75177304965\n1938-10-15,144.230;151.730;154.170,1030.21428571429;1083.78571428571;1101.21428571429\n1938-11-15,146.140;149.820;158.080,1043.85714285714;1070.14285714286;1129.14285714286\n1938-12-15,147.390;154.360;154.360,1052.78571428571;1102.57142857143;1102.57142857143\n1939-01-15,136.420;143.760;154.850,974.428571428571;1026.85714285714;1106.07142857143\n1939-02-15,142.430;147.300;147.300,1024.67625899281;1059.71223021583;1059.71223021583\n1939-03-15,131.840;131.840;152.280,948.489208633093;948.489208633093;1095.53956834532\n1939-04-15,123.750;128.380;132.250,896.739130434783;930.289855072464;958.333333333333\n1939-05-15,127.830;138.180;138.180,926.304347826087;1001.30434782609;1001.30434782609\n1939-06-15,130.050;130.630;140.090,942.391304347826;946.594202898551;1015.14492753623\n1939-07-15,131.930;143.260;144.510,956.014492753623;1038.11594202899;1047.17391304348\n1939-08-15,131.330;134.410;144.260,951.666666666667;973.985507246377;1045.36231884058\n1939-09-15,135.250;150.160;155.920,959.219858156028;1064.96453900709;1105.81560283688\n1939-10-15,149.890;151.880;155.480,1070.64285714286;1084.85714285714;1110.57142857143\n1939-11-15,145.690;145.690;152.640,1040.64285714286;1040.64285714286;1090.28571428571\n1939-12-15,146.340;149.990;149.990,1045.28571428571;1071.35714285714;1071.35714285714\n1940-01-15,144.650;145.330;152.800,1040.64748201439;1045.53956834532;1099.28057553957\n1940-02-15,145.000;146.540;148.940,1035.71428571429;1046.71428571429;1063.85714285714\n1940-03-15,145.590;147.540;148.370,1039.92857142857;1053.85714285714;1059.78571428571\n1940-04-15,146.800;148.430;151.290,1048.57142857143;1060.21428571429;1080.64285714286\n1940-05-15,113.940;116.220;148.170,813.857142857143;830.142857142857;1058.35714285714\n1940-06-15,111.840;122.060;123.860,793.191489361702;865.673758865248;878.439716312057\n1940-07-15,120.960;126.140;126.140,864;901;901\n1940-08-15,121.280;128.880;128.880,866.285714285714;920.571428571428;920.571428571428\n1940-09-15,127.740;132.640;135.100,912.428571428571;947.428571428571;965\n1940-10-15,130.390;134.610;135.090,931.357142857143;961.5;964.928571428571\n1940-11-15,129.780;130.030;137.750,927;928.785714285714;983.928571428571\n1940-12-15,128.410;131.130;132.350,910.709219858156;930;938.652482269504\n1941-01-15,124.050;124.130;133.590,879.787234042553;880.354609929078;947.446808510638\n1941-02-15,117.660;121.970;124.760,834.468085106383;865.035460992908;884.822695035461\n1941-03-15,120.300;122.720;123.920,847.183098591549;864.225352112676;872.676056338028\n1941-04-15,115.540;115.540;124.650,807.972027972028;807.972027972028;871.678321678322\n1941-05-15,115.300;116.230;117.820,800.694444444444;807.152777777778;818.194444444444\n1941-06-15,116.180;123.140;123.970,790.340136054422;837.687074829932;843.333333333333\n1941-07-15,122.850;128.790;130.060,835.714285714286;876.122448979592;884.761904761905\n1941-08-15,124.900;127.430;128.220,838.255033557047;855.234899328859;860.536912751678\n1941-09-15,125.810;126.820;129.320,833.17880794702;839.867549668874;856.423841059603\n1941-10-15,117.820;117.820;126.850,770.065359477124;770.065359477124;829.084967320261\n1941-11-15,114.660;114.660;119.850,744.545454545455;744.545454545455;778.246753246753\n1941-12-15,106.340;110.960;116.650,686.064516129032;715.870967741935;752.58064516129\n1942-01-15,108.940;109.410;114.220,693.885350318471;696.87898089172;727.515923566879\n1942-02-15,105.100;106.580;110.800,665.189873417722;674.556962025316;701.26582278481\n1942-03-15,99.210;99.530;106.970,620.0625;622.0625;668.5625\n1942-04-15,92.920;95.350;102.500,577.142857142857;592.23602484472;636.645962732919\n1942-05-15,95.830;100.880;101.090,587.914110429448;618.895705521472;620.184049079755\n1942-06-15,101.300;103.340;106.290,621.472392638037;633.98773006135;652.085889570552\n1942-07-15,102.690;105.720;108.910,626.158536585366;644.634146341464;664.085365853659\n1942-08-15,104.800;106.330;107.550,635.151515151515;644.424242424242;651.818181818182\n1942-09-15,106.030;109.110;109.560,642.606060606061;661.272727272727;664\n1942-10-15,109.650;113.500;115.290,656.586826347306;679.640718562874;690.359281437126\n1942-11-15,114.100;114.500;117.300,679.166666666667;681.547619047619;698.214285714286\n1942-12-15,114.610;119.400;119.560,678.165680473373;706.508875739645;707.455621301775\n1943-01-15,119.260;125.410;125.410,705.680473372781;742.07100591716;742.07100591716\n1943-02-15,125.070;129.710;130.040,740.059171597633;767.514792899408;769.467455621302\n1943-03-15,128.600;136.570;136.820,747.674418604651;794.011627906977;795.46511627907\n1943-04-15,131.180;135.480;136.930,753.908045977012;778.620689655172;786.954022988506\n1943-05-15,136.820;141.180;141.180,781.828571428571;806.742857142857;806.742857142857\n1943-06-15,138.790;143.380;143.380,793.085714285714;819.314285714286;819.314285714286\n1943-07-15,137.250;137.250;145.820,788.793103448276;788.793103448276;838.045977011494\n1943-08-15,134.000;136.620;138.450,774.566473988439;789.71098265896;800.28901734104\n1943-09-15,136.910;140.120;141.750,786.83908045977;805.287356321839;814.655172413793\n1943-10-15,136.390;138.290;140.330,783.850574712644;794.770114942529;806.494252873563\n1943-11-15,129.570;129.570;138.500,744.655172413793;744.655172413793;795.977011494253\n1943-12-15,130.680;135.890;136.240,751.034482758621;780.977011494253;782.988505747127\n1944-01-15,135.920;137.400;138.650,781.149425287356;789.655172413793;796.83908045977\n1944-02-15,134.220;136.300;137.450,771.379310344828;783.333333333333;789.942528735632\n1944-03-15,136.440;138.840;141.000,784.137931034483;797.931034482759;810.344827586207\n1944-04-15,135.000;136.210;139.110,771.428571428571;778.342857142857;794.914285714286\n1944-05-15,137.060;142.240;142.240,783.2;812.8;812.8\n1944-06-15,141.620;148.380;148.630,804.659090909091;843.068181818182;844.488636363636\n1944-07-15,145.770;146.110;150.500,823.559322033898;825.480225988701;850.282485875706\n1944-08-15,144.900;146.990;148.960,818.64406779661;830.45197740113;841.581920903955\n1944-09-15,142.960;146.310;147.160,807.683615819209;826.610169491525;831.412429378531\n1944-10-15,145.830;146.530;148.870,823.898305084746;827.853107344633;841.073446327684\n1944-11-15,145.600;147.330;148.080,822.598870056497;832.372881355932;836.610169491526\n1944-12-15,147.300;151.930;152.280,827.52808988764;853.539325842697;855.505617977528\n1945-01-15,151.350;153.670;155.850,850.280898876404;863.314606741573;875.561797752809\n1945-02-15,153.790;160.400;160.400,863.988764044944;901.123595505618;901.123595505618\n1945-03-15,152.270;154.060;161.520,855.449438202247;865.505617977528;907.415730337079\n1945-04-15,154.990;165.440;165.440,870.730337078652;929.438202247191;929.438202247191\n1945-05-15,163.090;168.300;169.080,911.117318435754;940.223463687151;944.581005586592\n1945-06-15,164.570;164.570;168.920,909.226519337016;909.226519337016;933.259668508287\n1945-07-15,160.910;162.880;167.090,889.005524861878;899.889502762431;923.149171270718\n1945-08-15,161.550;174.290;174.290,892.541436464088;962.92817679558;962.92817679558\n1945-09-15,173.900;180.110;180.220,960.773480662983;995.082872928177;995.690607734806\n1945-10-15,183.060;186.600;187.060,1011.38121546961;1030.93922651934;1033.48066298343\n1945-11-15,187.820;191.460;192.130,1037.67955801105;1057.79005524862;1061.49171270718\n1945-12-15,189.070;192.910;195.820,1038.84615384615;1059.94505494506;1075.93406593407\n1946-01-15,190.900;204.670;205.350,1048.9010989011;1124.56043956044;1128.2967032967\n1946-02-15,186.020;190.090;206.610,1027.73480662983;1050.22099447514;1141.49171270718\n1946-03-15,188.460;199.560;200.560,1029.83606557377;1090.49180327869;1095.95628415301\n1946-04-15,199.190;206.770;208.310,1082.55434782609;1123.75;1132.11956521739\n1946-05-15,200.650;212.280;212.500,1084.59459459459;1147.45945945946;1148.64864864865\n1946-06-15,200.520;205.620;211.470,1072.29946524064;1099.57219251337;1130.85561497326\n1946-07-15,195.220;201.560;207.560,985.959595959596;1017.9797979798;1048.28282828283\n1946-08-15,189.190;189.190;204.520,936.584158415842;936.584158415842;1012.47524752475\n1946-09-15,165.170;172.420;181.180,809.656862745098;845.196078431373;888.137254901961\n1946-10-15,163.120;169.150;175.940,784.230769230769;813.221153846154;845.865384615385\n1946-11-15,163.550;169.780;174.400,767.840375586855;797.089201877934;818.779342723005\n1946-12-15,167.500;177.200;177.850,779.06976744186;824.186046511628;827.209302325581\n1947-01-15,171.950;180.440;180.440,799.767441860465;839.255813953488;839.255813953488\n1947-02-15,177.220;178.900;184.060,824.279069767442;832.093023255814;856.093023255814\n1947-03-15,172.580;177.200;181.880,788.036529680365;809.132420091324;830.502283105023\n1947-04-15,166.690;170.640;177.450,761.141552511416;779.178082191781;810.27397260274\n1947-05-15,163.550;169.250;174.210,746.803652968037;772.831050228311;795.479452054795\n1947-06-15,168.000;177.300;177.440,763.636363636364;805.909090909091;806.545454545455\n1947-07-15,179.880;183.180;186.850,810.27027027027;825.135135135135;841.666666666667\n1947-08-15,177.570;178.850;183.810,789.2;794.888888888889;816.933333333333\n1947-09-15,174.860;177.490;179.810,760.260869565217;771.695652173913;781.782608695652\n1947-10-15,178.100;181.810;185.290,774.347826086957;790.478260869565;805.608695652174\n1947-11-15,179.510;179.510;183.170,777.099567099567;777.099567099567;792.943722943723\n1947-12-15,176.100;181.160;181.160,752.564102564103;774.188034188034;774.188034188034\n1948-01-15,171.180;174.760;181.040,722.278481012658;737.383966244726;763.881856540084\n1948-02-15,165.650;166.800;174.920,704.893617021277;709.787234042553;744.340425531915\n1948-03-15,165.390;177.200;177.200,706.794871794872;757.264957264957;757.264957264957\n1948-04-15,177.320;180.510;183.780,745.042016806723;758.44537815126;772.18487394958\n1948-05-15,180.940;190.740;191.060,757.071129707113;798.075313807531;799.414225941423\n1948-06-15,187.900;189.460;193.160,779.668049792531;786.141078838174;801.49377593361\n1948-07-15,181.200;181.330;191.620,742.622950819672;743.155737704918;785.327868852459\n1948-08-15,179.270;181.710;183.600,731.714285714286;741.673469387755;749.387755102041\n1948-09-15,175.990;178.300;185.360,718.326530612245;727.755102040816;756.571428571429\n1948-10-15,179.870;188.280;189.760,737.172131147541;771.639344262295;777.704918032787\n1948-11-15,171.200;171.200;189.760,707.438016528926;707.438016528926;784.132231404959\n1948-12-15,173.220;177.300;177.920,718.755186721992;735.684647302905;738.257261410788\n1949-01-15,175.030;179.120;181.430,729.291666666667;746.333333333333;755.958333333333\n1949-02-15,171.100;173.060;180.390,718.90756302521;727.142857142857;757.941176470588\n1949-03-15,173.660;177.100;178.450,729.663865546218;744.117647058823;749.789915966387\n1949-04-15,173.240;174.060;177.160,724.853556485356;728.284518828452;741.255230125523\n1949-05-15,168.360;168.360;176.630,707.394957983193;707.394957983193;742.142857142857\n1949-06-15,161.600;167.420;168.150,676.150627615063;700.502092050209;703.556485355649\n1949-07-15,168.080;175.920;176.460,709.198312236287;742.278481012658;744.556962025317\n1949-08-15,176.840;178.660;182.020,743.025210084034;750.672268907563;764.789915966387\n1949-09-15,178.040;182.510;183.290,744.937238493724;763.640167364017;766.903765690377\n1949-10-15,182.670;189.540;190.360,770.759493670886;799.746835443038;803.206751054852\n1949-11-15,187.980;191.550;193.520,789.831932773109;804.831932773109;813.109243697479\n1949-12-15,192.710;200.520;200.520,816.567796610169;849.661016949153;849.661016949153\n1950-01-15,196.810;201.790;201.980,837.489361702128;858.68085106383;859.489361702128\n1950-02-15,201.690;203.440;204.590,858.255319148936;865.702127659575;870.595744680851\n1950-03-15,202.330;206.050;209.780,857.330508474576;873.093220338983;888.898305084746\n1950-04-15,208.440;213.560;215.310,883.220338983051;904.915254237288;912.330508474576\n1950-05-15,214.870;223.420;223.420,906.62447257384;942.700421940928;942.700421940928\n1950-06-15,206.720;209.110;228.380,868.571428571429;878.613445378151;959.579831932773\n1950-07-15,197.460;209.400;210.850,819.336099585062;868.879668049792;874.896265560166\n1950-08-15,211.260;216.870;221.510,869.382716049383;892.469135802469;911.56378600823\n1950-09-15,218.100;226.360;226.780,893.852459016393;927.704918032787;929.426229508197\n1950-10-15,225.010;225.010;231.740,914.674796747967;914.674796747967;942.032520325203\n1950-11-15,222.520;227.600;235.470,900.890688259109;921.457489878542;953.31983805668\n1950-12-15,222.330;235.420;235.420,889.32;941.68;941.68\n1951-01-15,238.990;248.830;249.580,940.905511811024;979.645669291339;982.59842519685\n1951-02-15,250.760;252.050;255.710,975.719844357977;980.739299610895;994.980544747082\n1951-03-15,243.950;248.530;253.610,945.542635658915;963.294573643411;982.984496124031\n1951-04-15,246.020;259.130;259.130,953.565891472868;1004.37984496124;1004.37984496124\n1951-05-15,245.270;249.650;263.130,946.988416988417;963.899613899614;1015.94594594595\n1951-06-15,242.640;242.640;254.030,936.833976833977;936.833976833977;980.810810810811\n1951-07-15,243.980;257.860;260.700,942.007722007722;995.598455598456;1006.56370656371\n1951-08-15,259.890;270.250;270.250,1003.43629343629;1043.43629343629;1043.43629343629\n1951-09-15,270.630;271.160;276.370,1036.89655172414;1038.92720306513;1058.88888888889\n1951-10-15,260.430;262.350;275.870,994.007633587786;1001.3358778626;1052.93893129771\n1951-11-15,256.950;261.270;264.060,973.295454545455;989.659090909091;1000.22727272727\n1951-12-15,263.240;269.230;269.230,993.358490566038;1015.96226415094;1015.96226415094\n1952-01-15,268.080;270.690;275.400,1011.62264150943;1021.47169811321;1039.24528301887\n1952-02-15,258.490;260.080;271.680,982.851711026616;988.897338403042;1033.00380228137\n1952-03-15,260.080;269.460;269.460,988.897338403042;1024.56273764259;1024.56273764259\n1952-04-15,257.630;257.630;267.220,975.871212121212;975.871212121212;1012.19696969697\n1952-05-15,256.350;262.940;264.220,971.022727272727;995.984848484848;1000.83333333333\n1952-06-15,262.090;274.260;274.260,989.018867924528;1034.94339622641;1034.94339622641\n1952-07-15,272.580;279.560;279.560,1020.89887640449;1047.04119850187;1047.04119850187\n1952-08-15,273.170;275.040;280.290,1023.10861423221;1030.11235955056;1049.77528089888\n1952-09-15,268.380;270.610;277.150,1005.16853932584;1013.52059925094;1038.01498127341\n1952-10-15,263.060;269.230;271.400,985.243445692884;1008.35205992509;1016.47940074906\n1952-11-15,270.230;283.660;283.660,1012.09737827715;1062.39700374532;1062.39700374532\n1952-12-15,281.630;291.900;292.000,1054.79400749064;1093.25842696629;1093.6329588015\n1953-01-15,285.240;289.770;293.790,1072.33082706767;1089.36090225564;1104.47368421053\n1953-02-15,281.140;284.270;290.190,1060.90566037736;1072.71698113208;1095.05660377358\n1953-03-15,279.870;279.870;290.640,1052.14285714286;1052.14285714286;1092.63157894737\n1953-04-15,270.730;274.750;280.090,1017.78195488722;1032.89473684211;1052.96992481203\n1953-05-15,271.480;272.280;278.790,1016.77902621723;1019.77528089888;1044.15730337079\n1953-06-15,262.880;268.260;269.840,980.89552238806;1000.97014925373;1006.86567164179\n1953-07-15,268.060;275.380;275.380,1000.22388059701;1027.53731343284;1027.53731343284\n1953-08-15,261.220;261.220;276.740,971.078066914498;971.078066914498;1028.77323420074\n1953-09-15,255.490;264.040;265.480,949.776951672863;981.561338289963;986.914498141264\n1953-10-15,264.260;275.810;276.310,978.740740740741;1021.51851851852;1023.37037037037\n1953-11-15,273.880;281.370;281.370,1018.14126394052;1045.98513011152;1045.98513011152\n1953-12-15,278.300;280.900;283.540,1034.57249070632;1044.23791821561;1054.05204460967\n1954-01-15,279.870;292.390;292.850,1040.40892193309;1086.95167286245;1088.66171003717\n1954-02-15,289.540;294.540;294.540,1076.35687732342;1094.94423791822;1094.94423791822\n1954-03-15,296.400;303.510;303.510,1101.85873605948;1128.28996282528;1128.28996282528\n1954-04-15,304.260;319.330;319.330,1135.29850746269;1191.52985074627;1191.52985074627\n1954-05-15,317.930;327.490;327.490,1181.89591078067;1217.43494423792;1217.43494423792\n1954-06-15,319.270;333.530;336.900,1186.87732342007;1239.88847583643;1252.41635687732\n1954-07-15,334.120;347.920;347.920,1242.08178438662;1293.38289962825;1293.38289962825\n1954-08-15,335.800;335.800;350.380,1248.32713754647;1248.32713754647;1302.52788104089\n1954-09-15,338.130;360.460;363.320,1261.67910447761;1345;1355.67164179104\n1954-10-15,352.140;352.140;364.430,1313.9552238806;1313.9552238806;1359.81343283582\n1954-11-15,353.960;386.770;388.510,1320.74626865672;1443.17164179104;1449.66417910448\n1954-12-15,384.040;404.390;404.390,1438.35205992509;1514.56928838951;1514.56928838951\n1955-01-15,388.200;408.830;408.890,1453.93258426966;1531.19850187266;1531.42322097378\n1955-02-15,405.700;411.870;413.990,1519.47565543071;1542.58426966292;1550.52434456929\n1955-03-15,391.360;409.700;419.680,1465.76779026217;1534.45692883895;1571.83520599251\n1955-04-15,412.970;425.650;430.640,1546.70411985019;1594.19475655431;1612.88389513109\n1955-05-15,414.120;424.860;426.300,1551.01123595506;1591.23595505618;1596.62921348315\n1955-06-15,424.880;451.380;451.380,1591.31086142322;1690.56179775281;1690.56179775281\n1955-07-15,453.820;465.850;468.450,1693.35820895522;1738.24626865672;1747.94776119403\n1955-08-15,448.840;468.180;468.180,1674.77611940298;1746.94029850746;1746.94029850746\n1955-09-15,455.560;466.620;487.450,1693.53159851301;1734.6468401487;1812.08178438662\n1955-10-15,438.590;454.870;461.140,1630.44609665428;1690.96654275093;1714.2750929368\n1955-11-15,454.890;483.260;487.380,1691.04089219331;1796.50557620818;1811.82156133829\n1955-12-15,480.720;488.400;488.400,1793.73134328358;1822.38805970149;1822.38805970149\n1956-01-15,462.350;470.740;485.780,1725.18656716418;1756.49253731343;1812.61194029851\n1956-02-15,465.720;483.650;485.710,1737.76119402985;1804.66417910448;1812.35074626866\n1956-03-15,486.690;511.790;513.030,1816.00746268657;1909.66417910448;1914.29104477612\n1956-04-15,503.020;516.120;521.050,1869.96282527881;1918.66171003717;1936.98884758364\n1956-05-15,468.810;478.050;516.440,1736.33333333333;1770.55555555556;1912.74074074074\n1956-06-15,475.290;492.780;492.780,1747.38970588235;1811.69117647059;1811.69117647059\n1956-07-15,491.920;517.810;517.810,1795.32846715328;1889.81751824818;1889.81751824818\n1956-08-15,495.960;502.040;520.950,1816.7032967033;1838.97435897436;1908.24175824176\n1956-09-15,475.250;475.250;509.820,1734.48905109489;1734.48905109489;1860.65693430657\n1956-10-15,468.700;479.850;490.190,1704.36363636364;1744.90909090909;1782.50909090909\n1956-11-15,466.100;472.780;495.370,1694.90909090909;1719.2;1801.34545454545\n1956-12-15,480.610;499.470;499.470,1741.34057971014;1809.67391304348;1809.67391304348\n1957-01-15,474.590;479.160;499.200,1719.52898550725;1736.08695652174;1808.69565217391\n1957-02-15,454.820;464.620;477.220,1641.94945848375;1677.3285198556;1722.81588447653\n1957-03-15,468.910;474.810;475.010,1686.72661870504;1707.94964028777;1708.6690647482\n1957-04-15,474.980;494.360;494.360,1702.43727598566;1771.89964157706;1771.89964157706\n1957-05-15,494.680;504.930;506.040,1766.71428571429;1803.32142857143;1807.28571428571\n1957-06-15,497.080;503.290;513.190,1768.96797153025;1791.06761565836;1826.29893238434\n1957-07-15,503.290;508.520;520.770,1778.40989399293;1796.89045936396;1840.17667844523\n1957-08-15,470.140;484.350;506.210,1661.27208480565;1711.48409893993;1788.72791519435\n1957-09-15,456.300;456.300;486.130,1612.36749116608;1612.36749116608;1717.77385159011\n1957-10-15,419.790;441.040;465.820,1483.35689045936;1558.44522968198;1646.00706713781\n1957-11-15,427.940;449.870;449.870,1506.83098591549;1584.04929577465;1584.04929577465\n1957-12-15,425.650;435.690;449.550,1498.7676056338;1534.11971830986;1582.92253521127\n1958-01-15,438.680;450.020;451.160,1533.84615384615;1573.4965034965;1577.48251748252\n1958-02-15,436.890;439.920;458.650,1527.58741258741;1538.18181818182;1603.67132867133\n1958-03-15,443.380;446.760;455.920,1539.51388888889;1551.25;1583.05555555556\n1958-04-15,440.090;455.860;455.860,1522.80276816609;1577.37024221453;1577.37024221453\n1958-05-15,455.450;462.700;463.670,1575.95155709343;1601.03806228374;1604.39446366782\n1958-06-15,466.110;478.180;478.970,1612.83737024221;1654.60207612457;1657.33564013841\n1958-07-15,476.890;502.990;504.370,1644.44827586207;1734.44827586207;1739.20689655172\n1958-08-15,502.670;508.630;512.420,1739.34256055363;1759.96539792388;1773.07958477509\n1958-09-15,511.770;532.090;532.090,1770.83044982699;1841.14186851211;1841.14186851211\n1958-10-15,530.940;543.220;546.360,1837.16262975779;1879.65397923875;1890.51903114187\n1958-11-15,540.520;557.460;567.440,1863.86206896552;1922.27586206897;1956.68965517241\n1958-12-15,556.080;583.650;583.650,1924.15224913495;2019.55017301038;2019.55017301038\n1959-01-15,583.150;593.960;597.660,2010.86206896552;2048.13793103448;2060.89655172414\n1959-02-15,574.460;603.500;603.500,1987.7508650519;2088.23529411765;2088.23529411765\n1959-03-15,601.710;601.710;614.690,2082.04152249135;2082.04152249135;2126.95501730104\n1959-04-15,602.940;623.750;629.870,2079.10344827586;2150.86206896552;2171.96551724138\n1959-05-15,615.640;643.790;643.790,2122.89655172414;2219.96551724138;2219.96551724138\n1959-06-15,617.620;643.600;643.600,2122.40549828179;2211.68384879725;2211.68384879725\n1959-07-15,650.880;674.880;674.880,2229.04109589041;2311.23287671233;2311.23287671233\n1959-08-15,646.530;664.410;678.100,2214.14383561644;2275.37671232877;2322.2602739726\n1959-09-15,616.450;631.680;655.900,2103.92491467577;2155.90443686007;2238.56655290102\n1959-10-15,625.590;646.600;646.600,2127.85714285714;2199.31972789116;2199.31972789116\n1959-11-15,634.460;659.180;659.180,2158.02721088435;2242.10884353741;2242.10884353741\n1959-12-15,661.290;679.360;679.360,2249.28571428571;2310.74829931973;2310.74829931973\n1960-01-15,622.620;622.620;685.470,2124.98293515358;2124.98293515358;2339.48805460751\n1960-02-15,611.330;630.120;636.920,2079.3537414966;2143.26530612245;2166.39455782313\n1960-03-15,599.100;616.590;626.870,2037.75510204082;2097.24489795918;2132.21088435374\n1960-04-15,601.700;601.700;630.770,2039.66101694915;2039.66101694915;2138.20338983051\n1960-05-15,599.610;625.500;625.500,2032.57627118644;2120.33898305085;2120.33898305085\n1960-06-15,624.890;640.620;656.420,2111.11486486486;2164.25675675676;2217.63513513513\n1960-07-15,601.680;616.730;646.910,2032.7027027027;2083.5472972973;2185.50675675676\n1960-08-15,608.690;625.990;641.560,2056.38513513513;2114.83108108108;2167.43243243243\n1960-09-15,569.080;580.140;626.100,1922.56756756757;1959.93243243243;2115.2027027027\n1960-10-15,566.050;580.360;596.480,1899.4966442953;1947.51677852349;2001.61073825503\n1960-11-15,585.240;597.220;612.010,1963.89261744966;2004.09395973154;2053.72483221477\n1960-12-15,593.490;615.890;617.780,1991.57718120805;2066.74496644295;2073.08724832215\n1961-01-15,610.250;648.200;650.640,2047.81879194631;2175.1677852349;2183.35570469799\n1961-02-15,637.040;662.080;662.080,2137.71812080537;2221.74496644295;2221.74496644295\n1961-03-15,661.080;676.630;679.380,2218.38926174497;2270.57046979866;2279.79865771812\n1961-04-15,672.660;678.710;696.720,2257.24832214765;2277.55033557047;2337.98657718121\n1961-05-15,677.050;696.720;705.960,2271.97986577181;2337.98657718121;2368.9932885906\n1961-06-15,680.680;683.960;703.790,2284.1610738255;2295.1677852349;2361.71140939597\n1961-07-15,679.300;705.370;705.370,2264.33333333333;2351.23333333333;2351.23333333333\n1961-08-15,710.460;719.940;725.760,2376.12040133779;2407.82608695652;2427.29096989967\n1961-09-15,691.860;701.210;726.530,2306.2;2337.36666666667;2421.76666666667\n1961-10-15,697.240;703.920;708.490,2324.13333333333;2346.4;2361.63333333333\n1961-11-15,703.840;721.600;734.340,2346.13333333333;2405.33333333333;2447.8\n1961-12-15,720.100;731.140;734.910,2400.33333333333;2437.13333333333;2449.7\n1962-01-15,689.920;700.000;726.010,2299.73333333333;2333.33333333333;2420.03333333333\n1962-02-15,702.540;708.050;717.550,2334.01993355482;2352.32558139535;2383.88704318937\n1962-03-15,706.630;706.950;723.540,2347.60797342193;2348.67109634552;2403.78737541528\n1962-04-15,665.330;665.330;705.420,2203.07947019868;2203.07947019868;2335.82781456954\n1962-05-15,576.930;613.360;675.490,1910.3642384106;2030.99337748344;2236.72185430464\n1962-06-15,535.760;561.280;611.050,1774.03973509934;1858.54304635762;2023.34437086093\n1962-07-15,571.240;597.930;597.930,1885.28052805281;1973.36633663366;1973.36633663366\n1962-08-15,588.350;609.180;616.000,1941.74917491749;2010.49504950495;2033.00330033003\n1962-09-15,574.120;578.980;607.630,1888.55263157895;1904.53947368421;1998.78289473684\n1962-10-15,558.060;589.770;589.770,1835.72368421053;1940.03289473684;1940.03289473684\n1962-11-15,597.130;649.300;652.610,1964.24342105263;2135.85526315789;2146.74342105263\n1962-12-15,640.140;652.100;653.990,2105.72368421053;2145.06578947368;2151.28289473684\n1963-01-15,646.790;682.850;683.730,2127.59868421053;2246.21710526316;2249.11184210526\n1963-02-15,662.940;662.940;688.960,2180.72368421053;2180.72368421053;2266.31578947368\n1963-03-15,659.720;682.520;684.730,2163.01639344262;2237.77049180328;2245.01639344262\n1963-04-15,684.270;717.700;718.330,2243.50819672131;2353.11475409836;2355.18032786885\n1963-05-15,712.550;726.960;726.960,2336.22950819672;2383.47540983607;2383.47540983607\n1963-06-15,706.030;706.880;726.870,2307.28758169935;2310.06535947712;2375.39215686275\n1963-07-15,687.710;695.430;716.450,2240.09771986971;2265.24429967427;2333.71335504886\n1963-08-15,694.870;729.320;729.320,2263.42019543974;2375.63517915309;2375.63517915309\n1963-09-15,732.020;732.790;745.960,2384.42996742671;2386.93811074919;2429.83713355049\n1963-10-15,737.940;755.230;760.500,2395.90909090909;2452.04545454545;2469.15584415584\n1963-11-15,711.490;750.520;753.770,2310.03246753247;2436.75324675325;2447.30519480519\n1963-12-15,751.820;762.950;767.210,2433.07443365696;2469.09385113269;2482.88025889968\n1964-01-15,766.080;785.340;787.780,2479.22330097087;2541.55339805825;2549.4498381877\n1964-02-15,783.040;800.140;800.140,2534.11003236246;2589.4498381877;2589.4498381877\n1964-03-15,802.750;813.290;820.250,2597.89644012945;2632.00647249191;2654.53074433657\n1964-04-15,810.770;810.770;827.330,2623.85113268608;2623.85113268608;2677.44336569579\n1964-05-15,817.100;820.560;830.170,2644.33656957929;2655.53398058252;2686.63430420712\n1964-06-15,800.310;831.500;831.500,2581.64516129032;2682.25806451613;2682.25806451613\n1964-07-15,837.350;841.100;851.350,2692.44372990354;2704.50160771704;2737.45980707396\n1964-08-15,823.400;838.480;842.830,2656.12903225806;2704.77419354839;2718.8064516129\n1964-09-15,844.000;875.370;875.740,2713.82636655949;2814.69453376206;2815.88424437299\n1964-10-15,868.440;873.080;881.500,2792.4115755627;2807.33118971061;2834.40514469453\n1964-11-15,870.640;875.430;891.710,2790.51282051282;2805.86538461538;2858.04487179487\n1964-12-15,857.450;874.130;874.130,2748.23717948718;2801.69871794872;2801.69871794872\n1965-01-15,869.780;902.860;902.860,2787.75641025641;2893.78205128205;2893.78205128205\n1965-02-15,881.350;903.480;906.300,2824.83974358974;2895.76923076923;2904.80769230769\n1965-03-15,887.820;889.050;901.910,2836.4856230032;2840.41533546326;2881.50159744409\n1965-04-15,890.330;922.310;922.310,2835.44585987261;2937.29299363057;2937.29299363057\n1965-05-15,913.220;918.040;939.620,2908.34394904459;2923.69426751592;2992.42038216561\n1965-06-15,840.590;868.030;908.530,2660.09493670886;2746.93037974684;2875.09493670886\n1965-07-15,861.770;881.740;883.230,2727.12025316456;2790.3164556962;2795.03164556962\n1965-08-15,878.890;893.100;896.180,2781.29746835443;2826.26582278481;2836.01265822785\n1965-09-15,893.600;930.580;937.880,2827.84810126582;2944.87341772152;2967.9746835443\n1965-10-15,929.650;960.820;960.820,2932.64984227129;3030.97791798107;3030.97791798107\n1965-11-15,946.380;946.710;961.850,2985.42586750789;2986.46687697161;3034.22712933754\n1965-12-15,939.530;969.260;969.260,2954.49685534591;3047.98742138365;3047.98742138365\n1966-01-15,968.540;983.510;994.200,3045.72327044025;3092.79874213836;3126.41509433962\n1966-02-15,950.660;951.890;995.150,2970.8125;2974.65625;3109.84375\n1966-03-15,911.080;924.770;938.190,2838.2554517134;2880.90342679128;2922.71028037383\n1966-04-15,931.290;933.680;954.730,2883.25077399381;2890.65015479876;2955.82043343653\n1966-05-15,864.140;884.070;931.950,2675.3560371517;2737.05882352941;2885.29411764706\n1966-06-15,870.100;870.100;903.170,2685.49382716049;2685.49382716049;2787.56172839506\n1966-07-15,847.380;847.380;894.040,2607.32307692308;2607.32307692308;2750.89230769231\n1966-08-15,767.030;788.410;852.390,2345.65749235474;2411.03975535168;2606.69724770642\n1966-09-15,772.660;774.220;814.300,2362.874617737;2367.64525993884;2490.21406727829\n1966-10-15,744.320;807.070;809.570,2262.37082066869;2453.10030395137;2460.6990881459\n1966-11-15,791.590;791.590;820.870,2406.04863221885;2406.04863221885;2495.04559270517\n1966-12-15,785.690;785.690;820.540,2388.11550151976;2388.11550151976;2494.04255319149\n1967-01-15,786.410;849.890;849.890,2390.30395136778;2583.25227963526;2583.25227963526\n1967-02-15,836.640;839.370;860.970,2542.97872340426;2551.27659574468;2616.93009118541\n1967-03-15,841.760;865.980;876.670,2550.78787878788;2624.18181818182;2656.57575757576\n1967-04-15,842.430;897.050;897.050,2545.10574018127;2710.12084592145;2710.12084592145\n1967-05-15,852.560;852.560;909.630,2567.95180722892;2567.95180722892;2739.84939759036\n1967-06-15,847.770;860.260;886.150,2545.85585585586;2583.36336336336;2661.11111111111\n1967-07-15,859.690;904.240;909.560,2573.92215568862;2707.30538922156;2723.23353293413\n1967-08-15,893.720;901.290;926.720,2667.82089552239;2690.41791044776;2766.32835820896\n1967-09-15,901.180;926.660;943.080,2682.08333333333;2757.91666666667;2806.78571428571\n1967-10-15,879.740;879.740;933.310,2610.50445103858;2610.50445103858;2769.46587537092\n1967-11-15,849.570;875.810;884.880,2513.52071005917;2591.15384615385;2617.98816568047\n1967-12-15,879.160;905.110;905.110,2593.39233038348;2669.94100294985;2669.94100294985\n1968-01-15,855.470;855.470;908.920,2508.70967741935;2508.70967741935;2665.45454545455\n1968-02-15,831.770;840.500;863.560,2432.07602339181;2457.60233918129;2525.02923976608\n1968-03-15,825.130;840.670;843.220,2405.62682215743;2450.93294460641;2458.36734693878\n1968-04-15,861.250;912.220;912.220,2503.63372093023;2651.8023255814;2651.8023255814\n1968-05-15,891.600;899.000;919.900,2584.34782608696;2605.79710144928;2666.3768115942\n1968-06-15,897.800;897.800;917.950,2587.31988472622;2587.31988472622;2645.38904899135\n1968-07-15,883.000;883.000;923.720,2530.08595988539;2530.08595988539;2646.76217765043\n1968-08-15,869.650;896.010;896.130,2484.71428571429;2560.02857142857;2560.37142857143\n1968-09-15,900.360;935.790;938.280,2565.12820512821;2666.06837606838;2673.16239316239\n1968-10-15,942.320;952.390;967.490,2669.46175637394;2697.98866855524;2740.76487252125\n1968-11-15,946.230;985.080;985.080,2672.96610169492;2782.71186440678;2782.71186440678\n1968-12-15,943.750;943.750;985.210,2658.45070422535;2658.45070422535;2775.23943661972\n1969-01-15,921.250;946.050;951.890,2587.7808988764;2657.44382022472;2673.84831460674\n1969-02-15,899.800;905.210;952.700,2513.40782122905;2528.51955307263;2661.17318435754\n1969-03-15,904.030;935.480;935.480,2504.23822714681;2591.35734072022;2591.35734072022\n1969-04-15,917.510;950.180;950.180,2527.57575757576;2617.57575757576;2617.57575757576\n1969-05-15,936.920;937.560;968.850,2573.95604395604;2575.71428571429;2661.67582417582\n1969-06-15,869.760;873.190;933.170,2376.39344262295;2385.7650273224;2549.64480874317\n1969-07-15,801.960;815.470;886.120,2179.23913043478;2215.95108695652;2407.9347826087\n1969-08-15,809.130;836.720;837.250,2186.83783783784;2261.40540540541;2262.83783783784\n1969-09-15,811.840;813.090;837.780,2188.24797843666;2191.61725067385;2258.16711590296\n1969-10-15,802.200;855.990;862.260,2150.67024128686;2294.87935656836;2311.6890080429\n1969-11-15,807.290;812.300;863.050,2152.77333333333;2166.13333333333;2301.46666666667\n1969-12-15,769.930;800.360;805.040,2042.25464190981;2122.97082228117;2135.38461538462\n1970-01-15,744.060;744.060;811.310,1968.4126984127;1968.4126984127;2146.32275132275\n1970-02-15,746.440;777.590;777.590,1964.31578947368;2046.28947368421;2046.28947368421\n1970-03-15,763.600;785.570;791.050,1998.95287958115;2056.46596858639;2070.81151832461\n1970-04-15,724.330;736.070;792.500,1881.37662337662;1911.87012987013;2058.44155844156\n1970-05-15,631.160;700.440;733.630,1635.12953367876;1814.61139896373;1900.59585492228\n1970-06-15,682.910;683.530;720.430,1760.07731958763;1761.67525773196;1856.77835051546\n1970-07-15,669.360;734.120;735.560,1716.30769230769;1882.35897435897;1886.05128205128\n1970-08-15,707.350;764.580;765.810,1813.71794871795;1960.46153846154;1963.61538461538\n1970-09-15,747.470;760.680;773.140,1906.8112244898;1940.51020408163;1972.29591836735\n1970-10-15,753.560;755.610;783.680,1912.58883248731;1917.79187817259;1989.03553299492\n1970-11-15,754.240;794.090;794.090,1904.64646464646;2005.27777777778;2005.27777777778\n1970-12-15,794.290;838.920;842.000,1995.70351758794;2107.8391959799;2115.57788944724\n1971-01-15,830.570;868.500;868.500,2086.85929648241;2182.1608040201;2182.1608040201\n1971-02-15,868.980;878.830;890.060,2177.89473684211;2202.58145363409;2230.72681704261\n1971-03-15,882.390;904.370;916.830,2205.975;2260.925;2292.075\n1971-04-15,903.040;941.750;950.820,2251.97007481297;2348.50374064838;2371.12219451372\n1971-05-15,905.780;907.810;939.920,2247.59305210918;2252.63027295285;2332.30769230769\n1971-06-15,873.100;891.140;923.060,2150.49261083744;2194.92610837438;2273.54679802956\n1971-07-15,858.430;858.430;903.400,2109.16461916462;2109.16461916462;2219.65601965602\n1971-08-15,839.590;898.070;908.370,2057.81862745098;2201.15196078431;2226.39705882353\n1971-09-15,883.470;887.190;920.930,2165.36764705882;2174.48529411765;2257.18137254902\n1971-10-15,836.380;839.000;901.800,2044.93887530562;2051.34474327628;2204.88997555012\n1971-11-15,797.970;831.340;843.170,1951.02689486553;2032.61613691932;2061.54034229829\n1971-12-15,846.010;890.200;893.660,2058.41849148418;2165.93673965937;2174.35523114355\n1972-01-15,889.150;902.170;917.220,2163.38199513382;2195.06082725061;2231.67883211679\n1972-02-15,901.790;928.130;928.130,2183.51089588378;2247.28813559322;2247.28813559322\n1972-03-15,928.660;940.700;950.180,2243.14009661836;2272.22222222222;2295.12077294686\n1972-04-15,940.920;954.170;968.920,2267.27710843374;2299.20481927711;2334.74698795181\n1972-05-15,925.120;960.720;971.250,2223.84615384615;2309.42307692308;2334.73557692308\n1972-06-15,926.250;929.030;961.390,2221.22302158273;2227.8896882494;2305.49160671463\n1972-07-15,910.450;924.740;942.130,2172.91169451074;2207.01670644391;2248.52028639618\n1972-08-15,930.460;963.730;973.510,2215.38095238095;2294.59523809524;2317.88095238095\n1972-09-15,935.730;953.270;970.050,2222.63657957245;2264.29928741093;2304.1567695962\n1972-10-15,921.660;955.520;955.520,2178.86524822695;2258.91252955083;2258.91252955083\n1972-11-15,968.540;1018.21;1025.21,2284.29245283019;2401.43867924528;2417.94811320755\n1972-12-15,1000.00;1020.02;1036.27,2352.94117647059;2400.04705882353;2438.28235294118\n1973-01-15,992.930;999.020;1051.70,2330.82159624413;2345.11737089202;2468.779342723\n1973-02-15,947.920;955.070;996.760,2209.60372960373;2226.2703962704;2323.44988344988\n1973-03-15,922.710;951.010;979.980,2130.96997690531;2196.32794457275;2263.23325635104\n1973-04-15,921.430;921.430;967.410,2113.37155963303;2113.37155963303;2218.83027522936\n1973-05-15,886.510;901.410;956.580,2019.38496583144;2053.32574031891;2178.99772209567\n1973-06-15,869.130;891.710;927.000,1966.35746606335;2017.44343891403;2097.2850678733\n1973-07-15,870.110;926.400;936.710,1964.1309255079;2091.19638826185;2114.46952595937\n1973-08-15,851.900;887.570;912.780,1888.91352549889;1968.0044345898;2023.90243902439\n1973-09-15,880.570;947.100;953.270,1948.16371681416;2095.35398230089;2109.00442477876\n1973-10-15,948.830;956.580;987.060,2080.76754385965;2097.76315789474;2164.60526315789\n1973-11-15,817.730;822.250;948.830,1781.54684095861;1791.39433551198;2067.16775599129\n1973-12-15,788.310;850.860;851.140,1706.2987012987;1841.68831168831;1842.29437229437\n1974-01-15,823.110;855.550;880.690,1766.330472103;1835.94420600858;1889.89270386266\n1974-02-15,803.900;860.530;863.420,1703.17796610169;1823.15677966102;1829.27966101695\n1974-03-15,846.680;846.680;891.660,1771.29707112971;1771.29707112971;1865.39748953975\n1974-04-15,827.680;836.750;869.920,1724.33333333333;1743.22916666667;1812.33333333333\n1974-05-15,795.370;802.170;865.770,1636.56378600823;1650.55555555556;1781.41975308642\n1974-06-15,802.410;802.410;859.670,1637.57142857143;1637.57142857143;1754.42857142857\n1974-07-15,757.430;757.430;806.240,1533.25910931174;1533.25910931174;1632.06477732794\n1974-08-15,656.840;678.580;797.560,1313.68;1357.16;1595.12\n1974-09-15,607.870;607.870;677.880,1201.32411067194;1201.32411067194;1339.6837944664\n1974-10-15,584.560;665.520;673.500,1143.9530332681;1302.38747553816;1318.00391389432\n1974-11-15,608.570;618.660;674.750,1181.68932038835;1201.28155339806;1310.19417475728\n1974-12-15,577.600;616.240;616.240,1112.90944123314;1187.36030828516;1187.36030828516\n1975-01-15,632.040;703.690;705.960,1213.12859884837;1350.65259117083;1355.00959692898\n1975-02-15,707.600;739.050;749.770,1347.80952380952;1407.71428571429;1428.13333333333\n1975-03-15,743.430;768.150;786.530,1410.68311195446;1457.59013282732;1492.46679316888\n1975-04-15,742.880;821.340;821.340,1404.31001890359;1552.62759924386;1552.62759924386\n1975-05-15,815.000;832.290;858.730,1531.95488721805;1564.45488721804;1614.15413533835\n1975-06-15,819.310;878.990;878.990,1528.56343283582;1639.90671641791;1639.90671641791\n1975-07-15,824.860;831.510;881.810,1521.88191881919;1534.15129151291;1626.9557195572\n1975-08-15,791.690;835.340;835.340,1457.9926335175;1538.37937384899;1538.37937384899\n1975-09-15,793.880;793.880;840.110,1453.99267399267;1453.99267399267;1538.663003663\n1975-10-15,784.160;836.040;855.160,1428.34244080146;1522.84153005464;1557.66848816029\n1975-11-15,825.720;860.670;860.670,1493.16455696203;1556.36528028933;1556.36528028933\n1975-12-15,818.800;852.410;859.810,1475.31531531532;1535.87387387387;1549.20720720721\n1976-01-15,858.710;975.280;975.280,1544.44244604317;1754.10071942446;1754.10071942446\n1976-02-15,950.570;972.610;994.570,1703.53046594982;1743.02867383513;1782.3835125448\n1976-03-15,970.640;999.450;1009.21,1736.38640429338;1787.92486583184;1805.38461538462\n1976-04-15,968.280;996.850;1011.02,1725.98930481283;1776.91622103387;1802.17468805704\n1976-05-15,965.570;975.230;1007.48,1708.97345132743;1726.07079646018;1783.15044247788\n1976-06-15,958.090;1002.78;1007.45,1686.77816901408;1765.45774647887;1773.67957746479\n1976-07-15,979.290;984.640;1011.21,1715.04378283713;1724.41330998249;1770.94570928196\n1976-08-15,960.440;973.740;999.340,1673.24041811847;1696.41114982578;1741.01045296167\n1976-09-15,978.640;990.190;1014.79,1699.02777777778;1719.07986111111;1761.78819444444\n1976-10-15,932.350;964.930;979.890,1610.27633851468;1666.54576856649;1692.38341968912\n1976-11-15,924.040;947.220;966.090,1593.1724137931;1633.13793103448;1665.6724137931\n1976-12-15,946.640;1004.65;1004.65,1626.52920962199;1726.20274914089;1726.20274914089\n1977-01-15,954.370;954.370;999.750,1631.40170940171;1631.40170940171;1708.97435897436\n1977-02-15,931.520;936.420;958.360,1576.17597292724;1584.46700507614;1621.59052453469\n1977-03-15,919.130;919.130;968.000,1544.75630252101;1544.75630252101;1626.89075630252\n1977-04-15,914.600;926.900;947.760,1524.33333333333;1544.83333333333;1579.6\n1977-05-15,898.660;898.660;943.440,1490.31509121061;1490.31509121061;1564.57711442786\n1977-06-15,903.040;916.300;929.700,1487.71004942339;1509.55518945634;1531.63097199341\n1977-07-15,888.430;890.070;923.420,1456.44262295082;1459.13114754098;1513.80327868852\n1977-08-15,854.120;861.490;891.810,1395.62091503268;1407.66339869281;1457.20588235294\n1977-09-15,834.720;847.110;876.390,1359.47882736156;1379.65798045603;1427.34527687296\n1977-10-15,801.540;818.350;851.960,1301.2012987013;1328.49025974026;1383.05194805195\n1977-11-15,800.850;829.700;845.890,1293.7802907916;1340.38772213247;1366.54281098546\n1977-12-15,806.220;831.170;831.170,1298.26086956522;1338.43800322061;1338.43800322061\n1978-01-15,763.340;769.920;817.740,1221.344;1231.872;1308.384\n1978-02-15,742.120;742.120;782.660,1179.84101748808;1179.84101748808;1244.29252782194\n1978-03-15,742.720;757.360;773.820,1171.48264984227;1194.57413249211;1220.53627760252\n1978-04-15,751.040;837.320;837.320,1175.33646322379;1310.35993740219;1310.35993740219\n1978-05-15,822.070;840.610;858.370,1274.52713178295;1303.27131782946;1330.80620155039\n1978-06-15,812.280;818.950;866.510,1245.8282208589;1256.05828220859;1329.00306748466\n1978-07-15,805.790;862.270;862.270,1226.46879756469;1312.43531202435;1312.43531202435\n1978-08-15,860.710;876.820;900.120,1304.10606060606;1328.51515151515;1363.81818181818\n1978-09-15,857.160;865.820;907.740,1288.96240601504;1301.98496240602;1365.02255639098\n1978-10-15,792.450;792.450;901.420,1180.99850968703;1180.99850968703;1343.39791356185\n1978-11-15,785.260;799.030;827.790,1165.07418397626;1185.50445103858;1228.17507418398\n1978-12-15,787.510;805.010;821.900,1163.23485967504;1189.08419497784;1214.03249630724\n1979-01-15,811.420;839.220;859.750,1188.02342606149;1228.7262079063;1258.78477306003\n1979-02-15,807.000;808.820;840.870,1167.87264833575;1170.50651230101;1216.88856729378\n1979-03-15,815.750;862.180;871.360,1168.69627507163;1235.21489971347;1248.36676217765\n1979-04-15,854.900;854.900;878.720,1210.90651558074;1210.90651558074;1244.64589235127\n1979-05-15,822.160;822.330;857.590,1149.87412587413;1150.11188811189;1199.42657342657\n1979-06-15,821.210;841.980;849.100,1135.83679114799;1164.5643153527;1174.41217150761\n1979-07-15,825.510;846.420;852.990,1129.28864569083;1157.89329685363;1166.88098495212\n1979-08-15,846.160;887.630;887.630,1146.55826558266;1202.75067750677;1202.75067750677\n1979-09-15,866.130;878.580;893.940,1161.03217158177;1177.72117962466;1198.3109919571\n1979-10-15,806.830;815.700;897.610,1072.91223404255;1084.70744680851;1193.63031914894\n1979-11-15,796.670;822.350;831.740,1049.63109354414;1083.465085639;1095.83662714097\n1979-12-15,819.620;838.740;844.620,1068.60495436767;1093.5332464146;1101.19947848761\n1980-01-15,820.310;875.850;881.910,1054.38303341902;1125.77120822622;1133.56041131105\n1980-02-15,854.440;863.140;903.840,1082.94043092522;1093.9670468948;1145.55133079848\n1980-03-15,759.980;785.750;856.480,948.789013732834;980.961298377029;1069.26342072409\n1980-04-15,759.130;817.060;817.060,937.197530864197;1008.71604938272;1008.71604938272\n1980-05-15,805.200;850.850;860.320,984.352078239609;1040.15892420538;1051.73594132029\n1980-06-15,843.770;867.920;887.540,1020.27811366385;1049.48004836759;1073.20435308343\n1980-07-15,872.270;935.320;936.180,1054.7400241838;1130.97944377267;1132.01934703748\n1980-08-15,929.780;932.590;966.720,1116.1824729892;1119.55582232893;1160.52821128451\n1980-09-15,921.930;932.420;974.570,1097.53571428571;1110.02380952381;1160.20238095238\n1980-10-15,917.750;924.490;972.440,1082.25235849057;1090.20047169811;1146.74528301887\n1980-11-15,932.420;993.340;1000.17,1090.54970760234;1161.80116959064;1169.78947368421\n1980-12-15,908.450;963.990;974.400,1052.6651216686;1117.02201622248;1129.08458864426\n1981-01-15,938.910;947.270;1004.69,1079.20689655172;1088.81609195402;1154.81609195402\n1981-02-15,931.570;974.580;974.580,1059.80659840728;1108.73720136519;1108.73720136519\n1981-03-15,964.620;1003.87;1015.22,1089.96610169492;1134.31638418079;1147.14124293785\n1981-04-15,989.100;997.750;1024.05,1110.10101010101;1119.80920314254;1149.3265993266\n1981-05-15,963.440;991.750;995.590,1072.87305122494;1104.3986636971;1108.67483296214\n1981-06-15,976.880;976.880;1011.99,1078.23399558499;1078.23399558499;1116.98675496689\n1981-07-15,924.660;952.340;967.660,1009.45414847162;1039.67248908297;1056.39737991266\n1981-08-15,881.470;881.470;953.580,955.005417118093;955.005417118093;1033.13109425786\n1981-09-15,824.010;849.980;884.230,884.130901287554;911.995708154506;948.744635193133\n1981-10-15,830.960;852.550;878.140,889.678800856531;912.79443254818;940.192719486081\n1981-11-15,844.080;888.980;888.980,900.832443970117;948.751334044824;948.751334044824\n1981-12-15,868.250;875.000;892.690,923.670212765957;930.851063829787;949.670212765958\n1982-01-15,838.950;871.100;882.520,889.66065747614;923.753976670202;935.864262990456\n1982-02-15,811.260;824.390;852.550,857.568710359408;871.448202959831;901.215644820296\n1982-03-15,795.470;822.770;828.390,841.767195767196;870.656084656085;876.603174603175\n1982-04-15,833.240;848.360;865.580,878.018967334036;893.951527924131;912.096944151739\n1982-05-15,819.540;819.540;869.200,855.469728601253;855.469728601253;907.306889352818\n1982-06-15,788.620;811.930;816.880,813.010309278351;837.041237113402;842.144329896907\n1982-07-15,796.990;808.600;833.430,817.425641025641;829.333333333333;854.8\n1982-08-15,776.920;901.310;901.310,795.209825997953;922.528147389969;922.528147389969\n1982-09-15,895.050;896.250;934.790,914.249233912155;915.474974463738;954.841675178754\n1982-10-15,903.610;991.720;1036.98,920.173116089613;1009.89816700611;1055.98778004073\n1982-11-15,990.990;1039.28;1065.49,1011.21428571429;1060.48979591837;1087.23469387755\n1982-12-15,990.250;1046.54;1070.55,1014.60040983607;1072.27459016393;1096.875\n1983-01-15,1027.04;1075.70;1092.35,1050.14314928425;1099.89775051125;1116.92229038855\n1983-02-15,1059.79;1112.16;1121.81,1082.52298263534;1136.01634320735;1145.873340143\n1983-03-15,1114.45;1130.03;1145.90,1138.35546475996;1154.26966292135;1170.48008171604\n1983-04-15,1113.49;1226.20;1226.20,1129.30020283976;1243.61054766734;1243.61054766734\n1983-05-15,1190.02;1199.98;1232.59,1199.61693548387;1209.65725806452;1242.53024193548\n1983-06-15,1185.50;1221.96;1248.30,1191.45728643216;1228.10050251256;1254.57286432161\n1983-07-15,1189.90;1199.22;1243.69,1191.09109109109;1200.42042042042;1244.93493493493\n1983-08-15,1163.06;1216.16;1216.16,1160.73852295409;1213.73253493014;1213.73253493014\n1983-09-15,1206.81;1233.13;1260.77,1198.42105263158;1224.55809334657;1252.00595829196\n1983-10-15,1223.48;1225.20;1284.65,1211.36633663366;1213.06930693069;1271.93069306931\n1983-11-15,1214.84;1276.02;1287.19,1200.4347826087;1260.88932806324;1271.92687747036\n1983-12-15,1236.79;1258.64;1275.10,1220.91806515301;1242.48766041461;1258.73642645607\n1984-01-15,1220.58;1220.58;1286.64,1197.82139352306;1197.82139352306;1262.64965652601\n1984-02-15,1134.21;1154.63;1213.88,1107.626953125;1127.568359375;1185.4296875\n1984-03-15,1139.76;1164.89;1184.36,1110.87719298246;1135.37037037037;1154.3469785575\n1984-04-15,1130.55;1170.75;1175.25,1096.55674102813;1135.54801163919;1139.91270611057\n1984-05-15,1101.24;1104.85;1186.56,1065.02901353965;1068.52030947776;1147.54352030948\n1984-06-15,1086.90;1132.40;1133.84,1048.11957569913;1091.99614271938;1093.38476374156\n1984-07-15,1086.57;1115.28;1134.28,1043.77521613833;1071.35446685879;1089.60614793468\n1984-08-15,1134.61;1224.38;1239.73,1085.75119617225;1171.65550239234;1186.34449760766\n1984-09-15,1197.99;1206.71;1237.52,1140.94285714286;1149.24761904762;1178.59047619048\n1984-10-15,1175.13;1207.38;1225.93,1115.98290598291;1146.60968660969;1164.22602089269\n1984-11-15,1185.29;1188.94;1244.15,1125.63152896486;1129.09781576448;1181.5289648623\n1984-12-15,1163.21;1211.57;1211.57,1104.6628679962;1150.58879392213;1150.58879392213\n1985-01-15,1184.96;1286.77;1292.62,1123.18483412322;1219.68720379147;1225.23222748815\n1985-02-15,1275.84;1284.01;1297.92,1203.62264150943;1211.33018867925;1224.45283018868\n1985-03-15,1247.35;1266.78;1299.36,1172.32142857143;1190.58270676692;1221.2030075188\n1985-04-15,1252.98;1258.06;1284.78,1172.10477081384;1176.85687558466;1201.85219831618\n1985-05-15,1242.05;1315.41;1315.41,1157.54892823858;1225.91798695247;1225.91798695247\n1985-06-15,1290.10;1335.46;1335.46,1198.97769516729;1241.13382899628;1241.13382899628\n1985-07-15,1321.91;1347.45;1359.54,1226.26159554731;1249.95361781076;1261.16883116883\n1985-08-15,1312.50;1334.01;1355.62,1215.27777777778;1235.19444444444;1255.2037037037\n1985-09-15,1297.94;1328.63;1339.27,1198.46722068329;1226.80517082179;1236.6297322253\n1985-10-15,1324.37;1374.31;1375.57,1218.37166513339;1264.3146274149;1265.47378104876\n1985-11-15,1389.68;1472.13;1475.69,1274.93577981651;1350.57798165138;1353.84403669725\n1985-12-15,1457.91;1546.67;1553.10,1333.86093321135;1415.06861848124;1420.95150960659\n1986-01-15,1502.29;1570.99;1570.99,1370.70255474453;1433.38503649635;1433.38503649635\n1986-02-15,1593.12;1709.06;1713.99,1457.56633119854;1563.64135407136;1568.15187557182\n1986-03-15,1686.42;1818.61;1821.72,1550.01838235294;1671.51654411765;1674.375\n1986-04-15,1735.51;1783.98;1855.90,1598.07550644567;1642.70718232044;1708.93186003683\n1986-05-15,1758.18;1876.71;1882.35,1614.49035812672;1723.33333333333;1728.51239669421\n1986-06-15,1837.19;1892.72;1892.72,1677.79908675799;1728.51141552511;1728.51141552511\n1986-07-15,1766.87;1775.31;1909.03,1613.5799086758;1621.28767123288;1743.40639269406\n1986-08-15,1763.64;1898.34;1904.53,1607.69371011851;1730.48313582498;1736.1257976299\n1986-09-15,1755.20;1767.58;1919.71,1592.74047186933;1603.97459165154;1742.02359346642\n1986-10-15,1774.18;1877.71;1878.37,1608.50407978241;1702.36627379873;1702.96464188577\n1986-11-15,1817.21;1914.23;1916.76,1646.02355072464;1733.90398550725;1736.19565217391\n1986-12-15,1895.95;1895.95;1955.57,1715.79185520362;1715.79185520362;1769.74660633484\n1987-01-15,1927.31;2158.04;2163.39,1733.19244604317;1940.68345323741;1945.49460431655\n1987-02-15,2158.04;2223.99;2244.09,1933.72759856631;1992.82258064516;2010.83333333333\n1987-03-15,2220.47;2304.69;2372.59,1980.79393398751;2055.92328278323;2116.49420160571\n1987-04-15,2230.54;2286.36;2405.54,1979.18367346939;2028.71339840284;2134.46317657498\n1987-05-15,2215.87;2291.57;2342.19,1959.21308576481;2026.14500442087;2070.90185676393\n1987-06-15,2278.22;2418.53;2451.05,2007.2422907489;2130.86343612335;2159.5154185022\n1987-07-15,2409.76;2572.07;2572.07,2117.539543058;2260.16695957821;2260.16695957821\n1987-08-15,2546.72;2662.95;2722.42,2226.15384615385;2327.7534965035;2379.73776223776\n1987-09-15,2492.82;2596.28;2613.04,2167.66956521739;2257.6347826087;2272.20869565217\n1987-10-15,1738.74;1993.53;2640.99,1508.01387684302;1728.99392888118;2290.53772766696\n1987-11-15,1833.55;1833.55;2014.09,1588.86481802426;1588.86481802426;1745.31195840555\n1987-12-15,1766.74;1938.83;2005.64,1530.9705372617;1680.09532062392;1737.98960138648\n1988-01-15,1879.14;1958.22;2051.89,1624.14866032844;1692.49783923941;1773.45721694036\n1988-02-15,1895.72;2071.62;2071.62,1634.24137931034;1785.87931034483;1785.87931034483\n1988-03-15,1978.12;1988.06;2087.37,1697.95708154506;1706.48927038627;1791.7339055794\n1988-04-15,1980.60;2032.33;2110.08,1691.37489325363;1735.55081127242;1801.94705380017\n1988-05-15,1941.48;2031.12;2058.36,1652.32340425532;1728.61276595745;1751.79574468085\n1988-06-15,2052.45;2141.71;2152.20,1739.36440677966;1815.00847457627;1823.89830508475\n1988-07-15,2053.70;2128.73;2158.61,1733.08016877637;1796.39662447257;1821.61181434599\n1988-08-15,1989.33;2031.65;2134.07,1671.70588235294;1707.26890756303;1793.33613445378\n1988-09-15,2002.31;2112.91;2119.31,1671.37729549249;1763.69782971619;1769.04006677796\n1988-10-15,2102.06;2148.65;2183.50,1748.80199667221;1787.56239600666;1816.55574043261\n1988-11-15,2038.58;2114.51;2170.34,1694.58021612635;1757.69742310889;1804.106400665\n1988-12-15,2092.28;2168.57;2182.68,1736.33195020747;1799.64315352697;1811.35269709544\n1989-01-15,2144.64;2342.32;2342.32,1770.96614368291;1934.20313790256;1934.20313790256\n1989-02-15,2245.54;2258.39;2347.14,1846.66118421053;1857.22861842105;1930.21381578947\n1989-03-15,2243.04;2293.62;2340.71,1834.04742436631;1875.40474243663;1913.90842191333\n1989-04-15,2291.97;2418.80;2418.99,1861.87652315191;1964.90658001625;1965.06092607636\n1989-05-15,2371.33;2480.15;2502.02,1915.45234248788;2003.352180937;2021.01777059774\n1989-06-15,2440.06;2440.06;2531.87,1966.20467365028;1966.20467365028;2040.18533440774\n1989-07-15,2452.77;2660.66;2660.66,1971.68006430868;2138.79421221865;2138.79421221865\n1989-08-15,2641.12;2737.27;2743.36,2119.67897271268;2196.84590690209;2201.73354735152\n1989-09-15,2659.19;2692.82;2752.09,2127.352;2154.256;2201.672\n1989-10-15,2569.26;2645.08;2791.41,2045.58917197452;2105.95541401274;2222.4601910828\n1989-11-15,2582.17;2706.27;2706.27,2050.96902303415;2149.53931691819;2149.53931691819\n1989-12-15,2687.93;2753.20;2761.09,2131.58604282316;2183.34655035686;2189.60348929421\n1990-01-15,2543.24;2590.54;2810.15,1996.26373626374;2033.39089481947;2205.76923076923\n1990-02-15,2564.19;2627.25;2649.55,2003.2734375;2052.5390625;2069.9609375\n1990-03-15,2635.59;2707.21;2755.63,2047.85547785548;2103.50427350427;2141.12665112665\n1990-04-15,2645.05;2656.76;2765.77,2052.01706749418;2061.1016291699;2145.67106283941\n1990-05-15,2668.92;2876.66;2878.56,2065.72755417957;2226.51702786378;2227.98761609907\n1990-06-15,2842.33;2880.69;2935.89,2188.09083910701;2217.62124711316;2260.11547344111\n1990-07-15,2879.21;2905.20;2999.75,2207.98312883436;2227.91411042945;2300.4217791411\n1990-08-15,2483.42;2614.36;2899.26,1887.09726443769;1986.59574468085;2203.08510638298\n1990-09-15,2427.48;2452.48;2628.22,1829.29917106255;1848.13865862849;1980.572720422\n1990-10-15,2365.10;2442.33;2523.76,1771.61048689139;1829.4606741573;1890.45692883895\n1990-11-15,2440.84;2559.65;2565.35,1824.24514200299;1913.04185351271;1917.3019431988\n1990-12-15,2565.59;2633.66;2637.13,1917.48131539611;1968.355754858;1970.94917787743\n1991-01-15,2470.30;2736.39;2736.39,1835.2897473997;2032.97919762259;2032.97919762259\n1991-02-15,2730.69;2882.18;2934.65,2025.73442136499;2138.11572700297;2177.04005934718\n1991-03-15,2855.45;2913.86;2973.27,2115.14814814815;2158.41481481481;2202.42222222222\n1991-04-15,2873.02;2887.87;3004.46,2125.01479289941;2135.99852071006;2222.23372781065\n1991-05-15,2865.38;3027.50;3027.50,2113.11209439528;2232.66961651917;2232.66961651917\n1991-06-15,2906.75;2906.75;3035.33,2137.31617647059;2137.31617647059;2231.86029411765\n1991-07-15,2932.47;3024.82;3024.82,2153.06167400881;2220.86637298091;2220.86637298091\n1991-08-15,2898.03;3043.60;3055.23,2121.54465592972;2228.11127379209;2236.62518301611\n1991-09-15,2982.56;3016.77;3029.07,2173.87755102041;2198.81195335277;2207.77696793003\n1991-10-15,2942.75;3069.10;3077.15,2141.73944687045;2233.69723435226;2239.55604075691\n1991-11-15,2894.68;2894.68;3065.30,2100.63860667634;2100.63860667634;2224.4557329463\n1991-12-15,2863.82;3168.83;3168.83,2076.7367657723;2297.91878172589;2297.91878172589\n1992-01-15,3172.41;3223.39;3272.14,2297.18320057929;2334.09847936278;2369.39898624185\n1992-02-15,3224.73;3267.67;3283.32,2326.64502164502;2357.62626262626;2368.91774891775\n1992-03-15,3208.63;3235.47;3290.25,2303.39554917444;2322.66331658291;2361.98851399856\n1992-04-15,3181.35;3359.12;3366.50,2280.5376344086;2407.97132616487;2413.26164874552\n1992-05-15,3336.09;3396.88;3398.43,2388.03865425913;2431.5533285612;2432.66284896206\n1992-06-15,3274.12;3318.52;3413.21,2335.3209700428;2366.99001426534;2434.52924393723\n1992-07-15,3277.61;3393.78;3393.78,2332.81850533808;2415.50177935943;2415.50177935943\n1992-08-15,3228.17;3257.35;3395.40,2291.1071682044;2311.81689141235;2409.79418026969\n1992-09-15,3250.32;3271.66;3376.22,2300.29723991507;2315.39985845718;2389.39844302902\n1992-10-15,3136.58;3226.28;3254.37,2211.97461212976;2275.23272214386;2295.04231311707\n1992-11-15,3193.32;3305.16;3305.16,2248.81690140845;2327.57746478873;2327.57746478873\n1992-12-15,3255.18;3301.11;3333.26,2293.99577167019;2326.36363636364;2349.02043692741\n1993-01-15,3241.95;3310.03;3310.03,2273.4572230014;2321.19915848527;2321.19915848527\n1993-02-15,3302.19;3370.81;3442.14,2307.61006289308;2355.56254367575;2405.40880503145\n1993-03-15,3355.41;3435.11;3478.34,2336.6364902507;2392.13788300836;2422.24233983287\n1993-04-15,3370.81;3427.55;3478.61,2340.84027777778;2380.24305555556;2415.70138888889\n1993-05-15,3437.19;3527.43;3554.83,2383.62690707351;2446.20665742025;2465.2080443828\n1993-06-15,3466.81;3516.08;3553.45,2400.8379501385;2434.95844875346;2460.8379501385\n1993-07-15,3449.93;3539.47;3567.70,2389.14819944598;2451.15650969529;2470.70637119114\n1993-08-15,3548.97;3651.25;3652.09,2450.94613259668;2521.58149171271;2522.16160220994\n1993-09-15,3537.24;3555.12;3645.10,2437.79462439697;2450.11716057891;2512.12956581668\n1993-10-15,3577.76;3680.59;3687.86,2455.56623198353;2526.14275909403;2531.13246396706\n1993-11-15,3624.98;3683.95;3710.77,2486.26886145405;2526.7146776406;2545.109739369\n1993-12-15,3697.08;3754.09;3794.33,2535.72016460905;2574.82167352538;2602.42112482853\n1994-01-15,3756.60;3978.36;3978.36,2569.49384404925;2721.17647058824;2721.17647058824\n1994-02-15,3832.02;3832.02;3975.54,2612.1472392638;2612.1472392638;2709.97955010225\n1994-03-15,3626.75;3635.96;3895.65,2463.82472826087;2470.08152173913;2646.50135869565\n1994-04-15,3593.35;3681.69;3705.78,2437.82225237449;2497.75440976934;2514.09769335142\n1994-05-15,3629.04;3758.37;3766.35,2460.36610169491;2548.04745762712;2553.45762711864\n1994-06-15,3624.96;3624.96;3814.83,2449.2972972973;2449.2972972973;2577.58783783784\n1994-07-15,3646.65;3764.50;3764.50,2457.31132075472;2536.72506738544;2536.72506738544\n1994-08-15,3747.02;3913.42;3917.30,2514.77852348993;2626.45637583893;2629.06040268456\n1994-09-15,3831.75;3843.19;3953.88,2564.75903614458;2572.41633199465;2646.50602409639\n1994-10-15,3775.56;3908.12;3936.04,2525.45819397993;2614.127090301;2632.80267558528\n1994-11-15,3674.63;3739.23;3863.37,2454.66265865063;2497.81563126253;2580.74148296593\n1994-12-15,3685.73;3834.44;3861.69,2462.07748830995;2561.41616566466;2579.61923847695\n1995-01-15,3832.08;3843.86;3932.34,2549.62075848303;2557.45841650033;2616.32734530938\n1995-02-15,3847.56;4011.05;4011.74,2549.74155069583;2658.08482438701;2658.54208084824\n1995-03-15,3962.63;4157.69;4172.56,2617.3249669749;2746.16248348745;2755.98414795244\n1995-04-15,4168.41;4321.27;4321.27,2744.18038183015;2844.81237656353;2844.81237656353\n1995-05-15,4316.08;4465.14;4465.14,2835.7950065703;2933.73193166886;2933.73193166886\n1995-06-15,4423.99;4556.10;4589.64,2900.97704918033;2987.60655737705;3009.6\n1995-07-15,4585.15;4708.47;4736.29,3006.65573770492;3087.52131147541;3105.76393442623\n1995-08-15,4580.62;4610.56;4701.42,2995.8273381295;3015.40876389797;3074.83322432963\n1995-09-15,4647.54;4789.08;4801.80,3033.64229765013;3126.03133159269;3134.33420365535\n1995-10-15,4703.82;4755.48;4802.45,3060.39037085231;3094.00130123617;3124.56083279115\n1995-11-15,4766.68;5074.49;5105.56,3103.30729166667;3303.70442708333;3323.93229166667\n1995-12-15,5059.32;5117.12;5216.47,3295.97394136808;3333.62866449511;3398.35179153094\n1996-01-15,5032.94;5395.30;5395.30,3259.67616580311;3494.36528497409;3494.36528497409\n1996-02-15,5373.99;5485.62;5630.49,3469.32859909619;3541.39444803099;3634.91930277598\n1996-03-15,5470.45;5587.14;5683.60,3513.45536287733;3588.40077071291;3650.35324341683\n1996-04-15,5485.98;5569.08;5689.74,3509.90403071017;3563.07101727447;3640.26871401152\n1996-05-15,5420.95;5643.18;5778.00,3461.65389527459;3603.56321839081;3689.65517241379\n1996-06-15,5624.71;5654.63;5719.27,3589.4767070836;3608.5705169113;3649.82131461391\n1996-07-15,5346.55;5528.91;5729.98,3405.44585987261;3521.59872611465;3649.66878980892\n1996-08-15,5594.75;5616.21;5733.47,3556.73871582962;3570.38143674507;3644.92689129053\n1996-09-15,5606.96;5882.17;5894.74,3553.20659062104;3727.61089987326;3735.57667934094\n1996-10-15,5904.90;6029.38;6094.23,3730.1958307012;3808.83133291219;3849.79785217941\n1996-11-15,6021.93;6521.70;6547.79,3796.92938209332;4112.04287515763;4128.49306431274\n1996-12-15,6268.35;6448.27;6560.91,3952.30138713745;4065.74401008827;4136.76544766709\n1997-01-15,6442.49;6813.09;6883.90,4049.33375235701;4282.26901319925;4326.77561282212\n1997-02-15,6746.90;6877.74;7067.46,4227.38095238095;4309.36090225564;4428.23308270677\n1997-03-15,6583.48;6583.48;7085.16,4114.675;4114.675;4428.225\n1997-04-15,6391.69;7008.99;7008.99,3989.81897627965;4375.14981273408;4375.14981273408\n1997-05-15,6976.48;7331.04;7383.41,4357.57651467833;4579.03810118676;4611.74890693317\n1997-06-15,7269.66;7672.79;7796.51,4535.0343106675;4786.5190268247;4863.69931378665\n1997-07-15,7722.33;8222.61;8254.89,4811.42056074766;5123.1214953271;5143.23364485981\n1997-08-15,7622.42;7622.42;8259.31,4740.31094527363;4740.31094527363;5136.3868159204\n1997-09-15,7660.98;7945.26;7996.83,4752.46898263027;4928.82133995037;4960.81265508685\n1997-10-15,7161.15;7442.08;8178.31,4431.4047029703;4605.24752475248;5060.8353960396\n1997-11-15,7401.32;7823.13;7881.07,4582.86068111455;4844.04334365325;4879.91950464396\n1997-12-15,7660.13;7908.25;8149.13,4748.99566026038;4902.82083075015;5052.15747055177\n1998-01-15,7580.42;7906.50;7978.99,4690.85396039604;4892.63613861386;4937.49381188119\n1998-02-15,8107.78;8545.72;8545.72,5007.89376158122;5278.39407041383;5278.39407041383\n1998-03-15,8444.33;8799.81;8906.43,5206.12207151665;5425.28360049322;5491.01726263872\n1998-04-15,8868.32;9063.37;9184.94,5457.42769230769;5577.45846153846;5652.27076923077\n1998-05-15,8899.95;8899.95;9211.84,5466.79975429975;5466.79975429975;5658.37837837838\n1998-06-15,8627.93;8952.02;9069.60,5293.20858895706;5492.03680981595;5564.1717791411\n1998-07-15,8883.29;8883.29;9337.97,5443.19240196078;5443.19240196078;5721.79534313726\n1998-08-15,7539.07;7539.07;8786.74,4613.87392900857;4613.87392900857;5377.44186046512\n1998-09-15,7615.54;7842.62;8154.41,4654.97555012225;4793.77750611247;4984.35819070905\n1998-10-15,7632.53;8592.10;8592.10,4653.98170731707;5239.08536585366;5239.08536585366\n1998-11-15,8706.15;9116.55;9374.27,5308.62804878049;5558.87195121951;5716.01829268293\n1998-12-15,8695.60;9181.43;9320.98,5305.43014032947;5601.84868822453;5686.99206833435\n1999-01-15,9120.67;9358.83;9643.32,5551.22945830797;5696.18381010347;5869.33657942788\n1999-02-15,9133.03;9306.58;9552.68,5551.99392097264;5657.49544072948;5807.10030395137\n1999-03-15,9275.88;9786.16;10006.8,5621.74545454545;5931.00606060606;6064.72727272727\n1999-04-15,9832.51;10789.0;10878.4,5916.07099879663;6491.57641395909;6545.3670276775\n1999-05-15,10466.9;10559.7;11107.2,6297.77376654633;6353.61010830325;6683.03249097473\n1999-06-15,10490.5;10970.8;10970.8,6311.97352587244;6600.96269554753;6600.96269554753\n1999-07-15,10655.2;10655.2;11209.8,6391.84163167367;6391.84163167367;6724.5350929814\n1999-08-15,10646.0;10829.3;11326.0,6371.03530819868;6480.73010173549;6777.97725912627\n1999-09-15,10213.5;10337.0;11079.4,6083.08516974389;6156.64085765336;6598.8088147707\n1999-10-15,10019.7;10729.9;10729.9,5957.01545778835;6379.25089179548;6379.25089179548\n1999-11-15,10581.8;10877.8;11089.5,6287.46286393345;6463.33927510398;6589.12655971479\n1999-12-15,10998.4;11497.1;11497.1,6534.99702911468;6831.31313131313;6831.31313131313\n2000-01-15,10738.9;10940.5;11723.0,6361.90758293839;6481.33886255924;6944.90521327014\n2000-02-15,9862.12;10128.3;11041.1,5808.0800942285;5964.84098939929;6502.41460541814\n2000-03-15,9796.03;10921.9;11119.9,5721.98014018692;6379.61448598131;6495.26869158879\n2000-04-15,10305.8;10733.9;11287.1,6016.22883829539;6266.14127262113;6589.08347927612\n2000-05-15,10299.2;10522.3;10934.6,6005.36443148688;6135.45189504373;6375.86005830904\n2000-06-15,10376.1;10447.9;10815.3,6018.61948955917;6060.26682134571;6273.37587006961\n2000-07-15,10481.5;10522.0;10843.9,6065.68287037037;6089.12037037037;6275.40509259259\n2000-08-15,10607.0;11215.1;11252.8,6138.31018518518;6490.21990740741;6512.03703703704\n2000-09-15,10628.4;10650.9;11310.6,6118.82556131261;6131.77892918826;6511.57167530225\n2000-10-15,9975.02;10971.1;10971.1,5732.77011494253;6305.22988505747;6305.22988505747\n2000-11-15,10399.3;10414.5;10977.2,5973.1763354394;5981.90695002872;6305.11200459506\n2000-12-15,10318.9;10788.0;10898.7,5930.40229885057;6200;6263.62068965517\n2001-01-15,10525.4;10887.4;10945.8,6011.0793832096;6217.81838949172;6251.17075956596\n2001-02-15,10441.9;10495.3;10983.6,5939.64732650739;5970.02275312855;6247.78156996587\n2001-03-15,9389.48;9878.78;10858.3,5328.876276958;5606.57207718502;6162.48581157775\n2001-04-15,9485.71;10735.0;10810.1,5362.18767665348;6068.40022611645;6110.85358959864\n2001-05-15,10796.7;10911.9;11337.9,6075.80191333709;6140.63027574564;6380.36015756894\n2001-06-15,10434.8;10502.4;11175.8,5862.24719101124;5900.22471910112;6278.5393258427\n2001-07-15,10175.6;10522.8;10610.0,5732.7323943662;5928.33802816901;5977.46478873239\n2001-08-15,9919.58;9949.75;10551.2,5588.49577464789;5605.49295774648;5944.33802816902\n2001-09-15,8235.81;8847.56;10033.3,4619.07459338194;4962.17610768368;5627.20134604599\n2001-10-15,8836.83;9075.14;9545.17,4972.89251547552;5107.0005627462;5371.50815981992\n2001-11-15,9263.90;9851.56;9982.75,5222.04058624577;5553.30326944758;5627.25479143179\n2001-12-15,9763.96;10021.6;10137.0,5525.727221279;5671.53367289191;5736.84210526316\n2002-01-15,9618.24;9920.00;10259.7,5430.96555618295;5601.35516657256;5793.16770186335\n2002-02-15,9625.44;10106.1;10145.7,5413.63329583802;5683.97075365579;5706.2429696288\n2002-03-15,10281.7;10403.9;10635.3,5750.39149888143;5818.73601789709;5948.15436241611\n2002-04-15,9819.87;9946.22;10381.7,5461.55172413793;5531.82424916574;5774.02669632926\n2002-05-15,9808.04;9925.25;10353.1,5454.97219132369;5520.16129032258;5758.12013348165\n2002-06-15,9120.11;9243.26;9796.80,5069.54419121734;5137.99888827126;5445.69205113952\n2002-07-15,7702.34;8736.59;9379.50,4276.70183231538;4850.96612992782;5207.94003331483\n2002-08-15,8043.63;8663.50;9053.64,4451.37244050913;4794.41062534588;5010.31543995573\n2002-09-15,7591.93;7591.93;8602.61,4194.4364640884;4194.4364640884;4752.82320441989\n2002-10-15,7286.27;8397.03;8538.24,4018.90237175951;4631.56646442361;4709.45394373966\n2002-11-15,8358.95;8896.09;8931.68,4610.56260341975;4906.83397683398;4926.46442360728\n2002-12-15,8303.78;8341.63;8862.57,4590.25981205086;4611.18297401879;4899.15422885572\n2003-01-15,7945.13;8053.81;8842.62,4372.66373142543;4432.47660979637;4866.60429279031\n2003-02-15,7749.87;7891.08;8109.82,4232.58874931731;4309.71054068815;4429.17531403605\n2003-03-15,7524.06;7992.13;8521.97,4084.72312703583;4338.83279044517;4626.4766558089\n2003-04-15,8069.86;8480.09;8515.66,4390.56583242655;4613.75952121872;4633.11207834603\n2003-05-15,8454.25;8850.26;8850.26,4607.22070844687;4823.02997275204;4823.02997275204\n2003-06-15,8897.81;8985.44;9323.02,4843.66358192706;4891.36635819271;5075.13336962439\n2003-07-15,9036.04;9233.80;9284.57,4913.56171832518;5021.09842305601;5048.70581837955\n2003-08-15,9036.32;9415.82;9428.90,4895.0812567714;5100.66088840737;5107.74647887324\n2003-09-15,9275.06;9275.06;9659.13,5008.13174946004;5008.13174946004;5215.51295896328\n2003-10-15,9469.20;9801.12;9812.98,5118.48648648649;5297.9027027027;5304.31351351351\n2003-11-15,9619.42;9782.46;9858.46,5213.77777777778;5302.14634146341;5343.33875338753\n2003-12-15,9853.64;10453.9;10453.9,5346.52197504069;5672.21920781335;5672.21920781335\n2004-01-15,10409.9;10488.1;10702.5,5620.89632829374;5663.12095032397;5778.88768898488\n2004-02-15,10470.7;10583.9;10737.7,5623.3619763695;5684.15682062299;5766.75617615467\n2004-03-15,10048.2;10357.7;10678.1,5361.89967982924;5527.05442902882;5698.02561366062\n2004-04-15,10225.6;10225.6;10570.8,5439.14893617021;5439.14893617021;5622.76595744681\n2004-05-15,9906.91;10188.5;10317.2,5238.97937599154;5387.89000528821;5455.94923320994\n2004-06-15,10195.9;10435.5;10479.6,5374.7496046389;5501.05429625725;5524.30152872957\n2004-07-15,9961.92;10139.7;10334.2,5259.72544878564;5353.59028511088;5456.28299894403\n2004-08-15,9814.59;10173.9;10195.0,5179.20316622691;5368.81266490765;5379.94722955145\n2004-09-15,9988.54;10080.3;10341.2,5259.89468141127;5308.21484992101;5445.60294892048\n2004-10-15,9749.99;10027.5;10239.9,5107.38082765846;5252.75013095862;5364.01257202724\n2004-11-15,10035.7;10428.0;10572.6,5254.29319371728;5459.68586387435;5535.39267015707\n2004-12-15,10440.6;10783.0;10854.5,5486.38991066737;5666.31634261692;5703.88859695218\n2005-01-15,10368.6;10489.9;10729.4,5437.1263765076;5500.73413738857;5626.32406921867\n2005-02-15,10551.9;10766.2;10841.6,5501.51199165798;5613.24296141814;5652.55474452555\n2005-03-15,10405.7;10503.8;10940.6,5383.1867563373;5433.93688566994;5659.90688049664\n2005-04-15,10012.4;10192.5;10546.3,5145.11819116136;5237.66700924974;5419.47584789311\n2005-05-15,10140.1;10467.5;10542.6,5216.10082304527;5384.51646090535;5423.14814814815\n2005-06-15,10275.0;10275.0;10623.1,5282.7763496144;5282.7763496144;5461.74807197943\n2005-07-15,10270.7;10640.9;10705.6,5256.24360286592;5445.7011258956;5478.81269191402\n2005-08-15,10397.3;10481.6;10697.6,5293.94093686354;5336.86354378819;5446.84317718941\n2005-09-15,10378.0;10568.7;10682.9,5220.32193158954;5316.24748490946;5373.6921529175\n2005-10-15,10215.2;10440.1;10535.5,5128.1124497992;5241.0140562249;5288.90562248996\n2005-11-15,10406.8;10805.9;10931.6,5266.5991902834;5468.57287449393;5532.18623481781\n2005-12-15,10717.5;10717.5;10912.6,5445.88414634146;5445.88414634146;5545.02032520325\n2006-01-15,10667.4;10864.9;11043.4,5379.42511346445;5479.02168431669;5569.03681290973\n2006-02-15,10749.8;10993.4;11137.2,5410.06542526422;5532.66230498239;5605.03271263211\n2006-03-15,10958.6;11109.3;11317.4,5484.78478478478;5560.21021021021;5664.36436436436\n2006-04-15,11073.8;11367.1;11382.5,5495.68238213399;5641.24069478908;5648.88337468983\n2006-05-15,11094.4;11168.3;11642.7,5478.71604938272;5515.20987654321;5749.48148148148\n2006-06-15,10706.1;11150.2;11260.3,5276.54016757023;5495.41646131099;5549.67964514539\n2006-07-15,10739.4;11185.7;11228.0,5277.34643734644;5496.65847665848;5517.44471744472\n2006-08-15,11076.2;11381.2;11382.9,5432.17263364394;5581.75576262874;5582.58950465915\n2006-09-15,11331.4;11679.1;11718.5,5584.7215377033;5756.08674223756;5775.50517496304\n2006-10-15,11670.4;12080.7;12163.7,5783.15163528246;5986.47175421209;6027.60158572844\n2006-11-15,11986.0;12221.9;12342.6,5948.38709677419;6065.45905707196;6125.35980148883\n2006-12-15,12194.1;12463.2;12510.6,6042.66600594648;6176.01585728444;6199.50445986125\n2007-01-15,12398.0;12621.7;12621.8,6125.00988064185;6235.52485969489;6235.57426290412\n2007-02-15,12216.2;12268.6;12786.6,6003.07618219254;6028.82569447516;6283.37239986437\n2007-03-15,12050.4;12354.4;12481.0,5868.16782889867;6016.20631890607;6077.85655849468\n2007-04-15,12382.3;13062.9;13120.9,5990.87504717301;6320.16682310364;6348.22871408804\n2007-05-15,13136.1;13627.6;13633.1,6316.9815675959;6553.33759719931;6555.9824764726\n2007-06-15,13266.7;13408.6;13676.3,6367.44547688527;6435.55137459684;6564.03586238673\n2007-07-15,13212.0;13212.0;14000.4,6342.8052943125;6342.8052943125;6721.29967018565\n2007-08-15,12845.8;13357.7;13657.9,6178.3307762232;6424.53479032499;6568.91932838585\n2007-09-15,13113.4;13895.6;13912.9,6289.70214398772;6664.87601323804;6673.17377332246\n2007-10-15,13522.0;13930.0;14164.5,6471.83826626335;6667.11337443045;6779.34870008041\n2007-11-15,12743.4;13371.7;13660.9,6063.17532365578;6362.11383738468;6499.71214738054\n2007-12-15,13167.2;13264.8;13727.0,6269.02054885829;6315.48877335314;6535.54628730313\n2008-01-15,11971.2;12650.4;13056.7,5671.40420693576;5993.17794201251;6185.66420314573\n2008-02-15,12182.1;12266.4;12743.2,5754.60690717218;5794.42872461536;6019.66054616827\n2008-03-15,11740.2;12262.9;12548.6,5498.20164100259;5742.99389307257;5876.79367577086\n2008-04-15,12302.1;12820.1;12891.9,5726.62145114815;5967.75019434604;6001.17305875069\n2008-05-15,12479.6;12638.3;13058.2,5760.73710255179;5833.99497765796;6027.82599062004\n2008-06-15,11346.5;11350.0;12604.5,5185.430614903;5187.03013961566;5760.34549733793\n2008-07-15,10962.5;11378.0;11632.4,4983.77007146624;5172.66461784656;5288.31990689385\n2008-08-15,11284.2;11543.6;11782.4,5150.58013748026;5268.98113069753;5377.97942360534\n2008-09-15,10365.5;10850.7;11532.9,4737.79955481002;4959.57181316647;5271.387630666\n2008-10-15,8175.77;9325.01;10831.1,3775.06429702687;4305.71216171914;5001.13125828243\n2008-11-15,7552.29;8829.04;9625.28,3555.27362598564;4156.30928563022;4531.14275626692\n2008-12-15,8149.09;8776.39;8934.18,3876.31048195293;4174.70080103507;4249.75740624465\n2009-01-15,7949.09;8000.86;9034.69,3764.78973965512;3789.30866758548;4278.94365430064\n2009-02-15,7062.93;7062.93;8280.59,3328.54052678458;3328.54052678458;3902.38603535461\n2009-03-15,6547.05;7608.92;7924.56,3077.93746385908;3577.15000305582;3725.54052719913\n2009-04-15,7761.60;8168.12;8185.73,3639.84243106359;3830.48208591259;3838.74038641906\n2009-05-15,8212.41;8500.33;8574.65,3840.15879844381;3974.79144845129;4009.54380517732\n2009-06-15,8299.86;8447.00;8799.26,3847.99692155054;3916.21424895569;4079.52970193748\n2009-07-15,8146.52;9171.61;9171.61,3782.90326025883;4258.91219451036;4258.91219451036\n2009-08-15,9135.34;9496.28;9580.63,4232.5768877934;4399.8072592826;4438.88821965029\n2009-09-15,9280.67;9712.28;9829.87,4297.2232125907;4497.07133894216;4551.51896800004\n2009-10-15,9487.67;9712.73;10092.2,4388.84340147194;4492.9525342659;4668.48924723722\n";
    }


    return {
        data_nolabel: data_nolabel,
        data: data,
        NoisyData:NoisyData,
        data_showzerovalues: data_showzerovalues,
        data_temp: data_temp,
        stockData: stockData
    }
})
'use strict';

angular.module('app.graphs').directive('dygraphsNoRollPeriod', function (DygraphsDataDemo) {
    return {
        restrict: 'A',
        compile: function () {
            return {
                post: function (scope, element) {
                    new Dygraph(element[0], DygraphsDataDemo.data_temp, {
                        customBars: true,
                        title: 'Daily Temperatures in New York vs. San Francisco',
                        ylabel: 'Temperature (F)',
                        legend: 'always',
                        labelsDivStyles: {
                            'textAlign': 'right'
                        },
                        showRangeSelector: true
                    });
                }
            }
        }
    }
});
'use strict';

angular.module('app.graphs').directive('dygraphsNoRollTimestamp', function (DygraphsDataDemo) {
    return {
        restrict: 'A',
        compile: function () {
            return {
                post: function (scope, element) {
                    new Dygraph(element[0], DygraphsDataDemo.data_temp, {
                        rollPeriod : 14,
                        showRoller : true,
                        customBars : true,
                        ylabel : 'Temperature (F)',
                        legend : 'always',
                        labelsDivStyles : {
                            'textAlign' : 'right'
                        },
                        showRangeSelector : true,
                        rangeSelectorHeight : 30,
                        rangeSelectorPlotStrokeColor : 'yellow',
                        rangeSelectorPlotFillColor : 'lightyellow'
                    });
                }
            }
        }
    }
});
'use strict';

angular.module('app.graphs').directive('highchartTable', function (lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            lazyScript.register('build/vendor.graphs.js').then(function(){
                element.highchartTable();
            })
        }
    }
});
'use strict';

angular.module('app.graphs').directive('easyPieChartContainer', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            /*
             * EASY PIE CHARTS
             * DEPENDENCY: js/plugins/easy-pie-chart/jquery.easy-pie-chart.min.js
             * Usage: <div class="easy-pie-chart txt-color-orangeDark" data-pie-percent="33" data-pie-size="72" data-size="72">
             *			<span class="percent percent-sign">35</span>
             * 	  	  </div>
             */

            if ($.fn.easyPieChart) {

                $('.easy-pie-chart').each(function() {
                    var $this = $(this),
                        barColor = $this.css('color') || $this.data('pie-color'),
                        trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)',
                        size = parseInt($this.data('pie-size')) || 25;

                    $this.easyPieChart({

                        barColor : barColor,
                        trackColor : trackColor,
                        scaleColor : false,
                        lineCap : 'butt',
                        lineWidth : parseInt(size / 8.5),
                        animate : 1500,
                        rotate : -90,
                        size : size,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }

                    });

                    $this = null;
                });

            } // end if
        }
    }
});
"use strict";

angular.module('app.graphs').directive('sparklineContainer', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            /*
             * SPARKLINES
             * DEPENDENCY: js/plugins/sparkline/jquery.sparkline.min.js
             * See usage example below...
             */

            /* Usage:
             * 		<div class="sparkline-line txt-color-blue" data-fill-color="transparent" data-sparkline-height="26px">
             *			5,6,7,9,9,5,9,6,5,6,6,7,7,6,7,8,9,7
             *		</div>
             */
            // variable declearations:

            var barColor,
                sparklineHeight,
                sparklineBarWidth,
                sparklineBarSpacing,
                sparklineNegBarColor,
                sparklineStackedColor,
                thisLineColor,
                thisLineWidth,
                thisFill,
                thisSpotColor,
                thisMinSpotColor,
                thisMaxSpotColor,
                thishighlightSpotColor,
                thisHighlightLineColor,
                thisSpotRadius,
                pieColors,
                pieWidthHeight,
                pieBorderColor,
                pieOffset,
                thisBoxWidth,
                thisBoxHeight,
                thisBoxRaw,
                thisBoxTarget,
                thisBoxMin,
                thisBoxMax,
                thisShowOutlier,
                thisIQR,
                thisBoxSpotRadius,
                thisBoxLineColor,
                thisBoxFillColor,
                thisBoxWhisColor,
                thisBoxOutlineColor,
                thisBoxOutlineFill,
                thisBoxMedianColor,
                thisBoxTargetColor,
                thisBulletHeight,
                thisBulletWidth,
                thisBulletColor,
                thisBulletPerformanceColor,
                thisBulletRangeColors,
                thisDiscreteHeight,
                thisDiscreteWidth,
                thisDiscreteLineColor,
                thisDiscreteLineHeight,
                thisDiscreteThrushold,
                thisDiscreteThrusholdColor,
                thisTristateHeight,
                thisTristatePosBarColor,
                thisTristateNegBarColor,
                thisTristateZeroBarColor,
                thisTristateBarWidth,
                thisTristateBarSpacing,
                thisZeroAxis,
                thisBarColor,
                sparklineWidth,
                sparklineValue,
                sparklineValueSpots1,
                sparklineValueSpots2,
                thisLineWidth1,
                thisLineWidth2,
                thisLineColor1,
                thisLineColor2,
                thisSpotRadius1,
                thisSpotRadius2,
                thisMinSpotColor1,
                thisMaxSpotColor1,
                thisMinSpotColor2,
                thisMaxSpotColor2,
                thishighlightSpotColor1,
                thisHighlightLineColor1,
                thishighlightSpotColor2,
                thisHighlightLineColor2,
                thisFillColor1,
                thisFillColor2,
                thisChartMinYRange ,
                thisChartMaxYRange ,
                thisChartMinXRange ,
                thisChartMaxXRange ,
                thisMinNormValue ,
                thisMaxNormValue ,
                thisNormColor ,
                thisDrawNormalOnTop;

            function drawSparklines() {
                $('.sparkline:not(:has(>canvas))', element).each(function () {
                    var $this = $(this),
                        sparklineType = $this.data('sparkline-type') || 'bar';

                    // BAR CHART
                    if (sparklineType == 'bar') {

                        barColor = $this.data('sparkline-bar-color') || $this.css('color') || '#0000f0';
                        sparklineHeight = $this.data('sparkline-height') || '26px';
                        sparklineBarWidth = $this.data('sparkline-barwidth') || 5;
                        sparklineBarSpacing = $this.data('sparkline-barspacing') || 2;
                        sparklineNegBarColor = $this.data('sparkline-negbar-color') || '#A90329';
                        sparklineStackedColor = $this.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];

                        $this.sparkline('html', {
                            barColor: barColor,
                            type: sparklineType,
                            height: sparklineHeight,
                            barWidth: sparklineBarWidth,
                            barSpacing: sparklineBarSpacing,
                            stackedBarColor: sparklineStackedColor,
                            negBarColor: sparklineNegBarColor,
                            zeroAxis: 'false'
                        });

                        $this = null;

                    }

                    // LINE CHART
                    if (sparklineType == 'line') {

                        sparklineHeight = $this.data('sparkline-height') || '20px';
                        sparklineWidth = $this.data('sparkline-width') || '90px';
                        thisLineColor = $this.data('sparkline-line-color') || $this.css('color') || '#0000f0';
                        thisLineWidth = $this.data('sparkline-line-width') || 1;
                        thisFill = $this.data('fill-color') || '#c0d0f0';
                        thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
                        thisMinSpotColor = $this.data('sparkline-minspot-color') || '#ed1c24';
                        thisMaxSpotColor = $this.data('sparkline-maxspot-color') || '#f08000';
                        thishighlightSpotColor = $this.data('sparkline-highlightspot-color') || '#50f050';
                        thisHighlightLineColor = $this.data('sparkline-highlightline-color') || 'f02020';
                        thisSpotRadius = $this.data('sparkline-spotradius') || 1.5;
                        thisChartMinYRange = $this.data('sparkline-min-y') || 'undefined';
                        thisChartMaxYRange = $this.data('sparkline-max-y') || 'undefined';
                        thisChartMinXRange = $this.data('sparkline-min-x') || 'undefined';
                        thisChartMaxXRange = $this.data('sparkline-max-x') || 'undefined';
                        thisMinNormValue = $this.data('min-val') || 'undefined';
                        thisMaxNormValue = $this.data('max-val') || 'undefined';
                        thisNormColor = $this.data('norm-color') || '#c0c0c0';
                        thisDrawNormalOnTop = $this.data('draw-normal') || false;

                        $this.sparkline('html', {
                            type: 'line',
                            width: sparklineWidth,
                            height: sparklineHeight,
                            lineWidth: thisLineWidth,
                            lineColor: thisLineColor,
                            fillColor: thisFill,
                            spotColor: thisSpotColor,
                            minSpotColor: thisMinSpotColor,
                            maxSpotColor: thisMaxSpotColor,
                            highlightSpotColor: thishighlightSpotColor,
                            highlightLineColor: thisHighlightLineColor,
                            spotRadius: thisSpotRadius,
                            chartRangeMin: thisChartMinYRange,
                            chartRangeMax: thisChartMaxYRange,
                            chartRangeMinX: thisChartMinXRange,
                            chartRangeMaxX: thisChartMaxXRange,
                            normalRangeMin: thisMinNormValue,
                            normalRangeMax: thisMaxNormValue,
                            normalRangeColor: thisNormColor,
                            drawNormalOnTop: thisDrawNormalOnTop

                        });

                        $this = null;

                    }

                    // PIE CHART
                    if (sparklineType == 'pie') {

                        pieColors = $this.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
                        pieWidthHeight = $this.data('sparkline-piesize') || 90;
                        pieBorderColor = $this.data('border-color') || '#45494C';
                        pieOffset = $this.data('sparkline-offset') || 0;

                        $this.sparkline('html', {
                            type: 'pie',
                            width: pieWidthHeight,
                            height: pieWidthHeight,
                            tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
                            sliceColors: pieColors,
                            borderWidth: 1,
                            offset: pieOffset,
                            borderColor: pieBorderColor
                        });

                        $this = null;

                    }

                    // BOX PLOT
                    if (sparklineType == 'box') {

                        thisBoxWidth = $this.data('sparkline-width') || 'auto';
                        thisBoxHeight = $this.data('sparkline-height') || 'auto';
                        thisBoxRaw = $this.data('sparkline-boxraw') || false;
                        thisBoxTarget = $this.data('sparkline-targetval') || 'undefined';
                        thisBoxMin = $this.data('sparkline-min') || 'undefined';
                        thisBoxMax = $this.data('sparkline-max') || 'undefined';
                        thisShowOutlier = $this.data('sparkline-showoutlier') || true;
                        thisIQR = $this.data('sparkline-outlier-iqr') || 1.5;
                        thisBoxSpotRadius = $this.data('sparkline-spotradius') || 1.5;
                        thisBoxLineColor = $this.css('color') || '#000000';
                        thisBoxFillColor = $this.data('fill-color') || '#c0d0f0';
                        thisBoxWhisColor = $this.data('sparkline-whis-color') || '#000000';
                        thisBoxOutlineColor = $this.data('sparkline-outline-color') || '#303030';
                        thisBoxOutlineFill = $this.data('sparkline-outlinefill-color') || '#f0f0f0';
                        thisBoxMedianColor = $this.data('sparkline-outlinemedian-color') || '#f00000';
                        thisBoxTargetColor = $this.data('sparkline-outlinetarget-color') || '#40a020';

                        $this.sparkline('html', {
                            type: 'box',
                            width: thisBoxWidth,
                            height: thisBoxHeight,
                            raw: thisBoxRaw,
                            target: thisBoxTarget,
                            minValue: thisBoxMin,
                            maxValue: thisBoxMax,
                            showOutliers: thisShowOutlier,
                            outlierIQR: thisIQR,
                            spotRadius: thisBoxSpotRadius,
                            boxLineColor: thisBoxLineColor,
                            boxFillColor: thisBoxFillColor,
                            whiskerColor: thisBoxWhisColor,
                            outlierLineColor: thisBoxOutlineColor,
                            outlierFillColor: thisBoxOutlineFill,
                            medianColor: thisBoxMedianColor,
                            targetColor: thisBoxTargetColor

                        });

                        $this = null;

                    }

                    // BULLET
                    if (sparklineType == 'bullet') {

                        var thisBulletHeight = $this.data('sparkline-height') || 'auto';
                        thisBulletWidth = $this.data('sparkline-width') || 2;
                        thisBulletColor = $this.data('sparkline-bullet-color') || '#ed1c24';
                        thisBulletPerformanceColor = $this.data('sparkline-performance-color') || '#3030f0';
                        thisBulletRangeColors = $this.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];

                        $this.sparkline('html', {

                            type: 'bullet',
                            height: thisBulletHeight,
                            targetWidth: thisBulletWidth,
                            targetColor: thisBulletColor,
                            performanceColor: thisBulletPerformanceColor,
                            rangeColors: thisBulletRangeColors

                        });

                        $this = null;

                    }

                    // DISCRETE
                    if (sparklineType == 'discrete') {

                        thisDiscreteHeight = $this.data('sparkline-height') || 26;
                        thisDiscreteWidth = $this.data('sparkline-width') || 50;
                        thisDiscreteLineColor = $this.css('color');
                        thisDiscreteLineHeight = $this.data('sparkline-line-height') || 5;
                        thisDiscreteThrushold = $this.data('sparkline-threshold') || 'undefined';
                        thisDiscreteThrusholdColor = $this.data('sparkline-threshold-color') || '#ed1c24';

                        $this.sparkline('html', {

                            type: 'discrete',
                            width: thisDiscreteWidth,
                            height: thisDiscreteHeight,
                            lineColor: thisDiscreteLineColor,
                            lineHeight: thisDiscreteLineHeight,
                            thresholdValue: thisDiscreteThrushold,
                            thresholdColor: thisDiscreteThrusholdColor

                        });

                        $this = null;

                    }

                    // TRISTATE
                    if (sparklineType == 'tristate') {

                        thisTristateHeight = $this.data('sparkline-height') || 26;
                        thisTristatePosBarColor = $this.data('sparkline-posbar-color') || '#60f060';
                        thisTristateNegBarColor = $this.data('sparkline-negbar-color') || '#f04040';
                        thisTristateZeroBarColor = $this.data('sparkline-zerobar-color') || '#909090';
                        thisTristateBarWidth = $this.data('sparkline-barwidth') || 5;
                        thisTristateBarSpacing = $this.data('sparkline-barspacing') || 2;
                        thisZeroAxis = $this.data('sparkline-zeroaxis') || false;

                        $this.sparkline('html', {

                            type: 'tristate',
                            height: thisTristateHeight,
                            posBarColor: thisBarColor,
                            negBarColor: thisTristateNegBarColor,
                            zeroBarColor: thisTristateZeroBarColor,
                            barWidth: thisTristateBarWidth,
                            barSpacing: thisTristateBarSpacing,
                            zeroAxis: thisZeroAxis

                        });

                        $this = null;

                    }

                    //COMPOSITE: BAR
                    if (sparklineType == 'compositebar') {

                        sparklineHeight = $this.data('sparkline-height') || '20px';
                        sparklineWidth = $this.data('sparkline-width') || '100%';
                        sparklineBarWidth = $this.data('sparkline-barwidth') || 3;
                        thisLineWidth = $this.data('sparkline-line-width') || 1;
                        thisLineColor = $this.data('sparkline-color-top') || '#ed1c24';
                        thisBarColor = $this.data('sparkline-color-bottom') || '#333333';

                        $this.sparkline($this.data('sparkline-bar-val'), {

                            type: 'bar',
                            width: sparklineWidth,
                            height: sparklineHeight,
                            barColor: thisBarColor,
                            barWidth: sparklineBarWidth
                            //barSpacing: 5

                        });

                        $this.sparkline($this.data('sparkline-line-val'), {

                            width: sparklineWidth,
                            height: sparklineHeight,
                            lineColor: thisLineColor,
                            lineWidth: thisLineWidth,
                            composite: true,
                            fillColor: false

                        });

                        $this = null;

                    }

                    //COMPOSITE: LINE
                    if (sparklineType == 'compositeline') {

                        sparklineHeight = $this.data('sparkline-height') || '20px';
                        sparklineWidth = $this.data('sparkline-width') || '90px';
                        sparklineValue = $this.data('sparkline-bar-val');
                        sparklineValueSpots1 = $this.data('sparkline-bar-val-spots-top') || null;
                        sparklineValueSpots2 = $this.data('sparkline-bar-val-spots-bottom') || null;
                        thisLineWidth1 = $this.data('sparkline-line-width-top') || 1;
                        thisLineWidth2 = $this.data('sparkline-line-width-bottom') || 1;
                        thisLineColor1 = $this.data('sparkline-color-top') || '#333333';
                        thisLineColor2 = $this.data('sparkline-color-bottom') || '#ed1c24';
                        thisSpotRadius1 = $this.data('sparkline-spotradius-top') || 1.5;
                        thisSpotRadius2 = $this.data('sparkline-spotradius-bottom') || thisSpotRadius1;
                        thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
                        thisMinSpotColor1 = $this.data('sparkline-minspot-color-top') || '#ed1c24';
                        thisMaxSpotColor1 = $this.data('sparkline-maxspot-color-top') || '#f08000';
                        thisMinSpotColor2 = $this.data('sparkline-minspot-color-bottom') || thisMinSpotColor1;
                        thisMaxSpotColor2 = $this.data('sparkline-maxspot-color-bottom') || thisMaxSpotColor1;
                        thishighlightSpotColor1 = $this.data('sparkline-highlightspot-color-top') || '#50f050';
                        thisHighlightLineColor1 = $this.data('sparkline-highlightline-color-top') || '#f02020';
                        thishighlightSpotColor2 = $this.data('sparkline-highlightspot-color-bottom') ||
                            thishighlightSpotColor1;
                        thisHighlightLineColor2 = $this.data('sparkline-highlightline-color-bottom') ||
                            thisHighlightLineColor1;
                        thisFillColor1 = $this.data('sparkline-fillcolor-top') || 'transparent';
                        thisFillColor2 = $this.data('sparkline-fillcolor-bottom') || 'transparent';

                        $this.sparkline(sparklineValue, {

                            type: 'line',
                            spotRadius: thisSpotRadius1,

                            spotColor: thisSpotColor,
                            minSpotColor: thisMinSpotColor1,
                            maxSpotColor: thisMaxSpotColor1,
                            highlightSpotColor: thishighlightSpotColor1,
                            highlightLineColor: thisHighlightLineColor1,

                            valueSpots: sparklineValueSpots1,

                            lineWidth: thisLineWidth1,
                            width: sparklineWidth,
                            height: sparklineHeight,
                            lineColor: thisLineColor1,
                            fillColor: thisFillColor1

                        });

                        $this.sparkline($this.data('sparkline-line-val'), {

                            type: 'line',
                            spotRadius: thisSpotRadius2,

                            spotColor: thisSpotColor,
                            minSpotColor: thisMinSpotColor2,
                            maxSpotColor: thisMaxSpotColor2,
                            highlightSpotColor: thishighlightSpotColor2,
                            highlightLineColor: thisHighlightLineColor2,

                            valueSpots: sparklineValueSpots2,

                            lineWidth: thisLineWidth2,
                            width: sparklineWidth,
                            height: sparklineHeight,
                            lineColor: thisLineColor2,
                            composite: true,
                            fillColor: thisFillColor2

                        });

                        $this = null;

                    }

                });
            }


            drawSparklines();

        }
    }
});
'use strict';

angular.module('app.graphs').directive('vectorMap', function () {
    return {
        restrict: 'EA',
        scope: {
            mapData: '='
        },
        link: function (scope, element, attributes) {
            var data = scope.mapData;

            element.vectorMap({
                map: 'world_mill_en',
                backgroundColor: '#fff',
                regionStyle: {
                    initial: {
                        fill: '#c4c4c4'
                    },
                    hover: {
                        "fill-opacity": 1
                    }
                },
                series: {
                    regions: [
                        {
                            values: data,
                            scale: ['#85a8b6', '#4d7686'],
                            normalizeFunction: 'polynomial'
                        }
                    ]
                },
                onRegionLabelShow: function (e, el, code) {
                    if (typeof data[code] == 'undefined') {
                        e.preventDefault();
                    } else {
                        var countrylbl = data[code];
                        el.html(el.html() + ': ' + countrylbl + ' visits');
                    }
                }
            });

            element.on('$destroy', function(){
                element.children('.jvectormap-container').data('mapObject').remove();
            })
        }
    }
});

"use strict";

angular.module('app.graphs').directive('morrisAreaGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Area({
                element : element,
                data : [{
                    x : '2011 Q1',
                    y : 3,
                    z : 3
                }, {
                    x : '2011 Q2',
                    y : 2,
                    z : 0
                }, {
                    x : '2011 Q3',
                    y : 0,
                    z : 2
                }, {
                    x : '2011 Q4',
                    y : 4,
                    z : 4
                }],
                xkey : 'x',
                ykeys : ['y', 'z'],
                labels : ['Y', 'Z']
            });
        }
    }
});

"use strict";

angular.module('app.graphs').directive('morrisBarGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Bar({
                element : element,
                data : [{
                    x : '2011 Q1',
                    y : 0
                }, {
                    x : '2011 Q2',
                    y : 1
                }, {
                    x : '2011 Q3',
                    y : 2
                }, {
                    x : '2011 Q4',
                    y : 3
                }, {
                    x : '2012 Q1',
                    y : 4
                }, {
                    x : '2012 Q2',
                    y : 5
                }, {
                    x : '2012 Q3',
                    y : 6
                }, {
                    x : '2012 Q4',
                    y : 7
                }, {
                    x : '2013 Q1',
                    y : 8
                }],
                xkey : 'x',
                ykeys : ['y'],
                labels : ['Y'],
                barColors : function(row, series, type) {
                    if (type === 'bar') {
                        var red = Math.ceil(150 * row.y / this.ymax);
                        return 'rgb(' + red + ',0,0)';
                    } else {
                        return '#000';
                    }
                }
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisDonutGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            Morris.Donut({
                element : element,
                data : [{
                    value : 70,
                    label : 'foo'
                }, {
                    value : 15,
                    label : 'bar'
                }, {
                    value : 10,
                    label : 'baz'
                }, {
                    value : 5,
                    label : 'A really really long label'
                }],
                formatter : function(x) {
                    return x + "%"
                }
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisLineGraphA', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            var neg_data = [{
                "period" : "2011-08-12",
                "a" : 100
            }, {
                "period" : "2011-03-03",
                "a" : 75
            }, {
                "period" : "2010-08-08",
                "a" : 50
            }, {
                "period" : "2010-05-10",
                "a" : 25
            }, {
                "period" : "2010-03-14",
                "a" : 0
            }, {
                "period" : "2010-01-10",
                "a" : -25
            }, {
                "period" : "2009-12-10",
                "a" : -50
            }, {
                "period" : "2009-10-07",
                "a" : -75
            }, {
                "period" : "2009-09-25",
                "a" : -100
            }];
            Morris.Line({
                element : element,
                data : neg_data,
                xkey : 'period',
                ykeys : ['a'],
                labels : ['Series A'],
                units : '%'
            });


        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisLineGraphB', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var day_data = [{
                "period" : "2012-10-01",
                "licensed" : 3407
            }, {
                "period" : "2012-09-30",
                "sorned" : 0
            }, {
                "period" : "2012-09-29",
                "sorned" : 618
            }, {
                "period" : "2012-09-20",
                "licensed" : 3246,
                "sorned" : 661
            }, {
                "period" : "2012-09-19",
                "licensed" : 3257,
                "sorned" : null
            }, {
                "period" : "2012-09-18",
                "licensed" : 3248,
                "other" : 1000
            }, {
                "period" : "2012-09-17",
                "sorned" : 0
            }, {
                "period" : "2012-09-16",
                "sorned" : 0
            }, {
                "period" : "2012-09-15",
                "licensed" : 3201,
                "sorned" : 656
            }, {
                "period" : "2012-09-10",
                "licensed" : 3215
            }];
            Morris.Line({
                element : element,
                data : day_data,
                xkey : 'period',
                ykeys : ['licensed', 'sorned', 'other'],
                labels : ['Licensed', 'SORN', 'Other'],
                /* custom label formatting with `xLabelFormat` */
                xLabelFormat : function(d) {
                    return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
                },
                /* setting `xLabels` is recommended when using xLabelFormat */
                xLabels : 'day'
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisLineGraphC', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var day_data = [{
                "elapsed" : "I",
                "value" : 34
            }, {
                "elapsed" : "II",
                "value" : 24
            }, {
                "elapsed" : "III",
                "value" : 3
            }, {
                "elapsed" : "IV",
                "value" : 12
            }, {
                "elapsed" : "V",
                "value" : 13
            }, {
                "elapsed" : "VI",
                "value" : 22
            }, {
                "elapsed" : "VII",
                "value" : 5
            }, {
                "elapsed" : "VIII",
                "value" : 26
            }, {
                "elapsed" : "IX",
                "value" : 12
            }, {
                "elapsed" : "X",
                "value" : 19
            }];
            Morris.Line({
                element : element,
                data : day_data,
                xkey : 'elapsed',
                ykeys : ['value'],
                labels : ['value'],
                parseTime : false
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisNoGridGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var day_data = [{
                "period" : "2012-10-01",
                "licensed" : 3407,
                "sorned" : 660
            }, {
                "period" : "2012-09-30",
                "licensed" : 3351,
                "sorned" : 629
            }, {
                "period" : "2012-09-29",
                "licensed" : 3269,
                "sorned" : 618
            }, {
                "period" : "2012-09-20",
                "licensed" : 3246,
                "sorned" : 661
            }, {
                "period" : "2012-09-19",
                "licensed" : 3257,
                "sorned" : 667
            }, {
                "period" : "2012-09-18",
                "licensed" : 3248,
                "sorned" : 627
            }, {
                "period" : "2012-09-17",
                "licensed" : 3171,
                "sorned" : 660
            }, {
                "period" : "2012-09-16",
                "licensed" : 3171,
                "sorned" : 676
            }, {
                "period" : "2012-09-15",
                "licensed" : 3201,
                "sorned" : 656
            }, {
                "period" : "2012-09-10",
                "licensed" : 3215,
                "sorned" : 622
            }];
            Morris.Line({
                element : element,
                grid : false,
                data : day_data,
                xkey : 'period',
                ykeys : ['licensed', 'sorned'],
                labels : ['Licensed', 'SORN']
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisNormalBarGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            Morris.Bar({
                element : element,
                data : [{
                    x : '2011 Q1',
                    y : 3,
                    z : 2,
                    a : 3
                }, {
                    x : '2011 Q2',
                    y : 2,
                    z : null,
                    a : 1
                }, {
                    x : '2011 Q3',
                    y : 0,
                    z : 2,
                    a : 4
                }, {
                    x : '2011 Q4',
                    y : 2,
                    z : 4,
                    a : 3
                }],
                xkey : 'x',
                ykeys : ['y', 'z', 'a'],
                labels : ['Y', 'Z', 'A']
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisSalesGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Area({
                element : element,
                data : [{
                    period : '2010 Q1',
                    iphone : 2666,
                    ipad : null,
                    itouch : 2647
                }, {
                    period : '2010 Q2',
                    iphone : 2778,
                    ipad : 2294,
                    itouch : 2441
                }, {
                    period : '2010 Q3',
                    iphone : 4912,
                    ipad : 1969,
                    itouch : 2501
                }, {
                    period : '2010 Q4',
                    iphone : 3767,
                    ipad : 3597,
                    itouch : 5689
                }, {
                    period : '2011 Q1',
                    iphone : 6810,
                    ipad : 1914,
                    itouch : 2293
                }, {
                    period : '2011 Q2',
                    iphone : 5670,
                    ipad : 4293,
                    itouch : 1881
                }, {
                    period : '2011 Q3',
                    iphone : 4820,
                    ipad : 3795,
                    itouch : 1588
                }, {
                    period : '2011 Q4',
                    iphone : 15073,
                    ipad : 5967,
                    itouch : 5175
                }, {
                    period : '2012 Q1',
                    iphone : 10687,
                    ipad : 4460,
                    itouch : 2028
                }, {
                    period : '2012 Q2',
                    iphone : 8432,
                    ipad : 5713,
                    itouch : 1791
                }],
                xkey : 'period',
                ykeys : ['iphone', 'ipad', 'itouch'],
                labels : ['iPhone', 'iPad', 'iPod Touch'],
                pointSize : 2,
                hideHover : 'auto'
            });

        }
    }
});


"use strict";

angular.module('app.graphs').directive('morrisStackedBarGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Bar({
                element : element,
                axes : false,
                grid : false,
                data : [{
                    x : '2011 Q1',
                    y : 3,
                    z : 2,
                    a : 3
                }, {
                    x : '2011 Q2',
                    y : 2,
                    z : null,
                    a : 1
                }, {
                    x : '2011 Q3',
                    y : 0,
                    z : 2,
                    a : 4
                }, {
                    x : '2011 Q4',
                    y : 2,
                    z : 4,
                    a : 3
                }],
                xkey : 'x',
                ykeys : ['y', 'z', 'a'],
                labels : ['Y', 'Z', 'A'],
                stacked : true
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisTimeGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var week_data = [{
                "period" : "2011 W27",
                "licensed" : 3407,
                "sorned" : 660
            }, {
                "period" : "2011 W26",
                "licensed" : 3351,
                "sorned" : 629
            }, {
                "period" : "2011 W25",
                "licensed" : 3269,
                "sorned" : 618
            }, {
                "period" : "2011 W24",
                "licensed" : 3246,
                "sorned" : 661
            }, {
                "period" : "2011 W23",
                "licensed" : 3257,
                "sorned" : 667
            }, {
                "period" : "2011 W22",
                "licensed" : 3248,
                "sorned" : 627
            }, {
                "period" : "2011 W21",
                "licensed" : 3171,
                "sorned" : 660
            }, {
                "period" : "2011 W20",
                "licensed" : 3171,
                "sorned" : 676
            }, {
                "period" : "2011 W19",
                "licensed" : 3201,
                "sorned" : 656
            }, {
                "period" : "2011 W18",
                "licensed" : 3215,
                "sorned" : 622
            }, {
                "period" : "2011 W17",
                "licensed" : 3148,
                "sorned" : 632
            }, {
                "period" : "2011 W16",
                "licensed" : 3155,
                "sorned" : 681
            }, {
                "period" : "2011 W15",
                "licensed" : 3190,
                "sorned" : 667
            }, {
                "period" : "2011 W14",
                "licensed" : 3226,
                "sorned" : 620
            }, {
                "period" : "2011 W13",
                "licensed" : 3245,
                "sorned" : null
            }, {
                "period" : "2011 W12",
                "licensed" : 3289,
                "sorned" : null
            }, {
                "period" : "2011 W11",
                "licensed" : 3263,
                "sorned" : null
            }, {
                "period" : "2011 W10",
                "licensed" : 3189,
                "sorned" : null
            }, {
                "period" : "2011 W09",
                "licensed" : 3079,
                "sorned" : null
            }, {
                "period" : "2011 W08",
                "licensed" : 3085,
                "sorned" : null
            }, {
                "period" : "2011 W07",
                "licensed" : 3055,
                "sorned" : null
            }, {
                "period" : "2011 W06",
                "licensed" : 3063,
                "sorned" : null
            }, {
                "period" : "2011 W05",
                "licensed" : 2943,
                "sorned" : null
            }, {
                "period" : "2011 W04",
                "licensed" : 2806,
                "sorned" : null
            }, {
                "period" : "2011 W03",
                "licensed" : 2674,
                "sorned" : null
            }, {
                "period" : "2011 W02",
                "licensed" : 1702,
                "sorned" : null
            }, {
                "period" : "2011 W01",
                "licensed" : 1732,
                "sorned" : null
            }];
            Morris.Line({
                element : element,
                data : week_data,
                xkey : 'period',
                ykeys : ['licensed', 'sorned'],
                labels : ['Licensed', 'SORN'],
                events : ['2011-04', '2011-08']
            });

        }
    }
});
"use strict";

angular.module('app.graphs').directive('morrisYearGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){

            var day_data = [{
                "period" : "2012-10-01",
                "licensed" : 3407,
                "sorned" : 660
            }, {
                "period" : "2012-09-30",
                "licensed" : 3351,
                "sorned" : 629
            }, {
                "period" : "2012-09-29",
                "licensed" : 3269,
                "sorned" : 618
            }, {
                "period" : "2012-09-20",
                "licensed" : 3246,
                "sorned" : 661
            }, {
                "period" : "2012-09-19",
                "licensed" : 3257,
                "sorned" : 667
            }, {
                "period" : "2012-09-18",
                "licensed" : 3248,
                "sorned" : 627
            }, {
                "period" : "2012-09-17",
                "licensed" : 3171,
                "sorned" : 660
            }, {
                "period" : "2012-09-16",
                "licensed" : 3171,
                "sorned" : 676
            }, {
                "period" : "2012-09-15",
                "licensed" : 3201,
                "sorned" : 656
            }, {
                "period" : "2012-09-10",
                "licensed" : 3215,
                "sorned" : 622
            }];
            Morris.Line({
                element : element,
                data : day_data,
                xkey : 'period',
                ykeys : ['licensed', 'sorned'],
                labels : ['Licensed', 'SORN']
            })

        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableBasic', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            tableOptions: '='
        },
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var options = {
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> ",
                    "sLengthMenu": "_MENU_"
                },
                "autoWidth": false,
                "smartResponsiveHelper": null,
                "preDrawCallback": function () {
                    // Initialize the responsive datatables helper once.
                    if (!this.smartResponsiveHelper) {
                        this.smartResponsiveHelper = new ResponsiveDatatablesHelper(element, {
                            tablet: 1024,
                            phone: 480
                        });
                    }
                },
                "rowCallback": function (nRow) {
                    this.smartResponsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback": function (oSettings) {
                    this.smartResponsiveHelper.respond();
                }
            };

            if(attributes.tableOptions){
                options = angular.extend(options, scope.tableOptions)
            }

            var _dataTable;

            var childFormat = element.find('.smart-datatable-child-format');
            if(childFormat.length){
                var childFormatTemplate = childFormat.remove().html();
                element.on('click', childFormat.data('childControl'), function () {
                    var tr = $(this).closest('tr');

                    var row = _dataTable.row( tr );
                    if ( row.child.isShown() ) {
                        // This row is already open - close it
                        row.child.hide();
                        tr.removeClass('shown');
                    }
                    else {
                        // Open this row
                        var childScope = scope.$new();
                        childScope.d = row.data();
                        var html = $compile(childFormatTemplate)(childScope);
                        row.child( html ).show();
                        tr.addClass('shown');
                    }
                })
            }



            _dataTable =  element.DataTable(options);

            if(attributes.bindFilters){
                element.parent().find("div.toolbar").html('<div class="text-right"><img src="styles/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');

                element.on( 'keyup change', 'thead th input[type=text]', function () {

                    _dataTable
                        .column( $(this).parent().index()+':visible' )
                        .search( this.value )
                        .draw();

                } );
            }
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableColumnFilter', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            var otable = element.DataTable({
                //"bFilter": false,
                //"bInfo": false,
                //"bLengthChange": false
                //"bAutoWidth": false,
                //"bPaginate": false,
                //"bStateSave": true // saves sort state using localStorage
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6 hidden-xs'f><'col-sm-6 col-xs-12 hidden-xs'<'toolbar'>>r>"+
                    "t"+
                    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },
                "autoWidth" : false,
                "preDrawCallback" : function() {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                "rowCallback" : function(nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback" : function(oSettings) {
                    responsiveHelper.respond();
                }

            });

            // custom toolbar
            element.parent().find("div.toolbar").html('<div class="text-right"><img src="styles/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');

            // Apply the filter
            element.on( 'keyup change', 'thead th input[type=text]', function () {

                otable
                    .column( $(this).parent().index()+':visible' )
                    .search( this.value )
                    .draw();

            } );
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableColumnReorder', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            element.dataTable({
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 hidden-xs'C>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 hidden-xs'i><'col-sm-6 col-xs-12'p>>",
                oLanguage: {
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },
                "autoWidth": false,
                "preDrawCallback": function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                "rowCallback": function (nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback": function (oSettings) {
                    responsiveHelper.respond();
                }
            });
        }
    }
});
'use strict';

angular.module('app.tables').directive('datatableTableTools', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */
            var responsiveHelper = undefined;

            var breakpointDefinition = {
                tablet: 1024,
                phone: 480
            };

            element.dataTable({
                // Tabletools options:
                //   https://datatables.net/extensions/tabletools/button_options
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 hidden-xs'T>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 hidden-xs'i><'col-sm-6 col-xs-12'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> "
                },

                sFilterInput:  "form-control",
                "oTableTools": {
                    "aButtons": [
                        "copy",
                        "csv",
                        "xls",
                        {
                            "sExtends": "pdf",
                            "sTitle": "SmartAdmin_PDF",
                            "sPdfMessage": "SmartAdmin PDF Export",
                            "sPdfSize": "letter"
                        },
                        {
                            "sExtends": "print",
                            "sMessage": "Generated by SmartAdmin <i>(press Esc to close)</i>"
                        }
                    ],
                    "sSwfPath": "bower_components/datatables-tabletools/swf/copy_csv_xls_pdf.swf"
                },
                "autoWidth": false,
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper) {
                        responsiveHelper = new ResponsiveDatatablesHelper(element, breakpointDefinition);
                    }
                },
                rowCallback: function (nRow) {
                    responsiveHelper.createExpandIcon(nRow);
                },
                drawCallback: function (oSettings) {
                    responsiveHelper.respond();
                }
            });
        }
    }
});
'use strict';

angular.module('app.tables').directive('jqGrid', function ($compile) {
    var jqGridCounter = 0;

    return {
        replace: true,
        restrict: 'E',
        scope: {
            gridData: '='
        },
        template: '<div>' +
            '<table></table>' +
            '<div class="jqgrid-pagination"></div>' +
            '</div>',
        controller: function($scope, $element){
            $scope.editRow  = function(row){
                $element.find('table').editRow(row);
            };
            $scope.saveRow  = function(row){
                $element.find('table').saveRow(row);
            };
            $scope.restoreRow  = function(row){
                $element.find('table').restoreRow(row);
            };
        },
        link: function (scope, element) {
            var gridNumber = jqGridCounter++;
            var wrapperId = 'jqgrid-' + gridNumber;
            element.attr('id', wrapperId);

            var tableId = 'jqgrid-table-' + gridNumber;
            var table = element.find('table');
            table.attr('id', tableId);

            var pagerId = 'jqgrid-pager-' + gridNumber;
            element.find('.jqgrid-pagination').attr('id', pagerId);


            table.jqGrid({
                data : scope.gridData.data,
                datatype : "local",
                height : 'auto',
                colNames : scope.gridData.colNames || [],
                colModel : scope.gridData.colModel || [],
                rowNum : 10,
                rowList : [10, 20, 30],
                pager : '#' + pagerId,
                sortname : 'id',
                toolbarfilter : true,
                viewrecords : true,
                sortorder : "asc",
                gridComplete : function() {
                    var ids = table.jqGrid('getDataIDs');
                    for (var i = 0; i < ids.length; i++) {
                        var cl = ids[i];
                        var be = "<button class='btn btn-xs btn-default' uib-tooltip='Edit Row' tooltip-append-to-body='true' ng-click='editRow("+ cl +")'><i class='fa fa-pencil'></i></button>";

                        var se = "<button class='btn btn-xs btn-default' uib-tooltip='Save Row' tooltip-append-to-body='true' ng-click='saveRow("+ cl +")'><i class='fa fa-save'></i></button>";

                        var ca = "<button class='btn btn-xs btn-default' uib-tooltip='Cancel' tooltip-append-to-body='true' ng-click='restoreRow("+ cl +")'><i class='fa fa-times'></i></button>";

                        table.jqGrid('setRowData', ids[i], {
                            act : be + se + ca
                        });
                    }
                },
                editurl : "dummy.html",
                caption : "SmartAdmin jQgrid Skin",
                multiselect : true,
                autowidth : true

            });
            table.jqGrid('navGrid', '#' + pagerId, {
                edit : false,
                add : false,
                del : true
            });
            table.jqGrid('inlineNav', '#' + pagerId);


            element.find(".ui-jqgrid").removeClass("ui-widget ui-widget-content");
            element.find(".ui-jqgrid-view").children().removeClass("ui-widget-header ui-state-default");
            element.find(".ui-jqgrid-labels, .ui-search-toolbar").children().removeClass("ui-state-default ui-th-column ui-th-ltr");
            element.find(".ui-jqgrid-pager").removeClass("ui-state-default");
            element.find(".ui-jqgrid").removeClass("ui-widget-content");

            // add classes
            element.find(".ui-jqgrid-htable").addClass("table table-bordered table-hover");
            element.find(".ui-jqgrid-btable").addClass("table table-bordered table-striped");

            element.find(".ui-pg-div").removeClass().addClass("btn btn-sm btn-primary");
            element.find(".ui-icon.ui-icon-plus").removeClass().addClass("fa fa-plus");
            element.find(".ui-icon.ui-icon-pencil").removeClass().addClass("fa fa-pencil");
            element.find(".ui-icon.ui-icon-trash").removeClass().addClass("fa fa-trash-o");
            element.find(".ui-icon.ui-icon-search").removeClass().addClass("fa fa-search");
            element.find(".ui-icon.ui-icon-refresh").removeClass().addClass("fa fa-refresh");
            element.find(".ui-icon.ui-icon-disk").removeClass().addClass("fa fa-save").parent(".btn-primary").removeClass("btn-primary").addClass("btn-success");
            element.find(".ui-icon.ui-icon-cancel").removeClass().addClass("fa fa-times").parent(".btn-primary").removeClass("btn-primary").addClass("btn-danger");

            element.find(".ui-icon.ui-icon-seek-prev").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-prev").removeClass().addClass("fa fa-backward");

            element.find(".ui-icon.ui-icon-seek-first").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-first").removeClass().addClass("fa fa-fast-backward");

            element.find(".ui-icon.ui-icon-seek-next").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-next").removeClass().addClass("fa fa-forward");

            element.find(".ui-icon.ui-icon-seek-end").wrap("<div class='btn btn-sm btn-default'></div>");
            element.find(".ui-icon.ui-icon-seek-end").removeClass().addClass("fa fa-fast-forward");

            $(window).on('resize.jqGrid', function() {
               table.jqGrid('setGridWidth', $("#content").width());
            });


            $compile(element.contents())(scope);
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCkEditor', function () {
    return {
        restrict: 'A',
        compile: function ( tElement) {
            tElement.removeAttr('smart-ck-editor data-smart-ck-editor');
            //CKEDITOR.basePath = 'bower_components/ckeditor/';

            CKEDITOR.replace( tElement.attr('name'), { height: '380px', startupFocus : true} );
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDestroySummernote', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-destroy-summernote data-smart-destroy-summernote')
            tElement.on('click', function() {
                angular.element(tAttributes.smartDestroySummernote).destroy();
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartEditSummernote', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-edit-summernote data-smart-edit-summernote');
            tElement.on('click', function(){
                angular.element(tAttributes.smartEditSummernote).summernote({
                    focus : true
                });  
            });
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartMarkdownEditor', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-markdown-editor data-smart-markdown-editor')

            var options = {
                autofocus:false,
                savable:true,
                fullscreen: {
                    enable: false
                }
            };

            if(attributes.height){
                options.height = parseInt(attributes.height);
            }

            element.markdown(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartSummernoteEditor', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-summernote-editor data-smart-summernote-editor');

            var options = {
                focus : true,
                tabsize : 2
            };

            if(tAttributes.height){
                options.height = tAttributes.height;
            }

            lazyScript.register('build/vendor.ui.js').then(function(){
                tElement.summernote(options);                
            });
        }
    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapAttributeForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-attribute-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator();


        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapButtonGroupForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-button-group-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                excluded : ':disabled',
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    gender : {
                        validators : {
                            notEmpty : {
                                message : 'The gender is required'
                            }
                        }
                    },
                    'languages[]' : {
                        validators : {
                            choice : {
                                min : 1,
                                max : 2,
                                message : 'Please choose 1 - 2 languages you can speak'
                            }
                        }
                    }
                }
            });


        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapContactForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-contact-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                container : '#messages',
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    fullName : {
                        validators : {
                            notEmpty : {
                                message : 'The full name is required and cannot be empty'
                            }
                        }
                    },
                    email : {
                        validators : {
                            notEmpty : {
                                message : 'The email address is required and cannot be empty'
                            },
                            emailAddress : {
                                message : 'The email address is not valid'
                            }
                        }
                    },
                    title : {
                        validators : {
                            notEmpty : {
                                message : 'The title is required and cannot be empty'
                            },
                            stringLength : {
                                max : 100,
                                message : 'The title must be less than 100 characters long'
                            }
                        }
                    },
                    content : {
                        validators : {
                            notEmpty : {
                                message : 'The content is required and cannot be empty'
                            },
                            stringLength : {
                                max : 500,
                                message : 'The content must be less than 500 characters long'
                            }
                        }
                    }
                }
            });

        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapMovieForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-movie-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    title : {
                        group : '.col-md-8',
                        validators : {
                            notEmpty : {
                                message : 'The title is required'
                            },
                            stringLength : {
                                max : 200,
                                message : 'The title must be less than 200 characters long'
                            }
                        }
                    },
                    genre : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The genre is required'
                            }
                        }
                    },
                    director : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The director name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The director name must be less than 80 characters long'
                            }
                        }
                    },
                    writer : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The writer name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The writer name must be less than 80 characters long'
                            }
                        }
                    },
                    producer : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The producer name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The producer name must be less than 80 characters long'
                            }
                        }
                    },
                    website : {
                        group : '.col-md-6',
                        validators : {
                            notEmpty : {
                                message : 'The website address is required'
                            },
                            uri : {
                                message : 'The website address is not valid'
                            }
                        }
                    },
                    trailer : {
                        group : '.col-md-6',
                        validators : {
                            notEmpty : {
                                message : 'The trailer link is required'
                            },
                            uri : {
                                message : 'The trailer link is not valid'
                            }
                        }
                    },
                    review : {
                        // The group will be set as default (.form-group)
                        validators : {
                            stringLength : {
                                max : 500,
                                message : 'The review must be less than 500 characters long'
                            }
                        }
                    },
                    rating : {
                        // The group will be set as default (.form-group)
                        validators : {
                            notEmpty : {
                                message : 'The rating is required'
                            }
                        }
                    }
                }
            });

        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapProductForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-product-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    price : {
                        validators : {
                            notEmpty : {
                                message : 'The price is required'
                            },
                            numeric : {
                                message : 'The price must be a number'
                            }
                        }
                    },
                    amount : {
                        validators : {
                            notEmpty : {
                                message : 'The amount is required'
                            },
                            numeric : {
                                message : 'The amount must be a number'
                            }
                        }
                    },
                    color : {
                        validators : {
                            notEmpty : {
                                message : 'The color is required'
                            }
                        }
                    },
                    size : {
                        validators : {
                            notEmpty : {
                                message : 'The size is required'
                            }
                        }
                    }
                }
            });
        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapProfileForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-profile-form.tpl.html',
        link: function(scope, form){
           form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    email : {
                        validators : {
                            notEmpty : {
                                message : 'The email address is required'
                            },
                            emailAddress : {
                                message : 'The email address is not valid'
                            }
                        }
                    },
                    password : {
                        validators : {
                            notEmpty : {
                                message : 'The password is required'
                            }
                        }
                    }
                }
            });
        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapTogglingForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-toggling-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    firstName : {
                        validators : {
                            notEmpty : {
                                message : 'The first name is required'
                            }
                        }
                    },
                    lastName : {
                        validators : {
                            notEmpty : {
                                message : 'The last name is required'
                            }
                        }
                    },
                    company : {
                        validators : {
                            notEmpty : {
                                message : 'The company name is required'
                            }
                        }
                    },
                    // These fields will be validated when being visible
                    job : {
                        validators : {
                            notEmpty : {
                                message : 'The job title is required'
                            }
                        }
                    },
                    department : {
                        validators : {
                            notEmpty : {
                                message : 'The department name is required'
                            }
                        }
                    },
                    mobilePhone : {
                        validators : {
                            notEmpty : {
                                message : 'The mobile phone number is required'
                            },
                            digits : {
                                message : 'The mobile phone number is not valid'
                            }
                        }
                    },
                    // These fields will be validated when being visible
                    homePhone : {
                        validators : {
                            digits : {
                                message : 'The home phone number is not valid'
                            }
                        }
                    },
                    officePhone : {
                        validators : {
                            digits : {
                                message : 'The office phone number is not valid'
                            }
                        }
                    }
                }
            }).find('button[data-toggle]').on('click', function() {
                var $target = $($(this).attr('data-toggle'));
                // Show or hide the additional fields
                // They will or will not be validated based on their visibilities
                $target.toggle();
                if (!$target.is(':visible')) {
                    // Enable the submit buttons in case additional fields are not valid
                    form.data('bootstrapValidator').disableSubmitButtons(false);
                }
            });
        }

    }



});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCheckoutForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
           lazyScript.register('build/vendor.ui.js').then(function(){

               scope.countries = formsCommon.countries;

               form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        fname : {
                            required : true
                        },
                        lname : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        phone : {
                            required : true
                        },
                        country : {
                            required : true
                        },
                        city : {
                            required : true
                        },
                        code : {
                            required : true,
                            digits : true
                        },
                        address : {
                            required : true
                        },
                        name : {
                            required : true
                        },
                        card : {
                            required : true,
                            creditcard : true
                        },
                        cvv : {
                            required : true,
                            digits : true
                        },
                        month : {
                            required : true
                        },
                        year : {
                            required : true,
                            digits : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        fname : {
                            required : 'Please enter your first name'
                        },
                        lname : {
                            required : 'Please enter your last name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        phone : {
                            required : 'Please enter your phone number'
                        },
                        country : {
                            required : 'Please select your country'
                        },
                        city : {
                            required : 'Please enter your city'
                        },
                        code : {
                            required : 'Please enter code',
                            digits : 'Digits only please'
                        },
                        address : {
                            required : 'Please enter your full address'
                        },
                        name : {
                            required : 'Please enter name on your card'
                        },
                        card : {
                            required : 'Please enter your card number'
                        },
                        cvv : {
                            required : 'Enter CVV2',
                            digits : 'Digits only'
                        },
                        month : {
                            required : 'Select month'
                        },
                        year : {
                            required : 'Enter year',
                            digits : 'Digits only please'
                        }
                    }
                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCommentForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        url : {
                            url : true
                        },
                        comment : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Enter your name',
                        },
                        email : {
                            required : 'Enter your email address',
                            email : 'Enter a VALID email'
                        },
                        url : {
                            email : 'Enter a VALID url'
                        },
                        comment : {
                            required : 'Please enter your comment'
                        }
                    },

                    // Ajax form submition
                    submitHandler : function() {
                        form.ajaxSubmit({
                            success : function() {
                                form.addClass('submited');
                            }
                        });
                    }

                }, formsCommon.validateOptions));
            });

        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartContactsForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        message : {
                            required : true,
                            minlength : 10
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        message : {
                            required : 'Please enter your message'
                        }
                    },

                    // Ajax form submition
                    submitHandler : function() {
                        form.ajaxSubmit({
                            success : function() {
                                form.addClass('submited');
                            }
                        });
                    }
                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartOrderForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'E',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        phone : {
                            required : true
                        },
                        interested : {
                            required : true
                        },
                        budget : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        phone : {
                            required : 'Please enter your phone number'
                        },
                        interested : {
                            required : 'Please select interested service'
                        },
                        budget : {
                            required : 'Please select your budget'
                        }
                    },

                }, formsCommon.validateOptions));
            });

        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartRegistrationForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form, attributes) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({

                    // Rules for form validation
                    rules: {
                        username: {
                            required: true
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        password: {
                            required: true,
                            minlength: 3,
                            maxlength: 20
                        },
                        passwordConfirm: {
                            required: true,
                            minlength: 3,
                            maxlength: 20,
                            equalTo: '#password'
                        },
                        firstname: {
                            required: true
                        },
                        lastname: {
                            required: true
                        },
                        gender: {
                            required: true
                        },
                        terms: {
                            required: true
                        }
                    },

                    // Messages for form validation
                    messages: {
                        login: {
                            required: 'Please enter your login'
                        },
                        email: {
                            required: 'Please enter your email address',
                            email: 'Please enter a VALID email address'
                        },
                        password: {
                            required: 'Please enter your password'
                        },
                        passwordConfirm: {
                            required: 'Please enter your password one more time',
                            equalTo: 'Please enter the same password as above'
                        },
                        firstname: {
                            required: 'Please select your first name'
                        },
                        lastname: {
                            required: 'Please select your last name'
                        },
                        gender: {
                            required: 'Please select your gender'
                        },
                        terms: {
                            required: 'You must agree with Terms and Conditions'
                        }
                    }

                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartReviewForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'E',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){

                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        review : {
                            required : true,
                            minlength : 20
                        },
                        quality : {
                            required : true
                        },
                        reliability : {
                            required : true
                        },
                        overall : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
                        },
                        review : {
                            required : 'Please enter your review'
                        },
                        quality : {
                            required : 'Please rate quality of the product'
                        },
                        reliability : {
                            required : 'Please rate reliability of the product'
                        },
                        overall : {
                            required : 'Please rate the product'
                        }
                    }

                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartJcrop', function ($q) {
    return {
        restrict: 'A',
        scope: {
            coords: '=',
            options: '=',
            selection: '='
        },
        link: function (scope, element, attributes) {
            var jcropApi, imageWidth, imageHeight, imageLoaded = $q.defer();

            var listeners = {
                onSelectHandlers: [],
                onChangeHandlers: [],
                onSelect: function (c) {
                    angular.forEach(listeners.onSelectHandlers, function (handler) {
                        handler.call(jcropApi, c)
                    })
                },
                onChange: function (c) {
                    angular.forEach(listeners.onChangeHandlers, function (handler) {
                        handler.call(jcropApi, c)
                    })
                }
            };

            if (attributes.coords) {
                var coordsUpdate = function (c) {
                    scope.$apply(function () {
                        scope.coords = c;
                    });
                };
                listeners.onSelectHandlers.push(coordsUpdate);
                listeners.onChangeHandlers.push(coordsUpdate);
            }

            var $previewPane = $(attributes.smartJcropPreview),
                $previewContainer = $previewPane.find('.preview-container'),
                $previewImg = $previewPane.find('img');

            if ($previewPane.length && $previewImg.length) {
                var previewUpdate = function (coords) {
                    if (parseInt(coords.w) > 0) {
                        var rx = $previewContainer.width() / coords.w;
                        var ry = $previewContainer.height() / coords.h;

                        $previewImg.css({
                            width: Math.round(rx * imageWidth) + 'px',
                            height: Math.round(ry * imageHeight) + 'px',
                            marginLeft: '-' + Math.round(rx * coords.x) + 'px',
                            marginTop: '-' + Math.round(ry * coords.y) + 'px'
                        });
                    }
                };
                listeners.onSelectHandlers.push(previewUpdate);
                listeners.onChangeHandlers.push(previewUpdate);
            }


            var options = {
                onSelect: listeners.onSelect,
                onChange: listeners.onChange
            };

            if ($previewContainer.length) {
                options.aspectRatio = $previewContainer.width() / $previewContainer.height()
            }

            if (attributes.selection) {
                scope.$watch('selection', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        var rectangle = newVal == 'release' ? [imageWidth / 2, imageHeight / 2, imageWidth / 2, imageHeight / 2] : newVal;

                        var callback = newVal == 'release' ? function () {
                            jcropApi.release();
                        } : angular.noop;

                        imageLoaded.promise.then(function () {
                            if (scope.options && scope.options.animate) {
                                jcropApi.animateTo(rectangle, callback);
                            } else {
                                jcropApi.setSelect(rectangle);
                            }
                        });
                    }
                });
            }

            if (attributes.options) {

                var optionNames = [
                    'bgOpacity', 'bgColor', 'bgFade', 'shade', 'outerImage',
                    'allowSelect', 'allowMove', 'allowResize',
                    'aspectRatio'
                ];

                angular.forEach(optionNames, function (name) {
                    if (scope.options[name])
                        options[name] = scope.options[name]

                    scope.$watch('options.' + name, function (newVal, oldVal) {
                        if (newVal != oldVal) {
                            imageLoaded.promise.then(function () {
                                var update = {};
                                update[name] = newVal;
                                jcropApi.setOptions(update);
                            });
                        }
                    });

                });


                scope.$watch('options.disabled', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (newVal) {
                            jcropApi.disable();
                        } else {
                            jcropApi.enable();
                        }
                    }
                });

                scope.$watch('options.destroyed', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (newVal) {
                            jcropApi.destroy();
                        } else {
                            _init();
                        }
                    }
                });

                scope.$watch('options.src', function (newVal, oldVal) {
                    imageLoaded = $q.defer();
                    if (newVal != oldVal) {
                        jcropApi.setImage(scope.options.src, function () {
                            imageLoaded.resolve();
                        });
                    }
                });

                var updateSize = function(){
                    jcropApi.setOptions({
                        minSize: [scope.options.minSizeWidth, scope.options.minSizeHeight],
                        maxSize: [scope.options.maxSizeWidth, scope.options.maxSizeHeight]
                    });
                };

                scope.$watch('options.minSizeWidth', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.minSizeHeight', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.maxSizeWidth', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.maxSizeHeight', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
            }

            var _init = function () {
                element.Jcrop(options, function () {
                    jcropApi = this;
                    // Use the API to get the real image size
                    var bounds = this.getBounds();
                    imageWidth = bounds[0];
                    imageHeight = bounds[1];

                    if (attributes.selection && angular.isArray(scope.selection)) {
                        if (scope.options && scope.options.animate) {
                            jcropApi.animateTo(scope.selection);
                        } else {
                            jcropApi.setSelect(scope.selection);
                        }
                    }
                    imageLoaded.resolve();
                });
            };

            _init()


        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartClockpicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-clockpicker data-smart-clockpicker');

            var options = {
                placement: 'top',
                donetext: 'Done'
            }

            tElement.clockpicker(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartColorpicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-colorpicker data-smart-colorpicker');


            var aOptions = _.pick(tAttributes, ['']);

            var options = _.extend(aOptions, {});

            tElement.colorpicker(options);
        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartDatepicker', function () {
    return {
        restrict: 'A',
        scope: {
            options: '='
        },
        link: function (scope, element, attributes) {

            var onSelectCallbacks = [];
            if (attributes.minRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.minRestrict).datepicker('option', 'minDate', selectedDate);
                });
            }
            if (attributes.maxRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.maxRestrict).datepicker('option', 'maxDate', selectedDate);
                });
            }

            //Let others know about changes to the data field
            onSelectCallbacks.push(function (selectedDate) {
                //CVB - 07/14/2015 - Update the scope with the selected value
                element.triggerHandler("change");

                //CVB - 07/17/2015 - Update Bootstrap Validator
                var form = element.closest('form');

                if(typeof form.bootstrapValidator == 'function')
                    form.bootstrapValidator('revalidateField', element.attr('name'));
            });

            var options = _.extend({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                onSelect: function (selectedDate) {
                    angular.forEach(onSelectCallbacks, function (callback) {
                        callback.call(this, selectedDate)
                    })
                }
            }, scope.options || {});


            if (attributes.numberOfMonths) options.numberOfMonths = parseInt(attributes.numberOfMonths);

            if (attributes.dateFormat) options.dateFormat = attributes.dateFormat;

            if (attributes.defaultDate) options.defaultDate = attributes.defaultDate;

            if (attributes.changeMonth) options.changeMonth = attributes.changeMonth == "true";


            element.datepicker(options)
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDuallistbox', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-duallistbox data-smart-duallistbox');


            var aOptions = _.pick(tAttributes, ['nonSelectedFilter']);

            var options = _.extend(aOptions, {
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false
            });

            tElement.bootstrapDualListbox(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartIonslider', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-ionslider data-smart-ionslider');

        	lazyScript.register('build/vendor.ui.js').then(function(){
            	element.ionRangeSlider();
        	});
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartKnob', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-knob data-smart-knob');

            tElement.knob();
        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartMaskedInput', function(lazyScript){
    return {
        restrict: 'A',
        compile: function(tElement, tAttributes){
            tElement.removeAttr('smart-masked-input data-smart-masked-input');

        	lazyScript.register('build/vendor.ui.js').then(function(){

	            var options = {};
	            if(tAttributes.maskPlaceholder) options.placeholder =  tAttributes.maskPlaceholder;
	            tElement.mask(tAttributes.smartMaskedInput, options);
        	})	            
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartNouislider', function ($parse, lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                tElement.removeAttr('smart-nouislider data-smart-nouislider');

                tElement.addClass('noUiSlider');

                var options = {
                    range: {
                        min: tAttributes.rangeMin ? parseInt(tAttributes.rangeMin) : 0,
                        max: tAttributes.rangeMax ? parseInt(tAttributes.rangeMax) : 1000
                    },
                    start: $parse(tAttributes.start)()
                };

                if (tAttributes.step) options.step =  parseInt(tAttributes.step);

                if(tAttributes.connect) options.connect = tAttributes.connect == 'true' ? true : tAttributes.connect;

                tElement.noUiSlider(options);

                if(tAttributes.update) tElement.on('slide', function(){
                    $(tAttributes.update).text(JSON.stringify(tElement.val()));
                });                
            })
        }
    }
});
'use strict'

angular.module('SmartAdmin.Forms').directive('smartSelect2', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.hide().removeAttr('smart-select2 data-smart-select2');
        	lazyScript.register('build/vendor.ui.js').then(function(){
	            element.show().select2();
        	})
        }
    }
});
'use strict'

angular.module('SmartAdmin.Forms').directive('smartSpinner', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-spinner');

            var options = {};
            if(tAttributes.smartSpinner == 'deicimal'){
                options = {
                    step: 0.01,
                    numberFormat: "n"
                };
            }else if(tAttributes.smartSpinner == 'currency'){
                options = {
                    min: 5,
                    max: 2500,
                    step: 25,
                    start: 1000,
                    numberFormat: "C"
                };
            }

            tElement.spinner(options);
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartTagsinput', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-tagsinput data-smart-tagsinput');
            tElement.tagsinput();
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartTimepicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-timepicker data-smart-timepicker');
            tElement.timepicker();
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartUislider', function ($parse, lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {

            tElement.removeAttr('smart-uislider data-smart-uislider');

            lazyScript.register('build/vendor.ui.js').then(function(){
			    tElement.bootstrapSlider();

			    $(tElement.data('bootstrapSlider').sliderElem).prepend(tElement);      	
            })

        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartXeditable', function($timeout, $log){

	function link (scope, element, attrs, ngModel) {

        var defaults = {
            // display: function(value, srcData) {
            //     ngModel.$setViewValue(value);
            //     // scope.$apply();
            // }
        };

        var inited = false;

        var initXeditable = function() {

            var options = scope.options || {};
    		var initOptions = angular.extend(defaults, options);

            // $log.log(initOptions);
            element.editable('destroy');
            element.editable(initOptions);
        }

        scope.$watch("options", function(newValue) {

            if(!newValue) {
                return false;
            }

            initXeditable();

            // $log.log("Options changed...");

        }, true);

    }

    return {
    	restrict: 'A',
    	require: "ngModel",
        scope: {
            options: "="
        },
    	link: link 

    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDropzone', function () {
    return function (scope, element, attrs) {
        var config, dropzone;

        config = scope[attrs.smartDropzone];

        // create a Dropzone for the element with the given options
        dropzone = new Dropzone(element[0], config.options);

        // bind the given event handlers
        angular.forEach(config.eventHandlers, function (handler, event) {
            dropzone.on(event, handler);
        });
    };
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartValidateForm', function (formsCommon) {
    return {
        restrict: 'A',
        link: function (scope, form, attributes) {

            var validateOptions = {
                rules: {},
                messages: {},
                highlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                unhighlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                },
                errorElement: 'span',
                errorClass: 'help-block',
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                }
            };
            form.find('[data-smart-validate-input], [smart-validate-input]').each(function () {
                var $input = $(this), fieldName = $input.attr('name');

                validateOptions.rules[fieldName] = {};

                if ($input.data('required') != undefined) {
                    validateOptions.rules[fieldName].required = true;
                }
                if ($input.data('email') != undefined) {
                    validateOptions.rules[fieldName].email = true;
                }

                if ($input.data('maxlength') != undefined) {
                    validateOptions.rules[fieldName].maxlength = $input.data('maxlength');
                }

                if ($input.data('minlength') != undefined) {
                    validateOptions.rules[fieldName].minlength = $input.data('minlength');
                }

                if($input.data('message')){
                    validateOptions.messages[fieldName] = $input.data('message');
                } else {
                    angular.forEach($input.data(), function(value, key){
                        if(key.search(/message/)== 0){
                            if(!validateOptions.messages[fieldName])
                                validateOptions.messages[fieldName] = {};

                            var messageKey = key.toLowerCase().replace(/^message/,'')
                            validateOptions.messages[fieldName][messageKey] = value;
                        }
                    });
                }
            });


            form.validate(validateOptions);

        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartFueluxWizard', function () {
    return {
        restrict: 'A',
        scope: {
            smartWizardCallback: '&'
        },
        link: function (scope, element, attributes) {

            var wizard = element.wizard();

            var $form = element.find('form');

            wizard.on('actionclicked.fu.wizard', function(e, data){
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        $form.data('validator').focusInvalid();
                        e.preventDefault();
                    }
                }
            });

            wizard.on('finished.fu.wizard', function (e, data) {
                var formData = {};
                _.each($form.serializeArray(), function(field){
                    formData[field.name] = field.value
                });
                if(typeof scope.smartWizardCallback() === 'function'){
                    scope.smartWizardCallback()(formData)
                }
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartWizard', function () {
    return {
        restrict: 'A',
        scope: {
            'smartWizardCallback': '&'
        },
        link: function (scope, element, attributes) {

            var stepsCount = $('[data-smart-wizard-tab]').length;

            var currentStep = 1;

            var validSteps = [];

            var $form = element.closest('form');

            var $prev = $('[data-smart-wizard-prev]', element);

            var $next = $('[data-smart-wizard-next]', element);

            function setStep(step) {
                currentStep = step;
                $('[data-smart-wizard-pane=' + step + ']', element).addClass('active').siblings('[data-smart-wizard-pane]').removeClass('active');
                $('[data-smart-wizard-tab=' + step + ']', element).addClass('active').siblings('[data-smart-wizard-tab]').removeClass('active');

                $prev.toggleClass('disabled', step == 1)
            }


            element.on('click', '[data-smart-wizard-tab]', function (e) {
                setStep(parseInt($(this).data('smartWizardTab')));
                e.preventDefault();
            });

            $next.on('click', function (e) {
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        validSteps = _.without(validSteps, currentStep);
                        $form.data('validator').focusInvalid();
                        return false;
                    } else {
                        validSteps = _.without(validSteps, currentStep);
                        validSteps.push(currentStep);
                        element.find('[data-smart-wizard-tab=' + currentStep + ']')
                            .addClass('complete')
                            .find('.step')
                            .html('<i class="fa fa-check"></i>');
                    }
                }
                if (currentStep < stepsCount) {
                    setStep(currentStep + 1);
                } else {
                    if (validSteps.length < stepsCount) {
                        var steps = _.range(1, stepsCount + 1)

                        _(steps).forEach(function (num) {
                            if (validSteps.indexOf(num) == -1) {
                                console.log(num);
                                setStep(num);
                                return false;
                            }
                        })
                    } else {
                        var data = {};
                        _.each($form.serializeArray(), function(field){
                            data[field.name] = field.value
                        });
                        if(typeof  scope.smartWizardCallback() === 'function'){
                            scope.smartWizardCallback()(data)
                        }
                    }
                }

                e.preventDefault();
            });

            $prev.on('click', function (e) {
                if (!$prev.hasClass('disabled') && currentStep > 0) {
                    setStep(currentStep - 1);
                }
                e.preventDefault();
            });


            setStep(currentStep);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('demoStates', function ($rootScope) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'app/_common/layout/directives/demo/demo-states.tpl.html',
        scope: true,
        link: function (scope, element, attributes) {
            element.parent().css({
                position: 'relative'
            });

            element.on('click', '#demo-setting', function () {
                element.toggleClass('activate')
            })
        },
        controller: function ($scope) {
            var $root = $('body');

            $scope.$watch('fixedHeader', function (fixedHeader) {
                localStorage.setItem('sm-fixed-header', fixedHeader);
                $root.toggleClass('fixed-header', fixedHeader);
                if (fixedHeader == false) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });


            $scope.$watch('fixedNavigation', function (fixedNavigation) {
                localStorage.setItem('sm-fixed-navigation', fixedNavigation);
                $root.toggleClass('fixed-navigation', fixedNavigation);
                if (fixedNavigation) {
                    $scope.insideContainer = false;
                    $scope.fixedHeader = true;
                } else {
                    $scope.fixedRibbon = false;
                }
            });


            $scope.$watch('fixedRibbon', function (fixedRibbon) {
                localStorage.setItem('sm-fixed-ribbon', fixedRibbon);
                $root.toggleClass('fixed-ribbon', fixedRibbon);
                if (fixedRibbon) {
                    $scope.fixedHeader = true;
                    $scope.fixedNavigation = true;
                    $scope.insideContainer = false;
                }
            });

            $scope.$watch('fixedPageFooter', function (fixedPageFooter) {
                localStorage.setItem('sm-fixed-page-footer', fixedPageFooter);
                $root.toggleClass('fixed-page-footer', fixedPageFooter);
            });

            $scope.$watch('insideContainer', function (insideContainer) {
                localStorage.setItem('sm-inside-container', insideContainer);
                $root.toggleClass('container', insideContainer);
                if (insideContainer) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });

            $scope.$watch('rtl', function (rtl) {
                localStorage.setItem('sm-rtl', rtl);
                $root.toggleClass('smart-rtl', rtl);
            });

            $scope.$watch('menuOnTop', function (menuOnTop) {
                $rootScope.$broadcast('$smartLayoutMenuOnTop', menuOnTop);
                localStorage.setItem('sm-menu-on-top', menuOnTop);
                $root.toggleClass('menu-on-top', menuOnTop);

                if(menuOnTop)$root.removeClass('minified');
            });

            $scope.$watch('colorblindFriendly', function (colorblindFriendly) {
                localStorage.setItem('sm-colorblind-friendly', colorblindFriendly);
                $root.toggleClass('colorblind-friendly', colorblindFriendly);
            });


            $scope.fixedHeader = localStorage.getItem('sm-fixed-header') == 'true';
            $scope.fixedNavigation = localStorage.getItem('sm-fixed-navigation') == 'true';
            $scope.fixedRibbon = localStorage.getItem('sm-fixed-ribbon') == 'true';
            $scope.fixedPageFooter = localStorage.getItem('sm-fixed-page-footer') == 'true';
            $scope.insideContainer = localStorage.getItem('sm-inside-container') == 'true';
            $scope.rtl = localStorage.getItem('sm-rtl') == 'true';
            $scope.menuOnTop = localStorage.getItem('sm-menu-on-top') == 'true' || $root.hasClass('menu-on-top');
            $scope.colorblindFriendly = localStorage.getItem('sm-colorblind-friendly') == 'true';


            $scope.skins = appConfig.skins;


            $scope.smartSkin = localStorage.getItem('sm-skin') ? localStorage.getItem('sm-skin') : appConfig.smartSkin;

            $scope.setSkin = function (skin) {
                $scope.smartSkin = skin.name;
                $root.removeClass(_.pluck($scope.skins, 'name').join(' '));
                $root.addClass(skin.name);
                localStorage.setItem('sm-skin', skin.name);
                $("#logo img").attr('src', skin.logo);
            };


            if($scope.smartSkin != "smart-style-0"){
                $scope.setSkin(_.find($scope.skins, {name: $scope.smartSkin}))
            }


            $scope.factoryReset = function () {
                $.SmartMessageBox({
                    title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content: "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons: '[No][Yes]'
                }, function (ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });
            }
        }
    }
});
"use strict";

(function ($) {

    $.fn.smartCollapseToggle = function () {

        return this.each(function () {

            var $body = $('body');
            var $this = $(this);

            // only if not  'menu-on-top'
            if ($body.hasClass('menu-on-top')) {


            } else {

                $body.hasClass('mobile-view-activated')

                // toggle open
                $this.toggleClass('open');

                // for minified menu collapse only second level
                if ($body.hasClass('minified')) {
                    if ($this.closest('nav ul ul').length) {
                        $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                        $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                    }
                } else {
                    // toggle expand item
                    $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                    $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                }
            }
        });
    };
})(jQuery);

angular.module('SmartAdmin.Layout').directive('smartMenu', function ($state, $rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var $body = $('body');

            var $collapsible = element.find('li[data-menu-collapse]');

            var bindEvents = function(){
                $collapsible.each(function (idx, li) {
                    var $li = $(li);
                    $li
                        .on('click', '>a', function (e) {

                            // collapse all open siblings
                            $li.siblings('.open').smartCollapseToggle();

                            // toggle element
                            $li.smartCollapseToggle();

                            // add active marker to collapsed element if it has active childs
                            if (!$li.hasClass('open') && $li.find('li.active').length > 0) {
                                $li.addClass('active')
                            }

                            e.preventDefault();
                        })
                        .find('>a').append('<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>');

                    // initialization toggle
                    if ($li.find('li.active').length) {
                        $li.smartCollapseToggle();
                        $li.find('li.active').parents('li').addClass('active');
                    }
                });
            }
            bindEvents();


            // click on route link
            element.on('click', 'a[data-ui-sref]', function (e) {
                // collapse all siblings to element parents and remove active markers
                $(this)
                    .parents('li').addClass('active')
                    .each(function () {
                        $(this).siblings('li.open').smartCollapseToggle();
                        $(this).siblings('li').removeClass('active')
                    });

                if ($body.hasClass('mobile-view-activated')) {
                    $rootScope.$broadcast('requestToggleMenu');
                }
            });


            scope.$on('$smartLayoutMenuOnTop', function (event, menuOnTop) {
                if (menuOnTop) {
                    $collapsible.filter('.open').smartCollapseToggle();
                }
            });
        }
    }
});
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout').directive('smartMenuItems', function ($http, $rootScope, $compile) {
    return {
        restrict: 'A',
        compile: function (element, attrs) {
            

            function createItem(item, parent, level){
                var li = $('<li />' ,{'ui-sref-active': "active"})
                var a = $('<a />');
                var i = $('<i />');

                li.append(a);

                if(item.sref)
                    a.attr('ui-sref', item.sref);
                if(item.href)
                    a.attr('href', item.href);
                if(item.icon){
                    i.attr('class', 'fa fa-lg fa-fw fa-'+item.icon);
                    a.append(i);
                }
                if(item.title){
                    a.attr('title', item.title);
                    if(level == 1){ 
                        a.append(' <span class="menu-item-parent">' + item.title + '</span>');
                    } else {
                        a.append(' ' + item.title);

                    }
                }

                if(item.items){
                    var ul = $('<ul />');
                    li.append(ul);
                    li.attr('data-menu-collapse', '');
                    _.forEach(item.items, function(child) {
                        createItem(child, ul, level+1);
                    })
                } 

                parent.append(li); 
            }


            $http.get(attrs.smartMenuItems).then(function(res){
                var ul = $('<ul />', {
                    'smart-menu': ''
                })
                _.forEach(res.data.items, function(item) {
                    createItem(item, ul, 1);
                })
                
                var $scope = $rootScope.$new();
                var html = $('<div>').append(ul).html(); 
                var linkingFunction = $compile(html);
                
                var _element = linkingFunction($scope);

                element.replaceWith(_element);                
            })
        }
    }
});
})();
/**
 * Jarvis Widget Directive
 *
 *    colorbutton="false"
 *    editbutton="false"
      togglebutton="false"
       deletebutton="false"
        fullscreenbutton="false"
        custombutton="false"
        collapsed="true"
          sortable="false"
 *
 *
 */
"use strict";

angular.module('SmartAdmin.Layout').directive('jarvisWidget', function($rootScope){
    return {
        restrict: "A",
        compile: function(element, attributes){
            if(element.data('widget-color'))
                element.addClass('jarviswidget-color-' + element.data('widget-color'));


            element.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');

            element.addClass('jarviswidget');
            $rootScope.$emit('jarvisWidgetAdded', element )

        }
    }
});
 "use strict";
 
 angular.module('SmartAdmin.Layout').directive('widgetGrid', function ($rootScope, $compile, $q, $state, $timeout) {

    var jarvisWidgetsDefaults = {
        grid: 'article',
        widgets: '.jarviswidget',
        localStorage: true,
        deleteSettingsKey: '#deletesettingskey-options',
        settingsKeyLabel: 'Reset settings?',
        deletePositionKey: '#deletepositionkey-options',
        positionKeyLabel: 'Reset position?',
        sortable: true,
        buttonsHidden: false,
        // toggle button
        toggleButton: true,
        toggleClass: 'fa fa-minus | fa fa-plus',
        toggleSpeed: 200,
        onToggle: function () {
        },
        // delete btn
        deleteButton: true,
        deleteMsg: 'Warning: This action cannot be undone!',
        deleteClass: 'fa fa-times',
        deleteSpeed: 200,
        onDelete: function () {
        },
        // edit btn
        editButton: true,
        editPlaceholder: '.jarviswidget-editbox',
        editClass: 'fa fa-cog | fa fa-save',
        editSpeed: 200,
        onEdit: function () {
        },
        // color button
        colorButton: true,
        // full screen
        fullscreenButton: true,
        fullscreenClass: 'fa fa-expand | fa fa-compress',
        fullscreenDiff: 3,
        onFullscreen: function () {
        },
        // custom btn
        customButton: false,
        customClass: 'folder-10 | next-10',
        customStart: function () {
            alert('Hello you, this is a custom button...');
        },
        customEnd: function () {
            alert('bye, till next time...');
        },
        // order
        buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
        opacity: 1.0,
        dragHandle: '> header',
        placeholderClass: 'jarviswidget-placeholder',
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        timestampPlaceholder: '.jarviswidget-timestamp',
        timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
        refreshButton: true,
        refreshButtonClass: 'fa fa-refresh',
        labelError: 'Sorry but there was a error:',
        labelUpdated: 'Last Update:',
        labelRefresh: 'Refresh',
        labelDelete: 'Delete widget:',
        afterLoad: function () {
        },
        rtl: false, // best not to toggle this!
        onChange: function () {

        },
        onSave: function () {

        },
        ajaxnav: true

    }

    var dispatchedWidgetIds = [];
    var setupWaiting = false;

    var debug = 1;

    var setupWidgets = function (element, widgetIds) {

        if (!setupWaiting) {

            if(_.intersection(widgetIds, dispatchedWidgetIds).length != widgetIds.length){

                dispatchedWidgetIds = _.union(widgetIds, dispatchedWidgetIds);

//                    console.log('setupWidgets', debug++);

                element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
                element.jarvisWidgets(jarvisWidgetsDefaults);
                initDropdowns(widgetIds);
            }

        } else {
            if (!setupWaiting) {
                setupWaiting = true;
                $timeout(function () {
                    setupWaiting = false;
                    setupWidgets(element, widgetIds)
                }, 200);
            }
        }

    };

    var destroyWidgets = function(element, widgetIds){
        element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
        dispatchedWidgetIds = _.xor(dispatchedWidgetIds, widgetIds);
    };

    var initDropdowns = function (widgetIds) {
        angular.forEach(widgetIds, function (wid) {
            $('#' + wid + ' [data-toggle="dropdown"]').each(function () {
                var $parent = $(this).parent();
                // $(this).removeAttr('data-toggle');
                if (!$parent.attr('dropdown')) {
                    $(this).removeAttr('href');
                    $parent.attr('dropdown', '');
                    var compiled = $compile($parent)($parent.scope())
                    $parent.replaceWith(compiled);
                }
            })
        });
    };

    var jarvisWidgetAddedOff,
        $viewContentLoadedOff,
        $stateChangeStartOff;

    return {
        restrict: 'A',
        compile: function(element){

            element.removeAttr('widget-grid data-widget-grid');

            var widgetIds = [];

            $viewContentLoadedOff = $rootScope.$on('$viewContentLoaded', function (event, data) {
                $timeout(function () {
                    setupWidgets(element, widgetIds)
                }, 100);
            });


            $stateChangeStartOff = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    jarvisWidgetAddedOff();
                    $viewContentLoadedOff();
                    $stateChangeStartOff();
                    destroyWidgets(element, widgetIds)
                });

            jarvisWidgetAddedOff = $rootScope.$on('jarvisWidgetAdded', function (event, widget) {
                if (widgetIds.indexOf(widget.attr('id')) == -1) {
                    widgetIds.push(widget.attr('id'));
                    $timeout(function () {
                        setupWidgets(element, widgetIds)
                    }, 100);
                }
//                    console.log('jarvisWidgetAdded', widget.attr('id'));
            });

        }
    }
});
