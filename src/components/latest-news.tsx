import GridBlock from '@/components/grid-block'
import { TypeWithID } from 'payload'

interface PostBlock extends TypeWithID {
  title: string
  description: string
  type: string
  image?: {
    url: string
    alt?: string
    width: number
    height: number
  }
  createdAt?: string
}

interface LatestNewsProps {
  postBlocks: PostBlock[]
}



function getAutomaticSize(index: number): 'large' | 'medium' | 'small' {
  if (index === 0) return 'large'
  if (index >= 1 && index <= 4) return 'medium'
  return 'small'
}

export default function LatestNews({ postBlocks }: LatestNewsProps) {
  return (
    <>
      {postBlocks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Nenhum bloco de conteúdo encontrado.</p>
          <p className="text-sm text-gray-500">
            Acesse o painel admin para criar alguns post-blocks.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-4">
          {postBlocks.map((block, index: number) => (
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
              createdAt={block.createdAt}
            />
          ))}
        </div>
      )}
    </>
  )
} 