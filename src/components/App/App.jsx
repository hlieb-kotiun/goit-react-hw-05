import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

//  <div>
//       <Navigation />
//       <Suspense fallback={<h2>Loading</h2>}>
//         <Routes>
//           <Route path="/" element={<HomePage />}></Route>
//           <Route path="/:movieId" element={<MovieDetailsPage />}>
//             <Route path="cast" element={<MovieCast />} />
//             <Route path="reviews" element={<MovieReviews />} />
//           </Route>
//           <Route path="/movies" element={<MoviesPage />} />
//           <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//             <Route path="/movies/:movieId/cast" element={<MovieCast />} />
//             <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </div>
