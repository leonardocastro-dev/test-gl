import { getPayload } from 'payload'
import config from '../payload.config'
import fs from 'fs'
import path from 'path'

export async function seedPosts(quantity: number = 11, type: string = 'update') {
  try {
    console.log(`🌱 Iniciando seed de ${quantity} posts do tipo "${type}"...`)
    
    const payload = await getPayload({ config })
    
    const imagePath = path.join(process.cwd(), 'media', 'pug.jpg')
    const imageBuffer = fs.readFileSync(imagePath)
    
    console.log('📸 Criando imagem de mídia padrão...')
    const mediaItem = await payload.create({
      collection: 'media',
      data: {
        filename: 'pug.jpg',
      },
      file: {
        name: 'pug.jpg',
        data: imageBuffer,
        mimetype: 'image/jpeg',
        size: imageBuffer.length
      }
    })
    
    console.log('✅ Imagem de mídia criada')
    
    console.log('📝 Criando posts...')
    
    for (let i = 1; i <= quantity; i++) {
      await payload.create({
        collection: 'post-blocks',
        data: {
          title: `${i}`,
          description: 'test',
          type: type,
          image: mediaItem.id
        }
      })
      
      console.log(`✅ Post ${i}/${quantity} criado`)
      
      await new Promise(resolve => setTimeout(resolve, 50))
    }
    
    console.log(`🎉 Seed concluído com sucesso! ${quantity} posts criados.`)
    
  } catch (error) {
    console.error('❌ Erro durante o seed:', error)
    console.error('Stack trace:', (error as Error).stack)
    throw error
  }
}

// Execução direta quando chamado como script
if (require.main === module) {
  const args = process.argv.slice(2)
  const quantity = args[0] ? parseInt(args[0]) : 11
  const type = args[1] || 'update'

  console.log(`Parâmetros: quantidade=${quantity}, tipo=${type}`)

  seedPosts(quantity, type)
    .then(() => process.exit(0))
    .catch(() => process.exit(1))
} 