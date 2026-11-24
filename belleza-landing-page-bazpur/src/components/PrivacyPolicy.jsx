import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { baseUrl, subDomain } from "../utils/baseUrl";
import SocialLinks from "./SocialLinks";

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const [appConfig, setAppConfig] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${baseUrl}/app-config/frontend?subdomain=${subDomain}`, {
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("not ok"))))
      .then((json) => setAppConfig(json.data || {}))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  useEffect(() => {
    document.title = "Privacy Policy | Belleza Beauty School Bazpur";
    const controller = new AbortController();

    fetch(`${baseUrl}/policy/public/privacy-policy`, {
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("not ok"))))
      .then((json) => {
        setPolicy(json.data);
        setStatus("ok");
      })
      .catch((err) => {
        if (err.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen bg-light text-neutral-800">
      <header className="bg-primary text-light px-6 py-5 flex items-center justify-between gap-4">
        <a href="/" className="text-xl font-bold tracking-tighter">
          Belleza <span className="text-accent">Beauty School</span>
        </a>
        <SocialLinks appConfig={appConfig} />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {status === "loading" && <p>Loading…</p>}

        {status === "error" && (
          <p>
            The privacy policy is currently unavailable. Please try again
            later.
          </p>
        )}

        {status === "ok" && policy && (
          <>
            <h1 className="text-3xl font-bold mb-2 text-primary">{policy.title}</h1>
            {policy.updatedAt && (
              <p className="text-sm text-secondary mb-8">
                Last updated:{" "}
                {new Date(policy.updatedAt).toLocaleDateString()}
              </p>
            )}
            <div
              className="leading-relaxed [&_a]:underline [&_:is(h1,h2,h3,h4,h5,h6)]:text-primary [&_:is(h1,h2,h3,h4,h5,h6)]:font-bold [&_h2]:text-xl [&_h2]:mt-6 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(policy.description),
              }}
            />
          </>
        )}

        <a href="/" className="inline-block mt-12 text-sm underline">
          ← Back to home
        </a>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
