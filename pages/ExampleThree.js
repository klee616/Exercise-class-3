import { useEffect, useState } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ExampleThree() {
    const [number, setNumber] = useState(0);

    const colors = ["red", "orange", "yellow", "green", "blue", "violet", "prink"];

    useEffect(() => {
        if (number > colors.length) {
            setNumber(0);
            console.log("Changing number value back to 0 " - colors[0]);
        } else {

            console.log("changing number value: " + colors[number % colors.length]);
        }
    }, [number % colors.length]);

    return (
        <>
            <Header />
            <h1>Example 3</h1>
            <button
                style={{ backgroundColor: colors[number % colors.length] }}
                onClick={() => setNumber(number + 1)}>
                Increment Number
            </button>
            <div>
                {number}
            </div>
            <Footer />
        </>
    )
}