import React, { useCallback, useEffect } from 'react';
import Card from '../../components/card/card';
import { useDispatch } from 'react-redux';
import './_home-page.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector';
import Categories from '../../components/categories/categories';
import SortPopup from '../../components/sort-popup/sort-popup';
import { setCategory, setSortBy } from '../../redux/redux-components/filter';
import { thunkPizzaAction } from '../../redux/redux-components/card';
import { useTranslation } from 'react-i18next';
import {dynamicLocalization} from "../../helpers/dynamicLocalization";

const HomePage = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const { category, sortBy } = useTypedSelector((state) => state.filter);

  useEffect(() => {
    dispatch(thunkPizzaAction(category, sortBy));
  }, [category, sortBy]);
  const sortIems = [
    { name: dynamicLocalization('По популярности','By Popularity','Популярдуу'), type: 'popular', order: 'desc' },
    { name: dynamicLocalization('По цене','By price','Баасы'), type: 'price', order: 'desc' },
    { name: dynamicLocalization('По алфавиту','Alphabetically','Алфавит'), type: 'name', order: 'asc' },
  ];

  const categoryNames = [
    dynamicLocalization('Мясные','Meat','Эттүү'),
    dynamicLocalization('Веган','Vegan','Веган'),
    dynamicLocalization('Гриль','Grill','Гриль'),
    dynamicLocalization('Острый','Sharp','Ачуу'),
    dynamicLocalization('Закрытые','Closed','Жабык'),
  ];

  const onSelectCategory = useCallback((index: number | null) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type: { [key: string]: string }) => {
    dispatch(setSortBy(type));
  }, []);
  const { type } = sortBy;

  return (
    <div>
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={type}
          onClickSortType={onSelectSortType}
          items={sortIems}
        />
      </div>
      <Card />
    </div>
  );
};

export default HomePage;
