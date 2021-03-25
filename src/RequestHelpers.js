
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import React from "react";


export const SendGetRequest = (url) => {

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  return fetch(url, {
    method: "GET",
    headers: headers,
  }).then((response) => {
    return response.json();
  });
};

export const SendPostRequest = (url, body = null) => {
  const token = "Bearer " + localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else return "Wrong pass";
  });
};

export const SendDeleteRequest = (url, body = null) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  return fetch(url, {
    method: "DELETE",
    headers: headers,
  }).then((response) => {
    return response.json();
  });
};

export const formDataRequest = (url, body = null, userType) => {
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const formData = new FormData();
  if (userType === "person") {
    formData.append("person[name]", body.name);
    if (body.profile_picture) {
      formData.append("logo", body.profile_picture);
    }
    if (body.sur_name) {
      formData.append("person[sur_name]", body.sur_name);
    }
    if (body.specialization) {
      formData.append("person[specialization]", body.specialization);
    }
    if (body.phone_number) {
      formData.append("person[phone_number]", body.phone_number);
    }
    if (body.address) {
      formData.append("person[address]", body.address);
    }
    if (body.birth_date) {
      formData.append("person[birth_date]", body.birth_date);
    }
    if (body.info) {
      formData.append("person[info]", body.info);
    }
  } else {
    formData.append("name", body.name);
    formData.append("specialization", body.specialization);
    formData.append("address", body.address);
    formData.append("info", body.info);
    formData.append("logo", body.logo);
  }

  return fetch(url, {
    method: "POST",
    body: formData,
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      Alert.success('Information saved!', {
        position: 'top-right',
        effect: 'slide',
        timeout: 2000
    });
      return response.json();
    } else {
      Alert.error('Wrong inputs!', {
        position: 'top-right',
        effect: 'slide',
        timeout: 2000
    });
      return "Wrong inputs";
    }
  });
};

export const formDataUpdateRequest = (url, body = null, userType) => {
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const formData = new FormData();
  if (userType === "person") {
    if (body.name) {
      formData.append("name", body.name);
    }
    if (body.profile_picture) {
      formData.append("logo", body.profile_picture);
    }
    if (body.sur_name) {
      formData.append("sur_name", body.sur_name);
    }
    if (body.specialization) {
      formData.append("specialization", body.specialization);
    }
    if (body.phone_number) {
      formData.append("phone_number", body.phone_number);
    }
    if (body.address) {
      formData.append("address", body.address);
    }
    if (body.birth_date) {
      formData.append("birth_date", body.birth_date);
    }
    if (body.info) {
      formData.append("info", body.info);
    }
    formData.append("_method", "put");
  } else {
    if (body.name) {
      formData.append("name", body.name);
    }
    if (body.specialization) {
      formData.append("specialization", body.specialization);
    }
    if (body.address) {
      formData.append("address", body.address);
    }
    if (body.info) {
      formData.append("info", body.info);
    }
    if (body.logo) {
      formData.append("logo", body.logo);
    }
    formData.append("_method", "put");
  }

  return fetch(url, {
    method: "POST",
    body: formData,
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      Alert.success('Information saved!', {
        position: 'top-right',
        effect: 'slide',
        timeout: 2000
    });
      return response.json();
    } else {
      Alert.error('Wrong inputs!', {
        position: 'top-right',
        effect: 'slide',
        timeout: 2000
    });
      return "Wrong inputs";
    }
  });
};
