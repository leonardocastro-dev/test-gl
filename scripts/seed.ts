import { seedPosts } from './seed-posts'
import { seedPermissionsCollections } from './permissions-collections.seed'
import { seedRoles } from './roles.seed'

async function runAllSeeds() {
  try {
    console.log('🚀 Iniciando execução de todos os seeds...')
    console.log('=' .repeat(50))
    
    // 1. Executar seed de posts
    console.log('1️⃣ Executando seed de posts...')
    await seedPosts()
    console.log('=' .repeat(50))
    
    // 2. Executar seed de permissões
    console.log('2️⃣ Executando seed de permissões...')
    await seedPermissionsCollections()
    console.log('=' .repeat(50))
    
    // 3. Executar seed de roles
    console.log('3️⃣ Executando seed de roles...')
    await seedRoles()
    console.log('=' .repeat(50))
    
    console.log('🎉 Todos os seeds foram executados com sucesso!')
    console.log('✅ Posts criados')
    console.log('✅ Permissões configuradas')  
    console.log('✅ Roles criadas')
    
    process.exit(0)
    
  } catch (error) {
    console.error('❌ Erro durante a execução dos seeds:', error)
    console.error('Stack trace:', (error as Error).stack)
    process.exit(1)
  }
}

console.log('Executando todos os seeds...')
runAllSeeds() 