import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";

export function Login() {
 

  const handleLogin = async () => {
    console.log("dma");

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var data = JSON.stringify({
      name: "",
      email: email,
      password: password,
      role: {
        roleId: 1,
      },
    });
    console.log("dma", data);

    var config = {
      method: "post",
      url: "https://localhost:7125/LoginUser\n",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("Succes", response.data.accessToken);

        localStorage.setItem("Token", JSON.stringify(response.data));

        console.log("Logged in Redirect");

        window.location.replace("/");
      })

      .catch(function (error) {
        console.log("error", error);
        var notfound = document.getElementById("notFound");
        notfound.classList.remove("d-none");

        notfound.classList.add("d-inline");
      });
  };
  return (
    <Col xs lg="5" className="mx-auto">
      <div className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form className="w-100 mx-5">
          <h1
            style={{ textAlign: "center" }}
            className="font-weight-bold text-dark mb-5"
          >
            {" "}
            Login{" "}
          </h1>
          <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
            <Form.Label className="mb-0 text-dark">Email address</Form.Label>
            <Form.Control
              required
              id="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
            <Form.Label className="mb-0 text-dark">Password</Form.Label>
            <Form.Control
              required
              id="password"
              type="password"
              placeholder="password"
            />
          </Form.Group>

          <p
            className="mx-5 text-center text-danger d-none"
            id="notFound"
            style={{ color: "grey" }}
          >
            Account not found!
          </p>
          <div className="d-grid gap-2 mt-4">
            <Button variant="primary" className="mx-5" onClick={handleLogin}>
              Login
            </Button>
            <a
              href="/Register"
              lassName="mx-5 text-center mt-5 link-secondary text-light"
              style={{ color: "grey" }}
            >
              Create Your Account{" "}
            </a>
          </div>
        </Form>
      </div>
    </Col>
  );
}

export default Login;
