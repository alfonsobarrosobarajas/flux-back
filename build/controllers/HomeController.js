"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    goHome(req, resp) {
        resp.json({ text: 'Home' });
    }
}
const homeController = new HomeController();
exports.default = homeController;
