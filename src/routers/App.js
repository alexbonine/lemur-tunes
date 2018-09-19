import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from '../containers/home/Home';
import About from '../containers/about/About';
import Contact from '../containers/contact/Contact';

const styles = {};
styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
styles.header = {
  ...styles.fill,
  height: '44px'
};
styles.content = {
  ...styles.fill,
  top: '44px'
  // textAlign: 'center'
};

const App = () => (
  <Route
    render={({ location }) => (
      <div className="router-app" style={styles.fill}>
        <Header style={styles.header} />
        <div style={styles.content}>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route exact path="/" component={Home} style={styles.fill} />
                <Route path="/about" component={About} style={styles.fill} />
                <Route
                  path="/contact"
                  component={Contact}
                  style={styles.fill}
                />
                <Route
                  render={() => <div>Not Found</div>}
                  style={styles.fill}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    )}
  />
);

// class App extends Component {
//   render() {
//     return (
//       <div className='router-app'>
//         <Header />
//         <TransitionGroup>
//           <CSSTransition key={window.location.key} classNames='fade' timeout={250} appear>
//             <Switch location={window.location}>
//               <Route exact path='/' component={Home} />
//               <Route path='/about' component={About} />
//               <Route path='/contact' component={Contact} />
//             </Switch>
//           </CSSTransition>
//         </TransitionGroup>
//       </div>
//     );
//   }
// }

export default App;
