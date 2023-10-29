export default function InputFields({ type, label, placeholder, value, onBlur, onInput }:any) {
    return (
      <div className="form-control w-full max-w-xs">
        <label className="label" for={`input-${label.toLowerCase()}`}>
          <span className="label-text">{label}</span>
        </label>
        <input
          type={type}
          placeholder={`Enter ${placeholder} here...`}
          className="input input-bordered w-full max-w-xs"
          value={value}
          onBlur={onBlur}
          onInput={onInput}
          id={`input-${label.toLowerCase()}`}
        />
      </div>
    );
  }