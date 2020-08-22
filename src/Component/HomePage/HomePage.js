import React from "react";
import style from "./HomePage.Module.css";
import MainImage from "../images/nikah.jpg";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import "./HomePage.Module.css";

import Axios from "axios";
const URL = "http://localhost:2323/edit/info";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaPria: "",
      kelPria: "",
      namaWanita: "",
      kelWanita: "",
      tanggal: "",
      waktu: "",
      lokasi: "",
      cerita: "",
    };
  }

  // get data dari server
  componentDidMount() {
    Axios.get(URL).then((response) => {
      console.log(response.data.data[0]);
      const data = response.data.data[0];
      this.setState({
        namaPria: data.mempelaiPria,
        kelPria: data.keluargaPria,
        namaWanita: data.mempelaiWanita,
        kelWanita: data.keluargaWanita,
        tanggal: data.tanggal,
        waktu: data.waktu,
        lokasi: data.lokasi,
        cerita: data.kronologiPertemuan,
      });
    });
  }

  render() {
    return (
      <div>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="http://localhost:3000/">
            The Wedding
          </a>
          <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resepsi">
                  Pelaksanaan Resepsi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cerita">
                  Cerita Pertemuan Mempelai
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#galeri">
                  Galeri
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* navbar end */}
        {/* header */}
        <div className="jumbotron jumbotron-fluid ">
          <div className="container text-center">
            <img
              src={MainImage}
              alt="foto wedding"
              className="rounded-circle col-4 main-img"
            />
            <div className="row">
              <div className="col-6">
                <h1 className="display-4">{this.state.namaPria}</h1>
                <h5 className="lead">
                  Putri dari keluarga Bpk. {this.state.kelPria}
                </h5>
              </div>

              <div className="col-6">
                <h1 className="display-4">{this.state.namaWanita}</h1>
                <h5 className="lead">
                  Putra dari keluarga Bpk. {this.state.kelWanita}
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* header end */}
        {/* info resepsi */}
        <div id="resepsi">
          <div className="container">
            <div class="row mb-4">
              <div class="col text-center">
                <h2>Pelaksanaan Resepsi</h2>
              </div>
            </div>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-3 text-center">
                <p>Tanggal Pelaksanaan</p>
              </div>
              <div className="col-md-3 text-center">
                <p>Waktu</p>
              </div>
              <div className="col-md-3 text-center">
                <p>Lokasi</p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-3 text-center">
                <h4>{this.state.tanggal}</h4>
              </div>
              <div className="col-md-3 text-center">
                <h4>{this.state.waktu}</h4>
              </div>
              <div className="col-md-3 text-center">
                <h4>{this.state.lokasi}</h4>
              </div>
            </div>
          </div>
        </div>
        {/* info resepsi end */}

        {/* cerita */}

        <div id="cerita" className="container bg-light pb-4">
          <div class="row mb-4">
            <div class="col text-center">
              <h2>Cerita Pertemuan Mempelai</h2>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <p>{this.state.cerita}</p>
          </div>
        </div>
        {/* cerita */}
        {/* galeri */}
        <div id="galeri" className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>Galeri</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <a href={img1}>
                <img src={img1} alt="" className="img-thumbnail" />
              </a>
            </div>
            <div className="col-sm-4">
              <a href={img2}>
                <img src={img2} alt="" className="img-thumbnail" />
              </a>
            </div>
            <div className="col-sm-4">
              <a href={img5}>
                <img src={img5} alt="" className="img-thumbnail" />
              </a>
            </div>
            <div className="col-sm-4">
              <a href={img4}>
                <img src={img4} alt="" className="img-thumbnail" />
              </a>
            </div>
            <div className="col-sm-4">
              <a href={img3}>
                <img src={img3} alt="" className="img-thumbnail" />
              </a>
            </div>
            <div className="col-sm-4">
              <a href={img6}>
                <img src={img6} alt="" className="img-thumbnail" />
              </a>
            </div>
          </div>
        </div>
        {/* galeri end */}
        {/* ucapan */}

        {/* ucapan end */}
      </div>
    );
  }
}
export default HomePage;
