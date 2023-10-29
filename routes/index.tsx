// import * as validator from 'https://deno.land/x/deno_validator/mod.ts';
// import * as ammonia from "https://deno.land/x/ammonia@0.3.1/mod.ts";
// import Joi from "npm:joi";
// const test = Joi.object({
//   title: Joi.string().min(8).max(30).required(),
//   content: Joi.string().min(24).max(255).required(),
// });
// console.log(test, "LLLLL");

import InputFields from "../components/InputFields.tsx";
import FormInput from "../islands/FormInput.tsx";

export default function Home() {
  return (
    <div class='p-8'>
      <h1 class='text-3xl font-extrabold my-4'>Form Inputs</h1>

     <FormInput/>
    </div>
  );
}
