import { userService } from "../api/userService.js";
import { goTo } from "../common/goTo.js";
import { userHelper } from "../common/userHelper.js";

export async function logout() {
    await userService.logout();
    userHelper.clearUserData();
    goTo('/');
}