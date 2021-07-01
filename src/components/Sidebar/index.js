import { NavWrapper, Navigation } from './styled';
import { connect } from 'react-redux';
import { getCategoryList } from '../../store/actions';
import { useEffect } from 'react';

function Sidebar({ categories , getCategories}) {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <NavWrapper>
        {
          categories.categories.map(item => {
            return (
                <Navigation key={item.id} to={`/${item.name}`} activeClassName='activeNavLink'>
                  {item.name.toUpperCase()}
                </Navigation>
            )
          })
        }        
    </NavWrapper>
  )
};

const mapStateToProps = state => ({
  categories: state.categories,
});


const mapDispatchToProps = {
  getCategories: getCategoryList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);