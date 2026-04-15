import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi";
import { setResult, setLoading, setError } from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
    const dispatch = useDispatch();
    const { query, activeTab, result, loading, error } = useSelector(
        (store) => store.search,
    );

    useEffect(() => {
        if (!query) return;
        const getData = async () => {
            try {
                dispatch(setLoading());
                let data = [];
                if (activeTab === "photos") {
                    let response = await fetchPhotos(query);
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: "photo",
                        title: item.alt_description || "Photo",
                        thumbnail: item.urls.thumb,
                        src: item.urls.regular,
                        url: item.links.download,
                    }));
                }
                if (activeTab === "videos") {
                    let response = await fetchVideos(query);
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: "video",
                        title: item.user.name || "Video",
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url,
                    }));
                }
                if (activeTab === "gifs") {
                    let response = await fetchGIFs(query);
                    data = response.data.map((item) => ({
                        id: item.id,
                        type: "gif",
                        title: item.title || "GIF",
                        thumbnail: `https://media.giphy.com/media/${item.id}/200.gif`,
                        src: `https://media.giphy.com/media/${item.id}/giphy.gif`,
                        url: item.url,
                    }));
                }
                dispatch(setResult(data));
            } catch (err) {
                dispatch(setError(err.message));
            }
        };
        getData();
    }, [query, activeTab, dispatch]);

    if (loading) return <h1 className="p-5">Loading...</h1>;
    if (error) return <h1 className="text-red-500 p-5">Error occurred !!!</h1>;

    return (
        <div className="px-5 py-3 my-3 columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-5 space-y-5">
            {result.map((item) => {
                return (
                    <div key={item.id}>
                        <ResultCard item={item} />
                    </div>
                );
            })}
        </div>
    );
};

export default ResultGrid;
