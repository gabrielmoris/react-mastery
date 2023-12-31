import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import { Checkout } from "./routes/checkout/checkout.component.jsx";
import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action.js";
import { useDispatch } from "react-redux";
// import {
//   createUserDocumentFromAuth,
//   getCurrentUser,
//   onAuthStateChangedListener,
// } from "./utils/firebase/firebase.utils.js";
// import { setCurrentUSer } from "./store/user/user.action.js";
// import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // getCurrentUser().then((user) => console.log(user));
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUSer(user));
    // });
    // return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
