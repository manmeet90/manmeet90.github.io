define(['Path'], function(Path){
    'use strict';

    let router = {
        start : function(){
            this.mapHomeRoute();
            this.mapUserRoute();

            Path.root("#/home");
            Path.listen();
        },

        mapHomeRoute: function(){
            Path.map("#/home").to(()=>{
                require(["HomeView"], (HomeView)=>{
                    new HomeView().render();
                });
            });
        },

        mapUserRoute :  function(){
            Path.map("#/user").to(()=>{
                require(["UserView"], (UserView)=>{
                    new UserView().render();
                });
            });
        }
    };

    return router;
});