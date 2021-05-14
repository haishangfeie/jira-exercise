import styled from '@emotion/styled'

export const Row = styled.div<{
  marginTop?: number
  gap?: number | boolean
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  marginBottom?: number
}>`
  display: flex;
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop + 'rem' : undefined};
  align-items: center;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : undefined};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + 'rem' : undefined};
  & > * {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: ${(props) =>
      typeof props.gap === 'number'
        ? props.gap + 'rem'
        : props.gap === true
        ? '2rem'
        : undefined};
    &:last-child {
      margin-right: 0;
    }
  }
`
