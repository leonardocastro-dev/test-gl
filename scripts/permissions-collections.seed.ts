import { getPayload } from 'payload'
import config from '../payload.config'

export async function seedPermissionsCollections() {
  try {
    console.log('🛡️ Iniciando seed de permissões para coleções...')
    
    const payload = await getPayload({ config })
    const collections = payload.config.collections;

    for (const collection of collections) {
      const collectionSlug = collection.slug;

      console.log(`🔧 Criando permissões para: ${collectionSlug}`);

      await payload.create({
        collection: "permissions",
        data: {
          collection: collectionSlug,
          canCreate: true,
          canRead: true,
          canUpdate: true,
          canDelete: true,
          role: "admin",
        },
      });
    }

    console.log("✅ Permissões criadas com sucesso");
    console.log('🎉 Seed de permissões concluído com sucesso!')
    
  } catch (error) {
    console.error('❌ Erro durante o seed de permissões:', error)
    console.error('Stack trace:', (error as Error).stack)
    throw error
  }
}

// Execução direta quando chamado como script
if (require.main === module) {
  console.log('Executando seed de permissões para coleções...')
  seedPermissionsCollections()
    .then(() => process.exit(0))
    .catch(() => process.exit(1))
}
