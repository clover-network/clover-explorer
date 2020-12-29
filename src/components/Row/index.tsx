import styled from 'styled-components'

const Row = styled.div<{ align?: string; padding?: string; border?: string; borderRadius?: string }>`
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${({ align }) => (align ? align : 'center')};
`

export const RowBetween = styled(Row)`
  justify-content: space-between;
`

export const RowEnd = styled(Row)`
  justify-content: flex-end;
`

export const RowStart = styled(Row)`
  justify-content: flex-start;
`

export const RowFit = styled(Row)`
  width: fit-content;
`

export const RowCenter = styled(RowFit)`
  justify-content: center
`

export default Row;
