define(["text!../views/homeView.html"], 
(tmplhomeView)=>{
    'use strict';
    class HomeView{
        constructor(){
            this.rootEl = "#main";
        }

        render(){
            document.querySelector(this.rootEl).innerHTML = tmplhomeView;
        }
    }

    return HomeView;
});