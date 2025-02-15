```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Missing dependency array
    fetch('/api/data').then(res => res.json()).then(data => setCount(data.count));
  }, []);

  return <div>Count: {count}</div>;
}
```