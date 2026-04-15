import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-10 py-4 bg-(--c2)">
            <Link to="/" className="text-(--c4) font-semibold text-xl">
                Media Zone
            </Link>
            <div className="flex gap-3 items-center">
                <Link
                    className="bg-(--c4) text-(--c2) rounded-sm text-sm px-3 py-2 font-semibold active:scale-95"
                    to="/">
                    Search
                </Link>
                <Link
                    className="bg-(--c4) text-(--c2) rounded-sm text-sm px-3 py-2 font-semibold active:scale-95"
                    to="/collection">
                    Collection
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
