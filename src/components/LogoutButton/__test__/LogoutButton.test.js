import React from "react";
import ReactDOM from 'react-dom';
import LogoutButton from '../LogoutButton';
import {render,screen,cleanup} from '@testing-library/react';

afterEach(()=>{
    cleanup(); //runs a clean up after each test
})

it("renders without crashing", ()=>{
    const div= document.createElement("div");
    ReactDOM.render(<LogoutButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});

