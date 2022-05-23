import React from 'react'
import { Category, SortPopup, PizzaBlock, LoadingBlock } from "../components";

import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/action/filters'
import { fetchPizzas } from '../redux/action/pizzas';

//Вынесены чтобы не было лишнего ререндера
const CategoryArr = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые'
];

const SortItems = [
  {name :'популярности', type: 'popular', order: 'desc'} , 
  {name: 'цене', type: 'price', order: 'desc'}, 
  {name: 'алфавиту', type: 'name', order: 'asc'}
  ];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items ); 
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded ); 
  const { category, sortBy } = useSelector(({ filters }) => filters ); 

  React.useEffect(()=> {
      dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const handleAddPizza= (obj) =>{
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

    return (
        <div className="container">
            <div className="content__top">
            <Category activeCategory={category} onClickItem={ onSelectCategory } 
            items={CategoryArr}/>
              <SortPopup activeSort={ sortBy.type } 
              items={SortItems}
              onClickSortBy ={ onSelectSortBy }  />
            </div>
            <h2 className="content__title">Все пиццы</h2>
              <div className="content__items">
                {isLoaded ? items && items.map((obj) => (
                  <PizzaBlock 
                    onClickAddPizza={handleAddPizza} 
                    key={obj.id}
                    cartCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                    {...obj} />)) : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)
                  }
              </div>
          </div>
    )
}

export default Home;