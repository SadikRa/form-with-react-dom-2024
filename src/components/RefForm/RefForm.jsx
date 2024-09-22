import { useRef } from "react";

/* eslint-disable no-unused-vars */
const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


  const handleSubmit = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    // const email = event.target.email.value;
    // const password = event.target.password.value;
    // const data = { name, email, password };
    // setFormData(data);
    // console.log(data);

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = { name, email, password };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    ref={nameRef}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  ref={emailRef}
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                  ref={passwordRef}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RefForm;
