import { MainStore } from ".";
import UserStore from "./UserStore";


let userStore = new UserStore();
let mainStore = new MainStore();
const stores = {
    mainStore,
    userStore
};

export default stores;