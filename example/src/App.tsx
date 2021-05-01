import React, { Ref } from 'react'
import styled, { css } from 'styled-components'
import { withRatio } from '@focusinlab/react-hoc-withratio'

const StyledTopic = styled.span`
  color: #282c34;
`
const StyledHeader = styled.span`
  color: cornflowerblue;
`
const StyledBaseTile = css`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`
const StyledDivTile = styled.div`
  ${StyledBaseTile};
  cursor: pointer;
`

interface ICodeTileProps {
  header: string
  topic: string
  ratio?: string
}

const CodeTile = React.forwardRef(
  ({ header, topic, ...rest }: ICodeTileProps, ref) => {
    return (
      <StyledDivTile {...rest} ref={ref as Ref<any>}>
        <StyledHeader>{header}</StyledHeader>
        <StyledTopic>{topic}</StyledTopic>
      </StyledDivTile>
    )
  }
)

const App = () => {
  const CodeWithRatio2x1 = withRatio(CodeTile)
  const CodeWithRatio1x1 = withRatio(CodeTile)
  return (
    <div>
      <CodeWithRatio2x1 ratio='2x1' header='header 2x1' topic='topic 2x1' />
      <CodeWithRatio1x1 header='header 1x1' topic='topic 1x1' />
      <CodeTile header='code tile header' topic='topic content' />
    </div>
  )
}

export default App
