import { useDispatch } from "react-redux";
import {
    removeCollection,
    removeToast,
} from "../redux/features/collectionSlice";
import { Trash2 } from "lucide-react";

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch();
    const removeFromCollection = (item) => {
        dispatch(removeCollection(item));
        dispatch(removeToast());
    };
    return (
        <div className="w-full mb-5 break-inside-avoid border border-gray-200 rounded-xl shadow-md overflow-hidden relative">
            <a className="h-full" href={item.url} key={item.id} target="_blank">
                {item.type === "photo" && (
                    <img
                        src={item.src}
                        alt={item.title}
                        className="w-full object-cover"
                        loading="lazy"
                    />
                )}

                {item.type === "video" && (
                    <video
                        autoPlay
                        loop
                        muted
                        src={item.src}
                        className="w-full object-cover"
                        loading="lazy"
                    />
                )}

                {item.type === "gif" && (
                    <img
                        src={item.src}
                        alt={item.title}
                        className="w-full object-cover"
                        loading="lazy"
                    />
                )}
            </a>
            <div className="absolute bottom-0 bg-linear-0 px-3 py-3 from-black to-transparent text-white w-full flex justify-between items-end gap-3">
                <h1 className="capitalize font-semibold text-xs leading-tight text-ellipsis truncate">
                    {item.title}
                </h1>
                <button
                    onClick={() => {
                        removeFromCollection(item);
                    }}
                    className="p-1 text-xs font-semibold bg-red-500 text-white cursor-pointer rounded-md active:scale-95">
                    {/* <Trash2 className='h-4 w-4'/> */}
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CollectionCard;
