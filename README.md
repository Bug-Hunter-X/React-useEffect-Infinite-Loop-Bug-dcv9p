# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook.  The example shows how omitting the dependency array in `useEffect` when making an API call can lead to an infinite render loop.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies (assuming you have Node.js and npm installed).
3. Run `npm start` (you will need a server to handle the `/api/data` endpoint for a complete test).

The buggy component will cause the browser to become unresponsive due to excessive re-rendering. The solution demonstrates how to correctly add the dependency array to fix this.