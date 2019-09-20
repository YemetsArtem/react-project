import React, { Component } from 'react';
import Filters from './components/Filters';
import ArticleList from "./components/ArticleList";
import Counter from "./components/Counter";

class App extends Component {
    state = {
        openItem: null
    }

    render() {
        return (
            <div>
                <Filters articles={[]} />
                <Counter />
                <ArticleList />
            </div>
        )
    }
}

export default App
