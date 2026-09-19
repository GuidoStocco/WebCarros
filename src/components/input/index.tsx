import type {RegisterOptions, UseFormRegister} from 'react-hook-form';


interface InputProps{
    type:string;
    placeholder:string;
    name:string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}



export function Input({type, placeholder, name, register, error, rules} : InputProps){
    return(
        <div>
            <input
                className="w-full rounded-md h-11 border-2 px-2 border-gray-200"
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
                id={name}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
};