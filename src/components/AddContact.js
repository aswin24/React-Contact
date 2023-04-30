import React, { useEffect, useState } from "react";
import Navbars from "./Navbars";
import { useForm } from "react-hook-form";
import { Row, Col, Button, Container, Form } from "react-bootstrap";

export default function AddContact() {
    const [formData, setFormData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setFormData([...formData, data]);
    reset();
  };
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData]);
  return (
    <>
    <Container>
        <h1 style={{textAlign: "center"}}>Add Contact </h1>
    </Container>
      <section className="form my-5 py-5">
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
            <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="id">
                  <h5>ID</h5>
                </Form.Label>
                <input
                  type="number"
                  id="id"
                  {...register("id", { required: true })}
                  className="form-control"
                />
                {errors.id && <span className="mb-5">This field is required</span>}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="firstname">
                  <h5>FirstName</h5>
                </Form.Label>
                <input
                  type="text"
                  id="firstname"
                  {...register("firstname", { required: true })}
                  className="form-control"
                />
                {errors.firstname && <span className="mb-5">This field is required</span>}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="lastname">
                  <h5>LastName</h5>
                </Form.Label>
                <input
                  type="text"
                  id="lastname"
                  {...register("lastname", { required: true })}
                  className="form-control mb-3"
                />
                {errors.lastname && <span>This field is required</span>}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="email">
                  <h5>Email</h5>
                </Form.Label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                  })}
                  className="form-control mb-3"
                />
               
                {errors.email?.type === "required" && (
                  <span>This feild is required</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span>Enter a Valid Email Address</span>
                )}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="phone">
                  <h5>Phone number</h5>
                </Form.Label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9]{10}$/i,
                  })}
                  className="form-control mb-3"
                />
                
                {errors.phone?.type === "required" && (
                  <span>This feild is required</span>
                )}
                {errors.phone?.type === "pattern" && (
                  <span>Enter a Valid Phone Number </span>
                )}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="address">
                  <h5>Address</h5>
                </Form.Label>
                <input
                  type="text"
                  id="address"
                  {...register("address", {
                    required: true,
                  })}
                  className="form-control mb-3"
                />
                
                {errors.address && <span>This feild is required</span>}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="city">
                  <h5>City</h5>
                </Form.Label>
                <input
                  type="text"
                  id="city"
                  {...register("city", {
                    required: true,
                  })}
                  className="form-control mb-3"
                />
                
                {errors.city && <span>This feild is required</span>}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="state">
                  <h5>State</h5>
                </Form.Label>
                <input
                  type="text"
                  id="state"
                  {...register("state", {
                    required: true,
                  })}
                  className="form-control mb-3"
                />
                
                {errors.state && <span>This feild is required</span>}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="country">
                  <h5>Country</h5>
                </Form.Label>
                <input
                  type="text"
                  id="country"
                  {...register("country", {
                    required: true,
                  })}
                  className="form-control mb-3"
                />
                
                {errors.country && <span>This feild is required</span>}
              </Col>
              <Col lg={6} md={6} xs={12} className="new-col">
                <Form.Label htmlFor="postal">
                  <h5>Postal Code</h5>
                </Form.Label>
                <input
                  type="text"
                  id="postal"
                  {...register("postal", {
                    required: true,
                  })}
                  className="form-control mb-3"
                />
                
                {errors.postal && <span>This feild is required</span>}
              </Col>
              <Col lg={12}>
              <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
                
            </Row>
          </Form>
        </Container>
      </section>
    </>
  );
}
