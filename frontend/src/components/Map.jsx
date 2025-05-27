import React, { useEffect, useRef, useState } from "react";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function Map() {
  const mapRef = useRef(null);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 구글맵 스크립트 로드
  const loadGoogleMaps = (cb) => {
    if (window.google) return cb();
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    window.initMap = cb;
    document.body.appendChild(script);
  };

  useEffect(() => {
    (async () => {
      setLoading(true); setError(null);
      try {
        const res = await fetch("/api/map");
        if (!res.ok) throw new Error("API 오류");
        const data = await res.json();
        setInfo(data);
        loadGoogleMaps(() => {
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: data.lat, lng: data.lng },
            zoom: 16,
          });
          new window.google.maps.Marker({
            position: { lat: data.lat, lng: data.lng },
            map,
            title: data.name,
          });
        });
      } catch (e) {
        setError(e.message);
        setInfo(null);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <section style={{ textAlign: "center", marginTop: 40 }}>
      <h2>찾아오는 길</h2>
      {loading && <div>로딩중...</div>}
      {error && <div style={{ color: 'red' }}>에러: {error}</div>}
      <div ref={mapRef} style={{ width: "100%", maxWidth: 800, height: 400, margin: "32px auto", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }} />
      {info && (
        <div style={{ marginTop: 16 }}>
          <div><b>장소명:</b> {info.name}</div>
          <div><b>주소:</b> {info.address}</div>
          <div><b>상세주소:</b> {info.desc}</div>
        </div>
      )}
    </section>
  );
}