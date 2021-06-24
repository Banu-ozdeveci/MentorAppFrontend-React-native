//MENTOR RELATED
export const getData = async () => {
  const url = `http://192.168.1.40:3000/api/mentors`;
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log("mongo", responseData);
  } catch (e) {
    console.log("getData", e);
  }
  return products;
};

export const getUniDataMentor = async (uni) => {
  const url = `http://192.168.1.40:3000/api/mentors/uni/${uni}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log("respon", responseData);
    return responseData;
  } catch (er) {
    console.log("errorUniMentor", er);
  }
};
export const getMajorDataMentor = async (major) => {
  const url = `http://192.168.1.40:3000/api/mentors/major/${major}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log("respon", responseData);
    return responseData;
  } catch (er) {
    console.log("errorMajorData", er);
  }
};
export const getUniMajorData = async (domain, nav) => {
  const url = `http://192.168.1.40:3000/api/mentors/uniMajor/${domain}/${nav}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();

    return responseData;
  } catch (er) {
    console.log("errorMajorData", er);
  }
};

export const getOnlineMentorsData = async () => {
  const url = `http://192.168.1.40:3000/api/mentors/online`;
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch (er) {
    console.log("error", er);
  }
};

export const getCurrentMentorData = async (id) => {
  const url = `http://192.168.1.40:3000/api/mentors/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();

    return responseData;
  } catch (er) {
    console.log("errorCurrentMentor", er);
  }
};

export const getRanking = async (min, max) => {
  const url = `http://192.168.1.40:3000/api/mentors/ranking/${min}/${max}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log("re", responseData);
    return responseData;
  } catch (er) {
    console.log("errorRanking", er);
  }
};

export const getWeekFavData = async () => {
  const url = `http://192.168.1.40:3000/api/mentors/calls`;
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch (er) {
    console.log("error", er);
  }
};

//******** USER RELATED ******** */
export const getRecommendedData = async (id) => {
  const url = `http://192.168.1.40:3000/api/users/recGet/${id}`;
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log("index respomse", responseData);
    return responseData;
  } catch (er) {
    console.log("errorgetRecommended", er);
  }
};
export const saveRecommendedData = async (id, uni, major) => {
  const url = `http://192.168.1.40:3000/api/users/recSave/${id}`;
  console.log("c", id, uni, major);

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uni,
        major,
      }),
    });
    const responseData = await response.json();

    return responseData;
  } catch (er) {
    console.log("errorsaverecommended", er);
  }
};

export const SignUp = async (username, email, password) => {
  const url = `http://192.168.1.40:3000/api/users`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    });
    const token = await response.json();
    //console.log("deneme token", token);

    return token;
  } catch (er) {
    console.log("errorSignUp", er);
  }
};

export const SignIn = async (email, password) => {
  const url = `http://192.168.1.40:3000/api/auth`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const token = await response.json();

    //console.log("deneme token", token);
    return token;
  } catch (er) {
    console.log("errorSignIn", er);
  }
};

//FORGOT PASSWORD
export const PasswordForgot = async (email) => {
  const url = `http://192.168.1.40:3000/api/auth/forgotpassword`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const res = await response.json();

    return res;
  } catch (er) {
    console.log("error Forgot Password", er);
  }
};

//Compare Reset Tokens

export const CompareResetToken = async (resetToken) => {
  const url = `http://192.168.1.40:3000/api/auth/compareresetToken/${resetToken}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();

    return responseData;
  } catch (er) {
    console.log("error Compare Password", er);
  }
};

//Change Password

export const PasswordChange = async (email, password) => {
  const url = `http://192.168.1.40:3000/api/auth/changePassword`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password,
      }),
    });
    const res = await response.json();

    return res;
  } catch (er) {
    console.log("error ChangePassword", er);
  }
};

//ADD RESERVATION
export const addReservation = async (id, name, date, time, price) => {
  const url = `http://192.168.1.40:3000/api/users/reservations/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        date,
        time,
        price,
      }),
    });
    const token = await response.json();
    console.log("User reservation", token);
    return token;
  } catch (er) {
    console.log("error addReservation", er);
  }
};

//Send help message
export const SendHelpMessage = async (email, message) => {
  const url = `http://192.168.1.40:3000/api/help`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });
    const res = await response.json();

    return res;
  } catch (er) {
    console.log("errorSend Message", er);
  }
};

// export const addReservation = async (payload) => {
//   try {
//     console.log("auth", firebase.auth().currentUser.uid);
//     const resRef = firebase
//       .firestore()
//       .collection("users")
//       .doc(firebase.auth().currentUser.uid);

//     const resSnap = await resRef.get();
//     const resData = resSnap.data();
//     console.log("reservation index", payload);
//     resData.reservations.push(payload);

//     resRef
//       .set(
//         {
//           reservations: resData.reservations,
//         },

//         { merge: true }
//       )
//       .catch((error) => {
//         console.log(
//           "Something went wrong with added user to firestore: ",
//           error
//         );
//       });
//   } catch (error) {
//     console.log("sendRes error", error);
//   }
// };

// export const getCurrentUser = async (email) => {
//   const url = `http://192.168.1.40:3000/api/users/${email}`;
//   try {
//     const response = await fetch(url);
//     const user = await response.json();

//     return user;
//   } catch (er) {
//     console.log("errorCurrentUser", er);
//   }
// };

// export const getCurrentUser = async (token) => {
//   const url = `http://192.168.1.40:3000/api/users/me`;
//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "x-auth-token": token,
//       },
//     });
//     const responseData = await response.json();

//     return responseData;
//   } catch (er) {
//     console.log("errorCurrentUser", er);
//   }
// };
