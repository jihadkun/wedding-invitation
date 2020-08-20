import React from "react";
import "./EditPage.Module.css";

class EditPage extends React.Component {
  render() {
    return (
      <form>
        <div>
          <p>Informasi Mempelai</p>
          <div>
            <input type="text" placeholder="Pria" />
            <input type="text" placeholder="Wanita" />
          </div>
          <div>
            <input type="text" placeholder="Keluarga Pria" />
            <input type="text" placeholder="Keluarga Wanita" />
          </div>
        </div>

        <div>
          <p>Informasi Resepsi</p>
          <div>
            <input type="text" placeholder="Tanggal" />
            <input type="text" placeholder="waktu" />
            <input type="text" placeholder="lokasi" />
          </div>

          <div>
            <p>Cerita Pertemuan Mempelai</p>
            <textarea placeholder="Silakan ceritakan apapun tentang kedua mempelai" />
          </div>
        </div>
      </form>

      // <div className="container">
      //   <div className="row">
      //     <div className="fieldLabel">Nama Mempelai Pria</div>
      //     <div>
      //       <input type="text" />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="fieldLabel">Nama Mempelai Wanita</div>
      //     <div>
      //       <input type="text" />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="fieldLabel">Nama Keluarga Pria</div>
      //     <div>
      //       <input type="text" />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="fieldLabel">Nama Keluarga Wanita</div>
      //     <div>
      //       <input type="text" />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="fieldLabel">Kronologi Pertemuan</div>
      //     <div>
      //       <textarea type="text" />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="fieldLabel"></div>
      //     <div>
      //       <button>"Simpan"</button>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default EditPage;
