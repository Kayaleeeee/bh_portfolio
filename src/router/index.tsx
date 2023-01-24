import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import { CommercialListPage } from "pages/Commercial/CommercialListPage";
import { CommercialDetailPage } from "pages/Commercial/CommercialDetailPage";
import ContactPage from "pages/ContactPage";
import { FilmListPage } from "pages/Film/FilmListPage";
import { FilmDetailPage } from "pages/Film/FilmDetailPage";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/commercial" element={<CommercialListPage />} />
      <Route path="/commercial/:id" element={<CommercialDetailPage />} />
      <Route path="/film" element={<FilmListPage />} />
      <Route path="/film/:id" element={<FilmDetailPage />} />
      <Route path="/contacts" element={<ContactPage />} />
    </Routes>
  );
};
