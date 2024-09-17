import { PermissionCheckResult } from "../config/DataTypes.config";
import { User } from "../types/authTypes";

export const permissionsToCheck = ["All", "Read", "Write", "Delete"];

export const checkPermissions = (userData: User | undefined, permissionNames: string[]): PermissionCheckResult => {
    const permissionNamesSet = new Set(permissionNames);
    const permissions = userData?.role?.permissions || [];
    const result: PermissionCheckResult = {};

    for (const permission of permissions) {
        if (permissionNamesSet.has(permission.name)) {
            result[permission.name] = true;
        }
    };

    for (const permissionName of permissionNames) {
        if (!(permissionName in result)) {
            result[permissionName] = false;
        }
    }

    return result;
};