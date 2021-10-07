import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
export const Nav = styled.nav`
    align-items:center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display:flex;
    height: 50px;
    justify-content:space-around;
    left: 0;
    margin: 0 auto;
    right: 0;
    position: fixed;
    z-index:1000;
    width: 100%;
    max-width: 500px;
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #000;
    &:after {
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`
