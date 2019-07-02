//@flow
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/**
 *
 */
export default class DropDown extends React.Component {

  static propTypes = {
    options: PropTypes.array.required,
    selectedOption: PropTypes.object,
    className: PropTypes.string,
    childClass: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderEachOption = (option) => {
    return (
      <option className={this.props.childClass} value={option.value}>{option.key}</option>
    );
  };

  render() {
    return (
      <select className={this.props.className} style="">
        _.each(this.props.options, option => this.renderEachOption);
      </select>
    );
  }
}

