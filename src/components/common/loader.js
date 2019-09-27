import React from 'react'
import translator from '../../decorators/translator'

function Loader(props) {
  return <h2>{props.translate('loading')}</h2>
}

export default translator(Loader)
