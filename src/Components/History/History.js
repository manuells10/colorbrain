import React from 'react'
import Row from '../Row/Row'
import './History.css'

export default function History({ test }) {
  console.log({ test })
  if (test?.history && test?.history?.length > 0) {
    return (
      <div className="history">
        {test.history.map(elem => (
          <Row values={elem.values} solution={test?.solution} colorsLength={test?.colors} />
        ))}
      </div>
    )
  } else return <></>
}