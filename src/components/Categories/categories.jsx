import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { products } from '../../store/products-reducer.js';

function Categories(props) {
  return (
    <Box color="text.primary" className="">
      <h2>Browse Our Categoreis</h2>
      {props.catgs.catogeries.map((category) => {
        return (
          <Link
            style={{ margin: '8px' }}
            key={category.normalized}
            onClick={() => props.products(category.normalized)}
          >
            {category.display}
          </Link>
        );
      })}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return { catgs: state.catogeries };
};

const mapDispatchToProps = { products };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
