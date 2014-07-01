angular.module('pemiluApp')
    .config(['$stateProvider','$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            // For any unmatched url, redirect to /home
            $urlRouterProvider.otherwise("/");
            // Now set up the states
            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "js/partials/page-home.html",
                    controller: 'homeCtrl',
                    data: {
                        ncyBreadcrumbLabel: 'Home page'
                    }
                })
                .state('detailkandidat', {
                    url: "/kandidat/:tipe/:id",
                    templateUrl: "js/partials/page-detailkandidat.html",
                    controller: 'kandidatCtrl',
                    data: {
                        ncyBreadcrumbLabel: 'Detail Kandidat'
                    }
                })
                .state('events', {
                    url: "/events/:id",
                    templateUrl: "js/partials/page-events.html",
                    controller: 'eventCtrl',
                    data: {
                        ncyBreadcrumbLabel: 'Events'
                    }
                })
                .state('promises', {
                    url: "/promises/:id",
                    templateUrl: "js/partials/page-promises.html",
                    controller: 'promisesCtrl',
                    data: {
                        ncyBreadcrumbLabel: 'Janji-Janji'
                    }
                })
                .state('caleg', {
                    url: "/caleg",
                    templateUrl: "js/partials/page-caleg.html",
                    controller: 'calegCtrl',
                    data: {
                        ncyBreadcrumbLabel: 'Caleg'
                    }
                })
                .state('berita', {
                    url: "/berita",
                    templateUrl: "js/partials/page-berita.html",
                    controller: 'beritaCtrl',
                    data: {
                        ncyBreadcrumbLabel: 'Berita'
                    }
                })
                // .state('visimisi', {
                //     url: "/visimisi",
                //     templateUrl: "js/partials/page-visimisi.html",
                //     controller: 'visimisiCtrl'
                // })
                .state('faq', {
                    url: "/faq",
                    templateUrl: "js/partials/page-faq.html",
                    controller: 'faqCtrl',
                    data: {
                        ncyBreadcrumbLabel: 'Frequently Asked Questions'
                    }
                })
        }]);