import React from "react";
import states from "./states.json";
import PropTypes from "prop-types";

class SelectUSState extends React.Component {
  render() {
    const { id, className } = this.props;
    return (
      <select
        id={id}
        className={className}
        onChange={e => this.props.onChange && this.props.onChange(e.currentTarget.value, e.currentTarget.name)}
        value={this.props.value}
        name={this.props.name}>

        { this.props.placeholder && <option value="">{this.props.placeholder}</option> }

        {states.map(item => (
          <option key={item.abbreviation} value={item.abbreviation}>
            {item.name}
          </option>
        ))}

      </select>
    );
  }
}

const propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

SelectUSState.propTypes = propTypes;

export default SelectUSState;
