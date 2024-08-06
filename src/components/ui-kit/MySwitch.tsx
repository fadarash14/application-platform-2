import { Field, Label, Switch } from "@headlessui/react";
interface IProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const MySwitch = ({ checked, onChange, label }: IProps) => {
  return (
    <Field className="flex items-center justify-between w-full ">
      <Label>{label}</Label>
      <Switch
        checked={checked}
        onChange={onChange}
        className={`
      ring-2 ring-gray-300 dark:ring-gray-600
      bg-gray-100 dark:bg-gray-700
       relative inline-flex items-center h-6 rounded-full w-12 transition-colors duration-300 focus:outline-none dark:data-[checked]:bg-indigo-900 data-[checked]:bg-indigo-400 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50`}
      >
        <span className="sr-only">Toggle</span>
        <span
          className={`${checked ? "-translate-x-1" : "-translate-x-7"}
        inline-block w-4 h-4 transform bg-gray-500 dark:bg-gray-400 rounded-full transition-transform duration-300`}
        />
      </Switch>
    </Field>
  );
};

export default MySwitch;
