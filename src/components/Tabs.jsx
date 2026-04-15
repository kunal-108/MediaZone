import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
    const tabs = ["photos", "videos", "gifs"];
    const dispatch = useDispatch();

    const activeTab = useSelector((state) => state.search.activeTab);

    return (
        <div className="flex gap-3 w-full px-5">
            {tabs.map((elem, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTab(elem));
                        }}
                        className={`${activeTab == elem ? "bg-(--c1) shadow-md" : "bg-(--c3) shadow-sm"} text-(--c4) py-2 rounded-md cursor-pointer active:scale-95 uppercase w-1/10 transition font-semibold text-sm`}>
                        {elem}
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;
