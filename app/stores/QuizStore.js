import alt from '../libs/alt';
import QuizActions from '../actions/QuizActions';
import quizData from './quiz-data';

class QuizStore {
  constructor() {
    this.bindActions(QuizActions);

    this.quizData = quizData;
  }
  update(input) {
    const inputs = this.inputs;
    inputs[input.key] = input.value;
    this.setState({inputs});
  }
}

export default alt.createStore(QuizStore, 'QuizStore');
