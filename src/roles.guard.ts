import { Injectable, CanActivate, ExecutionContext, UseGuards } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private jwtService: JwtService,
    ) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }

        let { rawHeaders } = context.switchToHttp().getRequest();
        const ind = rawHeaders.findIndex((val) => val == "Authorization") + 1
        console.log(rawHeaders[ind])
        const token = rawHeaders[ind].slice(7, rawHeaders[ind].length)
        console.log(token)
        let user: any = {}
        try {
            user = this.jwtService.verify(token)
        } catch (e) {
            user = { role : ""}
        }
        console.log(requiredRoles)
        return requiredRoles.some((r) => user.role?.includes(r));
    }
}