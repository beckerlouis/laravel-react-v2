// @ts-ignore
import { InertiaFormProps } from '@inertiajs/react/types/useForm';
import { createContext, Dispatch, HTMLAttributes, ReactNode, useContext } from 'react';

interface FormStateInterface {
  data: any;
  errors?: { [name: string]: string };
  setData: InertiaFormProps['setData'];
}

const FormStateContext = createContext<FormStateInterface | undefined>(undefined);

export const useFormState = function () {
  const context = useContext(FormStateContext);

  if (!context) {
    throw new Error('useFormState must be used inside a `FormStateProvider`');
  }

  return context;
};

export type InputFormProps<
  T extends string | number | boolean | { label: string; desc?: string },
> = {
  value: T;
  setValue: Dispatch<T>;
  name: string;
};

export type FormProps = HTMLAttributes<HTMLFormElement> &
  FormStateInterface & {
  children?: ReactNode | undefined;
};

export const Form = ({ children, data, setData, errors, ...rest }: FormProps) => (
  <FormStateContext.Provider
    value={{
      data,
      setData,
      errors,
    }}
  >
    <form {...rest}>{children}</form>
  </FormStateContext.Provider>
);
