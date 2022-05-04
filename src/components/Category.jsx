import React from 'react'

const Category = React.memo(function Category({items , onClickItem}) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  }

    return (
        <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} 
          onClick={() => onSelectItem(null)}>Все</li>
          {
            items.map((name, index) => (
            <li className={activeItem === index ? 'active' : ''} 
             onClick={() => onSelectItem(index)} 
             key={`${name}_${index}`}>{ name }</li>))
          }
        </ul>
      </div>
    )
})
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
