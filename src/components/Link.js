import React, { Component } from 'react';
import '../website.css';

class Link extends Component {
  render() {
    return (
      <div >
            <a href={this.props.link}>{this.props.name}</a>
      </div>
    //   <BrowserRouter>
    //   <Switch>
    //     <Navigation/>
    //     <Route exact path='/' component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/contact" component={Contact} />
    //   </Switch>
    // </BrowserRouter>
    );
  }
}

export default Link;