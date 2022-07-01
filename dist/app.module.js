"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const TypeOrm_1 = require("./TypeOrm");
const users_module_1 = require("./users.module");
const auth_module_1 = require("./auth/auth.module");
const auth_service_1 = require("./auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./auth/constants");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./roles.guard");
const google_oauth_module_1 = require("./google-oauth/google-oauth.module");
const facebook_auth_module_1 = require("./facebook-Auth/facebook-auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: "localhost",
                port: 3306,
                username: "root",
                password: "GenPass1!",
                database: "students",
                entities: [TypeOrm_1.Class2, TypeOrm_1.Users],
                synchronize: true
            }),
            typeorm_1.TypeOrmModule.forFeature([TypeOrm_1.Class2]),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
            google_oauth_module_1.GoogleOauthModule,
            facebook_auth_module_1.FacebookAuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            auth_service_1.AuthService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map