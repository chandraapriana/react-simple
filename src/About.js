import React from "react";
import Navbar from "./Navbar.js";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <div
        style={{ padding: "10px", border: "1px solid #ccc", marginTop: "2rem" }}
      >
        <h1 style={{ textAlign: "center" }}>
          Data Peserta Sanbercode Bootcamp Reactjs
        </h1>
        <ol>
          <li>
            <strong style={{ width: "100px" }}>Nama:</strong> Chandra Muhamad
            Apriana
          </li>
          <li>
            <strong style={{ width: "100px" }}>Email:</strong>{" "}
            aprianachandra@gmail.com
          </li>
          <li>
            <strong style={{ width: "100px" }}>
              Sistem Operasi yang digunakan:
            </strong>{" "}
            Windows
          </li>
          <li>
            <strong style={{ width: "100px" }}></strong>chandraapriana
          </li>
          <li>
            <strong style={{ width: "100px" }}>Akun Telegram:</strong> akun
            chandra_ma
          </li>
        </ol>
      </div>
      <br />
      <br />
      <a href="/">
        <button>kembali ke index</button>
      </a>
    </>
  );
}
