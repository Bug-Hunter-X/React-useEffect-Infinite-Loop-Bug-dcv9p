```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Empty dependency array ensures the effect only runs once on mount
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const data = await res.json();
      setCount(data.count);
    };
    fetchData();
  }, []);

  return <div>Count: {count}</div>;
}
```