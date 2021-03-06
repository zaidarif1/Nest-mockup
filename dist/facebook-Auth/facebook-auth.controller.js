"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceBookAuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const facebook_auth_service_1 = require("./facebook-auth.service");
let FaceBookAuthController = class FaceBookAuthController {
    constructor(facebookAuthService) {
        this.facebookAuthService = facebookAuthService;
    }
    async facebookLogin() {
    }
    async facebookLoginRedirect(req) {
        return req.user;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FaceBookAuthController.prototype, "facebookLogin", null);
__decorate([
    (0, common_1.Get)('redirect'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FaceBookAuthController.prototype, "facebookLoginRedirect", null);
FaceBookAuthController = __decorate([
    (0, common_1.Controller)('facebook'),
    __metadata("design:paramtypes", [facebook_auth_service_1.FacebookAuthService])
], FaceBookAuthController);
exports.FaceBookAuthController = FaceBookAuthController;
//# sourceMappingURL=facebook-auth.controller.js.map