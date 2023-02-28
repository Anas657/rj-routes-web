import { Link } from "react-router-dom";
import SwitchComp from "../Components/SwitchComp";
import DateComp from "./DateComp";
import  MathComp from "./MathComp";

export default function Home() {
    return (
        <div>
            {/* <h1>This is my Home</h1>
            <Link to={'/About'}>Visit About</Link> */}
            <hr />
            <MathComp />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />

            <hr />
            <DateComp />
            <hr />
            <br />
            <br />
            <br />
            
            <hr />
            <SwitchComp />
            <br />
            <br />
            <br />
            <hr />
        </div>
    );
}