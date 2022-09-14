import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import $ from "jquery";
import { useParams } from "react-router-dom";
import { photoSizes } from "../data";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { addToCart } from "../Redux/Actions/cartActions";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id.toString();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bucket_url = process.env.REACT_APP_BUCKET_URL;

  const [items, setItems] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [progressShow, setProgressShow] = useState(false);

  //CART STATES
  const [photoName, setPhotoName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  //GET PRODUCT PRICE

  const getPrice = (id) => {
    const product = photoSizes.find((photoSize) => photoSize.name === id);
    return product.price;
  };

  // GET PRODUCT SIZE
  const getSize = (id) => {
    const product = photoSizes.find((photoSize) => photoSize.name === id);
    return product.size;
  };

  const uploadPhoto = (e) => {
    e.preventDefault();
    setProgressShow(true);
    const fileName = new Date().getTime() + photo.name;
    const storage = getStorage(app, bucket_url);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, photo);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //console.log(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setPhotoUrl(downloadURL);
        });
      }
    );
  };

  const handleSizeName = (e) => {
    setPhotoName(e.target.value);
    setPrice(getPrice(`${e.target.value}`));
    setSize(getSize(`${e.target.value}`));
  };

  const handleCart = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();
    dispatch(
      addToCart(id, photoName, photoUrl, size, quantity, price, description)
    );
    navigate("/cart");
  };

  useEffect(() => {
    if (progress === 100) {
      setProgressShow(false);
      setPhoto(null);
    }
  }, [progress]);

  useEffect(() => {
    const singleProduct = photoSizes.filter(
      (photoSize) => photoSize.name === id
    );
    setItems(singleProduct);
  }, [id]);

  useEffect(() => {
    if ($(window).innerWidth() <= 400) {
      $("#make-order").removeClass("mx-3");
    }
  }, []);

  return (
    <>
      <h5 className="text-center">Product Details</h5>
      <div className=" container mt-4 d-flex justify-content-center">
        <div
          className={
            $(window).innerWidth() <= 400
              ? `row mt-4`
              : `col-10 my-4 d-flex justify-content-center`
          }
        >
          <div className="col-sm-5 col-md-5 col-lg-5 mb-4 d-flex justify-content-center details-cont-md">
            {items.map((item) => (
              <div className="image-cont" key={new Date().getTime().toString()}>
                <img src={item.img} alt={item.name} />
              </div>
            ))}
          </div>
          {items.map((item) => {
            const { name, size, price, description } = item;
            return (
              <div
                className="col-sm-5 col-md-5 col-lg-5"
                key={new Date().getTime().toString()}
              >
                <h5 className="title-heading">{name}</h5>
                <p className="handle-text">{description}</p>
                <p className="handle-text">Size {size}</p>
                <p className="price-title">KES {price}</p>

                <h6 className="title-heading py-3">Other Features</h6>
                <div className="info">
                  <p>Good quality</p>
                  <p>Good for hunging on the wall</p>
                  <p>durable</p>
                  <p>affordable</p>
                  <p>better services</p>
                  <p></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div
          className={
            $(window).innerWidth() <= 400
              ? `row my-4`
              : `my-4 d-flex justify-content-center`
          }
        >
          <div className="col-sm-4 col-md-5 col-lg-5">
            <h6 className="title-heading">
              How to send photo to us for mounting
            </h6>
            <div className="info">
              <p>Upload your photo in the below section</p>
              <p>Choose the one all multiple sizes</p>
              <p>Select the quantity you want delivered after mounting</p>
              <p>Click ADD TO CART and then proceed to checkout</p>
              <p>Make payment deposit..</p>
              <p>
                We will receive your photos and work on them as per your
                guidelines.
              </p>
              <p>
                Once we are done, we will make arrangements on collection or
                maybe delivery.
              </p>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 make-order">
            <h6 className="title-heading">Make your Order</h6>
            <form className="form">
              <div className="mb-3">
                <label htmlFor="image" className="form-label order-text">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  style={{ width: "80%" }}
                  id="image"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                {progressShow ? (
                  <button
                    className="loading-btn small-input"
                    type="button"
                    disabled
                    style={{ width: "80%" }}
                  >
                    <span
                      className="spinner-border spinner-border-sm mx-3"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Uploading...
                  </button>
                ) : (
                  <button
                    className="btn submit-btn"
                    onClick={uploadPhoto}
                    style={{ width: "80%" }}
                  >
                    Upload Image
                  </button>
                )}
              </div>
              {progress === 100 && (
                <div className="mb-3">
                  <div className="uploaded-img">
                    <img src={photoUrl} alt="..." />
                  </div>
                </div>
              )}
            </form>
          </div>
          <div
            className="col-sm-3 col-md-3 col-lg-3 make-order"
            id="make-order"
          >
            <div className="spaced-cont">
              <p className="order-text">SELECT SIZE</p>
              <div>
                <select className="select" onChange={handleSizeName}>
                  <option>--select--</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="A3">A3</option>
                  <option value="A4">A4</option>
                  <option value="A5">A5</option>
                </select>
              </div>
            </div>
            <div className="spaced-cont mt-3">
              <p className="order-text">SELECT QUANTITY</p>
              <div>
                <select
                  className="select"
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option>--select--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="mb-3 mt-2">
              <label htmlFor="message" className="form-label order-text">
                Order description
              </label>
              <textarea
                type="text"
                rows="3"
                style={{ width: "80%" }}
                className="form-control"
                id="message"
                placeholder="Give your specifications here..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn submit-btn" onClick={handleCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
