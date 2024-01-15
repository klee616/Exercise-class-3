import { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"


// We want to setup a counter 
// after every one second the number increases by 1
// we want to display that number on screen as it increases

export default function ExampleFive() {
    const [count, setCount] = useState(0);

    const [trigger, setTrigger] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);



    return (
        <>
            <Header />
            <main>
                <h1>Example Five</h1>
                <h3>Example using setInterval</h3>
                <div style={{
                    displey: "flex", margin: "auto", textAlign: "center"

                }}> Count : {count}</div>
            </main>
            <Footer />
        </>
    )
}