import { takeEvery } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

export function* fetchCollecionsAsync() {
  yield console.log("I am fired");
}

export function* fetchCollecionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollecionsAsync
  );
}
