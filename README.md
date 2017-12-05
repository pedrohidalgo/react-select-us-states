React Select US States
======================

React HTML Select component for US State Selection.

## Installation

The package can be installed via NPM:

```
npm install react-select-us-states --save
```

The list of US States were taken from [here](https://gist.github.com/mshafrir/2646763)

*Sample Usage:*

```javascript
import React, {Component} from 'react';
import './App.css';
import SelectUSState from 'react-select-us-states';

class App extends Component {

  constructor(props) {
    super(props);

    this.setNewValue = this.setNewValue.bind(this);
  }

  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
  }

  render() {
    return (
      <p>
        Select a state: <SelectUSState id="myId" className="myClassName" onChange={this.setNewValue}/>
      </p>
    );
  }
}

export default App;

```
