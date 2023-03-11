import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Survey from "./pages/Survey/Survey";
import TypeIntroduction from "./pages/TypeIntroduction/TypeIntroduction";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import NotFound from "./pages/NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/typeintroduction' element={<TypeIntroduction />} />
        <Route path='/teammembers' element={<TeamMembers />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
