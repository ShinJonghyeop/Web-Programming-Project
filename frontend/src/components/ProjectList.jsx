import React, { useState } from "react";
export default function ProjectList() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [idx, setIdx] = useState(0);
  React.useEffect(() => {
    fetch("/api/projects")
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
      <h2 style={{ textAlign: 'center' }}>프로젝트</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
        <div style={{ border: '1px solid #eee', borderRadius: 20, padding: 48, minWidth: 400, maxWidth: 900, background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: 32, textAlign: 'center', color: '#2563eb' }}>{item.title}</h3>
          {item.images && item.images.map((img, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
              <img
                src={img.src}
                alt={item.title + ' 이미지' + (i+1)}
                style={{ width: 700, maxWidth: '100%', height: 420, objectFit: 'contain', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.10)', background: '#f8fafc', marginBottom: 16 }}
              />
              <div
                style={{ width: 700, maxWidth: '100%', minHeight: 40, borderRadius: 8, fontSize: 19, textAlign: 'center', color: '#333', background: 'none', lineHeight: 1.7 }}
              >
                {img.desc || <span style={{ color: '#bbb' }}>이미지 설명 없음</span>}
              </div>
            </div>
          ))}
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