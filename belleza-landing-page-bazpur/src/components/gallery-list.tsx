import React, { useEffect, useMemo, useState } from "react";
import { getPublicGalleries, type GalleryItem } from "../data/galleryApi";
import { Image as ImageIcon, Layers2, ChevronLeft, ChevronRight } from "lucide-react";

export default function PublicGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [page, setPage] = useState(1);
  const limit = 12;

  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>("");

  const requestParams = useMemo(
    () => ({ page, limit, category: selectedCategory || "" }),
    [page, limit, selectedCategory]
  );

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setError("");
      setIsLoading(page === 1 && galleries.length === 0);
      setIsFetching(true);
      try {
        const res = await getPublicGalleries(requestParams);
        if (cancelled) return;

        const items = res?.data ?? res?.galleries ?? [];
        setGalleries(items);
        setTotalPages(res?.pagination?.totalPages ?? 1);
      } catch (e: any) {
        if (cancelled) return;
        setError(e?.message || "Failed to load galleries");
        setGalleries([]);
        setTotalPages(1);
      } finally {
        if (cancelled) return;
        setIsLoading(false);
        setIsFetching(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams.page, requestParams.limit, requestParams.category]);


  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-10 font-sans text-gray-900 dark:text-gray-100">
      
      {/* SECTION TITLE */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Visual Gallery
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Take a beautiful look at our campus, events, and student achievements.
        </p>
      </div>

      {/* CATEGORY TABS (FILTERS) */}
      <div className="flex flex-wrap justify-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-6">
        {[
          { label: "All Works", value: "" },
          { label: "Student Work", value: "student-work" },
          { label: "General Gallery", value: "gallery" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleCategoryChange(tab.value)}
            className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
              selectedCategory === tab.value
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* GALLERY GRID / LOADING STATES */}
      {isLoading || isFetching ? (
        // ⏳ Tailwind Skeleton Loader (Pure CSS, no library needed)
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3 animate-pulse">
              <div className="h-56 bg-gray-200 dark:bg-gray-800 rounded-2xl w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-2/3"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-md w-1/3"></div>
            </div>
          ))}
        </div>
      ) : galleries.length === 0 ? (
        // 📭 Empty State
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
          <Layers2 className="mx-auto h-12 w-12 text-gray-400 opacity-60 mb-3" />
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">No Images Found</h3>
          <p className="text-sm text-gray-500 mt-1">There are currently no active images available in this category.</p>
        </div>
      ) : (
        // 🖼️ Image Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleries.map((item: any) => (
            <div 
              key={item._id} 
              className="group overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gray-400">
                    <ImageIcon className="h-10 w-10 opacity-40" />
                  </div>
                )}
                
                {/* Category Floating Badge */}
                {item.category && (
                  <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                    {item.category.replace("-", " ")}
                  </span>
                )}
              </div>
              
              {/* Content Card Info */}
              <div className="p-4 space-y-1">
                <h3 className="font-bold text-base text-gray-800 dark:text-gray-200 line-clamp-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🔄 CUSTOM PAGINATION BUTTONS */}
      {galleries.length > 0 && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-6">

          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="cursor-pointer inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xs transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </button>
          
          <div className="h-10 px-4 inline-flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-xl text-sm font-medium border border-gray-100 dark:border-gray-800">
            Page {page} of {totalPages}
          </div>
          
          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="cursor-pointer inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xs transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}