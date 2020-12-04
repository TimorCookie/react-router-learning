import React, { Component } from 'react';
import matchPath from './matchPath'
import RouterContext from './RouterContext'
class Switch extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const location = context.location
            // * 标记匹配否
            let match;
            // * 标记匹配的元素
            let element;
            // ! 遍历子元素处理 match
            React.Children.forEach(this.props.children, child => {
              if (match == null) {
                element = child
                match = child.props.path
                  ? matchPath(location.pathname, child.props)
                  : context.match
              }
            })
            return match
              ? React.cloneElement(element, { computedMatch: match })
              : null
          }
        }
      </RouterContext.Consumer>
    )
  }
}

export default Switch;
