import React from 'react'
import dictionaries from '../dictionaries.js'
import { Consumer as LangConsumer } from '../components/contexts/lang.js'

export default (OriginalComponent) =>
  class Translator extends React.Component {
    translate = (string) => <LangConsumer>{(lang) => dictionaries[lang][string]}</LangConsumer>

    render() {
      return <OriginalComponent {...this.props} {...this.state} translate={this.translate} />
    }
  }
