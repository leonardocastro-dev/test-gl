import GridBlock from '@/components/grid-block'
import GridContainer from '@/components/grid-container'
import { getPayload } from 'payload'
import config from '@payload-config'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

function getAutomaticSize(index: number): 'large' | 'medium' | 'small' {
  if (index === 0) return 'large'
  if (index >= 1 && index <= 4) return 'medium'
  return 'small'
}

async function getPostBlocks() {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'post-blocks',
      sort: '-createdAt',
      limit: 11,
    })
    console.log(result)
    return result.docs || []
  } catch (error) {
    console.error('Erro ao buscar post-blocks:', error)
    return []
  }
}

export default async function Home() {
  const postBlocks = await getPostBlocks()

  return (
    <div className="min-h-screen p-8 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Dashboard de Conteúdo</h1>

        {postBlocks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Nenhum bloco de conteúdo encontrado.</p>
            <p className="text-sm text-gray-500">
              Acesse o painel admin para criar alguns post-blocks.
            </p>
          </div>
        ) : (
          <GridContainer>
            {postBlocks.map((block: any, index: number) => (
              <GridBlock
                key={block.id}
                size={getAutomaticSize(index)}
                title={block.title}
                description={block.description}
                type={block.type}
                image={block.image ? {
                  url: block.image.url,
                  alt: block.image.alt || block.title,
                  width: block.image.width,
                  height: block.image.height
                } : undefined}
                createdAt={block.createdAt ? formatDate(block.createdAt) : undefined}
              />
            ))}
          </GridContainer>
        )}
      </div>
    </div>
  )
}
