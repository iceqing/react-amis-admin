import {
    types,
    getEnv
} from "mobx-state-tree";

const User = types
    .model('User', {
        name: ''
    })
    .views((self) => ({
        get isAuthenticated() {
            return !!self.name;
        }
    }))
    .actions((self) => {
        return {
            login(username:string) {
                localStorage.setItem('authenticated', username);
                self.name = username;
            },
            logout() {
                localStorage.setItem('authenticated', '');
                self.name = '';
                console.log("logout finished!")
            },
            afterCreate() {
                self.name = localStorage.getItem('authenticated') || '';
            }
        }
    });

export default User;