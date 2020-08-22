import React from "react";
import "./EditPage.Module.css";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const URL = "http://localhost:2323/edit/info";

class EditPage extends React.Component {
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

      status: "",
    };
  }

  // menangkap input keyboard
  handleInputChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  // ambil data dari server
  componentDidMount() {
    Axios.get(URL).then((response) => {
      // console.log(response.data);
      // console.log(response.data.status);
      this.setState({ status: response.data.status });
    });
  }

  //handle ketika klik save
  handleSubmit = (event) => {
    event.preventDefault();
    const dataMempelai = {
      mempelaiPria: this.state.namaPria,
      keluargaPria: this.state.kelPria,
      mempelaiWanita: this.state.namaWanita,
      keluargaWanita: this.state.kelWanita,
      lokasi: this.state.lokasi,
      tanggal: this.state.tanggal,
      waktu: this.state.waktu,
      kronologiPertemuan: this.state.cerita,
    };

    console.log(dataMempelai);

    if (this.state.status === "OK") {
      Axios.put(URL + "/1", dataMempelai)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Axios.post(URL, dataMempelai)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="http://localhost:3000/">
            Your Wedding
          </a>
          <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className=" container text-center vertical-center justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div>
              <p>Informasi Mempelai</p>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    placeholder="Pria"
                    name="namaPria"
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    placeholder="Wanita"
                    name="namaWanita"
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    placeholder="Keluarga Pria"
                    name="kelPria"
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    placeholder="Keluarga Wanita"
                    name="kelWanita"
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <hr />

            <div>
              <p>Informasi Resepsi</p>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    placeholder="01 Januari 2000"
                    name="tanggal"
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    placeholder="00:00 - 00:00 WIB"
                    name="waktu"
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    placeholder="Nama Lokasi/Kota"
                    name="lokasi"
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <hr />

            <div>
              <p>Cerita Pertemuan Mempelai</p>
              <div className="form-group">
                <textarea
                  placeholder="Silakan ceritakan apapun tentang kedua mempelai"
                  name="cerita"
                  onChange={this.handleInputChange}
                  className="form-control"
                />
              </div>
            </div>

            <div>
              <button type="reset" className=" btn btn-warning btn-block">
                Reset
              </button>
              <button type="submit" className="btn btn-success btn-block">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPage;
