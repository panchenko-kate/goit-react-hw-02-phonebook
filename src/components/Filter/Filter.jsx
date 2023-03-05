import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
    const InputId = nanoid();
    return (
    <Label htmlFor={InputId}>
        Find contacts by name
        <Input 
        id={InputId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        />
    </Label>
    )
}

export default Filter;