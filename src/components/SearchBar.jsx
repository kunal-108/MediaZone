import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text));
        // setText("");
    };

    return (
        <form
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className="flex gap-3 w-full p-5 bg-white">
            <input
                type="text"
                value={text}
                required
                placeholder="Search anything..."
                className="px-5 py-2 border border-gray-300 rounded-md outline-none w-full"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button className="w-50 py-2 bg-(--c1) text-white font-semibold rounded-md outline-none cursor-pointer active:scale-95">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
