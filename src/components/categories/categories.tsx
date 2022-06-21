import React, { FC } from 'react';
import './_categories.scss';
import { useTranslation } from 'react-i18next';
interface ICategoriesProps {
  activeCategory: number | null;
  items: string[];
  onClickCategory: (index: number | null) => void;
}

const Categories: FC<ICategoriesProps> = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
})
{
 const {t} = useTranslation() 
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
        {t('categorie1')} 
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
