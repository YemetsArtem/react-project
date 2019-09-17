import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css'
import Select from 'react-select'
import articles from "./fixtures"
import ArticleList from "./components/ArticleList/ArticleList"


class App extends Component {
    state = {
        openItem: null
    }
    render() {
        return (
            <div>
                <DayPicker />
                <Select
                    options={this.options}
                    value={this.state.openItem}
                    onChange={this.handleSelect} 
                />
                <ArticleList
                    articles={articles}
                    ref={this.getRef}
                />
            </div>
        )
    }

    get options() {
        return articles.map(article => ({
            label: article.title,
            value: article.id
        }))
    }

    handleSelect = openItem => this.setState({ openItem })
}

export default App
