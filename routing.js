app.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl:'components/home.html',
        controller:'homeCtrl'
      })
      .when("/about",
       {
         templateUrl:'components/about.html',
         controller:'aboutCtrl'
        }

      )
      .when('/awards',
      {
        templateUrl:'components/awards.html',
        controller:'awardsCtrl'
        
      }
      )
      .when('/history',
      {
        templateUrl:'components/history.html',
        controller:'historyCtrl'
        
      }
      )
      .when('/carieer',
      {
        templateUrl:'components/carieer.html',
        controller:'carieerCtrl'
        
      }
      )
      .when('/blog',
      {
        templateUrl:'components/blog.html',
        controller:'blogCtrl'
        
      }
      )
      .when('/webdis',
      {
        templateUrl:'components/webdis.html',
        controller:'webdisCtrl'
        
      }
      )
      .when('/webdev',
      {
        templateUrl:'components/webdev.html',
        controller:'webdevCtrl'
        
      }
      )
      .when('/appdev',
      {
        templateUrl:'components/appdev.html',
        controller:'appdevCtrl'
        
      }
      )
      .when('/digital',
      {
        templateUrl:'components/digital.html',
        controller:'digitalCtrl'
        
      }
      )
      .when('/softwdev',
      {
        templateUrl:'components/softwdev.html',
        controller:'softwdevCtrl'
        
      }
      )

      .otherwise({
        template: `<h1>Please Select Something!</h1>
                     <p>
                         Nothing has been selected yet
                     </p>`,
      });
  });