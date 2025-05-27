import React, { useState, useRef } from "react";
export default function SearchBar() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const inputRef = useRef();

  React.useEffect(() => {
    if (q.trim().length < 2) { setResults([]); setShow(false); return; }
    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then(r => r.json())
      .then(res => { setResults(res); setShow(true); })
      .catch(() => { setResults([{ text: '검색결과가 없습니다.', url: null }]); setShow(true); });
  }, [q]);

  function handleSelect(url) {
    setShow(false);
    if (url) window.location.href = url;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (results[0] && results[0].url) handleSelect(results[0].url);
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <form style={{ display: "inline" }} onSubmit={handleSubmit} autoComplete="off">
        <input
          ref={inputRef}
          type="text"
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="검색"
          style={{ borderRadius: 4, border: "1px solid #ccc", padding: "2px 8px", marginLeft: 8 }}
          onFocus={() => { if (results.length) setShow(true); }}
          onBlur={() => setTimeout(() => setShow(false), 120)}
        />
      </form>
      {show && results.length > 0 && (
        <div style={{ position: 'absolute', left: 8, top: 32, background: '#fff', border: '1px solid #ddd', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', minWidth: 180, zIndex: 100 }}>
          {results.map((r, i) => (
            <div
              key={i}
              onMouseDown={() => handleSelect(r.url)}
              style={{ padding: '8px 16px', cursor: r.url ? 'pointer' : 'default', color: r.url ? '#2563eb' : '#888', fontWeight: r.url ? 500 : 400 }}
            >
              {r.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 