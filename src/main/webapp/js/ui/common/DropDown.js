//@flow
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PropertyUtil from '../../utils/PropertyUtil';

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

  renderEachOption = (dropDownOption) => {
    return (
      PropertyUtil.checkIfNotNull(dropDownOption) ?
        <option key={dropDownOption.key}
                className={this.props.childClass}
                value={dropDownOption.value}>
          {dropDownOption.value}
        </option> : null
    )
      ;
  };

  render() {
    const {options} = this.props;
    return (
      <select className={this.props.className}>
        {
          options.map(dropdownOption => this.renderEachOption(dropdownOption))
        }
      </select>
    );
  }


}

