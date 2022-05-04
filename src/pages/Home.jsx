import React from 'react'
import { Category, SortPopup, PizzaBlock } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/action/filters'


const CategoryArr = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые'
];

const SortItems = [
  {name :'популярности', type: 'popular'} , 
  {name: 'цене', type: 'price'}, 
  {name: 'алфавиту', type: 'alphabet'}
  ];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items ); 

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);


    return (
        <div className="container">
            <div className="content__top">
            <Category onClickItem={ onSelectCategory } 
            items={CategoryArr}/>
              <SortPopup items={SortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
              <div className="content__items">
                {items && items.map((obj) => (
                  <PizzaBlock key={obj.id} {...obj} />
                  ))}
              </div>
          </div>
    )
}

export default Home;