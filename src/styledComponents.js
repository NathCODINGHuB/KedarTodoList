import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
box-sizing:border-box;
}
body{
    margin:0;
    padding:0;
    font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
`

export default GlobalStyle