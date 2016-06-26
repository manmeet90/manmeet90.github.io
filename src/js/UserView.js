define(["text!../views/userView.html"], 
(tmplUserView)=>{
    'use strict';
    class UserView{
        constructor(){
            this.rootEl = "#main";
            this.userList = "#userlist";
            this.model = {
                users:[]
            };
        }

        render(){
            document.querySelector(this.rootEl).innerHTML = tmplUserView;
            this.getUserList();
        }

        getUserList(){
            fetch("https://jsonplaceholder.typicode.com/users",{
                'no-cors':true
            }).then((response)=>{
                return response.json();
            }).then((users)=>{
                this.model.users = users;
                this.updateUsersList();
            }).catch((err)=>{
                console.log(err);
            });
        }

        updateUsersList(){
            if(this.model.users.length>0){
                let userNodes ="";
                userNodes = this.model.users.map((user)=>{
                    return `<li>${user.name}, ${user.email}</li>`;
                });

                document.querySelector(this.userList).innerHTML = userNodes.join("");
            }
        }
    }

    return UserView;
});