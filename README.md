# React useEffect Shallow Comparison Bug with Objects

This repository demonstrates a common bug in React's `useEffect` hook when dealing with object comparisons.  The issue arises from the shallow comparison performed by `useEffect` when checking for changes in dependencies. If the object reference changes, even if the object's contents remain the same, `useEffect` will trigger unnecessarily.

## The Bug
The `bug.js` file shows an example where an object is passed as a prop to a component. The `useEffect` hook attempts to detect changes in this object, but due to shallow comparison, it triggers even when only a new reference is passed with identical contents. 

## The Solution
The `bugSolution.js` file demonstrates the correct way to handle object comparison within `useEffect`. By using a deep comparison library or by creating custom logic for comparing object values, we avoid unnecessary re-renders.