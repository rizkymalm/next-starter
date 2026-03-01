import type { Role } from './jwt';

export function hasRequiredRole(userRole: Role, allowedRoles: Role[]) {
    return allowedRoles.includes(userRole);
}
