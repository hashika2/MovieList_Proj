import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../api/userApi";
import { loginUser } from "../../redux/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const logingData = await userLogin(email, password);
      if (logingData) {
        localStorage.setItem("token", logingData.data.access_token);
        dispatch(loginUser(logingData.data));
      }
    } catch (err) {}
  };

  //need to change
  if (currentUser.isAuthenticated) {
    localStorage.setItem(
      "isAuthenticated",
      JSON.stringify(currentUser.isAuthenticated)
    );
    navigate("/");
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <form onSubmit={onSubmit}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4 mt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" for="form1Example3">
                      Remember password
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
