import React, { useState } from 'react'; // Import useState
import Header from "./Header";
import "../components/blogs.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import db from '../db.json';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function Blogs() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize modal state
  const [isCreateBlogModalOpen, setIsCreateBlogModalOpen] = useState(false);
  const [myBlog, setMyBlog] = useState([]);
  // const localBlogs = localStorage.getItem('myBlog');
  // useEffect(() => {
  //   if (localBlogs) {
  //     setMyBlog(JSON.parse(localBlogs));
  //   }
  // }, []);


  const handleSubmit = async (values) => {
    // Get the list of emails from your JSON data
    const emails = db.user.map(item => item.email);

    // Check if the entered email exists in the JSON data
    if (emails.includes(values.email)) {
      const user = db.user.find(item => item.email === values.email);

      // Check if the entered password matches the stored password
      if (user.password === values.password) {
        // Password is correct, you can do something here
        console.log('Login successful');
        setIsModalOpen(false); // Close the login modal
        setIsCreateBlogModalOpen(true); // Open the blog creation modal
      } else {
        // Password is incorrect, you can display an error message
        console.log('Incorrect password');
      }
    } else {
      // Email doesn't exist, you can display an error message
      console.log('Email not found');
    }
  };
  const handleBlogSubmit = (blogData) => {
    // Handle the submission of the blog post form here
    // You can add the new blog post to your page
    const updatedBlogs = [...myBlog, blogData];

    // Save the updated blogs to localStorage
    // localStorage.setItem('myBlog', JSON.stringify(updatedBlogs));

    setMyBlog(updatedBlogs);
    // Close the blog creation modal if needed
    setIsCreateBlogModalOpen(false);
  };

  return (
    <>
      <div className="background">
        <Header />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#createBlogModal"
        onClick={() => setIsModalOpen(true)} // Open the modal
      >
        Admin Login
      </button>
      <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isModalOpen}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsModalOpen(false)} // Close the modal
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field name="password" type="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal fade ${isCreateBlogModalOpen ? 'show' : ''}`} id="createBlogModal" tabIndex="-1" aria-labelledby="createBlogLabel" aria-hidden={!isCreateBlogModalOpen}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createBlogLabel">Create Blog Post</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsCreateBlogModalOpen(false)} // Close the blog creation modal
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{ title: '', details: '' }}
                validationSchema={Yup.object({
                  title: Yup.string().required('Title is required'),
                  details: Yup.string().required('Details are required'),
                })}
                onSubmit={(values) => {
                  handleBlogSubmit(values);
                }}
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Blog Title
                    </label>
                    <Field name="title" type="text" className="form-control" />
                    <ErrorMessage name="title" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="details" className="form-label">
                      Blog Details
                    </label>
                    <Field name="details" as="textarea" className="form-control" />
                    <ErrorMessage name="details" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Blog
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {myBlog.map((blog, index) => (
        <div key={`${index}`} className='blogSection'>

          <h1>{blog.title}</h1>
          <p>{blog.details}</p>
        </div>
      ))}
    </>
  );
}

export default Blogs;