import { baseUrl } from "../utils/baseUrl";

export type GalleryItem = {
  _id?: string;
  id?: string;
  image?: string;
  title?: string;
  createdAt?: string;
  category?: string;
};

export type GalleryResponse = {
  data?: GalleryItem[];
  galleries?: GalleryItem[];
  pagination?: {
    totalPages?: number;
    totalItems?: number;
    page?: number;
    limit?: number;
  };
};

// Landing-page API call (no RTK Query in this project)
export async function getPublicGalleries(params: {
  page?: number;
  limit?: number;
  category?: string;
}): Promise<GalleryResponse> {
  const { page = 1, limit = 12, category = "" } = params;

  // Backend route contract: /gallery/active
  // category is optional; if not supported server-side, it will be ignored.
  const qs = new URLSearchParams();
  qs.set("page", String(page));
  qs.set("limit", String(limit));
  if (category) qs.set("category", category);

  const res = await fetch(`${baseUrl}/gallery/active?${qs.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch galleries: ${res.status} ${text}`);
  }

  return (await res.json()) as GalleryResponse;
}

