import './App.css';
import HomePage from './containers/Home';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App({ categories }) {
  
  return (
    <div style={{ display: 'flex' }}>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          {
            categories.categories.map(category => <Route exact key={category.id} path={`/${category.name}`} render={() => <HomePage category={category.id} />} />)
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
});


export default  connect(mapStateToProps, null)(App);
