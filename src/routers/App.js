import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from '../containers/home/Home';
import About from '../containers/about/About';
import Contact from '../containers/contact/Contact';

const App = () => (
  <Route
    render={({ location }) => (
      <div
        className="router-app"
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <Header />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={250}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
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
