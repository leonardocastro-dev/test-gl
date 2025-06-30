import { getPayload, PayloadRequest } from "payload";
import config from "../../payload.config";

/**
 * Gera uma função de acesso baseada em permissão (RBAC).
 *
 * @param permission - A permissão a ser validada (ex: 'users:create')
 * @returns Uma função compatível com o sistema de access control do Payload
 */
export const ValidatePermission = (permission: string) => {
  return async ({ req }: { req: PayloadRequest }): Promise<boolean> => {
    const roleId = req?.user?.role?.id;
    if (!roleId) return false;

    try {
      const payload = await getPayload({ config });

      const role = await payload.findByID({
        collection: "roles",
        id: String(roleId),
      });

      return (
        Array.isArray(role?.permissions) &&
        role.permissions.includes(permission)
      );
    } catch (error) {
      console.error("Erro ao validar permissão:", error);
      return false;
    }
  };
};
