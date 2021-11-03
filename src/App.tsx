import React from "react";
import Card from "./components/Card";
import { CardVariant } from "./components/Card";

function App() {
    return (
        <div className="App">
            {/* <Card width="200px" height="200px">
                <button>Just a button</button>
            </Card> */}
            <Card
                width="200px"
                height="200px"
                variant={CardVariant.Primary}
                onClick={(num) => console.log(num)}
            >
                <div>text here</div>
            </Card>
        </div>
    );
}

export default App;
