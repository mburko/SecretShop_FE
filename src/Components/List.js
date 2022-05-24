import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../styles/List.css';
import Button from 'react-bootstrap/Button'

function List() {
    return (
        <div>
           <div className='list'> <Nav>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home">  <Button variant="light">Trending question</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home"><Button variant="light">Following topic</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home"><Button variant="light">My question</Button></Nav.Link>
                </Nav.Item>
                <NavDropdown title="Filter by" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Likes</NavDropdown.Item>
                    <NavDropdown.Item  eventKey="4.2">Comements</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Views</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4">Dislikes</NavDropdown.Item>
                </NavDropdown>
            </Nav></div>
        </div>
    )
}

export default List
