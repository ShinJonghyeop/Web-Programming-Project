import React, { useEffect, useState } from "react";
export default function StudyWeb() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    fetch("/api/studyWeb")
      .then(res => { if (!res.ok) throw new Error("서버 오류"); return res.json(); })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <section>로딩중...</section>;
  if (error) return <section>에러: {error.message}</section>;
  if (!data) return null;
  const item = data[idx];
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>웹 스터디</h2>
      <div style={{ color: '#2563eb', fontWeight: 500, marginBottom: 18 }}>매주 화/목 오후 7시</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
        <div style={{ border: '1px solid #ddd', borderRadius: 20, padding: 48, minWidth: 400, maxWidth: 700, background: '#f9fafb', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {item.img && item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.title + ' 이미지'} style={{ width: 600, height: 360, objectFit: 'contain', borderRadius: 16, marginBottom: 28, background: '#f3f4f6', cursor: 'pointer', display: 'block' }} />
            </a>
          ) : item.img ? (
            <img src={item.img} alt={item.title + ' 이미지'} style={{ width: 600, height: 360, objectFit: 'contain', borderRadius: 16, marginBottom: 28, background: '#f3f4f6', display: 'block' }} />
          ) : null}
          <h3 style={{ color: '#2563eb', fontSize: 32, marginBottom: 18, textAlign: 'center' }}>{item.title}</h3>
          <div style={{ fontSize: 20, color: '#333', whiteSpace: 'pre-line', textAlign: 'center', lineHeight: 1.6 }}>{item.desc}</div>
        </div>
      </div>
      <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
        {data.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{ width: 16, height: 16, borderRadius: '50%', border: 0, background: idx === i ? '#2563eb' : '#dbeafe', cursor: 'pointer' }} />
        ))}
        </div>
    </section>
  );
} 