import { useEffect, useState } from "react"

export default function SwitchComp() {
    const [brandMessage, setbrandMessage] = useState("");
    
    useEffect(() => {
     const autubrand = "Audi";
    
    //  if (autubrand === "Toyota") {
    //     setbrandMessage ("Toyota is a good car");
    //  } else if (autubrand === "Audi") {
    //     setbrandMessage ("I Love Audi");
    //  } else if (autubrand === "Suzuki") {
    //     setbrandMessage ("I don't like suzuki at all, but it's very affordable");

    // } else {
    //     setbrandMessage ("I don't know about this brand");

    // }

    switch (autubrand) {
        case "Toyota":
            setbrandMessage("Toyota is a good car");
            break;
            case "Audi":
                setbrandMessage("I Love Audi");
                break;
                case "Suzuki":
            setbrandMessage("I don't like suzuki at all, but it's very affordable");
            break;
        default:
            setbrandMessage ("I don't know about this brand");
            break;
    }


    }, []);
    
    
    return (
        <div>
       <h2>Switch Statement</h2>
        <p>{brandMessage}</p>     
    </div>
    );
}