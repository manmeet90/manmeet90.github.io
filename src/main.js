require.config({
    baseUrl: "./src/js",
    paths:{
        "text" : "../libs/text/text",
        "Path" : "../libs/path/path"
    },
    shim:{
        'Path': {
            exports: 'Path'
        }
    }
});

require(['Router'], (Router)=>{
    Router.start();
});