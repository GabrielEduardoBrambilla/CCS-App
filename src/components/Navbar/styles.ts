import styled from 'styled-components'

export const Container = styled.nav`
  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.FONT[200]};
    color: red;
    background-color: red;
    .store-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 20px;
      font-family: Inter;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`
