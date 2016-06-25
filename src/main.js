require.config({
    baseUrl: "./src/js",
    paths:{
        "text" : "../libs/text/text"
    }
});

require(['HomeView'], (HomeView)=>{
    new HomeView().render();
});