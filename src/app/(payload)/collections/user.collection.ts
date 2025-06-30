import { type CollectionConfig } from "payload";
const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "username",
      label: "Nome de usuario",
      type: "text",
    },
    {
      name: "role",
      label: "Cargo",
      type: "relationship",
      relationTo: "roles",
    },
  ],
};

export default Users;
