import AltContainer from 'alt/AltContainer';
import Base from './Base';
import Footer from './Footer';
import QuizStore from '../stores/QuizStore';
import React from 'react';

export default class App extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <Base>
        <div>
          The Home
        </div>
        <Footer />
      </Base>
    );
  }
}
