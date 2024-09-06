import "./newProduct.css";
import { useContext, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FirebaseApp } from "../Firebase/FirebaseConfig";
import { PopUpContext } from "../Context/moviePopUpContext";
/* import { createMovie } from "../../context/movieContext/apiCalls"; */
import { Link } from "react-router-dom";


export default function NewProduct() {
  const [movie, setMovie] = useState({});
  const [img, setImg] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [video, setVideo] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(PopUpContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie(prev => ({ ...prev, [name]: value }));
  };

  const Upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storage = getStorage(FirebaseApp);
      const uploadTask = uploadBytesResumable(ref(storage, `/items/${fileName}`), item.file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              console.log('Something went wrong');
          }
        },
        (error) => {
          console.error('Upload failed:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMovie(prev => ({ ...prev, [item.label]: downloadURL }));
            setUploaded(prev => prev + 1);
            console.log('File available at', downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    Upload([
      { file: img, label: "img" },
      { file: imgSm, label: "imgSm" },
      { file: imgTitle, label: "imgTitle" },
      { file: video, label: "video" },
      { file: trailer, label: "trailer" },
    ]);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header
        style={{ backgroundColor: '#2A6354' }}
        className="flex justify-between items-center h-16 text-white px-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4">
          <Link className="text-gray-300" to="/Admin">
            Admin
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-white" to="/">Logout</Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden" style={{ paddingTop: '64px' }}> {/* Adjust paddingTop to match header height */}
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4 fixed h-full" style={{ top: '64px' }}> {/* Align sidebar with header */}
          <nav className="space-y-2">
            <div className="flex items-center gap-2">
              
              <Link className="hover:text-gray-300" to="/NewProduct">
                Movies
              </Link>
            </div>
            <div className="flex items-center gap-2">
              
              <Link className="hover:text-gray-300" to="/users">
                Users
              </Link>
            </div>
          </nav>
        </aside>

        {/* New Product Form */}
        <div className="flex-1 ml-64 p-4"> {/* Add margin-left to offset the sidebar */}
          <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
              <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])} />
              </div>
              <div className="addProductItem">
                <label>Title Image</label>
                <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
              </div>
              <div className="addProductItem">
                <label>Thumbnail Image</label>
                <input type="file" id="imgSm" name="imgSm" onChange={(e) => setImgSm(e.target.files[0])} />
              </div>
              <div className="addProductItem">
                <label>Title</label>
                <input type="text" id="title" placeholder="Amazing Spider Man" name="title" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Description</label>
                <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Year</label>
                <input type="text" placeholder="2009" name="year" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Limit</label>
                <input type="text" placeholder="Limit" name="limit" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Genre</label>
                <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Duration</label>
                <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Is Series?</label>
                <select id="isSeries" name="isSeries" onChange={handleChange}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              <div className="addProductItem">
                <label>Trailer</label>
                <input type="file" name="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
              </div>
              <div className="addProductItem">
                <label>Video</label>
                <input type="file" name="video" onChange={(e) => setVideo(e.target.files[0])} />
              </div>
              {uploaded === 5 ? (
                <button className="addProductButton" onClick={handleSubmit}>Create</button>
              ) : (
                <button className="addProductButton" onClick={handleUpload}>Upload</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
