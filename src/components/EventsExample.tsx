import React, { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG");
    };
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    return (
        <div>
            <input
                type="text"
                onChange={changeHandler}
                value={value}
                placeholder="controlabble"
            />
            <input type="text" placeholder="uncontrollable" ref={inputRef} />
            <button onClick={clickHandler}>button</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{ width: "200px", height: "200px", background: "red" }}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragOverHandler}
                style={{
                    width: "200px",
                    height: "200px",
                    background: isDrag ? "green" : "red",
                    marginTop: 15,
                }}
            ></div>
        </div>
    );
};

export default EventsExample;
