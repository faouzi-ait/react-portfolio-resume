import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  onChange,
  label,
  value,
  classname,
  labelClassName,
  labelStyle,
  style,
  containerClass,
  placeholder,
  disabled,
  checked,
  rows = "5",
  cols = "53",
  errorMessage,
  isContrast = false,
  styleInline,
  ...rest
}) {
  return (
    <div className={containerClass}>
      <label className={labelClassName} style={labelStyle}>
        {label}
      </label>
      <input
        type={type}
        rows={rows}
        cols={cols}
        onChange={onChange}
        value={value}
        className={classname}
        style={style}
        placeholder={placeholder}
        disabled={disabled}
        checked={checked}
        {...rest}
      />
      {errorMessage && (
        <div
          style={styleInline}
          className={`${
            !isContrast ? 'form-field-error' : 'form-field-error_contrast'
          }`}
          role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  classname: PropTypes.object,
  style: PropTypes.object,
  containerClass: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: 'text',
  value: undefined || '',
  disabled: false,
  classname: {},
  style: {},
  containerClass: {},
  onChange: () => {},
  placeholder: '',
  rest: {},
};

export default Input;
