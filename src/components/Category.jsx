import React from 'react'

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


function Category({items , onClickItem}) {
  const [activeItem, setActiveItem] = React.useState(null);


    return (
        <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} 
          onClick={() => setActiveItem(null)}>Все</li>
          {
            items.map((name, key) => (
            <li className={activeItem === key ? 'active' : ''} 
             onClick={() => setActiveItem(key)} 
             key={`${name}_${key}`}>{ name }</li>))
          }
        </ul>
      </div>
    )
}
export default Category;
