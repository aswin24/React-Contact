import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import ContactFormEdit from "./components/ContactFormEdit";
import {useForm} from "react-hook-form"
import MapView from "./components/MapView";


function ContactTable() {
  const [formData, setFormData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const {register, handleSumbit, formState:{errors}, getValues} = useForm();

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleEdit = (index) => {
    
    setEditIndex(index);
  };

  const handleSave = (index) => {
    const formValues = getValues();
    
    const updatedFormData = [...formData];
    updatedFormData[index] = {
      id: formValues[`id${index}`],
      firstname: formValues[`firstname${index}`],
      lastname: formValues[`lastname${index}`],
      email: formValues[`email${index}`],
      phone: formValues[`phone${index}`],
      address: formValues[`address${index}`],
      city: formValues[`city${index}`],
      state: formValues[`state${index}`],
      country: formValues[`country${index}`],
    };
    
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setEditIndex(null);
  };
  
  const handleFormSubmit = (data) => {
    const updatedFormData = [...formData];
    updatedFormData[editIndex] = data;
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setEditing(false);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Contact List</h1>
      {editing ? (
        <ContactFormEdit
          data={formData[editIndex]}
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {formData.map((data, index) => (
                <tr key={index}>
                  {editIndex === index ? (
                    <>
                      <td>
                        <input
                          type="number"
                          defaultValue={data?.id}
                          {...register(`id${index}`, { required: true })}
                        />
                        {errors[`id${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          defaultValue={data?.firstname}
                          {...register(`firstname${index}`, { required: true })}
                        />
                        {errors[`firstname${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          defaultValue={data?.lastname}
                          {...register(`lastname${index}`, { required: true })}
                        />
                        {errors[`lastname${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <input
                          type="email"
                          defaultValue={data?.email}
                          {...register(`email${index}`, { required: true })}
                        />
                        {errors[`email${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <input
                          type="tel"
                          defaultValue={data?.phone}
                          {...register(`phone${index}`, { required: true })}
                        />
                        {errors[`phone${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          defaultValue={data?.address}
                          {...register(`address${index}`, { required: true })}
                        />
                        {errors[`address${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          defaultValue={data?.city}
                          {...register(`city${index}`, { required: true })}
                        />
                        {errors[`city${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          defaultValue={data?.state}
                          {...register(`state${index}`, { required: true })}
                        />
                        {errors[`state${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          defaultValue={data?.country}
                          {...register(`country${index}`, { required: true })}
                        />
                        {errors[`country${index}`] && (
                          <span>This field is required</span>
                        )}
                      </td>
                      <td>
                        <Button
                          variant="success"
                          onClick={() => handleSave(index)}
                        >
                          {" "}
                          Save{" "}
                        </Button>
                      </td>
                    </>
                  ) : (
                    <>
                        <td>{data?.id}</td>
                        <td>{data?.firstname}</td>
                        <td>{data?.lastname}</td>
                        <td>{data?.email}</td>
                        <td>{data?.phone}</td>
                        <td>{data?.address}</td>
                        <td>{data?.city}</td>
                        <td>{data?.state}</td>
                        <td>{data?.country}</td>
                        

                      <td>
                        <Button
                          variant="primary"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          variant="primary"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>{" "}
                      </td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        </Table>
      )}
      <MapView formData={formData} />
    </Container>

  );
}

export default ContactTable;
