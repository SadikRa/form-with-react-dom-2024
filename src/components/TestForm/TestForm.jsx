import { useState } from "react";

const TestForm = () => {


    const [email, setEmail] = useState(null)
    console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = (event.target.name.value);
    const phone = (event.target.phone.value);
    const password = (event.target.password.value);
     const data = {name, phone, password}
     setEmail(data)
  };

  return (
    <div className="flex-col justify-center items-center">
      <form
        className="bg-slate-900 text-center p-16 rounded-xl border-emerald-400 mt-6
        "
        action=""
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="w-[50%] bg-zinc-50 border-emerald-400 rounded-xl p-1 mb-6"
            type="text"
            placeholder="name"
            name="name"
          />
        </div>
        <div>
          <input
            className="w-[50%] bg-zinc-50 border-emerald-400 rounded-xl p-1 mb-6"
            type="text"
            placeholder="phone"
            name="phone"
          />
        </div>
        <div>
          <input
            className="w-[50%] bg-zinc-50 border-emerald-400 rounded-xl p-1 mb-6"
            type="text"
            placeholder="password"
            name="password"
          />
        </div>
        <div>
          <input
            className="bg-orange-400 p-5  w-[50%] border-x-yellow-800 rounded-lg"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default TestForm;
