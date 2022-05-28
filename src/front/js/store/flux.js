const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: sessionStorage.getItem("activeUser"),
      message: null,
    },
    actions: {
      // Use getActions to call a function within a fuction

      syncTokenFromSession: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      // logout: () => {
      // 	sessionStorage.clear();
      // 	console.log("logout")
      // 	setStore({ token: null })
      // },

      getActiveUser: async (email) => {
        try {
          const res = await fetch(
            "https://3001-aussymo-washius-vksqs3t3ju6.ws-us46.gitpod.io/api/user/active",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            }
          );
          const activeUser = await res.json();
          setStore({ activeuser: activeUser.username });
          sessionStorage.setItem("activeUser", activeUser.username);
        } catch (error) {
          throw Error("error on getuser");
        }
      },

      login: async (email, password, history) => {
        try {
          const res = await fetch(
            "https://3001-aussymo-washius-vksqs3t3ju6.ws-us46.gitpod.io/api/login",
            {
              method: "POST",
              // mode: "no-cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            }
          );

          // const resp = await fetch('https://3001-4geeksacade-reactflaskh-setqz2nrkzy.ws-us45.gitpod.io/api/token')
          if (res.ok) {
            const token = await res.json();
            console.log("this came from backend", res);
            sessionStorage.setItem("token", JSON.stringify(token));
            getActions().getUser(email);
            history.push("/");
            // setStore({ token: data.access_token })
            return true;
          } else {
            throw "something doesnt look right";
          }
        } catch (error) {
          throw Error("error on login");
          console.log(error);
        }
      },

      createUser: async (email, password, username, phone_number) => {
        try {
          const res = await fetch(
            "https://3001-aussymo-washius-vksqs3t3ju6.ws-us46.gitpod.io/api/signup",
            {
              method: "POST",
              // mode: "no-cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email,
                password,
                username,
                phone_number,
              }),
            }
          );
          if (res.ok) {
            const token = await res.json();
            sessionStorage.setItem("token", json.stringify(token));
            getActions().getActiveUser(email);
            return true;
          } else {
            throw "createuser error";
          }
        } catch (error) {
          throw Error("Encountered Error on createuser");
        }
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
