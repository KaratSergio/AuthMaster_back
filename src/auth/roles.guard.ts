import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles-auth.decorator';

import {
  CanActivate,
  HttpException,
  UnauthorizedException,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

import { Role, User } from '../common/interfaces/interfaces';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requiredRoles) {
        return true;
      }

      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'user is not authorized' });
      }

      const user = this.jwtService.verify<User>(token);
      req.user = user;
      return user.roles.some((role: Role) => requiredRoles.includes(role.value));
    } catch (error) {
      throw new HttpException('No access !!!', HttpStatus.FORBIDDEN);
    }
  }
}
