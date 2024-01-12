import React from "react";
import { TogglerDemo } from "../index";


// Default export that describes the component
export default {
    title: 'TogglerDemo Test',
    component: TogglerDemo,
};

// Named export for each story
export const Default = () => <>
    <h1>This is going to be the place where we test how it works</h1>
    <p>I can add additional stuff here to show how the button works</p>
    <TogglerDemo content="someone" />
</>;

export const SomeOtherStyle = () => <>
    <h1>This is going to be another version of the button</h1>
    <p>I can also edit this to be whatever I want.</p>
    <TogglerDemo content="someone else" />
</>;