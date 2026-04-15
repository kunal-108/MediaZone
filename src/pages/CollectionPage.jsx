import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
    const collection = useSelector((state) => state.collection.items);
    const dispatch = useDispatch();
    return (
        <>
            {collection.length > 0 ? (
                <div className="flex justify-between items-center px-10 pt-3">
                    <h2 className="text-(--c2) font-bold text-xl">
                        Your Collection
                    </h2>
                    <button
                        onClick={() => {
                            dispatch(clearCollection());
                        }}
                        className="text-xs bg-red-500 text-white px-6 py-2 rounded-md shadow-sm w-1/12 cursor-pointer active:scale-95">
                        Clear All
                    </button>
                </div>
            ) : (
                <h2 className="text-(--c2) font-bold text-3xl text-center my-10">
                    Collection is empty
                </h2>
            )}
            <div className="px-5 py-3 my-3 columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-5 space-y-5">
                {collection.map((item) => {
                    return (
                        <div key={item.id}>
                            <CollectionCard item={item} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CollectionPage;
