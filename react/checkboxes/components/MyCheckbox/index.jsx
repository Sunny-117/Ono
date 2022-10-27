import './index.scss';

function MyCheckbox ({
  children,
  onChange,
  checked
}) {
  
  const createText = () => {
    if (typeof children !== 'string') {
      return '';
    }

    return <span>{ children }</span>;
  }

  return (
    <div>
      <input 
        type="checkbox"
        className="my-checkbox"
        checked={ checked }
        onChange={ (e) => onChange(e) }
      />
      { createText() }
    </div>
  );
}

export default MyCheckbox;