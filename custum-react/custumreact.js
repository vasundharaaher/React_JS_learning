// const { Children } = require("react")
function custumRender(reactElement,container){
    // const donElement = document.createElement(reactElement.type)
    // donElement.innerHTML =  reactElement.children
    // donElement.setAttribute('href',reactElement.props.href)
    // donElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(donElement)

    const donElement =document.createElement(reactElement.type)
    donElement.innerHTML = reactElement.children
    for (const prop in reactElement.props)
        {
        if (prop === 'children') continue;
        donElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(donElement)

}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector('#root')

custumRender(reactElement,mainContainer)