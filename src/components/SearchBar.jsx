import { useEffect, useState } from "react";

export default function SearchBar({ products , setVisableProducts}) {
  const [q, setQ] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function filterByTitle(search) {
    setVisableProducts(products.filter((p)=> p.title.includes(search)))
  }

  useEffect(()=>{
    filterByTitle(q)
  }, [q])

  return (
    <input
      value={q}
      onChange={(e) => {
        setQ(e.target.value);        
        console.log("Typing:", q); 
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder="Search products…"
      style={{
        width: '100%',
        maxWidth: '500px',
        borderRadius: '8px',
        padding: '10px',
        border: isFocused ? '2px solid #007bff' : '1px solid #ccc',
        backgroundColor: isFocused ? '#f0f8ff' : '#fff',
        fontSize: '16px',
        transition: 'all 0.3s ease'
      }}
    />
  );
}