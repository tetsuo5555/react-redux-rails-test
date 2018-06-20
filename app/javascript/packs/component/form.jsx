import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class ComposedTextField extends React.Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="name-simple">Name</InputLabel>
          <Input id="form1" value={this.state.name} onChange={this.handleChange} />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(ComposedTextField);
