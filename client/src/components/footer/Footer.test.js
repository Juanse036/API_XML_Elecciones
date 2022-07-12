import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Footer from './Footer'

test ('renders content', () => {

    const component = render(<Footer />)

    component.getAllByText('Juanse036') //Mirar que el texto este incluido, se usa getAll ya que hay varios

    // const li = component.container.querySelector('li') //Buscar elemento por query
    //console.log(prettyDOM(li)) //Mostrar en consola el elemento
    //component.debug() rendereiza el contenido
})