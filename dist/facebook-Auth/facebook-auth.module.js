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
const facebook_auth_service_1 = require("./facebook-auth.service");
const facebook_auth_controller_1 = require("./facebook-auth.controller");
const facebook_auth_stretegy_1 = require("./facebook-auth.stretegy");
let GoogleOauthModule = class GoogleOauthModule {
};
GoogleOauthModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [facebook_auth_service_1.FacebookAuthService, facebook_auth_stretegy_1.GoogleStrategy],
        controllers: [facebook_auth_controller_1.FaceBookAuthController]
    })
], GoogleOauthModule);
exports.GoogleOauthModule = GoogleOauthModule;
//# sourceMappingURL=facebook-auth.module.js.map