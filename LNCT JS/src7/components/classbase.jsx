import { Component } from "react";
// import './classbase.css';

class FirstClass extends Component {
    render() {
        const useCss = {
            color: "blue",
            backgroundColor: "red"
        }
        return (
            <>
                <h1 className="heading">hello I am Class</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam explicabo ex provident cum totam laudantium ullam, ad labore nesciunt.</p>
                <h2 style={{ color: "green", backgroundColor: "yellow" }} >Inline CSS</h2>
                <h2 style={useCss} >Internal CSS</h2>
            </>

        )
    }
}
export { FirstClass };
// export default FirstClass;