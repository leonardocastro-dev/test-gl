import React from 'react';

type GridBlockSize = 'large' | 'medium' | 'small';

interface GridBlockProps {
  size: GridBlockSize;
  title?: string;
  description?: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  type?: string;
  createdAt?: string;
}

const GridBlock: React.FC<GridBlockProps> = ({ 
  size, 
  title, 
  description, 
  image, 
  type, 
  createdAt
}) => {
  const getColSpan = () => {
    switch (size) {
      case 'large':
        return 'col-span-6';
      case 'medium':
        return 'col-span-3';
      case 'small':
        return 'col-span-2';
      default:
        return 'col-span-2';
    }
  };

  const getImageMinHeight = () => {
    switch (size) {
      case 'large':
        return 'min-h-[362px]';
      case 'medium':
        return 'min-h-[266px]';
      case 'small':
        return 'min-h-[170px]';
      default:
        return 'min-h-[266px]';
    }
  };

  return (
    <div
      className={`
        ${getColSpan()}
        bg-white
        rounded-xl
        overflow-hidden
        duration-300
        flex flex-col
      `}
    >
      {image && (
        <div
          className={`w-full bg-gray-200 bg-center bg-cover h-full ${getImageMinHeight()}`}
          style={{ backgroundImage: `url('${image.url}')` }}
          title={image.alt || title || 'Imagem do bloco'}
        />
      )}
      <div className="p-6 flex flex-col">
        <div>
          {type && (
            <span className="text-xs font-semibold text-gray-400 uppercase mb-2">
              {type === 'press_release' ? 'ATUALIZAÇÃO' : 'ATUALIZAÇÃO'}
            </span>
          )}
          {description && (
            <h3 className="font-bold text-xl text-gray-900 leading-tight">{description}</h3>
          )}
        </div>
        {createdAt && (
          <span className="ttext-xs font-semibold text-gray-400 uppercase mt-3">{createdAt}</span>
        )}
      </div>
    </div>
  );
};

export default GridBlock; 