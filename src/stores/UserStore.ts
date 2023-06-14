import { action, computed, observable} from "mobx";

class UserStore {

    @observable
    name = "";

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
    }

}
export default UserStore;