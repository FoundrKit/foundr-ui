import React from "react";

type TogglerDemoProps = {
    content: string
}

export default function TogglerDemo (props: TogglerDemoProps) {
    return <button>{props.content}</button>;
}