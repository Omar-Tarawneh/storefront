import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { addCart } from '../../store/cart-reducer.js';

function Product(props) {
  return (
    <section className="products-cards">
      {props.products.activeProducts.map((product) => {
        return (
          <Card
            style={{ width: '18rem' }}
            className={`cards ${product.name}`}
            key={product.name}
          >
            <CardMedia className={'img'} image={product.img} />
            <CardContent>{product.name}</CardContent>
            <CardContent>Price : {product.price}$</CardContent>
            <CardContent>in Stock : {product.count}</CardContent>
            <section className="btnn">
              <Button variant="text" onClick={() => props.addCart(product)}>
                ADD TO CART
              </Button>
              <Button variant="text">VIEW DETAILS</Button>
            </section>
          </Card>
        );
      })}
    </section>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = { addCart };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
