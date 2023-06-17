import { action, computed, observable} from "mobx";

class UserStore {

    @observable
    name = "";

    constructor() {
        this.name =  localStorage.getItem('authenticated') || '';
    }

    @computed
    get isAuthenticated() {
        return !!this.name;
    }

    @action
    setName(name) {
        this.name=name
    }

    @action
    login(name) {
        this.name=name;
        localStorage.setItem('authenticated', name);
    }


    @action
    logout() {
        localStorage.setItem('authenticated', '');
        this.name = '';
        console.log("logout finished!");
    }

}
export default UserStore;