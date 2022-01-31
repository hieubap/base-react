import { message } from "antd";
import authProvider from "data-access/auth-provider";
import clientUtils from "utils/client-utils";
import dataCache from "utils/data-cache";

export default {
  state: {
    auth: (() => {
      try {
        let data = dataCache.read("auth") || {};
        clientUtils.auth = "Bearer " + data.token;
        return data;
      } catch (error) {
        console.log(error);
      }
      return null;
    })(),
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    register: (payload) => {
      dispatch.auth.updateData({
        auth: null,
      });
      return new Promise((resolve, reject) => {
        authProvider
          .register(payload)
          .then((res) => {
            if (res && res.code === 0) {
              message.success(
                "Đăng ký thành công. Vui lòng đăng nhập vào hệ thống"
              );

              setTimeout(() => {
                window.location.href = "/auth/signin";
              }, 1000);
            } else {
              message.error(res.message);
            }
            resolve(res);
          })
          .catch((e) => {
            // message.error(e?.message || "Đăng ký không thành công");
            reject(e);
          });
      });
    },
    login: ({ username, password }) => {
      dispatch.auth.updateData({
        auth: null,
      });
      return new Promise((resolve, reject) => {
        authProvider
          .login({
            username,
            password,
          })
          .then((res) => {
            if (res && res.code === 0) {
              dataCache.save("auth", res.data);
              message.success("Đăng nhập thành công");

              setTimeout(() => {
                window.location.href = "/p/home";
              }, 1500);
            } else {
              message.error(res.message);
            }

            resolve(res);
          })
          .catch((e) => {
            // message.error(e?.message || "Đăng nhập không thành công");
            reject(e);
          });
      });
    },
    _logout: () => {
      localStorage.removeItem("auth");
      dispatch.auth.updateData({
        auth: null,
      });
      window.location.href = "/";
    },
    updateAuth: ({ email, full_name, avatar }, state) => {
      const auth = { ...state.auth?.auth, email, full_name, avatar };
      dispatch.auth.updateData({
        auth,
      });
      localStorage.setItem("auth", JSON.stringify(auth));
    },
  }),
};
