/* eslint-disable react/no-unknown-property */
const AnotherForm = () => {
  return (
    <div>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  class="input input-bordered"
                  required
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherForm;
