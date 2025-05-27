import React from "react";

export default function ClubHistory() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/history")
      .then(res => {
        if (!res.ok) throw new Error("서버 오류");
        return res.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <section>로딩중...</section>;
  if (error) return <section>에러: {error.message}</section>;

  // 1기/2기 출범
  const firstGen = data?.find(d => d.title.includes('1기'));
  const secondGen = data?.find(d => d.title.includes('2기'));
  // 나머지(이미지 있는 CTF/세미나 등)
  const rest = data?.filter(d => d !== firstGen && d !== secondGen);

  return (
    <section>
      <h2>동아리 연혁</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 48 }}>
        {/* 1기 */}
        {firstGen && (
          <div style={{ flex: 1, minWidth: 220, maxWidth: 340, background: '#f1f5f9', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(37,99,235,0.07)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 8, color: '#2563eb', textAlign: 'center' }}>{firstGen.title}</h3>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {firstGen.members?.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}
        {/* 2기 */}
        {secondGen && (
          <div style={{ flex: 1, minWidth: 220, maxWidth: 340, background: '#f1f5f9', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(37,99,235,0.07)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 8, color: '#2563eb', textAlign: 'center' }}>{secondGen.title}</h3>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {secondGen.members?.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}
      </div>
      {/* 나머지 CTF/세미나 등 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {rest?.map((item, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: 22, boxShadow: '0 6px 32px rgba(37,99,235,0.13)', padding: 48, minWidth: 420, maxWidth: 820, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 48 }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 24, color: '#0f172a', textAlign: 'center', fontWeight: 700 }}>{item.title}</h3>
            {/* 여러 이미지 지원 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 18 }}>
              {Object.keys(item)
                .filter(k => k.startsWith('image'))
                .map((k, i) => (
                  <img
                    key={k}
                    src={item[k]}
                    alt={item.title + ' 이미지' + (i+1)}
                    style={{ maxWidth: 700, width: '100%', height: 380, objectFit: 'contain', background: '#f1f5f9', borderRadius: 16, boxShadow: '0 2px 16px rgba(37,99,235,0.10)', margin: '0 auto' }}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 