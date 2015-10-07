import alt from '../libs/alt';
import QuizActions from '../actions/QuizActions';

class QuizStore {
  constructor() {
    this.bindActions(QuizActions);

  }
  update(input) {
    const inputs = this.inputs;
    inputs[input.key] = input.value;
    this.setState({inputs});
  }
}

export default alt.createStore(QuizStore, 'QuizStore');
