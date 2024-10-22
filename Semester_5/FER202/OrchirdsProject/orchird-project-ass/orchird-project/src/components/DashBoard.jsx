import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Table,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../config/axios";

function DashBoard() {
  const [orchids, setOrchids] = useState([]);
  const [show, setShow] = useState(false);
  const [editingOrchid, setEditingOrchid] = useState(null);

  const handleClose = () => {
    setShow(false);
    setEditingOrchid(null);
  };
  const handleShow = () => {
    if (!editingOrchid) {
      formik.resetForm(); // Khi thêm mới, reset form
    }
    setShow(true);
  };
  const baseURL = `orchidList`;

  const fetchAPI = () => {
    api
      .get(baseURL)
      .then((response) => {
        setOrchids(response.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        toast.error(`Failed to fetch data: ${error.message}`);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleDelete = (id) => {
    api
      .delete(`${baseURL}/${id}`)
      .then(() => {
        toast.success("Deleted successfully!");
        fetchAPI();
      })
      .catch((error) => {
        console.error("Delete error:", error);
        toast.error(`Failed to delete: ${error.message}`);
      });
  };

  const handleEdit = (orchid) => {
    setEditingOrchid(orchid);
    formik.setValues({
      name: orchid.name,
      rating: orchid.rating,
      isSpecial: orchid.isSpecial,
      image: orchid.image,
      color: orchid.color,
      origin: orchid.origin,
      category: orchid.category,
      clip: orchid.clip || "",
    });
    setShow(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      rating: 0,
      isSpecial: false,
      image: "",
      color: "",
      origin: "",
      category: "",
      clip: "",
    },
    onSubmit: (values) => {
      if (editingOrchid) {
        // Handle PUT request (update)
        api
          .put(`${baseURL}/${editingOrchid.id}`, values)
          .then(() => {
            handleClose();
            toast.success("Updated successfully");
            fetchAPI();
            formik.resetForm();
            setEditingOrchid(null); // Reset editingOrchid after successful update
          })
          .catch((error) => {
            console.error("Update error:", error);
            toast.error(`Failed to update: ${error.message}`);
          });
      } else {
        // Handle POST request (create)
        api
          .post(baseURL, values)
          .then(() => {
            handleClose();
            toast.success("Created successfully");
            fetchAPI();
            formik.resetForm();
          })
          .catch((error) => {
            console.error("Create error:", error);
            toast.error(`Failed to create: ${error.message}`);
          });
      }
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      rating: Yup.number().required("Required.").min(0).max(5),
      image: Yup.string().required("Required.").url("Must be a valid URL"),
      color: Yup.string().required("Required."),
      origin: Yup.string().required("Required."),
      category: Yup.string().required("Required."),
      clip: Yup.string().url("Must be a valid URL"),
    }),
    enableReinitialize: true, // Add this line to allow form to reinitialize when values change
  });

  return (
    <Container fluid className="py-4 px-4 bg-light">
      <ToastContainer />
      <Row className="mb-4">
        <Col>
          <h1 className="text-3xl font-bold text-primary">Orchid Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton className="bg-light">
              <Modal.Title className="text-xl font-semibold text-primary">
                {editingOrchid ? "Edit Orchid" : "Add New Orchid"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-white">
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    {/* Name field */}
                    <Form.Group className="mb-3">
                      <Form.Label className="font-medium">Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.name && formik.errors.name}
                        className="form-control-lg"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Rating field */}
                    <Form.Group className="mb-3">
                      <Form.Label className="font-medium">Rating</Form.Label>
                      <Form.Control
                        type="number"
                        name="rating"
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.rating && formik.errors.rating
                        }
                        className="form-control-lg"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.rating}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Image URL field */}
                    <Form.Group className="mb-3">
                      <Form.Label className="font-medium ">
                        Image URL
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="image"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.image && formik.errors.image}
                        className="form-control-lg "
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.image}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    {/* Color field */}
                    <Form.Group className="mb-3">
                      <Form.Label className="font-medium">Color</Form.Label>
                      <Form.Control
                        type="text"
                        name="color"
                        value={formik.values.color}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.color && formik.errors.color}
                        className="form-control-lg"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.color}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Origin field */}
                    <Form.Group className="mb-3">
                      <Form.Label className="font-medium">Origin</Form.Label>
                      <Form.Control
                        type="text"
                        name="origin"
                        value={formik.values.origin}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.origin && formik.errors.origin
                        }
                        className="form-control-lg"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.origin}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Category field */}
                    <Form.Group className="mb-3">
                      <Form.Label className="font-medium">Category</Form.Label>
                      <Form.Control
                        type="text"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.category && formik.errors.category
                        }
                        className="form-control-lg"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.category}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Clip URL field */}
                <Form.Group className="mb-3">
                  <Form.Label className="font-medium">Clip URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="clip"
                    value={formik.values.clip}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.touched.clip && formik.errors.clip}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.clip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer className="bg-light">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="btn-lg"
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={formik.handleSubmit}
                className="btn-lg"
              >
                {editingOrchid ? "Update" : "Save"} Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Orchid List
              </h2>
              <Button variant="success" onClick={handleShow} className="btn-lg">
                Add New Orchid
              </Button>
            </div>
            <Table striped bordered hover responsive className="mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Special</th>
                  <th className="px-4 py-2">Color</th>
                  <th className="px-4 py-2">Origin</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orchids.map((orchid) => (
                  <tr key={orchid.id}>
                    <td className="px-4 py-2">
                      <Image
                        src={orchid.image}
                        rounded
                        className="h-14 w-14 object-cover"
                      />
                    </td>
                    <td className="px-4 py-2">{orchid.name}</td>
                    <td className="px-4 py-2">{orchid.rating}</td>
                    <td className="px-4 py-2">
                      {orchid.isSpecial ? (
                        <span className="text-success">Yes</span>
                      ) : (
                        <span className="text-danger">No</span>
                      )}
                    </td>
                    <td className="px-4 py-2">{orchid.color}</td>
                    <td className="px-4 py-2">{orchid.origin}</td>
                    <td className="px-4 py-2">{orchid.category}</td>
                    <td className="px-4 py-2">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="mr-2"
                        onClick={() => handleEdit(orchid)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => {
                          if (confirm("Do you want to delete?"))
                            handleDelete(orchid.id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashBoard;
