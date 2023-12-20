import React from "react";
export default function Registration(props) {
  let passType;
  const iclass = [
  "text-2xl",
  "absolute",
  "right-0",
  "inset-y-0",
  "items-center",
  "flex",
  "pr-2"];
  if(props.status){
      passType="text";
      iclass.push("ri-eye-off-line");
      console.log(iclass);
  }
  else{
      passType="password";
      iclass.push("ri-eye-line");
      console.log(iclass);

    }
  return (
    
    <div>
      <form
        onSubmit={props.register}
        className="h-screen bg-yellow-300 px-10 flex justify-center items-center"
      >
        <div>
          <input
            className="block p-2 px-5 mb-2 rounded "
            placeholder="Name"
            type="text"
            name="name"
            required
          ></input>
          <input
            className="block p-2 px-5 mb-2 rounded "
            placeholder="Email"
            type="email"
            name="email"
            required
          ></input>
          <div className="relative">
            <input
              className="block p-2 px-5 mb-2 rounded "
              placeholder="Password"
              type={passType}
              name="password"
              required
            />{" "}
            <i
              onClick={props.togglepass}
              className={iclass.join(" ")} 
            ></i>
          </div>
          <input
            className="block p-2 px-5 mb-2 rounded bg-green-500 w-full text-white hover:bg-green-400"
            type="submit"
            required
          ></input>
        </div>
      </form>

      {/* <i class="ri-eye-off-line"></i> */}
    </div>
  );
}