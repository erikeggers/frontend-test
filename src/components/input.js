import styled from "styled-components";

const Input = ({ name, type, className, onChange, value, width }) => {
  return (
    <div className={className}>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledInput
        type={type}
        id={name}
        onChange={onChange}
        value={value}
        width={width}
      />
    </div>
  );
};

const StyledLabel = styled.label`
  font-size: 12px;
  display: block;
  text-transform: uppercase;
  margin-bottom: 13px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #cccccc;
`;

export default Input;
