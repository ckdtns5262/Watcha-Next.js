interface CheckBoxProps {
  type?: string;
  id: string;
  onChange: any;
  label?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ type, id, onChange, label }) => {
  return (
    <>
      <input id={id} type="checkbox" onChange={onChange} />
    </>
  );
};

export default CheckBox;
