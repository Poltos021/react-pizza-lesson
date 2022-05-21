import React from 'react';
import propTypes from 'prop-types'
 
const Category = React.memo(function Category({ activeCategory, items , onClickItem}) {
  //const [activeItem, setActiveItem] = React.useState(null);
    return (
        <div className="categories">
        <ul>
          <li className={activeCategory === null ? 'active' : ''} 
          onClick={() => onClickItem(null)}>Все</li>
          {
            items.map((name, index) => (
            <li className={activeCategory === index ? 'active' : ''} 
             onClick={() => onClickItem(index)} 
             key={`${name}_${index}`}>{ name }</li>))
          }
        </ul>
      </div>
    )
})

Category.propTypes = {
 items: propTypes.arrayOf(propTypes.string).isRequired,
 onClickItem: propTypes.func

};

Category.defaultProps = {
  activeCategory: null, 
  items: [], 
};


export default Category;

/*
class Category extends React.Component{
  
    state = {
      activeItem: 2,
    };

    onSelectItem = key => {
      this.setState({
        activeItem: key,
      });
    }

  render(){
    const {items, onClickItem} = this.props;
    return (
      <div className="categories">
      <ul>
        <li>Все</li>
        {items.map((name, key) => (
          <li className={this.state.activeItem === key ? 'active' : ''} 
          onClick={() => this.onSelectItem(key)} 
          key={`${name}_${key}`}>
            { name }
          </li>))
        }
      </ul>
    </div>
  )
  }
}*/
