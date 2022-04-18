import { REQ, SUCCESS, ERROR, ADD_TEST } from "./UserTypes";

import db from "../../firebase.config";

export const FETCHREQ = () => {
  return {
    type: REQ,
  };
};

export const FETCHSUCCESS = (users: any) => {
  return {
    type: SUCCESS,
    payload: users,
  };
};

export const FETCHERROR = (error: any) => {
  return {
    type: ERROR,
    payload: error,
  };
};

export const ADDTEST = (content: any) => {
  return {
    type: ADD_TEST,
    payload: content,
  };
};

export const fetchUsers = () => {
  return (dispatch: any) => {
    dispatch(FETCHREQ);

    const response = db.collection("NguoiDung");
    response
      .get()
      .then((response: any) => {
        const usersSuccess: any = [];
        response.docs.forEach((item: any) => {
          usersSuccess.push(item.data());
        });

        dispatch(FETCHSUCCESS(usersSuccess));
      })
      .catch((error: any) => {
        const errorMessage = error.message;

        dispatch(FETCHERROR(errorMessage));
      });
  };
};
