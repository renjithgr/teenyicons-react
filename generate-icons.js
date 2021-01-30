const { default: svgr } = require('@svgr/core');

// console.log(svgr);

const svgCode = `
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 5.5L4.9 5.8C5.01363 5.64849 5.03191 5.44579 4.94721 5.27639C4.86252 5.107 4.68939 5 4.5 5V5.5ZM3 7.5L2.6 7.2C2.48637 7.35151 2.46809 7.55421 2.55279 7.72361C2.63748 7.893 2.81061 8 3 8V7.5ZM12.7363 2.85436L13.118 3.17736L12.7363 2.85436ZM2 6H4.5V5H2V6ZM4.1 5.2L2.6 7.2L3.4 7.8L4.9 5.8L4.1 5.2ZM3 8H3.5V7H3V8ZM3.5 9H2V10H3.5V9ZM4 8.5C4 8.77614 3.77614 9 3.5 9V10C4.32843 10 5 9.32843 5 8.5H4ZM3.5 8C3.77614 8 4 8.22386 4 8.5H5C5 7.67157 4.32843 7 3.5 7V8ZM8 5H7.5V6H8V5ZM6 6.5V7.5H7V6.5H6ZM6 7.5V8.5H7V7.5H6ZM7.5 7H6.5V8H7.5V7ZM9 8.5C9 7.67157 8.32843 7 7.5 7V8C7.77614 8 8 8.22386 8 8.5H9ZM7.5 10C8.32843 10 9 9.32843 9 8.5H8C8 8.77614 7.77614 9 7.5 9V10ZM7.5 9C7.22386 9 7 8.77614 7 8.5H6C6 9.32843 6.67157 10 7.5 10V9ZM7.5 5C6.67157 5 6 5.67157 6 6.5H7C7 6.22386 7.22386 6 7.5 6V5ZM12 6.5V8.5H13V6.5H12ZM11 8.5V6.5H10V8.5H11ZM11.5 9C11.2239 9 11 8.77614 11 8.5H10C10 9.32843 10.6716 10 11.5 10V9ZM12 8.5C12 8.77614 11.7761 9 11.5 9V10C12.3284 10 13 9.32843 13 8.5H12ZM11.5 6C11.7761 6 12 6.22386 12 6.5H13C13 5.67157 12.3284 5 11.5 5V6ZM11.5 5C10.6716 5 10 5.67157 10 6.5H11C11 6.22386 11.2239 6 11.5 6V5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM13.5 3C13.7761 3 14 3.22386 14 3.5H15C15 2.67157 14.3284 2 13.5 2V3ZM13.5 4C13.2239 4 13 3.77614 13 3.5H12C12 4.32843 12.6716 5 13.5 5V4ZM13 3.5C13 3.37655 13.0441 3.26468 13.118 3.17736L12.3547 2.53136C12.1337 2.79246 12 3.13126 12 3.5H13ZM13.118 3.17736C13.2105 3.06807 13.347 3 13.5 3V2C13.0406 2 12.629 2.20715 12.3547 2.53136L13.118 3.17736ZM7.5 1C9.43443 1 11.171 1.84439 12.3624 3.18633L13.1102 2.5224C11.7371 0.97577 9.73216 0 7.5 0V1ZM13.3538 4.67093C13.7677 5.52561 14 6.48497 14 7.5H15C15 6.33077 14.7321 5.2227 14.2538 4.23509L13.3538 4.67093ZM14 3.5C14 3.72242 13.8544 3.91214 13.6521 3.97659L13.9556 4.92942C14.5607 4.73667 15 4.17029 15 3.5H14ZM13.6521 3.97659C13.6047 3.99167 13.5538 4 13.5 4V5C13.658 5 13.8113 4.97539 13.9556 4.92942L13.6521 3.97659Z" fill="black"/>
</svg>
`

function propTypesTemplate({ template }, opts, { imports, interfaces, componentName, props, jsx, exports },) {
    const plugins = ['jsx']

    if (opts.typescript) {
      plugins.push('typescript')
    }

    const typeScriptTpl = template.smart({ plugins })

    return typeScriptTpl.ast`${imports}
        import PropTypes from 'prop-types';

        ${interfaces}

        const ${componentName} = (props) => {
            return ${jsx};
        }
        
        ${componentName}.propTypes = {
            size: PropTypes.number,
        };
        ${exports}`
  }

// DEFAULT_CONFIG: {
//     dimensions: true,
//     expandProps: 'end',
//     icon: false,
//     native: false,
//     typescript: false,
//     prettier: true,
//     prettierConfig: null,
//     memo: false,
//     ref: false,
//     replaceAttrValues: null,
//     svgProps: null,
//     svgo: true,
//     svgoConfig: null,
//     template: null,
//     titleProp: false,
//     runtimeConfig: true,
//     plugins: null,
//     namedExport: 'ReactComponent'
//   }

const options = {
    template: propTypesTemplate,
    svgProps: {
        width: '{props.size}',
        height: '{props.size}',
    },
    expandProps: null
}

svgr(svgCode, options, { componentName: 'ThreeSixty' }).then(jsCode => {
  console.log(jsCode)
})