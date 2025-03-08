import { useField } from 'formik';
import s from './FormFields.module.css';

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.className ? props.className : ''}>
      <label htmlFor={props.id}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? s['input-error'] : ''}
      />
      {meta.error && meta.touched ? (
        <p className={s['error-message']}>{meta.error}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export const TextAreaField = (props) => {
  const [field, meta] = useField(props);
  return (
    <textarea
      {...field}
      {...props}
      className={
        meta.error && meta.touched && props.isSubmitting ? s['input-error'] : ''
      }
    ></textarea>
  );
};
