import React, { useState} from 'react';

const Search = (props) => {

    const [input, setInput] = useState(props.input);

    const formHandler = (e) => {
        e.preventDefault();
        props.onResultReceived(input);                 
    };

    const resetState = () => {
        setInput("");
        props.resetHandler();
    }

    const inputChangeHandler = (e) => {
        if (e.target.value.length > 0) {
            setInput(e.target.value)
        }
    }

    return (
        <div>
            <form onClick={formHandler}>
                <label htmlFor="username">GitHub username: </label>
                <input id="username" type="text" value={input} onChange={inputChangeHandler}/>
                <br />
                <input type='submit' value="Go!" />
            </form>
            <button onClick={resetState}>Reset</button>
            <hr />
        </div>
    );
}

export default Search;
