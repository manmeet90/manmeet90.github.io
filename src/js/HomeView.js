define(["text!../views/homeView.html","text!../views/userView.html"], 
(tmplhomeView, tmpluserView)=>{
    'use strict';
    class HomeView{
        constructor(){
            this.rootEl = "#main";
        }

        render(){
            document.querySelector(this.rootEl).innerHTML = tmplhomeView;
            document.querySelector('#btn').addEventListener('click', function (e) {
                document.querySelector(this.rootEl).innerHTML = tmpluserView;
            }.bind(this), false);
        }
    }

    return HomeView;
});