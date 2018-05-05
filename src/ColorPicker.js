import React, { Component } from 'react';
import { CustomPicker } from 'react-color';
const { Hue, Saturation, CustomPointer, EditableInput } = require('react-color/lib/components/common');

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bg: '#eee'
    }
  }
  // handleChange(c) {
  //   console.log('this.props.hex', this.props);
  //   this.setState({
  //     color: c.hex
  //   })
  // }

  handleChangeComplete(color, event) {
    this.setState({ bg: color.hex });
    // console.log('color.hex', color, event);
  }

  render() {
    console.log('this.props', this.props);
    const inputStyles = {
      input: {
        margin: '0 auto',
        border: 'none',
        padding: '5px',
        width: '50px',
        textAlign: 'center'
      },
      label: {
        fontSize: '12px',
        color: '#999',
      },
    };
    return (
      <div className="colorpicker"
        style={{ background: this.props.hex }}
      >
        <div className="colorpicker__alpha">
          <Saturation
            color={this.state.color}
            {...this.props}
            pointer={ CustomPointer }
            onChangeComplete={ this.handleChangeComplete.bind(this) }
          />
        </div>
        <div
          className="colorpicker__hue"
        >
          <Hue
            {...this.props}
            color={this.state.color}
            pointer={ CustomPointer }
            onChangeComplete={ this.handleChangeComplete.bind(this) }
            direction={ 'horizontal' }
          />
        </div>
        <div className="colorpicker__input">
          <EditableInput
            style={ inputStyles }
            value={ this.props.hex }
            onChange={ this.handleChange }
          />
        </div>
      </div>
    )
  }
}
export default CustomPicker(ColorPicker);
