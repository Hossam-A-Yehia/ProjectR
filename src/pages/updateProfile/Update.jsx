import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { useEffect, useState } from "react";
import app from "../../firebase";
import axios from "axios";

export default function Update() {
  const [updateUser, setUpdateUser] = useState({});
  const [file, setFile] = useState(null);
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (file !== null) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log("IMG Erorr ");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(downloadURL);
          });
        }
      );
    }
  }, [file]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdateUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="m-3 p-3">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Update Profile</h1>
      </div>
      <div className="d-flex mt-3">
        <div
          className="shadow p-3 position-relative"
          style={{ flex: "1", minHeight: "500px" }}
        >
          <div className="d-flex align-items-center">
            <img
              src="assets/person/2.jpeg"
              alt="fdf"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <div className="d-flex flex-column ms-3">
              <span className="fw-bold">Hossam Ahmed</span>
            </div>
          </div>
          <div className="mt-3">
            <span
              className="fw-bold text-secondary"
              style={{ fontSize: "14px" }}
            >
              User information
            </span>
            <div className="d-flex align-items-center mx-0 my-3">
              <PermIdentity className="fs-5" />
              <span className="ms-2">Hossam Ahmed</span>
            </div>
            <div className="d-flex align-items-center mx-0 my-3">
              <CalendarToday className="fs-5" />
              <span className="ms-2" style={{ direction: "ltr" }}>
                2-10-2000
              </span>
            </div>
            <span
              className="fw-bold text-secondary"
              style={{ fontSize: "14px" }}
            >
              contact
            </span>
            <div className="d-flex align-items-center mx-0 my-3">
              <PhoneAndroid className="fs-5" />
              <span className="ms-2"> 1206001955 +20</span>
            </div>
            <div className="d-flex align-items-center mx-0 my-3">
              <MailOutline className="fs-5" />
              <span className="ms-2">Hoss@gmail.com</span>
            </div>
            <div className="d-flex align-items-center mx-0 my-3">
              <LocationSearching className="fs-5" />
              <span className="ms-2">Egypt</span>
            </div>
          </div>
        </div>
        <div
          className="shadow p-3 ms-3 position-relative"
          style={{ flex: "2", minHeight: "500px" }}
        >
          <span className="fw-bold fs-4">update</span>
          <form className="d-flex justify-content-between mt-3">
            <div className="w-50">
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder=""
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder=""
                  className="form-control "
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder=""
                  onChange={handleChange}
                  className="form-control "
                />
              </div>
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  Phone number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder=""
                  className="form-control "
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  Password
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="form-control "
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src="assets/person/1.jpeg"
                  alt="cxcx"
                  className="rounded me-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <label htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <button className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
