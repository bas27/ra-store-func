import ShopItem from "./components/shop_item/ShopItem";



export const App = (item) => {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItem item={item} />
      </div>
    </div>)
};
