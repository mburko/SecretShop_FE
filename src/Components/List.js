import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../styles/List.css';

function List() {
    return (
        <div>
           <div className='list'> <Nav>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home">Trending question</Nav.Link>
                </Nav.Item>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home">Following topic</Nav.Link>
                </Nav.Item>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home">My question</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Filter by" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item  eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav></div>
        </div>
    )
}

export default List
