"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleOauthModule = void 0;
const common_1 = require("@nestjs/common");
const google_oauth_service_1 = require("./google-oauth.service");
const google_oauth_controller_1 = require("./google-oauth.controller");
const google_oauth_stretegy_1 = require("./google-oauth.stretegy");
let GoogleOauthModule = class GoogleOauthModule {
};
GoogleOauthModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [google_oauth_service_1.GoogleOauthService, google_oauth_stretegy_1.GoogleStrategy],
        controllers: [google_oauth_controller_1.GoogleOauthController]
    })
], GoogleOauthModule);
exports.GoogleOauthModule = GoogleOauthModule;
//# sourceMappingURL=google-oauth.module.js.map