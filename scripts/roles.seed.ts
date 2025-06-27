import { getPayload } from 'payload'
import config from '../payload.config'

export async function seedRoles() {
  try {
    console.log('🔑 Iniciando seed de roles...')
    
    const payload = await getPayload({ config })
    
    const existing = await payload.find({
      collection: "roles",
      where: { name: { equals: "admin" } },
    });

    if (existing.docs.length === 0) {
      await payload.create({
        collection: "roles",
        data: {
          name: "admin",
          permissions: ["*"],
        },
      });

      console.log("✅ Role 'admin' criada");
    } else {
      console.log("ℹ️ Role 'admin' já existe");
    }
    
    console.log('🎉 Seed de roles concluído com sucesso!')
    
  } catch (error) {
    console.error('❌ Erro durante o seed de roles:', error)
    console.error('Stack trace:', (error as Error).stack)
    throw error
  }
}

// Execução direta quando chamado como script
if (require.main === module) {
  console.log('Executando seed de roles...')
  seedRoles()
    .then(() => process.exit(0))
    .catch(() => process.exit(1))
}
