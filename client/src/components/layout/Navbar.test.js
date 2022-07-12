import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import Navbar from './Navbar'
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Navbar />', () => {

    let component

    beforeEach(() => { //Se ejecuta antes de cada test
        component = render(<Navbar />, {wrapper: Router});
    })

    test('clickking the button menu once', () => {       
    
        const Nacionales = component.getByText('Nacionales')    
        fireEvent.click(Nacionales)
        expect(Nacionales.closest('a')).toHaveAttribute('href', '/nacionales') // Espera que el link sea Nacionales       
    })

    test('puebas de estilos', () => {
        const el = component.getByText('Capitales')
        
        const nav = component.container.querySelector('nav')        
        expect(nav).toHaveStyle('font-size: 10px')//mirar los styles de nav
        //console.log(prettyDOM(nav)) //Console.log el nav element

        const li = component.container.querySelector('li')
        expect(li).toHaveStyle('display: list-item')//mirar los styles de li
        //console.log(prettyDOM(li)) //Console.log el li element
    })

})

