import React from 'react'
import styled from 'styled-components'
import Item from '../Item'
import ImageFilter from '../ImageFilter'

const Items = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`

export default ({ id, type, from, value, date }) => (
    <Items>
        { ImageFilter(type)}
        <Item type={type} from={from} value={value} />
        <span>{date}</span>
    </Items>
)
