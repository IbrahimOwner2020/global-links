import { extendTheme } from '@chakra-ui/react'

const themes = {
    colors: {
        blue: {
            bgButton: '#3A86FF',
            bgFooter: '#01073F'
        }
    },
    fonts: {
        heading: `'poppins', sans-serif`,
        body: `'poppins', sans-serif`
    }
}

const theme = extendTheme(themes)

export default theme