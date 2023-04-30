import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export default function ContactFormEdit({ data }) {
  const [formData, setFormData] = useState({id : ''});
  const location = useLocation();
  const [formDataFromLocation, setFormDataFromLocation] = useState({});
  const navigate = useNavigate();

    
  const handleSubmit = (data) => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    const index = savedData.findIndex((item) => item.id === data.id);
    if (index !== -1) {
      savedData[index] = data;
      localStorage.setItem("formData", JSON.stringify(savedData));
      setFormData(savedData); // update the formData state
    }
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (location.state && location.state.data) {
      setFormDataFromLocation(location.state.data);
    }
  }, [location]);

  useEffect(() => {
    if (formDataFromLocation) {
      setFormData(formDataFromLocation);
    }
  }, [formDataFromLocation]);

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          name="postal"
          value={formData.postal}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  );
}
