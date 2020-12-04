import React, { Component } from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';

class Route extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const location = context.location
            const { children, component, render, path, computedMatch } = this.props

            const match = computedMatch
              ? computedMatch
              : path
                ? matchPath(location.pathname, this.props)
                : context.match
            const props = {
              ...context,
              location,
              match
            }

            return (
              <RouterContext.Provider value={props}>
                {
                  match
                    ? children
                      ? typeof children === 'function'
                        ? children(props)
                        : children
                      : component
                        ? React.createElement(component, props)
                        : render(props)
                          ? render(props)
                          : null
                    : typeof children === 'function'
                      ? children(props)
                      : null
                }
              </RouterContext.Provider>
            )
          }
        }
      </RouterContext.Consumer>
    );
  }
}

export default Route;
