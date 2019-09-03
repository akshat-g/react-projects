import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TodoList = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  onChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
