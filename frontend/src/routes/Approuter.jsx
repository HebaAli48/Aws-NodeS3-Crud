import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/Home";
import AppLayout from "../layout/AppLayOut";
import Messages from "../components/Messages";
import PostList from "../components/PostList";

function Approuter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/posts" element={<PostList />} />
      </Route>
    </Routes>
  );
}

export default Approuter;
