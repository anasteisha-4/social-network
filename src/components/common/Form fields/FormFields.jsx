import { useField } from 'formik';
import s from './FormFields.module.css';

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.error && meta.touched;

  return (
    <div className={props.className ? props.className : ''}>
      <label htmlFor={props.id}>{label}</label>
      <input
        {...field}
        {...props}
        className={hasError ? s['input-error'] : ''}
      />
      {hasError ? <p className={s['error-message']}>{meta.error}</p> : <></>}
    </div>
  );
};

export const TextAreaField = (props) => {
  debugger;
  const [field, meta] = useField(props);
  return <textarea {...field} {...props}></textarea>;
};
