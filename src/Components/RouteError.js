import React from "react";

// component that renders when a url that is called for does not match an available route
const RouteError = () => {
  return(
    <main className="not-found">
      <h3>404 Error</h3>
      <p>Whoops. This route doesn't exist.</p>
    </main>
  )
}

export default RouteError;